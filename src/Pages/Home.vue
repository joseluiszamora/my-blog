<template lang="pug">
  #home.arlo_tm_section
    .arlo_tm_hero_header_wrap
      .arlo_tm_universal_box_wrap.particle.jarallax(data-speed='0.1')
        #particles-js
        .particle_overlay
        .inner_content
          .image_wrap
            img(src='@/assets/img/hero/profile.jpg', alt='')
          .name_holder
            h3
              | jose luis 
              span zamora
          .text_typing
            p
              | Sitio en Construcción
              span.arlo_tm_animation_text_word
        //.arlo_tm_arrow_wrap.bounce.anchor
          router-link(to="/about")
            i.xcon-angle-double-down
</template>

<script lang="ts">
  // import particles from 'particlesjs'
  export default {
    name: 'Home',
    created () {
      //console.log(particles)
      /* particles.init({
        selector: 'body'
      }); */
    }
  }
</script>
<style lang="scss" scoped>
#particles-js {
	width: 100%;
	height: 100%;
  	position: relative;
  	z-index: 2;
}
.arlo_tm_universal_box_wrap.particle{
	height: 100vh;
	position: relative;
	background-image: url(../assets/img/hero/5.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.arlo_tm_universal_box_wrap.particle .particle_overlay{
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background-color:rgba(7,23,55,.8);
}

</style>