<template>
<PageHeader>
  <span slot="title">
    {{ $route.meta.title }}
  </span>
  
  <span slot="desc">
    Demo of vue-weui-components
    <template v-if="$route.meta.offical">
      <br>
      
      Compare with WEUI offical demo in
      
      <span v-if="$route.meta.offical.weui"> [<a :href="$route.meta.offical.weui" target="_blank">weui.io</a>]</span>
      
      <span v-if="$route.meta.offical.github"> [<a :href="$route.meta.offical.github" target="_blank">github</a>]</span>
    </template>
    
    <template v-if="$route.meta.mine">
      <br>
      
      <span>See: </span>
      
      <span v-if="$route.meta.mine.docs"> [<a :href="$route.meta.mine.docs" target="_blank">docs</a>]</span>
      
      <span v-if="$route.meta.mine.demo_source_code"> [<a :href="$route.meta.mine.demo_source_code" target="_blank">demo source code</a>]</span>
    </template>
  </span>
</PageHeader>
</template>

<script>
import PageHeader from 'docs@/components/PageHeader'
export default {
  name: 'DemoTitle',
  components: {
    PageHeader,
  },
}
</script>