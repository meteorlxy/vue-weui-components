<template>
  <button
    class="weui-btn"
    :class="buttonClass"
    :style="buttonStyle"
    @click="$emit('click', $event)"
  >
    <i
      v-if="loading"
      class="weui-loading"
    ></i>
    
    <slot>
      <!--按钮内容-->
    </slot>
  </button>
</template>

<script>
export default {
  name: 'WeuiButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    mini: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass () {
      return [
        this.plain ? 'weui-btn_plain-' + this.type : 'weui-btn_' + this.type,
        this.mini ? 'weui-btn_mini' : null,
        this.loading ? 'weui-btn_loading' : null,
        this.disabled ? this.plain ? 'weui-btn_plain-disabled' : 'weui-btn_disabled' : null,
      ]
    },
    buttonStyle () {
      return [
        this.loading || this.disabled ? null : { cursor: 'pointer' },
      ]
    },
  },
}
</script>