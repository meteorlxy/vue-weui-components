<template>
  <div>
    
    <weui-cells-title>带说明的列表项</weui-cells-title>
    <weui-cells>
      <weui-cell>
        <weui-cell-body>
          <span>标题文字</span>
        </weui-cell-body>
        <weui-cell-footer>
          说明文字
        </weui-cell-footer>
      </weui-cell>
    </weui-cells>
    
    <weui-cells-title>带图标、说明的列表项</weui-cells-title>
    <weui-cells>
      <weui-cell>
        <weui-cell-header>
          <weui-icon type="warn"></weui-icon>
        </weui-cell-header>
        <weui-cell-body>
          <span>标题文字</span>
        </weui-cell-body>
        <weui-cell-footer>
          说明文字
        </weui-cell-footer>
      </weui-cell>
    </weui-cells>
    
    <weui-cells-title>带跳转的列表项</weui-cells-title>
    <weui-cells>
      <weui-cell href="javascript:;" v-for="i in 2" :key="i">
        <weui-cell-body>
          <span>cell standard</span>
        </weui-cell-body>
        <weui-cell-footer>
        </weui-cell-footer>
      </weui-cell>
    </weui-cells>
    
    <weui-cells-title>带说明、跳转的列表项</weui-cells-title>
    <weui-cells>
      <weui-cell href="javascript:;" v-for="i in 2" :key="i">
        <weui-cell-body>
          <span>cell standard</span>
        </weui-cell-body>
        <weui-cell-footer>
          说明文字
        </weui-cell-footer>
      </weui-cell>
    </weui-cells>
    
    <weui-cells-title>带图标、说明、跳转的列表项</weui-cells-title>
    <weui-cells>
      <weui-cell href="javascript:;" v-for="i in 2" :key="i">
        <weui-cell-header>
          <weui-icon type="success"></weui-icon>
        </weui-cell-header>
        <weui-cell-body>
          <span>cell standard</span>
        </weui-cell-body>
        <weui-cell-footer>
          说明文字
        </weui-cell-footer>
      </weui-cell>
    </weui-cells>
    
    
    
  </div>
</template>

<script>
export default {
  name: 'demo-cells',
}
</script>
