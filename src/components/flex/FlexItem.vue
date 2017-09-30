<template>
  <div class="weui-flex__item" :style="{ flex: flex }">
    <slot>
      <!--内容-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-flex-item',
  props: {
    flex: {
      type: [Number, String],
      default: 1,
    },
  },
}
</script>