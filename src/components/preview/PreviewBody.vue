<template>
  <div class="weui-form-preview__bd">
    <slot>
      <p>
        <weui-preview-label></weui-preview-label>
        <weui-preview-value></weui-preview-value>
      </p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-preview-body',
}
</script>