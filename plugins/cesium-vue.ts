import VueCesium from 'vue-cesium'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueCesium, {
    cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
    accessToken: ''
  })
})
