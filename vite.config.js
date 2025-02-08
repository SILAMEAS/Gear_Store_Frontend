import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3003
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@i18n': path.resolve(__dirname, './src/i18n'),
            '@constant': path.resolve(__dirname, './src/constant'),
            '@env.config': path.resolve(__dirname, './env.config.ts'),
        },
    },
});
