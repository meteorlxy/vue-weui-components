<template>
  <a
    class="weui-tabbar__item"
    :class="{ 'weui-bar__item_on': isActive }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'WeuiTabbarItem',
  props: {
    isActive: Boolean,
  },
}
</script>