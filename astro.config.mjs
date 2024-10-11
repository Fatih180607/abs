import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig(
  {
    output: "hybrid",
    adapter: node({
      mode: "standalone",
    }),
    devToolbar: {
      enabled: false,
    },
  } // Astro configuration goes here
  // Ensure no server URLs or properties are accessed here prematurely
);
