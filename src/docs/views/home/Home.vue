<template>
<div>
  <PageHeader>
    <span slot="title">
      Home
    </span>
    
    <div slot="desc">
      <p>vue-weui-components</p>
      
      <p>Vue components of official wechat UI - <a href="https://github.com/Tencent/weui" target="_blank">WeUI</a></p>
    </div>
  </PageHeader>
  
  <WeuiCellsTitle>vue-weui-components</WeuiCellsTitle>
  
  <WeuiCells>
    <WeuiCell>
      <WeuiCellHeader>
        <img src="static/img/vue_logo.png" alt="">
      </WeuiCellHeader>
      <WeuiCellBody>
        <span>Vue components of official wechat UI - <a href="https://github.com/Tencent/weui" target="_blank">WeUI</a></span>
      </WeuiCellBody>
    </WeuiCell>
  </WeuiCells>
  
  <WeuiCellsTitle>requires</WeuiCellsTitle>
  <WeuiCells>
    <WeuiCell>
      <WeuiCellHeader>
        <WeuiIcon type="success"></WeuiIcon>
      </WeuiCellHeader>
      <WeuiCellBody>
        <span>Vue version require: ^2.5.2 (support dynamic input type)</span>
      </WeuiCellBody>
    </WeuiCell>
    <WeuiCell>
      <WeuiCellHeader>
        <WeuiIcon type="success"></WeuiIcon>
      </WeuiCellHeader>
      <WeuiCellBody>
        <span>WeUI version require: ^1.1.2</span>
      </WeuiCellBody>
    </WeuiCell>
  </WeuiCells>
</div>
</template>

<script>
import PageHeader from 'docs@/components/PageHeader'
export default {
  name: 'Home',
  components: {
    PageHeader,
  },
}
</script>