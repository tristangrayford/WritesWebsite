import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

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
    // Compresses PNG/JPG/SVG/WebP/AVIF in the build output. Bulk WebP
    // conversion is handled by `npm run convert-images`; this plugin is the
    // safety net for any new images dropped into src/images.
    ViteImageOptimizer({
      // Skip files the optimizer can't read (e.g. HEIF saved with a .png extension).
      exclude: [/Fiadh and Annis\.png$/],
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      svg: {
        multipass: true,
        plugins: [
          { name: "preset-default", params: { overrides: { removeViewBox: false } } },
        ],
      },
    }),
  ],
});
