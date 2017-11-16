<template>
  <div
    class="weui-loadmore"
    :class="loadmoreClass"
  >
    <i
      v-show="loading"
      class="weui-loading"
    ></i>
    
    <span class="weui-loadmore__tips">
      <template v-if="!dot">
        <template v-if="loading">{{ loadingText }}</template>
        <template v-else-if="nomore">{{ nomoreText }}</template>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'WeuiLoadmore',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: '正在加载',
    },
    nomore: {
      type: Boolean,
      default: false,
    },
    nomoreText: {
      type: String,
      default: '暂无数据',
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    loadmoreClass () {
      return {
        'weui-loadmore_line': this.dot || !this.loading,
        'weui-loadmore_dot': this.dot,
      }
    },
  },
}
</script>