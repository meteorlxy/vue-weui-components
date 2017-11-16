<template>
  <WeuiFlex id="demo">
    <WeuiTransitionFade>
      <WeuiFlexItem flex="0 1 300px" id="demo-list">
        <DemoList />
      </WeuiFlexItem>
    </WeuiTransitionFade>
    
    <WeuiFlexItem flex="1 1 500px" id="demo-display">
      <WeuiTransitionFade>
        <router-view />
      </WeuiTransitionFade>
    </WeuiFlexItem>
  </WeuiFlex>
</template>

<script>
import Vue from 'vue'
import DemoList from './DemoList'
import DemoTitle from './DemoTitle'
Vue.component('DemoTitle', DemoTitle)
export default {
  name: 'Demo',
  components: {
    DemoList,
  },
}
</script>

<style type="text/css" lang="scss">
#demo {
  height: 100%;
  #demo-list {
    height: 100%;
    border-right: solid #eee;
    margin-right: 5px;
    overflow: auto;
  }
  #demo-display {
    height: 100%;
    overflow: auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
</style>