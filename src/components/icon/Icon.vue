<template>
  <i :class="[iconClass, sizeClass]"></i>
</template>

<script>
export default {
  name: 'weui-icon',
  props: {
    type: {
      type: String,
      required: true,
    },
    msg: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconClass () {
      return 'weui-icon-' + this.type
    },
    sizeClass () {
      return this.primary ? 'weui-icon_msg-primary' : this.msg ? 'weui-icon_msg' : null
    },
  },
}
</script>