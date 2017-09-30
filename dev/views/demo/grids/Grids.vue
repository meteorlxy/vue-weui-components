<template>
  <weui-grids>
    
    <weui-grid v-for="i in 9" :key="i" href="javascript:;">
      <weui-grid-icon>
        <weui-icon type="success"></weui-icon>
      </weui-grid-icon>
      <weui-grid-label>
        九宫格{{ i }}
      </weui-grid-label>
    </weui-grid>
    
  </weui-grids>
</template>

<script>
export default {
  name: 'demo-grids',
}
</script>