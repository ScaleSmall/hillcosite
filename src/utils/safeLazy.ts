import React from "react";

const CHUNK_RELOAD_KEY = "chunk_reload_attempted";

function isChunkLoadError(err: unknown): boolean {
  if (!(err instanceof Error)) return false;
  const msg = err.message.toLowerCase();
  return (
    msg.includes("failed to fetch dynamically imported module") ||
    msg.includes("loading chunk") ||
    msg.includes("loading css chunk") ||
    msg.includes("dynamically imported module") ||
    (err.name === "TypeError" && msg.includes("failed to fetch"))
  );
}

export const safeLazy = <T extends React.ComponentType<any>>(
  loader: () => Promise<{ default: T }>,
  name: string
) =>
  React.lazy(async () => {
    try {
      const mod = await loader();
      if (!mod?.default || typeof mod.default !== "function") {
        throw new Error(
          `Lazy import for ${name} has invalid default export: ${typeof mod?.default}`
        );
      }
      sessionStorage.removeItem(CHUNK_RELOAD_KEY);
      return { default: mod.default };
    } catch (err) {
      if (isChunkLoadError(err)) {
        const alreadyReloaded = sessionStorage.getItem(CHUNK_RELOAD_KEY);
        if (!alreadyReloaded) {
          sessionStorage.setItem(CHUNK_RELOAD_KEY, "1");
          window.location.reload();
          return new Promise(() => {});
        }
      }
      throw err;
    }
  });
