<template lang="pug">
  // Begin of list feature section
  .section.section-list-feature.fp-auto-height-responsive(data-section='services')
    // Begin of section wrapper
    .section-wrapper.twoside.anim
      // title
      .section-title.text-center
        h2.display-4.display-title.title-bg Services
        p.anim-2
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
          | malesuada feugiat.
      // text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 class
      // begin of item
      .item.row.justify-content-between.fade-1
        // begin of column content
        .col-12.col-md-6.col-lg-6
          // content
          .section-content
            // a media object
            .media
              .img.d-flex.mr-3
                i.icon.ion-ios-browsers-outline
              .media-body
                h4 Design
                p
                  | Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                  | vestibulum in vulputate at.
            // a media object
            .media
              .img.d-flex.mr-3
                i.icon.ion-ios-cog-outline
              .media-body
                h4 Coding
                p
                  | Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                  | vestibulum in vulputate at..
            // a media object
            .media
              .img.d-flex.mr-3
                i.icon.ion-ios-analytics-outline
              .media-body
                h4 Analytics
                p
                  | Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                  | vestibulum in vulputate at.
        // end of column content
        // begin of column content
        .col-12.col-md-6.col-lg-6
          // content
          .section-content
            // a media object
            .media
              .img.d-flex.mr-3
                i.icon.ion-ios-grid-view-outline
              .media-body
                h4 Concept
                p
                  | Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                  | vestibulum in vulputate at.
            // a media object
            .media
              .img.d-flex.mr-3
                i.icon.ion-ios-lightbulb-outline
              .media-body
                h4 Development
                p
                  | Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                  | vestibulum in vulputate at.
            // a media object
            .media
              .img.d-flex.mr-3
                i.icon.ion-arrow-expand
              .media-body
                h4 Marketing
                p
                  | Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                  | vestibulum in vulputate at.
        // end of column content
        // end of item
        // Arrows scroll down/up
        footer.section-footer.scrolldown
          a.down
            span.icon
            span.txt Scroll
    // End of section wrapper
  // End of list feature section

</template>
