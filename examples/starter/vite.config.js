import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    clearScreen: false,
    plugins: [
        svelte({
            emitCss: true,
            compilerOptions: {
                dev: !production,
            },
            extensions: ['.md', '.svelte'],
            preprocess: [mdsvex({ extension: 'md' })],
        }),
    ],
    server: { port: 1337 },
    build: {
        polyfillDynamicImport: false,
        cssCodeSplit: false,
    },
    resolve: {
        dedupe: ['svelte'],
        alias: {
            '#root': process.cwd() + '/../..', // todo remove
            '#lib': process.cwd() + '/../../lib', // todo remove
            '#cmp': process.cwd() + '/src/components',
        },
    },
})