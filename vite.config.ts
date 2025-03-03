import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    assetsDir: 'assets',
    // Ensure assets are copied to the correct location
    copyPublicDir: true,
    // Configure asset handling
    assetsInlineLimit: 0, // Never inline assets
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  // Properly resolve public assets
  publicDir: 'public',
  // Configure asset handling
  base: '/',
  server: {
    hmr: {
      overlay: false
    }
  }
});