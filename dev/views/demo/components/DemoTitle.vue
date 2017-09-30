<template>
<page-header>
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
  </span>
</page-header>
</template>

<script>
import PageHeader from 'dev@/components/PageHeader'
export default {
  name: 'demo-title',
  components: {
    PageHeader,
  },
}
</script>