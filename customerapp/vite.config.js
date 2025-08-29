import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //  test: {
  // coverage: {
  //         enabled: true, // Enable coverage
  //         provider: 'v8', // Or 'istanbul'
  //         // Other options like thresholds, reporters, etc.
  //       },
  //   environment: 'jsdom', 
  //   globals: true, // Enables global access to describe, it, expect
  //   setupFiles: './src/tests/setup.js', // Path to your setup file
  // },
})
