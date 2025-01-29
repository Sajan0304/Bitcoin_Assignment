import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add refresh configuration
      fastRefresh: true,
      // Include all the necessary extensions
      include: "**/*.{jsx,tsx,ts,js}",
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8081,
    strictPort: true,
    host: true,
    open: true,
    cors: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  build: {
    sourcemap: true,
    manifest: true,
  },
});
