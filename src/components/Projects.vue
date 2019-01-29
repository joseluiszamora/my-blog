<template lang="pug">
  // Begin of slider section
  .section.section-twoside.fp-auto-height-responsive(data-section='projects')
    // Begin of section wrapper
    .section-wrapper.twoside
      // title
      .section-title.text-center
        h5.title-bg Projects
      // begin of carousel-swiper-beta
      .slider-wrapper.carousel-swiper-beta.carousel-smalls.carousel-swiper-beta-demo.mt-40
        // slider
        .slider-container.swiper-container
          ul.item-list.swiper-wrapper
            // item
            li.slide-item.swiper-slide
              .item-wrapper
                .illustr
                  img.img(src='img/items/img-sample2-small.jpg', alt='Image')
                a.legend(href='item.html#project_url')
                  h3.display-3 Mountain
                  h4 Music / Beats
            // item
            li.slide-item.swiper-slide
              .item-wrapper
                .illustr
                  img.img(src='img/items/img-sample3-small.jpg', alt='Image')
                a.legend(href='item.html#project_url')
                  h3.display-3 Cloud
                  h4 Music / Beats
            // item
            li.slide-item.swiper-slide
              .item-wrapper
                .illustr
                  img.img(src='img/items/img-sample4-small.jpg', alt='Image')
                a.legend(href='item.html#project_url')
                  h3.display-3 Garden
                  h4 Music / Beats
            // item
            li.slide-item.swiper-slide
              .item-wrapper
                .illustr
                  img.img(src='img/items/img-sample5-small.jpg', alt='Image')
                a.legend(href='item.html#project_url')
                  h3.display-3 Sky
                  h4 Music / Beats
        // pagination
        .items-pagination.bar
        // navigation
        .items-button.bottom.fit.items-button-prev
          a.btn.btn-transp-arrow.btn-primary.icon-left(href='')
            span.icon.arrow-left
            span.text Prev
        .items-button.bottom.fit.items-button-next
          a.btn.btn-transp-arrow.btn-primary(href='')
            span.icon.arrow-right
            span.text Next
      // end of carousel-swiper-beta
      // End of section wrapper
  // End of slider section

</template>
