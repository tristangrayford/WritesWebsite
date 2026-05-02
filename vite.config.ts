import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // absolute paths for SPA routing on Cloudflare Pages
  build: {
    outDir: "docs", // build output deployed to Cloudflare Pages
    assetsDir: "assets", // static assets (images, js, css, etc.)
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
});
