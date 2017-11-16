<template>
<div>
  <DemoTitle />
  
  <WeuiLoadmore :loading="true" />
  
  <WeuiLoadmore :nomore="true" />
  
  <WeuiLoadmore :dot="true" />
</div>
</template>

<script>
export default {
  name: 'DemoLoadmore',
}
</script>