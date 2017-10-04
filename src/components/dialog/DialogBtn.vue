<template>
  <a class="weui-dialog__btn" :class="dialogBtnClass" @click="$emit('click', $event)">
    <slot>
      <!--按钮内容-->
    </slot>
  </a>
</template>

<script>
export default {
  name: 'weui-dialog-btn',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    dialogBtnClass () {
      return [
        'weui-dialog__btn_' + this.type
      ]
    }
  },
}
</script>