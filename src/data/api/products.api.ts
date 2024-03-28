import { TableKeys } from '@/utils/constants';
import supabase from '../supabase';
import { Product } from '@/ui/products/product.schema';

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

export const createProduct = async (product: Partial<Product>) => {
  const { data, error } = await supabase.from(TableKeys.Products).insert([product as Product]);

  if (error) {
    console.error(error);
    throw new Error('An error occurred while creating the product.');
  }

  return data;
};
