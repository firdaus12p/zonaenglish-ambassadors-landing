import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize output with esbuild (faster than terser)
    minify: "esbuild",
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion-vendor": ["framer-motion"],
          "icons-vendor": ["lucide-react"],
        },
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Source map for debugging (can disable for smaller build)
    sourcemap: false,
  },
});
