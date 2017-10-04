<template>
  <div class="weui-gallery" :style="{ display: show ? 'block' : 'none' }">
    <slot>
      <!--<weui-gallery-img></weui-gallery-img>-->
      <!--<weui-gallery-operation>-->
      <!--  <weui-gallery-delete></weui-gallery-delete>-->
      <!--</weui-gallery-operation>-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-gallery',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>