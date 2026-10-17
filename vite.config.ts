import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Vercel serves from the domain root; GitHub Pages serves this repo from
  // a /Portfolio-PFE/ subpath, so the deploy workflow overrides this via env.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
});
