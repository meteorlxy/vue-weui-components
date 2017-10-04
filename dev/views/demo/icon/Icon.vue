<template>
<div id="demo-icon">
  <weui-icon type="success" :msg="true"></weui-icon>
  <weui-icon type="info" :msg="true"></weui-icon>
  <weui-icon type="warn" :msg="true" :primary="true"></weui-icon>
  <weui-icon type="warn" :msg="true"></weui-icon>
  <weui-icon type="waiting" :msg="true"></weui-icon>
  <br>
  <weui-icon type="success"></weui-icon>
  <weui-icon type="success-no-circle"></weui-icon>
  <weui-icon type="circle"></weui-icon>
  <weui-icon type="warn"></weui-icon>
  <weui-icon type="download"></weui-icon>
  <weui-icon type="info-circle"></weui-icon>
  <weui-icon type="cancel"></weui-icon>
  <weui-icon type="search"></weui-icon>
  <weui-icon type="clear"></weui-icon>
</div>
</template>

<script>
export default {
  name: 'demo-icon',
}
</script>

<style type="text/css" lang="scss" scope>
#demo-icon {
  text-align: center;
}
</style>