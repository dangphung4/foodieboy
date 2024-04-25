import { createClient } from "@supabase/supabase-js";
import config from "../config/index.js";

/**
 * Initializes Supabase client
 *
 * @type {import('@supabase/supabase-js').SupabaseClient}
 */

export const supabase = createClient(config.supabaseUrl, config.supabaseKey);
