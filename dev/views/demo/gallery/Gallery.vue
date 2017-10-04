<template>
  <div>
    <weui-button @click.native="show = true">显示Gallery</weui-button>
    
    <weui-gallery :show="show">
      <weui-gallery-img src="static/img/pic_article.png"></weui-gallery-img>
      <weui-gallery-operation>
        <weui-gallery-delete @click.native="show = false"></weui-gallery-delete>
      </weui-gallery-operation>
    </weui-gallery>
  </div>
</template>

<script>
export default {
  name: 'demo-gallery',
  data () {
    return {
      show: false,
    }
  },
}
</script>