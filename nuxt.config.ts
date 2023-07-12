import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    // ビルド時にVuetifyを読み込む
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      // SSR時にVuetifyを依存関係として読み込まない
      noExternal: ['vuetify'],
    },
    // グローバル定数を定義
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: ['@/assets/main.scss'],
})
