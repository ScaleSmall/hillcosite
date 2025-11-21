type RuntimeEnv = { SUPABASE_URL?: string; SUPABASE_ANON_KEY?: string };

function readRuntimeEnv(): RuntimeEnv {
  const w = window as any;
  return (w.__ENV || {}) as RuntimeEnv;
}

export function getSupabaseConfig() {
  const buildUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const buildKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  const rt = readRuntimeEnv();

  const url = (buildUrl || rt.SUPABASE_URL || "").trim();
  const key = (buildKey || rt.SUPABASE_ANON_KEY || "").trim();

  if (!url || !key) {
    console.error("[Blog] Supabase env missing.", {
      hasBuildUrl: !!buildUrl,
      hasBuildKey: !!buildKey,
      hasRuntimeUrl: !!rt.SUPABASE_URL,
      hasRuntimeKey: !!rt.SUPABASE_ANON_KEY,
    });
  } else {
    console.info("[Blog] Supabase initialized (source:", buildUrl ? "build" : "runtime", ")");
  }

  return { url, key };
}
