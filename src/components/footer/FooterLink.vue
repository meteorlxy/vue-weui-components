<template>
  <a
    class="weui-footer__link"
    @click="$emit('click', $event)"
  >
    <slot>
      <!--底部链接-->
    </slot>
  </a>
</template>

<script>
export default {
  name: 'WeuiFooterLink',
}
</script>