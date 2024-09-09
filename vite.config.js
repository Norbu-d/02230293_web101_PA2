import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify any port number you want for local development
    host: '0.0.0.0' // Allows external access (e.g., from other devices on the same network)
  }
});
