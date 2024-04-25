import dotenv from 'dotenv';
dotenv.config();

/**
 * @type {import('./index').Config}
 */
export default {
  port: process.env.PORT || 3000,
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
};