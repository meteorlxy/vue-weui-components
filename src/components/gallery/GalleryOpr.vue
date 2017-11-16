<template>
  <div class="weui-gallery__opr">
    <slot>
      <WeuiGalleryDelete />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WeuiGalleryOpr',
}
</script>