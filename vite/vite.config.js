import { defineConfig } from "vite";
import macaronLoader from "@macaron-elements/loader-vite";

export default defineConfig({
  plugins: [macaronLoader()],
});
