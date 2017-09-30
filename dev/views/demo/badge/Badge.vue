<template>
<div>
  <weui-panel>
    <weui-panel-header>
      新消息提示跟摘要信息后，统一在列表右侧
    </weui-panel-header>
    <weui-panel-body>
      <weui-media-box type="small-appmsg">
        <weui-cells>
          <weui-cell href="javascript:;">
            <weui-cell-body>
              <span>单行列表</span>
            </weui-cell-body>
            <weui-cell-footer>
              <span>详细信息</span>
              <weui-badge></weui-badge>
            </weui-cell-footer>
          </weui-cell>
        </weui-cells>
      </weui-media-box>
    </weui-panel-body>
  </weui-panel>
  
  <weui-panel>
    <weui-panel-header>
      未读数红点跟在主题信息后，统一在列表左侧
    </weui-panel-header>
    <weui-panel-body>
      
      <weui-media-box type="appmsg">
        <weui-media-box-header>
          <img src="static/img/pic_160.png"></img>
          <weui-badge>8</weui-badge>
        </weui-media-box-header>
        <weui-media-box-body>
          <weui-media-box-title>联系人名称</weui-media-box-title>
          <weui-media-box-desc>摘要信息</weui-media-box-desc>
        </weui-media-box-body>
      </weui-media-box>
      
      
      <weui-media-box type="small-appmsg">
        <weui-cells>
          
          <weui-cell href="javascript:;">
            <weui-cell-body>
              <span>单行列表</span>
              <weui-badge>8</weui-badge>
            </weui-cell-body>
            <weui-cell-footer>
            </weui-cell-footer>
          </weui-cell>
          
          <weui-cell href="javascript:;">
            <weui-cell-body>
              <span>单行列表</span>
              <weui-badge>8</weui-badge>
            </weui-cell-body>
            <weui-cell-footer>
              <span>详细信息</span>
            </weui-cell-footer>
          </weui-cell>
          
          <weui-cell href="javascript:;">
            <weui-cell-body>
              <span>单行列表</span>
              <weui-badge>New</weui-badge>
            </weui-cell-body>
            <weui-cell-footer>
            </weui-cell-footer>
          </weui-cell>
          
          
        </weui-cells>
      </weui-media-box>
      
    </weui-panel-body>
  </weui-panel>

</div>
</template>

<script>
export default {
  name: 'demo-badge',
}
</script>
