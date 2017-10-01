<template>
<div id="demo-button">
  <weui-button type="primary">页面主操作 Normal</weui-button>
  <weui-button type="primary" :loading="true">页面主操作 Loading</weui-button>
  <weui-button type="primary" :disabled="true">页面主操作 Disabled</weui-button>
  
  <weui-button type="default">页面次要操作 Normal</weui-button>
  <weui-button type="default" :loading="true">页面次要操作 Loading</weui-button>
  <weui-button type="default" :disabled="true">页面次要操作 Disabled</weui-button>
  
  <weui-button type="warn">警告类操作 Normal</weui-button>
  <weui-button type="warn" :loading="true">警告类操作 Loading</weui-button>
  <weui-button type="warn" :disabled="true">警告类操作 Disabled</weui-button>
  
  <div class="button-padding">
    <weui-button type="default" :plain="true">按钮</weui-button>
    <weui-button type="default" :plain="true" :loading="true">按钮</weui-button>
    <weui-button type="default" :plain="true" :disabled="true">按钮</weui-button>
    
    <weui-button type="primary" :plain="true">按钮</weui-button>
    <weui-button type="primary" :plain="true" :loading="true">按钮</weui-button>
    <weui-button type="primary" :plain="true" :disabled="true">按钮</weui-button>
    
    <weui-button type="default" :mini="true">按钮</weui-button>
    <weui-button type="primary" :mini="true">按钮</weui-button>
    <weui-button type="warn" :mini="true">按钮</weui-button>
    
    <weui-button type="default" :plain="true" :mini="true">按钮</weui-button>
    <weui-button type="primary" :plain="true" :mini="true">按钮</weui-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'demo-button',
}
</script>

<style type="text/css" lang="scss" scope>
#demo-button {
  .button-padding {
    padding: 15px 0;
    margin: 0 auto;
    width: 60%;
  }
}
</style>