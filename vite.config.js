import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    "/mega-blog": "http://localhost:5173/",
  },
  plugins: [react()],
});
