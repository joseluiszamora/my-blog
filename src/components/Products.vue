<template lang="pug">
  // Begin of list two side 1 section
  .section.section-twoside.fp-auto-height-responsive(data-section='products')
    // Begin of section wrapper
    .section-wrapper.twoside
      // title
      .section-title.text-center
        h5.title-bg Products
        .title-abs
          h2.display-4.display-title Products
          p Here is the list of our awesome pages.
      // text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 class
      // begin of item
      .item.row.justify-content-between
        // img-frame-normal demo
        .col-12.col-sm-6.col-md-4.center-vh
          .section-content.anim.translateUp
            .images.text-center
              .img-frame-normal
                .img-1.shadow
                  a(href='index.html')
                    img.img(src='demopage/default.jpg', alt='Image')
                .legend.text-left.pos-abs
                  h5 Default
                  p.small Image or solid color as background of the page
        // img-frame-normal demo
        .col-12.col-sm-6.col-md-4.center-vh
          .section-content.anim
            .images.text-center
              .img-frame-normal
                .img-1.shadow
                  a(href='index-slideshow.html')
                    img.img(src='demopage/slideshow.jpg', alt='Image')
                .legend.text-left.pos-abs
                  h5 Slideshow
                  p.small Fullscreen background image slideshow
        // img-frame-normal demo
        .col-12.col-sm-6.col-md-4.center-vh
          .section-content.anim.translateDown
            .images.text-center
              .img-frame-normal
                .img-1.shadow
                  a(href='index-video.html')
                    img.img(src='demopage/video.jpg', alt='Image')
                .legend.text-left.pos-abs
                  h5 Video
                  p.small Fullscreen video background
      // end of item
      // End of section wrapper
  // End of list two side 1 section

</template>
