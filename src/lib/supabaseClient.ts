import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "./env";

const { url, key } = getSupabaseConfig();

if (!url || !key) {
  throw new Error(
    "Supabase environment variables are not configured. " +
      "Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY at build time, " +
      "or provide public/env.js with window.__ENV overrides."
  );
}

export const supabase = createClient(url, key);
