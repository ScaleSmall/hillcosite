import React from "react";

export const safeLazy = <T extends React.ComponentType<any>>(
  loader: () => Promise<{ default: T }>,
  name: string
) =>
  React.lazy(async () => {
    const mod = await loader();
    if (!mod?.default || typeof mod.default !== "function") {
      throw new Error(`Lazy import for ${name} has invalid default export: ${typeof mod?.default}`);
    }
    return { default: mod.default };
  });