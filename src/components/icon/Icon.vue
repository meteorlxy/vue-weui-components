<template>
  <i :class="[iconClass, sizeClass]"></i>
</template>

<script>
export default {
  name: 'WeuiIcon',
  props: {
    /**
     * Type of icon
     * {'circle'|'download'|'info'|'safe-success'|'safe-warn'|'success'|'success-circle'|'success-no-cicle'|'waiting'|'waiting-circle'|'warn'|'info-circle'|'cancel'|'search'|'clear'|'back'|'delete'}
     */
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
      return `weui-icon-${this.type}`
    },
    sizeClass () {
      return this.primary ? 'weui-icon_msg-primary' : this.msg ? 'weui-icon_msg' : null
    },
  },
}
</script>