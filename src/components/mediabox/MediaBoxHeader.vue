<template>
  <div class="weui-media-box__hd">
    <slot>
      <!--<weui-icon type="success"></weui-icon>-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-media-box-header',
}
</script>

<style type="text/css" lang="scss">
.weui-media-box__hd {
  img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
  }
}
.weui-media-box_appmsg {
  .weui-media-box__hd {
    position: relative;
    .weui-badge {
      position: absolute;
      top: -.4em;
      right: -.4em;
    }
  }
}
</style>