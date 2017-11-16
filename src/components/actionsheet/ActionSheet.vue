<template>
  <div>
    <WeuiTransitionFade>
      <WeuiMask
        v-show="show"
        :transparent="maskTransparent"
        @click.native="clickMask"
      />
    </WeuiTransitionFade>
    
    <div
      class="weui-actionsheet"
      :class="actionSheetClass"
    >
      <slot>
        <!--<WeuiActionSheetMenu>-->
        <!--  <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>-->
        <!--  <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>-->
        <!--  <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>-->
        <!--  <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>-->
        <!--</WeuiActionSheetMenu>-->
        <!--<WeuiActionSheetAction>-->
        <!--  <WeuiActionSheetCell>取消</WeuiActionSheetCell>-->
        <!--</WeuiActionSheetAction>-->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeuiActionSheet',
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
        this.closeActionSheet()
      }
    },
    closeActionSheet () {
      this.$emit('update:show', false)
    },
  }
}
</script>