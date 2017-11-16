<template>
<div>
  <DemoTitle />
  
  <WeuiGrids>
    <WeuiGrid
      v-for="i in 9"
      :key="i"
      href="javascript:;"
    >
      <WeuiGridIcon>
        <WeuiIcon type="success" />
      </WeuiGridIcon>
      
      <WeuiGridLabel>
        九宫格{{ i }}
      </WeuiGridLabel>
    </WeuiGrid>
  </WeuiGrids>
</div>
</template>

<script>
export default {
  name: 'DemoGrids',
}
</script>