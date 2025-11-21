import { supabase as supabaseClient } from './supabaseClient';
import { getSupabaseConfig } from './env';

const { url, key } = getSupabaseConfig();
export const supabaseConfigured = !!(url && key);

export const supabase = supabaseConfigured ? supabaseClient : null;
