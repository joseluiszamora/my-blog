<template lang="pug">
  .leftpart_inner
    .logo_wrap
      a(href='#')
        img(src='@/assets/img/logo/desktop-logo.png', alt='')
    .menu_list_wrap
      ul.anchor_nav
        li
          router-link(to="/") Inicio
        li
          router-link(to="/about") Acerca de
        li
          router-link(to="/services") Servicios
        li
          router-link(to="/portfolio") Portafolio
        li
          router-link(to="/news") Noticias
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