<template>
  <li
    class="weui-media-box__info__meta"
    :class="mediaInfoMetaClass"
  >
    <slot>
      <!--附加信息-->
    </slot>
  </li>
</template>

<script>
export default {
  name: 'WeuiMediaBoxInfoMeta',
  props: {
    extra: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mediaInfoMetaClass () {
      return {
        'weui-media-box__info__meta_extra': this.extra,
      }
    },
  },
}
</script>