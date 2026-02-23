import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tapio-auth-react/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
