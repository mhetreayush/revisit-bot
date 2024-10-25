import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  PORT: process.env.PORT ?? 3000,
  BASE_URL: process.env.BASE_URL ?? 'http://localhost',
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  MONGO_DB_URI: process.env.MONGO_DB_URI ?? '',
  REDIS_PASSWORD: process.env.REDIS_PASSWORD ?? '',
  REDIS_HOST: process.env.REDIS_HOST ?? '',
  REDIS_PORT: (process.env.REDIS_PORT ?? 3002) as unknown as number,
  REDIS_BASE_URL: process.env.REDIS_BASE_URL ?? 'http://localhost',
};

export const WHATSAPP_API_CREDENTIALS = {
  WHATSAPP_SECRET: process.env.WHATSAPP_SECRET ?? '',
  WHATSAPP_API_ACCESS_TOKEN: process.env.WHATSAPP_API_ACCESS_TOKEN ?? '',
  WHATSAPP_API_PHONE_NUMBER_ID: process.env.WHATSAPP_API_PHONE_NUMBER_ID ?? '',
};
