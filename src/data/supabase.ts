import { Database } from '@/types/supabase';
import { env } from '@/utils/env.validator';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bfiugkquubyzwxflwirt.supabase.co';
const supabaseKey = env.VITE_SUPABASE_PUBLIC_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
