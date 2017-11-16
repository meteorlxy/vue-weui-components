<template>
<div>
  <DemoTitle />
    
  <WeuiCellsTitle>带说明的列表项</WeuiCellsTitle>
  
  <WeuiCells>
    <WeuiCell>
      <WeuiCellBody>
        <span>标题文字</span>
      </WeuiCellBody>
      
      <WeuiCellFooter>
        说明文字
      </WeuiCellFooter>
    </WeuiCell>
  </WeuiCells>
  
  <WeuiCellsTitle>带图标、说明的列表项</WeuiCellsTitle>
  <WeuiCells>
    <WeuiCell>
      <WeuiCellHeader>
        <WeuiIcon type="warn" />
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>标题文字</span>
      </WeuiCellBody>
      
      <WeuiCellFooter>
        说明文字
      </WeuiCellFooter>
    </WeuiCell>
  </WeuiCells>
  
  <WeuiCellsTitle>带跳转的列表项</WeuiCellsTitle>
  <WeuiCells>
    <WeuiCell
      v-for="i in 2"
      :key="i"
      href="javascript:;"
    >
      <WeuiCellBody>
        <span>cell standard</span>
      </WeuiCellBody>
      
      <WeuiCellFooter />
    </WeuiCell>
  </WeuiCells>
  
  <WeuiCellsTitle>带说明、跳转的列表项</WeuiCellsTitle>
  <WeuiCells>
    <WeuiCell
      v-for="i in 2"
      :key="i"
      href="javascript:;"
    >
      <WeuiCellBody>
        <span>cell standard</span>
      </WeuiCellBody>
      
      <WeuiCellFooter>
        说明文字
      </WeuiCellFooter>
    </WeuiCell>
  </WeuiCells>
  
  <WeuiCellsTitle>带图标、说明、跳转的列表项</WeuiCellsTitle>
  <WeuiCells>
    <WeuiCell
      v-for="i in 2"
      :key="i"
      href="javascript:;"
    >
      <WeuiCellHeader>
        <WeuiIcon type="success"/>
      </WeuiCellHeader>
      
      <WeuiCellBody>
        <span>cell standard</span>
      </WeuiCellBody>
      
      <WeuiCellFooter>
        说明文字
      </WeuiCellFooter>
    </WeuiCell>
  </WeuiCells>
</div>
</template>

<script>
export default {
  name: 'DemoCells',
}
</script>
