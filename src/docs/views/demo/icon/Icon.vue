<template>
<div id="demo-icon">
  <DemoTitle />
  
  <WeuiIcon type="success" :msg="true" />
  
  <WeuiIcon type="info" :msg="true" />
  
  <WeuiIcon type="warn" :msg="true" :primary="true" />
  
  <WeuiIcon type="warn" :msg="true" />
  
  <WeuiIcon type="waiting" :msg="true" />
  
  <br>
  
  <WeuiIcon type="success" />
  
  <WeuiIcon type="success-no-circle" />
  
  <WeuiIcon type="circle" />
  
  <WeuiIcon type="warn" />
  
  <WeuiIcon type="download" />
  
  <WeuiIcon type="info-circle" />
  
  <WeuiIcon type="cancel" />
  
  <WeuiIcon type="search" />
  
  <WeuiIcon type="clear" />
</div>
</template>

<script>
export default {
  name: 'DemoIcon',
}
</script>

<style type="text/css" lang="scss" scope>
#demo-icon {
  text-align: center;
}
</style>