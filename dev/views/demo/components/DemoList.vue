<template>
<div>
  <weui-cells-title>
    vue-weui-components
  </weui-cells-title>
  <weui-cells>
    
    <router-link :to="{ name: 'demo.actionsheet' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-bars"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>ActionSheet丨弹出式菜单</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.article' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-file-text-o"></i>
      </weui-cell-header>
      <weui-cell-body>
        <span>Article丨文章</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.badge' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-shield"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Badge丨徽章</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.button' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-circle-o-notch"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Button丨按钮</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.cells' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-list-ul"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Cells丨列表</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.dialog' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-calendar-check-o"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Dialog丨对话框</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.flex' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-columns"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Flex丨布局</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.footer' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-columns"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Footer丨页脚</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.grids' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-table"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Grids丨九宫格</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
    <router-link :to="{ name: 'demo.icon' }" tag="weui-cell">
      <weui-cell-header>
        <i class="fa fa-fw fa-star-o"></i> 
      </weui-cell-header>
      <weui-cell-body>
        <span>Icon丨图标</span>
      </weui-cell-body>
      <weui-cell-footer></weui-cell-footer>
    </router-link>
    
  </weui-cells>
</div>
</template>

<script>
export default {
  name: 'demo-list',
}
</script>

<style type="text/css" lang="scss" scope>
.router-link-active {
  color: #586c94;
}
</style>