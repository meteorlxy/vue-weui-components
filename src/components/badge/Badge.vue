<template>
  <span
    class="weui-badge"
    :class="badgeClass"
  >
    <slot>
      <!--要显示的数字-->
      <!--只显示红点的话留空-->
    </slot>
  </span>
</template>

<script>
export default {
  name: 'WeuiBadge',
  computed: {
    badgeClass () {
      return {
        'weui-badge_dot': !this.$slots.default,
      }
    },
  },
}
</script>