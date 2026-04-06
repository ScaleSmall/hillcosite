export function getSupabaseConfig() {
  const buildUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const buildKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  const w = globalThis as any;
  const env = w.ENV || {};
  const legacyEnv = w.__ENV || {};

  const url = (
    buildUrl ||
    env.VITE_SUPABASE_URL ||
    legacyEnv.SUPABASE_URL ||
    ""
  ).trim();

  const key = (
    buildKey ||
    env.VITE_SUPABASE_ANON_KEY ||
    legacyEnv.SUPABASE_ANON_KEY ||
    ""
  ).trim();

  return { url, key };
}
