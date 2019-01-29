<template lang="pug">
  #app
    // BEGIN OF site header Menu
    header.page-header.navbar.page-header-alpha.scrolled-white.menu-right.topmenu-right
      // Begin of menu icon toggler
      button#navMenuIcon.navbar-toggler.site-menu-icon
        // Available class : menu-icon-dot / menu-icon-thick /menu-icon-random
        span.menu-icon.menu-icon-random
          span.bars
            span.bar1
            span.bar2
            span.bar3
      // End of menu icon toggler

      // Begin of logo/brand
      a.navbar-brand(href='#')
        span.logo
          img.light-logo(src='img/logo.png', alt='Logo')
        span.text
          span.line Value
          span.line.sub Portfolio Template
      // End of logo/brand

      // begin of menu wrapper
      #navbarMenu.all-menu-wrapper
        // Begin of top menu
        nav.navbar-topmenu
          // Begin of CTA Actions, & Icons menu
          ul.navbar-nav.navbar-nav-actions
            li.nav-item
              a.btn.btn-outline-white.btn-round(target='_blank', href='https://themeforest.net/item/simpleux-beautiful-creative-website-template-for-agency-business-and-portfolio/20863111')
                | Buy Now
          // End of CTA & Icons menu
        // End of top menu

        // Begin of hamburger mainmenu menu
        nav.navbar-mainmenu
          ul.navbar-nav.mr-auto
            li.nav-item.active
              router-link.nav-link(to='/') Home
            li.nav-item
              router-link.nav-link(to='/about') About
            li.nav-item
              router-link.nav-link(to='/team') Team
            li.nav-item
              router-link.nav-link(to='/services') Services
            li.nav-item
              router-link.nav-link(to='/prices') Prices
            li.nav-item
              router-link.nav-link(to='/projects') Projects
        // End of hamburger mainmenu menu

        // Begin of sidebar nav menu params class: text-only / icon-only
        nav.navbar-sidebar
          ul#qmenu.navbar-nav
            li.nav-item
              router-link(to='/')
                i.icon.ion-ios-home-outline
                span.txt Home
            li.nav-item
              router-link(to='/about')
                i.icon.ion-ios-information-outline
                span.txt About
            li.nav-item
              router-link(to='/team')
                i.icon.ion-ios-information-outline
                span.txt Team
            li.nav-item
              router-link(to='/services')
                i.icon.ion-ios-list-outline
                span.txt Services
            li.nav-item
              router-link(to='/prices')
                i.icon.ion-ios-list-outline
                span.txt Prices
            li.nav-item
              router-link(to='/projects')
                i.icon.ion-ios-list-outline
                span.txt Projects
            li.nav-item
              router-link(to='/products')
                i.icon.ion-ios-list-outline
                span.txt Products
            li.nav-item
              router-link(to='/Register')
                i.icon.ion-ios-list-outline
                span.txt Register
            li.nav-item
              router-link(to='/contact')
                i.icon.ion-ios-list-outline
                span.txt Contact
        // End of sidebar nav menu
      // end of menu wrapper
    // END OF site header Menu

    // BEGIN OF page cover
    .page-cover
      // Cover Background
      .cover-bg.bg-img(data-image-src='img/bg-default.jpg')
      // Transluscent mask as filter
      .cover-bg-mask.bg-color(data-bgcolor='rgba(2, 3, 10, 0.7)')
    // END OF page cover

    // BEGIN OF page main content, MAIN ROUTER VIEW !!!!!!!!!!!!!!!!!!!  
    main#mainpage.page-main.page-fullpage.main-anim
      router-view
    // END OF page main content

    // BEGIN OF page footer
    footer#site-footer.page-footer
      // Left content
      .footer-left
        p
          | PORTFOLIO BY
          a(href='http://highhay.com')
            span.marked BRAND
      // Right content
      .footer-right
        ul.social
          li
            a(href='')
              i.icon.fa.fa-facebook
          li
            a(href='')
              i.icon.fa.fa-twitter
          li
            a(href='')
              i.icon.fa.fa-linkedin
          li
            a(href='')
              i.icon.fa.fa-instagram
    // END OF site footer

</template>

<style></style>
