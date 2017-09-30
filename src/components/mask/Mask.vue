<template>
  <div :class="maskClass"></div>
</template>

<script>
export default {
  name: 'weui-mask',
  props: {
    tansparent: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    maskClass () {
      return this.tansparent ? 'weui-mask_transparent' : 'weui-mask' 
    }
  }
}
</script>