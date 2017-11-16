<template>
  <div
    class="weui-gallery"
    :style="{ display: show ? 'block' : 'none' }"
  >
    <slot>
      <!--<WeuiGalleryImg />-->
      <!--<WeuiGalleryOpr>-->
      <!--  <WeuiGalleryDelete />-->
      <!--</WeuiGalleryOpr>-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WeuiGallery',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>