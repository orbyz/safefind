import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  MONGODB_URI: z.string().min(1),

  NEXT_PUBLIC_APP_NAME: z.string().default("SafeFind"),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,

  MONGODB_URI: process.env.MONGODB_URI,

  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
});
