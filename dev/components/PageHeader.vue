<template>
<header class="page_header">
  <h1 class="page_title">
    <slot name="title"></slot>
  </h1>
  <p class="page_desc">
    <slot name="desc"></slot>
  </p>
</header>
</template>

<script>
export default {
  name: 'page-header',
}
</script>

<style type="text/css" lang="scss" scope>
.page_header {
  padding: 2em 0;
  .page_title {
    text-align: center;
    font-size: 34px;
    color: #3cc51f;
    font-weight: 400;
    margin: 0 15%;
  }
  .page_desc {
    text-align: center;
    color: #888;
    font-size: 14px;
  }
}
</style>