<template>
  <div v-show="show">
    <transition
      name="fade"
      enter-active-class="weui-animate-fade-in"
      leave-active-class="weui-animate-fade-out">
        <weui-mask v-show="show" :transparent="maskTransparent" @click.native="clickMask"></weui-mask>
    </transition>
    <div class="weui-dialog" :class="dialogClass">
      <slot>
        <!--<weui-dialog-header>弹窗标题</weui-dialog-header>-->
        <!--<weui-dialog-body>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</weui-dialog-body>-->
        <!--<weui-dialog-footer>-->
        <!--  <weui-dialog-btn type="primary">知道了</weui-dialog-btn>-->
        <!--</weui-dialog-footer>-->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weui-dialog',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    android: {
      type: Boolean,
      default: false,
    },
    maskTransparent: {
      type: Boolean,
      default: false,
    },
    closeOnClickMask: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialogClass () {
      return {
        'weui-skin_android': this.android,
      }
    }
  },
  methods: {
    clickMask () {
      if (this.closeOnClickMask) {
        this.closeDialog()
      }
    },
    closeDialog () {
      this.$emit('update:show', false)
    },
  }
}
</script>