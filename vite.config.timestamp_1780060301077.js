// vite.config.ts
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app")
    }
  },
  server: {
    port: 3002
  },
  plugins: [
    tanstackStart({
      srcDirectory: "app",
      router: {
        generatedRouteTree: "routeTree.gen.ts"
      }
    }),
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
