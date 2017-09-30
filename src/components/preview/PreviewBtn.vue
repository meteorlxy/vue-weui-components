<template>
  <a class="weui-form-preview__btn" :class="previewBtnClass" @click="$emit('click', $event)">
    <slot>按钮</slot>
  </a>
</template>

<script>
export default {
  name: 'weui-preview-btn',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    previewBtnClass () {
      return {
        'weui-form-preview__btn_primary': this.primary,
      }
    },
  },
}
</script>