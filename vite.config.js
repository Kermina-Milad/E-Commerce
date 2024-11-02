import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/E-Commerce/",
    build: {
        outDir: 'dist',
        assetsInclude: ['**/*.jpg', '**/*.png'],
        // assetsDir: '',
    },

})