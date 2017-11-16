<template>
<div>
  <DemoTitle />
  
  <WeuiFlex
    v-for="i in 4"
    :key="i"
  >
    <WeuiFlexItem
      v-for="j in i"
      :key="`${i}${j}`"
    >
      <div class="placeholder">weui</div>
    </WeuiFlexItem>
  </WeuiFlex>
</div>
</template>

<script>
export default {
  name: 'DemoFlex',
}
</script>
