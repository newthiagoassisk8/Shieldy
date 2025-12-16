import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],

    app: {
        head: {
            bodyAttrs: {
                class: 'body-global-class hs-overlay-body-open hs-overlay-body-open:overflow-hidden',
            },
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    devServer: {
        host: '0.0.0.0', // expõe para todas as interfaces de rede
        port: 3000,      // opcional: define a porta
    }
});
