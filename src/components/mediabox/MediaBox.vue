<template>
  <a
    class="weui-media-box"
    :class="mediaBoxClass"
    @click="$emit('click', $event)"
  >
    <slot>
      <!--<WeuiMediaBoxTitle></WeuiMediaBoxTitle>-->
      <!--<WeuiMediaBoxDesc></WeuiMediaBoxDesc>-->
      <!--<WeuiMediaBoxInfo>-->
      <!--  <WeuiMediaBoxInfoMeta></WeuiMediaBoxInfoMeta>-->
      <!--  <WeuiMediaBoxInfoMeta :extra="true"></WeuiMediaBoxInfoMeta>-->
      <!--</WeuiMediaBoxInfo>-->
    </slot>
  </a>
</template>

<script>
export default {
  name: 'WeuiMediaBox',
  props: {
    /**
     * Type of media box
     * {'text'|'appmsg'|'small-appmsg'}
     */
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    mediaBoxClass () {
      return 'weui-media-box_' + this.type
    },
  },
}
</script>