import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: 'src/pages', // 👈 this tells it where to generate routes from
            dts: 'src/typed-router.d.ts', // 👈 generate types for auto routes
        }),
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
    assetsInclude: ['**/*.glb', '**/*.JPG', '**/*.PNG'],
})
