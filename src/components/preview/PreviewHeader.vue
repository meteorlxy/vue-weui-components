<template>
  <div class="weui-form-preview__hd">
    <slot>
      <label class="weui-form-preview__label">付款金额</label>
      <span class="weui-form-preview__value">¥2400.00</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-preview-header',
}
</script>