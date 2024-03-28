import { TableKeys } from '@/utils/constants';
import supabase from '../supabase';

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
