<template>
<div>
  <page-header>
    <span slot="title">
      About
    </span>
    <div slot="desc">
      <p>vue-weui-components</p>
      <p>Vue components for official <a href="https://github.com/Tencent/weui" target="_blank">WeUI</a></p>
    </div>
  </page-header>
  <weui-cells-title>vue-weui-components</weui-cells-title>
  <weui-cells>
    <weui-cell>
      <weui-cell-header>
        <img src="static/img/vue_logo.png" alt="">
      </weui-cell-header>
      <weui-cell-body>
        <span>微信官方样式库<a href="https://github.com/Tencent/weui" target="_blank">WeUI</a>的Vue组件</span>
      </weui-cell-body>
    </weui-cell>
  </weui-cells>
</div>
</template>

<script>
import PageHeader from 'dev@/components/PageHeader'
export default {
  name: 'about',
  components: {
    PageHeader,
  },
}
</script>