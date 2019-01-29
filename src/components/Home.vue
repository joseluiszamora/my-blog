<template lang="pug">
  // Begin of home section
  .section.section-home.fullscreen-md.fp-auto-height-responsive.main-home(data-section='home')
    // Begin of section wrapper
    .section-wrapper
      // content
      .section-content.anim
        .row
          .col-12.col-md-6.text-left
            // title and description
            .title-desc
              h2.display-4.display-title.home-title.bordered.anim-1 Simpleux
              h4.anim-2
                | A Bootstrap 4 based template, helping you to build modern and beautiful
                | websites.
            // Action button
            .btns-action.anim-3
              a.btn.btn-outline-white.btn-round(href='#about')
                | Get started
          // begin of right content
          .col-12.col-md-6.right-content.hidden-sm.center-vh
            // content
            .section-content
              // illustartion
              .illustr.zoomout-1
                img.logo(src='img/logo_white.png', alt='Logo')
          // end of right content
          // Arrows scroll down/up
          footer.section-footer.scrolldown
            a.down
              span.icon
              span.txt Scroll Down
    // End of section wrapper
  // End of home section

</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'home'
  });
</script>
