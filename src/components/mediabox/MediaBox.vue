<template>
  <a class="weui-media-box" :class="mediaBoxClass" @click="$emit('click', $event)">
    <slot>
      <!--<weui-media-box-title></weui-media-box-title>-->
      <!--<weui-media-box-desc></weui-media-box-desc>-->
      <!--<weui-media-box-info>-->
      <!--  <weui-media-box-info-meta></weui-media-box-info-meta>-->
      <!--  <weui-media-box-info-meta :extra="true"></weui-media-box-info-meta>-->
      <!--</weui-media-box-info>-->
    </slot>
  </a>
</template>

<script>
export default {
  name: 'weui-media-box',
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