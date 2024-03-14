import supabase from '../supabase';

export const getAllProducts = async () => {
  let { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching products');
  }

  return data;
};
