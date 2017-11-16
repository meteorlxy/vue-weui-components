<template>
<div id="demo-button">
  <DemoTitle />
  
  <WeuiButton type="primary">页面主操作 Normal</WeuiButton>
  
  <WeuiButton type="primary" :loading="true">页面主操作 Loading</WeuiButton>
  
  <WeuiButton type="primary" :disabled="true">页面主操作 Disabled</WeuiButton>
  
  
  <WeuiButton type="default">页面次要操作 Normal</WeuiButton>
  
  <WeuiButton type="default" :loading="true">页面次要操作 Loading</WeuiButton>
  
  <WeuiButton type="default" :disabled="true">页面次要操作 Disabled</WeuiButton>
  
  
  <WeuiButton type="warn">警告类操作 Normal</WeuiButton>
  
  <WeuiButton type="warn" :loading="true">警告类操作 Loading</WeuiButton>
  
  <WeuiButton type="warn" :disabled="true">警告类操作 Disabled</WeuiButton>
  
  
  <div class="button-padding">
    <WeuiButton type="default" :plain="true">按钮</WeuiButton>
    
    <WeuiButton type="default" :plain="true" :loading="true">按钮</WeuiButton>
    
    <WeuiButton type="default" :plain="true" :disabled="true">按钮</WeuiButton>
    
    
    <WeuiButton type="primary" :plain="true">按钮</WeuiButton>
    
    <WeuiButton type="primary" :plain="true" :loading="true">按钮</WeuiButton>
    
    <WeuiButton type="primary" :plain="true" :disabled="true">按钮</WeuiButton>
    
    
    <WeuiButton type="default" :mini="true">按钮</WeuiButton>
    
    <WeuiButton type="primary" :mini="true">按钮</WeuiButton>
    
    <WeuiButton type="warn" :mini="true">按钮</WeuiButton>
    
    
    <WeuiButton type="default" :plain="true" :mini="true">按钮</WeuiButton>
    
    <WeuiButton type="primary" :plain="true" :mini="true">按钮</WeuiButton>
  </div>
</div>
</template>

<script>
export default {
  name: 'DemoButton',
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