import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            manifest: true,
            input: {
                main: resolve(__dirname,'src/index.html'),
                albums: resolve(__dirname, 'src/pages/albums/index.html'),
                videos: resolve(__dirname, 'src/pages/videos/index.html'),
            }
        }
    }
})