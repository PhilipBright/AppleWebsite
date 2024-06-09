import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react",
    server: {
      proxy: {
        '/sentry-proxy': {
          target: 'https://o4507402153689088.ingest.us.sentry.io',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/sentry-proxy/, '')
        }
      }
    }
  })],

  build: {
    sourcemap: true
  }
})