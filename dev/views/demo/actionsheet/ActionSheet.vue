<template>
<div>
  <weui-button @click.native="show.ios = true">iOS ActionSheet</weui-button>
  <weui-button @click.native="show.android = true">Android ActionSheet</weui-button>
  
  <weui-action-sheet :show.sync="show.ios">
    <weui-action-sheet-title>
      这是一个标题，可以为一行或者两行。
    </weui-action-sheet-title>
    <weui-action-sheet-menu>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
    </weui-action-sheet-menu>
    <weui-action-sheet-action>
      <weui-action-sheet-cell @click.native="show.ios = false">取消</weui-action-sheet-cell>
    </weui-action-sheet-action>
  </weui-action-sheet>
  
  <weui-action-sheet :show.sync="show.android" :android="true">
    <weui-action-sheet-title>
      这是一个标题，可以为一行或者两行。
    </weui-action-sheet-title>
    <weui-action-sheet-menu>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
      <weui-action-sheet-cell>示例菜单</weui-action-sheet-cell>
    </weui-action-sheet-menu>
  </weui-action-sheet>
</div>
</template>

<script>
export default {
  name: 'demo-action-sheet',
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
