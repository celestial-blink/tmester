/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import path from 'path';

import nested from 'postcss-nested';
// import tailwindnesting from 'tailwindcss/nesting';
import tailwindcss from 'tailwindcss';

export default defineConfig({
    base: "/",
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [
                // tailwindnesting(),
                tailwindcss(),
                nested({ preserveEmpty: false }),
                
            ]
        }
    },
    server: {
        port: 1111
    },
    resolve: {
        alias: {
            "@helpers": path.resolve(__dirname, "./src/helpers/"),
            "@styles": path.resolve(__dirname, "./src/styles/"),
            "@scripts": path.resolve(__dirname, "./src/scripts/"),
            "@assets": path.resolve(__dirname, "./src/assets/")
        }
    },
    build: {
        minify: true
    }
});
