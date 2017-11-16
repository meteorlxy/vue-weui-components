<template>
<div>
  <PageHeader>
    <span slot="title">
      About
    </span>
    
    <div slot="desc">
      <p>vue-weui-components</p>
      
      <p>Vue components for official <a href="https://github.com/Tencent/weui" target="_blank">WeUI</a></p>
    </div>
  </PageHeader>
  
  <WeuiCellsTitle>vue-weui-components</WeuiCellsTitle>
  
  <WeuiCells>
    <WeuiCell>
      <WeuiCellHeader>
        <img src="static/img/vue_logo.png">
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>微信官方样式库 <a href="https://github.com/Tencent/weui" target="_blank">WeUI</a> 的Vue组件</span>
      </WeuiCellBody>
    </WeuiCell>
    
    <WeuiCell>
      <WeuiCellHeader>
        <img src="static/img/vue_logo.png">
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Vue版本要求： ^2.5.0</span>
      </WeuiCellBody>
    </WeuiCell>
  </WeuiCells>
</div>
</template>

<script>
import PageHeader from 'docs@/components/PageHeader'
export default {
  name: 'About',
  components: {
    PageHeader,
  },
}
</script>