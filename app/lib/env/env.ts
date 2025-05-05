import { z } from 'zod';

const env = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
};

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
});

export const validatedEnv = envSchema.parse(env);

export const { RESEND_API_KEY } = validatedEnv;
