/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import path from 'path';

import nested from 'postcss-nested';
import tailwindnesting from 'tailwindcss/nesting';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

export default defineConfig(({ mode }) => {
    return {
        base: "https://celestial-blink.github.io/tmester/",
        css: {
            devSourcemap: true,
            postcss: {
                plugins: [
                    tailwindnesting(),
                    tailwindcss(),
                    nested({ preserveEmpty: false }),
                    mode === "production" && cssnano() || null
                ].filter(item => item)
            }
        },
        server: {
            port: 1111,
            host: true
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
            minify: mode === "production"
        }
    }
});
