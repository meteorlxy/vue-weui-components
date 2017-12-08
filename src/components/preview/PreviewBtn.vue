<template>
  <a
    class="weui-form-preview__btn"
    :class="previewBtnClass"
    @click="$emit('click', $event)"
  >
    <slot>
      <!--按钮-->
    </slot>
  </a>
</template>

<script>
export default {
  name: 'WeuiPreviewBtn',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    previewBtnClass () {
      return [
        `weui-form-preview__btn_${this.type}`,
      ]
    },
  },
}
</script>