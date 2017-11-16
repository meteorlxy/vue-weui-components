<template>
<WeuiTab id="app">
  <WeuiTabPanel>
    <WeuiTransitionFade>
      <router-view></router-view>
    </WeuiTransitionFade>
  </WeuiTabPanel>
  
  <WeuiTransitionFade>
    <TheTabbar />
  </WeuiTransitionFade>
  
</WeuiTab>
</template>

<script>
import TheTabbar from './components/TheTabbar'
export default {
  name: 'App',
  components: {
    TheTabbar,
  },
}
</script>

<style type="text/css" lang="scss">
html, body {
  height: 100%;
}
</style>