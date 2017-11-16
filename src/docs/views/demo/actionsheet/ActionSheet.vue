<template>
<div>
  <DemoTitle />
  
  <WeuiButton @click.native="show.ios = true">iOS ActionSheet</WeuiButton>
  <WeuiButton @click.native="show.android = true">Android ActionSheet</WeuiButton>
  
  <WeuiActionSheet :show.sync="show.ios">
    <WeuiActionSheetTitle>
      这是一个标题，可以为一行或者两行。
    </WeuiActionSheetTitle>
    <WeuiActionSheetMenu>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
    </WeuiActionSheetMenu>
    <WeuiActionSheetAction>
      <WeuiActionSheetCell @click.native="show.ios = false">取消</WeuiActionSheetCell>
    </WeuiActionSheetAction>
  </WeuiActionSheet>
  
  <WeuiActionSheet :show.sync="show.android" :android="true">
    <WeuiActionSheetTitle>
      这是一个标题，可以为一行或者两行。
    </WeuiActionSheetTitle>
    <WeuiActionSheetMenu>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
      <WeuiActionSheetCell>示例菜单</WeuiActionSheetCell>
    </WeuiActionSheetMenu>
  </WeuiActionSheet>
</div>
</template>

<script>
export default {
  name: 'DemoActionSheet',
  data () {
    return {
      show: {
        ios: false,
        android: false,
      }
    }
  },
}
</script>
