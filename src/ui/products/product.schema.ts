import { Tables } from '@/types/supabase';
import { TableKeys } from '@/utils/constants';

export type Product = Tables<typeof TableKeys.Products>;
