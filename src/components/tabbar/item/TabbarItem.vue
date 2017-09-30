<template>
  <a class="weui-tabbar__item" :class="{ 'weui-bar__item_on': isActive }" @click="$emit('click', $event)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'weui-tabbar-item',
  props: {
    isActive: Boolean,
  },
}
</script>