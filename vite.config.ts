import { defineConfig } from "vite";
import vitePluginCustomMeta from "./plugins/vite-plugin-custom-meta";

export default defineConfig({
  plugins: [
    vitePluginCustomMeta({
      meta: {
        title: "webpack App",
        keyword: "webpack",
      },
    }),
  ],
});
