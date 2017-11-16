<template>
<WeuiTabbar>
  <router-link :to="{ name: 'home' }" tag="weui-tabbar-item" active-class="weui-bar__item_on">
    <WeuiTabbarIcon>
      <i class="fa fa-home"></i>
    </WeuiTabbarIcon>
    
    <WeuiTabbarLabel>
      Home
    </WeuiTabbarLabel>
  </router-link>
  
  <router-link :to="{ name: 'demo' }" tag="weui-tabbar-item" active-class="weui-bar__item_on">
    <WeuiTabbarIcon>
      <i class="fa fa-camera-retro"></i>
    </WeuiTabbarIcon>
    
    <WeuiTabbarLabel>
      Demo
    </WeuiTabbarLabel>
  </router-link>
  
  <router-link :to="{ name: 'about' }" tag="weui-tabbar-item" active-class="weui-bar__item_on" exact>
    <WeuiTabbarIcon>
      <i class="fa fa-question-circle-o"></i>
    </WeuiTabbarIcon>
    
    <WeuiTabbarLabel>
      About
    </WeuiTabbarLabel>
  </router-link>
  
</WeuiTabbar>
</template>

<script>
export default {
  name: 'TheTabbar',
}
</script>
