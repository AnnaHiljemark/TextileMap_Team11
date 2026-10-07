import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/TextileMap_Team11/",

  build: {
    outDir: "dist",
  },
});