<template lang="pug">
  #app
    .arlo_tm_wrapper_all
      #arlo_tm_popup_blog
        .container
          .inner_popup.scrollable
        span.close
          a(href='#')
      
      // PRELOADER
      //preloader
      // /PRELOADER

      // MOBILE MENU
      menu-mobile
      // /MOBILE MENU

    // CONTENT
    .arlo_tm_content
      
      // LEFTPART
      menu-main
      // /LEFTPART
      
      // RIGHTPART
      .arlo_tm_rightpart
        .rightpart_inner

          transition(mode='out-in')
            router-view
      // /RIGHTPART
</template>

<script lang="ts">
  import Preloader from '@/Components/Preloader.vue'
  import MenuMobile from '@/Components/MenuMobile.vue'
  import MenuMain from '@/Components/MenuMain.vue'

  export default {
    name: 'Home',
    components: { Preloader, MenuMobile, MenuMain }
  }
</script>

<style>
  @import './assets/css/plugins.css';
  @import './assets/css/style.css';
</style>