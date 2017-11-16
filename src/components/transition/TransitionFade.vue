<template>
  <transition
    name="weui-animate-fade"
    :mode="transitionMode"
    enter-active-class="weui-animate-fade-in"
    leave-active-class="weui-animate-fade-out"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'WeuiTransitionFade',
  props: {
    mode: {
      type: String,
      default: 'out-in',
    },
  },
  computed: {
    transitionMode () {
      if (this.mode === 'out-in' || this.mode === 'in-out') {
        return this.mode
      }
      return null
    }
  }
}
</script>
