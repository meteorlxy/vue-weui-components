<template>
<div id="demo-button">
  <DemoTitle />
  
  <WeuiButton @click.native="show.ios1 = true">iOS Dialog样式一</WeuiButton>
  
  <WeuiButton @click.native="show.ios2 = true">iOS Dialog样式二</WeuiButton>
  
  <WeuiButton @click.native="show.android1 = true">Android Dialog样式一</WeuiButton>
  
  <WeuiButton @click.native="show.android2 = true">Android Dialog样式二</WeuiButton>
  
  <WeuiDialog :show.sync="show.ios1">
    <WeuiDialogHeader>
      <WeuiDialogTitle>弹窗标题</WeuiDialogTitle>
    </WeuiDialogHeader>
    
    <WeuiDialogBody>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</WeuiDialogBody>
    
    <WeuiDialogFooter>
      <WeuiDialogBtn type="default" @click.native="show.ios1 = false">辅助操作</WeuiDialogBtn>
      
      <WeuiDialogBtn type="primary" @click.native="show.ios1 = false">主操作</WeuiDialogBtn>
    </WeuiDialogFooter>
  </WeuiDialog>
  
  <WeuiDialog :show.sync="show.ios2">
    <WeuiDialogBody>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</WeuiDialogBody>
    
    <WeuiDialogFooter>
      <WeuiDialogBtn type="primary" @click.native="show.ios2 = false">知道了</WeuiDialogBtn>
    </WeuiDialogFooter>
  </WeuiDialog>
  
  <WeuiDialog :show.sync="show.android1" :android="true">
    <WeuiDialogHeader>
      <WeuiDialogTitle>弹窗标题</WeuiDialogTitle>
    </WeuiDialogHeader>
    
    <WeuiDialogBody>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</WeuiDialogBody>
    
    <WeuiDialogFooter>
      <WeuiDialogBtn type="default" @click.native="show.android1 = false">辅助操作</WeuiDialogBtn>
      
      <WeuiDialogBtn type="primary" @click.native="show.android1 = false">主操作</WeuiDialogBtn>
    </WeuiDialogFooter>
  </WeuiDialog>
  
  <WeuiDialog :show.sync="show.android2" :android="true">
    <WeuiDialogBody>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</WeuiDialogBody>
    
    <WeuiDialogFooter>
      <WeuiDialogBtn type="default" @click.native="show.android2 = false">辅助操作</WeuiDialogBtn>
      
      <WeuiDialogBtn type="primary" @click.native="show.android2 = false">主操作</WeuiDialogBtn>
    </WeuiDialogFooter>
  </WeuiDialog>
</div>
</template>

<script>
export default {
  name: 'DemoDialog',
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