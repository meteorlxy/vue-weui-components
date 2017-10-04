<template>
  <div class="weui-gallery__opr">
    <slot>
      <weui-gallery-delete></weui-gallery-delete>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-gallery-operation',
}
</script>