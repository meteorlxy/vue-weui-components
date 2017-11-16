<template>
  <div class="weui-media-box__hd">
    <slot>
      <!--<WeuiIcon type="success" />-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WeuiMediaBoxHeader',
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