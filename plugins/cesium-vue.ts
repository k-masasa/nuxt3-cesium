import VueCesium from 'vue-cesium'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueCesium, {
    // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
    cesiumPath: '',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkNDA4YjUyMS1hOTc1LTRjMzMtYTU4YS1hZmJjMDJkZGNlZjYiLCJpZCI6MTU2ODU5LCJpYXQiOjE2OTA0NjYwODl9.3NtpmgVFU_XiRbQWj-KWRZ6azfM6g_nWGsmi9xJIfxk'
  })
})
