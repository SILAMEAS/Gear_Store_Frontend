import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  plugins: [react()],
  server:{
    port:3003
  },
  base:"/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
      "@constant": path.resolve(__dirname, "src/constant"),
      "@env.config": path.resolve(__dirname, "env.config.ts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@redux": path.resolve(__dirname, "src/redux"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
          }
        },
      },
    },
  },
})
