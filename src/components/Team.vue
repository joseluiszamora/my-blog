<template lang="pug">
  // Begin of description section
  .section.section-description.fp-auto-height-responsive(data-section='team')
    // Begin of section wrapper
    .section-wrapper.center-vh.dir-col.anim
      // title
      .section-title.text-center
        h5.title-bg Team
      // content
      .section-content.anim.text-center
        // text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 class
        // begin of item
        .item.row.justify-content-between
          // img-frame-normal demo
          .col-12.col-sm-6.col-md-4.center-vh
            .section-content.anim.translateUp
              .images.text-center
                .img-avatar-alpha
                  .img-1.shadow
                    a(href='item.html')
                      img.img(src='img/items/img-people1-square.jpg', alt='Image')
                  .legend.text-center.pos-abs
                    h5 Flavien Dupon
                    p.small Web developer / Designer
                    .icons
                      a.icon-btn(href='#')
                        i.icon.fa.fa-instagram
                      a.icon-btn(href='#')
                        i.icon.fa.fa-twitter
          // img-frame-normal demo
          .col-12.col-sm-6.col-md-4.center-vh
            .section-content.anim
              .images.text-center
                .img-avatar-alpha
                  .img-1.shadow
                    a(href='item.html')
                      img.img(src='img/items/img-people2-square.jpg', alt='Image')
                  .legend.text-center.pos-abs
                    h5 Geraldine Cyclone
                    p.small Architect / Photograph
                    .icons
                      a.icon-btn(href='#')
                        i.icon.fa.fa-instagram
                      a.icon-btn(href='#')
                        i.icon.fa.fa-twitter
          // img-frame-normal demo
          .col-12.col-sm-6.col-md-4.center-vh
            .section-content.anim.translateDown
              .images.text-center
                .img-avatar-alpha
                  .img-1.shadow
                    a(href='item.html')
                      img.img(src='img/items/img-people3-square.jpg', alt='Image')
                  .legend.text-center.pos-abs
                    h5 Tintin Hergé
                    p.small Co-founder / Blogger
                    .icons
                      a.icon-btn(href='#')
                        i.icon.fa.fa-instagram
                      a.icon-btn(href='#')
                        i.icon.fa.fa-twitter
        // end of item
        // Arrows scroll down/up
        footer.section-footer.scrolldown
          a.down
            span.icon
            span.txt Our Services
    // End of section wrapper
  // End of description section
</template>
