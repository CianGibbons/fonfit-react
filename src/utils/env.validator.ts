import { z } from 'zod';

export const envValidator = z.object({
  VITE_SUPABASE_PUBLIC_KEY: z.string().min(1)
});

export const env = envValidator.parse(import.meta.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envValidator> {}
  }
}
