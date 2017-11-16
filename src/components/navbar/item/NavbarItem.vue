<template>
  <a
    class="weui-navbar__item"
    :class="{ 'weui-bar__item_on': isActive }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'WeuiNavbarItem',
  props: {
    isActive: Boolean,
  },
}
</script>