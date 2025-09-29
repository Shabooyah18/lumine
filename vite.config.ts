import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueRouter from 'unplugin-vue-router/vite'

import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// import { readFile } from 'node:fs/promises'

// async function readCert(path: string): Promise<string> {
//     return await readFile(fileURLToPath(new URL(path, import.meta.url)), 'utf-8')
// }

// https://vitejs.dev/config/
export default defineConfig({
    // server: { TODO Bron you are going to want set these up if you are going to reach for apis
    //     https: {
    //         key: await readCert('../../certs/server.unencrypted.key'),
    //         cert: await readCert('../../certs/server.pem'),
    //         ca: await readCert('../../certs/ca.pem'),
    //     },
    // },
    plugins: [
        VueRouter(),
        vue(),
        Components({
            dts: true,
            resolvers: [
                PrimeVueResolver({
                    prefix: 'Pr',
                }),
                IconsResolver({
                    enabledCollections: ['material-symbols'],
                    alias: {
                        ms: 'material-symbols',
                    },
                }),
            ],
        }),
        Icons({
            compiler: 'vue3',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    assetsInclude: ['**/*.glb', '**/*.JPG']
})
