import { z } from 'zod';
import { RESEND_API_KEY } from './env';

export const serverEnv = {
  DATABASE_URL: z.string().parse(RESEND_API_KEY),
};
