<template lang="pug">
  #home.arlo_tm_section
    .arlo_tm_hero_header_wrap
      .arlo_tm_universal_box_wrap.particle.jarallax(data-speed='0.1')
        #particles-js
        .particle_overlay
        .inner_content
          .image_wrap
            img(src='@/assets/img/hero/img.jpg', alt='')
          .name_holder
            h3
              | diemo
              span demo
          .text_typing
            p
              | Yo soy 
              span.arlo_tm_animation_text_word
        .arlo_tm_arrow_wrap.bounce.anchor
          router-link(to="/about")
            i.xcon-angle-double-down
</template>

<script lang="ts">
  export default {
    name: 'Home',
  }
</script>
