<template>
  <div class="weui-cell__ft">
    <slot>
      <!--说明文字-->
      <!--只为了显示尾部箭头也必须添加一个空内容的该组件-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-cell-footer',
}
</script>

<style type="text/css" lang="scss">
.weui-cell__ft {
  > * {
    vertical-align: middle;
  }
  .weui-badge {
    margin: {
      left: 5px;
      right: 5px;
    }
  }
}
</style>