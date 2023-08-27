<template>
  <vc-config-provider :cesium-path="vcConfig.cesiumPath">
    <vc-viewer></vc-viewer>
  </vc-config-provider>
  test
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { VcConfigProvider, VcViewer } from 'vue-cesium'

// window.CESIUM_BASE_URL = '/'
const cesiumAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkNDA4YjUyMS1hOTc1LTRjMzMtYTU4YS1hZmJjMDJkZGNlZjYiLCJpZCI6MTU2ODU5LCJpYXQiOjE2OTA0NjYwODl9.3NtpmgVFU_XiRbQWj-KWRZ6azfM6g_nWGsmi9xJIfxk'
const vcConfig = reactive({
  cesiumPath: './node_modules/cesium/Build/Cesium/Cesium.js',
  accessToken: cesiumAccessToken,
})
</script>
