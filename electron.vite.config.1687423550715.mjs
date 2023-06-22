// electron.vite.config.ts
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
var __electron_vite_injected_dirname = "C:\\Users\\VectorBtc\\Desktop\\electron-app-typescript";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src")
      }
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          splash: resolve(__electron_vite_injected_dirname, "src/renderer/splash.html"),
          index: resolve(__electron_vite_injected_dirname, "src/renderer/index.html"),
          splashimg: resolve(__electron_vite_injected_dirname, "src/renderer/vector.webp")
        }
      }
    }
  }
});
export {
  electron_vite_config_default as default
};
