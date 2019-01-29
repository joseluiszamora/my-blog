<template lang="pug">
  // Begin of pricelist section
  .section.section-pricelist(data-section='pricelist')
    // Begin of section wrapper
    .section-wrapper.center-vh.dir-col.anim
      // title
      .section-title.text-center
        h5.title-bg Pricing
        h2.display-4.display-title.anim-2 Pricing
      // content
      .section-content.anim.text-center.fullwidth
        // Princing table
        .price-table
          .row
            .col-12.col-md-4
              // begin of price item
              .price-item.price-item-secondary.shadow.mb-4.sr-up-td4
                h4.item-name Lite
                .item-price Free
                ul.item-features.text-left
                  li.ok
                    i.icon.fa.fa-star
                    | Full Components
                  li.ok
                    i.icon.fa.fa-check
                    | Future Updates
                  li.ok
                    i.icon.fa.fa-check
                    | Documentation
                  li.ok
                    i.icon.fa.fa-check
                    | Customer Support
                  li.diseabled
                    i.icon.fa.fa-remove
                    | Cool Option
                .item-footer
                  a.btn.btn-secondary.btn-round(href='#services')
                    | Download
              // end of price item
            .col-12.col-md-4
              // begin of price item
              .price-item.featured.price-item-primary.shadow.mb-4.sr-up-td2
                h4.item-name Standard
                .item-price $24
                ul.item-features.text-left
                  li.ok
                    i.icon.fa.fa-star
                    | Full Components
                  li.ok
                    i.icon.fa.fa-check
                    | Future Updates
                  li.ok
                    i.icon.fa.fa-check
                    | Documentation
                  li.ok
                    i.icon.fa.fa-check
                    | Customer Support
                  li.diseabled
                    i.icon.fa.fa-remove
                    | Cool Option
                .item-footer
                  a.btn.btn-primary.btn-round(href='#services')
                    | Purchase
              // end of price item
            .col-12.col-md-4
              // begin of price item
              .price-item.price-item-primary.shadow.sr-up-td3
                h4.item-name Ultimate
                .item-price $39
                ul.item-features.text-left
                  li.ok
                    i.icon.fa.fa-star
                    | Full Components
                  li.ok
                    i.icon.fa.fa-check
                    | Future Updates
                  li.ok
                    i.icon.fa.fa-check
                    | Documentation
                  li.ok
                    i.icon.fa.fa-check
                    | Customer Support
                  li.diseabled
                    i.icon.fa.fa-remove
                    | Cool Option
                .item-footer
                  a.btn.btn-primary.btn-round(href='#services')
                    | Subscribe
              // end of price item
              // End of section wrapper
  // End of pricelist section

</template>
