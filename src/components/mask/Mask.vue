<template>
  <div :class="maskClass"></div>
</template>

<script>
export default {
  name: 'weui-mask',
  props: {
    transparent: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    maskClass () {
      return this.transparent ? 'weui-mask_transparent' : 'weui-mask'
    }
  }
}
</script>