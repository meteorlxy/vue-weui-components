<template>
<div>
  <DemoTitle />
  
  <WeuiPanel>
    <WeuiPanelHeader>
      新消息提示跟摘要信息后，统一在列表右侧
    </WeuiPanelHeader>
    
    <WeuiPanelBody>
      <WeuiMediaBox type="small-appmsg">
        <WeuiCells>
          <WeuiCell href="javascript:;">
            <WeuiCellBody>
              <span>单行列表</span>
            </WeuiCellBody>
            
            <WeuiCellFooter>
              <span>详细信息</span>
              
              <WeuiBadge></WeuiBadge>
            </WeuiCellFooter>
          </WeuiCell>
        </WeuiCells>
      </WeuiMediaBox>
    </WeuiPanelBody>
  </WeuiPanel>
  
  <WeuiPanel>
    <WeuiPanelHeader>
      未读数红点跟在主题信息后，统一在列表左侧
    </WeuiPanelHeader>
    
    <WeuiPanelBody>
      <WeuiMediaBox type="appmsg">
        <WeuiMediaBoxHeader>
          <img src="static/img/pic_160.png">
          
          <WeuiBadge>8</WeuiBadge>
        </WeuiMediaBoxHeader>
        
        <WeuiMediaBoxBody>
          <WeuiMediaBoxTitle>联系人名称</WeuiMediaBoxTitle>
          
          <WeuiMediaBoxDesc>摘要信息</WeuiMediaBoxDesc>
        </WeuiMediaBoxBody>
      </WeuiMediaBox>
      
      
      <WeuiMediaBox type="small-appmsg">
        <WeuiCells>
          <WeuiCell href="javascript:;">
            <WeuiCellBody>
              <span>单行列表</span>
              
              <WeuiBadge>8</WeuiBadge>
            </WeuiCellBody>
            
            <WeuiCellFooter />
          </WeuiCell>
          
          <WeuiCell href="javascript:;">
            <WeuiCellBody>
              <span>单行列表</span>
              
              <WeuiBadge>8</WeuiBadge>
            </WeuiCellBody>
            
            <WeuiCellFooter>
              <span>详细信息</span>
            </WeuiCellFooter>
          </WeuiCell>
          
          <WeuiCell href="javascript:;">
            <WeuiCellBody>
              <span>单行列表</span>
              
              <WeuiBadge>New</WeuiBadge>
            </WeuiCellBody>
            
            <WeuiCellFooter />
          </WeuiCell>
        </WeuiCells>
      </WeuiMediaBox>
    </WeuiPanelBody>
  </WeuiPanel>
</div>
</template>

<script>
export default {
  name: 'DemoBadge',
}
</script>
