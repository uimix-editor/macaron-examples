import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import macaron from "@macaron-elements/loader-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), macaron()],
});
