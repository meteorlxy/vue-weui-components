<template>
<div>
  <WeuiCellsTitle>
    vue-weui-components
  </WeuiCellsTitle>
  
  <WeuiCells>
    <router-link :to="{ name: 'demo.actionsheet' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-bars"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>ActionSheet丨弹出式菜单</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.article' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-file-text-o"></i>
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Article丨文章</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.badge' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-shield"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Badge丨徽章</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.button' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-circle-o-notch"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Button丨按钮</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.cells' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-list-ul"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Cells丨列表</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.dialog' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-calendar-check-o"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Dialog丨对话框</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.flex' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-columns"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Flex丨布局</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.footer' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-ellipsis-h"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Footer丨页脚</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.gallery' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-photo"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Gallery丨图片展示</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.grids' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-table"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Grids丨九宫格</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.icon' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-star-o"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Icon丨图标</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.input' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-check-square-o"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Input丨表单输入</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.loadmore' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-spinner"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Loadmore丨加载更多</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
    
    <router-link :to="{ name: 'demo.msg' }" tag="WeuiCell">
      <WeuiCellHeader>
        <i class="fa fa-fw fa-warning"></i> 
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>Msg丨提示页</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </router-link>
  </WeuiCells>
</div>
</template>

<script>
export default {
  name: 'DemoList',
}
</script>

<style type="text/css" lang="scss" scope>
.router-link-active {
  color: #586c94;
}
</style>