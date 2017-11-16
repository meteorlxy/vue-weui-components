<template>
<div id="demo-msg">
  <DemoTitle v-show="!showSuccess && !showError" />
  
  <WeuiTransitionFade>
    <div v-if="!showSuccess && !showError">
      <WeuiButton @click.native="showSuccess = true">成功提示页</WeuiButton>
      
      <WeuiButton @click.native="showError = true">失败提示页</WeuiButton>
    </div>
    
    <!--success msg page-->
    <div v-else-if="showSuccess">
      <WeuiMsg>
        <WeuiMsgIcon>
          <WeuiIcon type="success" :msg="true" />
        </WeuiMsgIcon>
        
        <WeuiMsgText>
          <WeuiMsgTitle>操作成功</WeuiMsgTitle>
          
          <WeuiMsgDesc>
            内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a>
          </WeuiMsgDesc>
        </WeuiMsgText>
        
        <WeuiMsgOpr>
          <WeuiButtonArea>
            <WeuiButton type="primary" @click.native="showSuccess = false">推荐操作</WeuiButton>
            
            <WeuiButton type="default" @click.native="showSuccess = false">辅助操作</WeuiButton>
          </WeuiButtonArea>
        </WeuiMsgOpr>
        
        <WeuiMsgExtra>
          <WeuiFooter>
            <WeuiFooterLinks>
              <WeuiFooterLink>底部链接文本</WeuiFooterLink>
            </WeuiFooterLinks>
            
            <WeuiFooterText>Copyright &copy; 2008-2016 weui.io</WeuiFooterText>
          </WeuiFooter>
        </WeuiMsgExtra>
      </WeuiMsg>
    </div>
    <!--success msg page-->
    
    <!--error msg page-->
    <div v-else-if="showError">
      <WeuiMsg>
        <WeuiMsgIcon>
          <WeuiIcon type="warn" :msg="true" />
        </WeuiMsgIcon>
        
        <WeuiMsgText>
          <WeuiMsgTitle>操作失败</WeuiMsgTitle>
          
          <WeuiMsgDesc>
            内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a>
          </WeuiMsgDesc>
        </WeuiMsgText>
        
        <WeuiMsgOpr>
          <WeuiButtonArea>
            <WeuiButton type="primary" @click.native="showError = false">推荐操作</WeuiButton>
            
            <WeuiButton type="default" @click.native="showError = false">辅助操作</WeuiButton>
          </WeuiButtonArea>
        </WeuiMsgOpr>
        
        <WeuiMsgExtra>
          <WeuiFooter>
            <WeuiFooterLinks>
              <WeuiFooterLink>底部链接文本</WeuiFooterLink>
            </WeuiFooterLinks>
            
            <WeuiFooterText>Copyright &copy; 2008-2016 weui.io</WeuiFooterText>
          </WeuiFooter>
        </WeuiMsgExtra>
      </WeuiMsg>
    </div>
    <!--error msg page-->
  </WeuiTransitionFade>
  
</div>
</template>

<script>
export default {
  name: 'DemoMsg',
  data () {
    return {
      showSuccess: false,
      showError: false,
    }
  },
}
</script>

<style type="text/css" lang="scss" scoped>
#demo-msg {
  position: relative;
  height: 100%;
  .weui-msg__extra-area {
    position: absolute;
    bottom: 0;
  }
}

</style>