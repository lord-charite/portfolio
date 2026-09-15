import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// The repo is named `portfolio`, so GitHub Pages serves the site from a
// subpath: https://lord-charite.github.io/portfolio/
// If you ever move to a custom domain or rename the repo to
// lord-charite.github.io, change this to "/" and nothing else needs to change.
const BASE = "/portfolio/";

export default defineConfig({
  base: BASE,
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
