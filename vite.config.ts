import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/features': path.resolve(__dirname, './src/features'),
        '@/hooks': path.resolve(__dirname, './src/hooks'),
        '@/lib': path.resolve(__dirname, './src/lib'),
        '@/types': path.resolve(__dirname, './src/types'),
        '@/stores': path.resolve(__dirname, './src/stores'),
        '@/assets': path.resolve(__dirname, './src/assets'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
    // Inicialmente no definimos 'base' aquí
  };

  // Si el comando es 'build' (es decir, estás corriendo 'npm run build' o 'npm run deploy'),
  // entonces establecemos la base para el repositorio de GitHub.
  if (command === 'build') {
    config.base = '/landingpage/';
  }

  return config;
});

