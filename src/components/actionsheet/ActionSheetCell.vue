<template>
  <div class="weui-actionsheet__cell" @click="$emit('click', $event)">
    <slot>
      <!--菜单内容-->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'weui-action-sheet-cell',
}
</script>