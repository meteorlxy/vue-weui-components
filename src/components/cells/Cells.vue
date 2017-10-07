<template>
  <div class="weui-cells" :class="cellsClass">
    <slot>
      <!--<weui-cell></weui-cell>-->
      <!--<weui-cell></weui-cell>-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-cells',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    cellsClass () {
      return 'weui-cells_' + this.type
    }
  },
}
</script>