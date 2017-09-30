<template>
  <div>
    <weui-flex v-for="i in 4" :key="i">
      <weui-flex-item v-for="j in i" :key="`${i}${j}`">
        <div class="placeholder">weui</div>
      </weui-flex-item>
    </weui-flex>
  </div>
</template>

<script>
export default {
  name: 'demo-flex',
}
</script>
