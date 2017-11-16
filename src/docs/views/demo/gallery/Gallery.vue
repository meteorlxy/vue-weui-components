<template>
<div>
  <DemoTitle />
  
  <WeuiButton @click.native="show = true">显示Gallery</WeuiButton>
  
  <WeuiGallery :show="show">
    <WeuiGalleryImg src="static/img/pic_article.png" />
    
    <WeuiGalleryOpr>
      <WeuiGalleryDelete @click.native="show = false" />
    </WeuiGalleryOpr>
  </WeuiGallery>
</div>
</template>

<script>
export default {
  name: 'DemoGallery',
  data () {
    return {
      show: false,
    }
  },
}
</script>