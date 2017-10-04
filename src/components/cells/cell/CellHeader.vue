<template>
  <div class="weui-cell__hd">
    <slot>
      <!--列表开头图标-->
      <!--<weui-icon type="circle"></weui-icon>-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-cell-hedaer',
}
</script>

<style type="text/css" lang="scss">
.weui-cell__hd {
  >* {
    margin-right: 5px;
    display: block;
  }
  img {
    height: 20px;
    width: 20px;
  }
}
</style>