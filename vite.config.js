import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows access from all network interfaces, including your local IP
    port: 5173,       // Optional: You can change this if needed
  }
})
