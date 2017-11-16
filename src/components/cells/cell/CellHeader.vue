<template>
  <div class="weui-cell__hd">
    <slot>
      <!--列表开头图标-->
      <!--<WeuiIcon type="circle" />-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WeuiCellHedaer',
}
</script>

<style type="text/css" lang="scss">
$header-margin-right: 5px;
$header-icon-height:  23px;
$header-icon-width:   23px;

.weui-cell__hd {
  >* {
    margin-right: $header-margin-right;
    display: block;
  }
  img {
    height: $header-icon-height;
    width: $header-icon-width;
    margin: {
      left: 4.6px;
      right: 4.6px + $header-margin-right;
    }
  }
}
</style>