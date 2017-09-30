<template>
  <div class="weui-form-preview">
    <slot>
      <weui-preview-header></weui-preview-header>
      <weui-preview-body></weui-preview-body>
      <weui-preview-footer></weui-preview-footer>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-preview',
}
</script>