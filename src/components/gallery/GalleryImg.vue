<template>
  <span class="weui-gallery__img" :style="'background-image: url(' + src + ')'">
    
  </span>
</template>

<script>
export default {
  name: 'weui-gallery-img',
  props: {
    src: {
      type: String,
      default: '',
    }
  }
}
</script>