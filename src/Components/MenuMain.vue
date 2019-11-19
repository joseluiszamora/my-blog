<template lang="pug">
  .arlo_tm_leftpart_wrap
    .leftpart_inner
      .logo_wrap
        a(href='#')
          img(src='img/logo/desktop-logo.png', alt='')
      .menu_list_wrap
        ul.anchor_nav
          li
            router-link(to="/") Inicio
          li
            router-link(to="/about") Acerca de mi
          // li
            router-link(to="/services") Services
          li
            router-link(to="/portfolio") Portafolio
          li
            router-link(to="/news") Blog
          li
            router-link(to="/contact") Contacto
      .leftpart_bottom
        .social_wrap
          ul
            li
              a(href='#')
                i.xcon-facebook
            li
              a(href='#')
                i.xcon-twitter
            li
              a(href='#')
                i.xcon-linkedin
            li
              a(href='#')
                i.xcon-instagram
            li
              a(href='#')
                i.xcon-behance
      a.arlo_tm_resize(href='#')
        i.xcon-angle-left
</template>
<script>
export default {
  name: 'MenuMain'
}
</script>