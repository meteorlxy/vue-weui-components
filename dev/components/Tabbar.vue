<template>
  <weui-tabbar>
    
    <router-link :to="{ name: 'demo' }" tag="weui-tabbar-item" active-class="weui-bar__item_on">
      <weui-tabbar-icon>
        <weui-icon type="waiting"></weui-icon>
      </weui-tabbar-icon>
      <weui-tabbar-label>
        Demo
      </weui-tabbar-label>
    </router-link>
    
    <router-link :to="{ name: 'about' }" tag="weui-tabbar-item" active-class="weui-bar__item_on" exact>
      <weui-tabbar-icon>
        <i class="fa fa-question-circle-o"></i>
      </weui-tabbar-icon>
      <weui-tabbar-label>
        About
      </weui-tabbar-label>
    </router-link>
    
  </weui-tabbar>
</template>

<script>
export default {
  name: 'tabbar',
}
</script>
