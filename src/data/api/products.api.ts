import { TableKeys } from '@/utils/constants';
import supabase, { supabaseUrl } from '../supabase';
import { Product } from '@/ui/products/product.schema';
import { isNullOrUndefined } from '@/lib/type-helpers/helpers/common';

type ProductWithImageFile = Omit<Partial<Product>, 'image'> & { image?: File };
type ProductWithID = Product & { id: string };

export const getAllProducts = async () => {
  let { data, error } = await supabase.from(TableKeys.Products).select('*');

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching products.');
  }

  return data;
};

export const deleteProduct = async (id: string) => {
  const { data, error } = await supabase.from(TableKeys.Products).delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('An error occurred while deleting the product.');
  }

  return data;
};

export const createProduct = async (product: ProductWithImageFile) => {
  let imagePath: string | null = null;
  let imageName: string | null = null;

  if (!isNullOrUndefined(product.image)) {
    imageName = `${Math.random()}-${product.image?.name}`.replace('/', '');
    imagePath = `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;
  }

  let productData: Partial<Product>;
  if (imagePath) {
    productData = { ...product, image: imagePath } as Product;
  } else {
    delete product.image;
    productData = { ...product } as unknown as Product;
  }

  // 1. Create the product in the database.
  const { data, error } = await supabase
    .from(TableKeys.Products)
    .insert([productData as Product])
    .select();

  if (error) {
    console.error(error);
    throw new Error('An error occurred while creating the product.');
  }

  // 2. Upload the image to the storage bucket.
  if (!isNullOrUndefined(imagePath) && !isNullOrUndefined(imageName)) {
    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(imageName, product.image as File);

    if (uploadError) {
      await supabase
        .from(TableKeys.Products)
        .delete()
        .eq('id', (data as unknown as ProductWithID).id);

      console.error(uploadError);
      throw new Error('Product Image upload failed and as a result, the product was not created.');
    }
  }

  return data;
};

export const updateProduct = async (productID: string, product: Partial<Product>) => {
  // 1. Update the product in the database.
  const { data, error } = await supabase.from(TableKeys.Products).update(product).eq('id', productID);

  if (error) {
    console.error(error);
    throw new Error('An error occurred while updating the product.');
  }

  return data;
};
