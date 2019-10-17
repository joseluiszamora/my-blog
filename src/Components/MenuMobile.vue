<template lang="pug">
  .arlo_tm_mobile_header_wrap
    .main_wrap
      .logo
        img(src='../assets/img/logo/mobile_logo.png', alt='')
      .arlo_tm_trigger
        .hamburger.hamburger--collapse-r
          .hamburger-box
            .hamburger-inner
    .arlo_tm_mobile_menu_wrap
      .mob_menu
        ul.anchor_nav
          li
            a(href='#home') Home
          li
            a(href='#about') About
          li
            a(href='#services') Services
          li
            a(href='#portfolio') Portfolio
          li
            a(href='#news') News
          li
            a(href='#contact') Contact
</template>
<script>
export default {
  name: 'MenuMobile'
}
</script>