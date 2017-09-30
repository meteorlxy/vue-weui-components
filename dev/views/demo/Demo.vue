<template>
  <weui-flex id="demo">
    <weui-flex-item flex="0 1 300px" id="demo-list">
      <demo-list></demo-list>
    </weui-flex-item>
    <weui-flex-item flex="1 1 500px">
      <demo-title></demo-title>
      <router-view></router-view>
    </weui-flex-item>
  </weui-flex>
</template>

<script>
import DemoList from './components/DemoList'
import DemoTitle from './components/DemoTitle'
export default {
  name: 'demo',
  components: {
    DemoList,
    DemoTitle,
  },
}
</script>

<style type="text/css" lang="scss">
#demo {
  height: 100%;
}
#demo-list {
  border-right: solid #eee;
  margin-right: 5px;
}
</style>