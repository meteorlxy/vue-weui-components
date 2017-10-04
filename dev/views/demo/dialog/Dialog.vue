<template>
<div id="demo-button">
  <weui-button @click.native="show.ios1 = true">iOS Dialog样式一</weui-button>
  <weui-button @click.native="show.ios2 = true">iOS Dialog样式二</weui-button>
  <weui-button @click.native="show.android1 = true">Android Dialog样式一</weui-button>
  <weui-button @click.native="show.android2 = true">Android Dialog样式二</weui-button>
  
  <weui-dialog :show.sync="show.ios1">
    <weui-dialog-header>
      <weui-dialog-title>弹窗标题</weui-dialog-title>
    </weui-dialog-header>
    <weui-dialog-body>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</weui-dialog-body>
    <weui-dialog-footer>
      <weui-dialog-btn type="default" @click.native="show.ios1 = false">辅助操作</weui-dialog-btn>
      <weui-dialog-btn type="primary" @click.native="show.ios1 = false">主操作</weui-dialog-btn>
    </weui-dialog-footer>
  </weui-dialog>
  
  <weui-dialog :show.sync="show.ios2">
    <weui-dialog-body>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</weui-dialog-body>
    <weui-dialog-footer>
      <weui-dialog-btn type="primary" @click.native="show.ios2 = false">知道了</weui-dialog-btn>
    </weui-dialog-footer>
  </weui-dialog>
  
  <weui-dialog :show.sync="show.android1" :android="true">
    <weui-dialog-header>
      <weui-dialog-title>弹窗标题</weui-dialog-title>
    </weui-dialog-header>
    <weui-dialog-body>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</weui-dialog-body>
    <weui-dialog-footer>
      <weui-dialog-btn type="default" @click.native="show.android1 = false">辅助操作</weui-dialog-btn>
      <weui-dialog-btn type="primary" @click.native="show.android1 = false">主操作</weui-dialog-btn>
    </weui-dialog-footer>
  </weui-dialog>
  
  <weui-dialog :show.sync="show.android2" :android="true">
    <weui-dialog-body>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</weui-dialog-body>
    <weui-dialog-footer>
      <weui-dialog-btn type="default" @click.native="show.android2 = false">辅助操作</weui-dialog-btn>
      <weui-dialog-btn type="primary" @click.native="show.android2 = false">主操作</weui-dialog-btn>
    </weui-dialog-footer>
  </weui-dialog>
</div>
</template>

<script>
export default {
  name: 'demo-dialog',
  data () {
    return {
      show: {
        ios1: false,
        ios2: false,
        android1: false,
        android2: false,
      }
    }
  },
}
</script>