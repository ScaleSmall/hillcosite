import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "./env";

const { url, key } = getSupabaseConfig();

export const supabase: SupabaseClient | null =
  url && key ? createClient(url, key) : null;
