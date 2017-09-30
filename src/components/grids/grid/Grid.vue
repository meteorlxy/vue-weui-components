<template>
  <a class="weui-grid" @click="$emit('click', $event)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'weui-grid',
}
</script>