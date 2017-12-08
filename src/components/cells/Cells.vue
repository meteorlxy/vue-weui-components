<template>
  <div
    class="weui-cells"
    :class="cellsClass"
  >
    <slot>
      <!--<WeuiCell></WeuiCell>-->
      <!--<WeuiCell></WeuiCell>-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WeuiCells',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    cellsClass () {
      return `weui-cells_${this.type}`
    }
  },
}
</script>