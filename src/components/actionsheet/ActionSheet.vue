<template>
  <div>
    <transition 
      name="fade"
      enter-active-class="weui-animate-fade-in"
      leave-active-class="weui-animate-fade-out">
        <weui-mask v-show="show" :transparent="maskTransparent" @click.native="clickMask"></weui-mask>
    </transition>
    <div class="weui-actionsheet" :class="actionSheetClass">
      <slot>
        <!--<weui-action-sheet-menu>-->
        <!--  <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>-->
        <!--  <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>-->
        <!--  <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>-->
        <!--  <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>-->
        <!--</weui-action-sheet-menu>-->
        <!--<weui-action-sheet-action>-->
        <!--  <weui-action-sheet-cell>取消</weui-action-sheet-cell>-->
        <!--</weui-action-sheet-action>-->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weui-action-sheet',
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
      default: true,
    },
  },
  computed: {
    actionSheetClass () {
      return {
        'weui-actionsheet_toggle': this.show,
        'weui-skin_android': this.android,
      }
    }
  },
  methods: {
    clickMask () {
      if (this.closeOnClickMask) {
        this.$emit('update:show', false)
      }
    }
  }
}
</script>