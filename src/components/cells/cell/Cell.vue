<template>
  <a class="weui-cell" 
    :class="cellClass" 
    :href="realHref" 
    @click="$emit('click', $event)">
    <slot>
      <!--<weui-cell-header></weui-cell-header>-->
      <!--<weui-cell-body></weui-cell-body>-->
      <!--<weui-cell-footer></weui-cell-footer>-->
    </slot>
  </a>
</template>

<script>
export default {
  name: 'weui-cell',
  props: {
    href: String,
    access: {
      type: Boolean,
      default: true,
    },
    link: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cellClass () {
      return {
        'weui-cell_access': this.access,
        'weui-cell_link': this.link,
      }
    },
    realHref () {
      if (!this.href && this.$parent.to && this.$router && this.$route) {
        let VueRouterHref = this.$router.resolve(this.$parent.to, this.$route, this.$parent.append).href
        return VueRouterHref
      }
      return this.href
    },
  },
}
</script>