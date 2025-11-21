import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    __VITE_BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },
  build: {
    target: 'es2015',
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'routing';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('react-helmet-async')) {
              return 'seo';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            return 'vendor';
          }

          if (id.includes('/services/')) {
            return 'services';
          }

          if (id.includes('/guides/')) {
            return 'guides';
          }

          if (id.includes('/service-areas/')) {
            return 'service-areas';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|avif|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
      onwarn(warning, warn) {
        if (warning.code === 'CHUNK_SIZE_EXCEEDED') {
          console.error('\n❌ PERFORMANCE BUDGET EXCEEDED!');
          console.error('Target: JavaScript chunks should be under 150KB gzipped');
          console.error('Message:', warning.message);
          console.error('\nConsider:');
          console.error('  - Further code splitting');
          console.error('  - Lazy loading more components');
          console.error('  - Removing unused dependencies\n');
        }
        warn(warning);
      }
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 150,
    reportCompressedSize: true,
  },
  server: {
    fs: {
      strict: true
    }
  }
});
