import { TableKeys } from '@/utils/constants';
import supabase from '../supabase';

export const getAllProducts = async () => {
  let { data, error } = await supabase.from(TableKeys.Products).select('*');

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching products');
  }

  return data;
};
