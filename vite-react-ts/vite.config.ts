import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macaron from "@macaron-elements/loader-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macaron()],
});
