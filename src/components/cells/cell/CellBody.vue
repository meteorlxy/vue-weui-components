<template>
  <div class="weui-cell__bd">
    <slot>
      <!--列表项标题-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-cell-body',
}
</script>

<style type="text/css" lang="scss">
.weui-cell__bd {
  > * {
    vertical-align: middle;
  }
}
</style>