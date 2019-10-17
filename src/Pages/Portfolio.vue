<template lang="pug">
  #portfolio.arlo_tm_section.relative
    .arlo_tm_portfolio_wrapper_all
      // PORTFOLIO FILTER
      .arlo_tm_second_portfolio
        .container
          .arlo_tm_portfolio_wrap
            .arlo_tm_title_holder.portfolio
              h3 Creative Works
              span Check out our latest creative works
            .arlo_tm_portfolio_titles
            ul.arlo_tm_portfolio_filter
              li
                a.current(href='#', data-filter='*') All
              li
                a(href='#', data-filter='.design') Design
              li
                a(href='#', data-filter='.photography') Photography
              li
                a(href='#', data-filter='.development') Development
            ul.arlo_tm_portfolio_list.gallery_zoom
              li.design
                .entry.arlo_tm_portfolio_animation_wrap(data-title='Aoc Productions', data-category='Design')
                  a(href='portfolio-single.html')
                    img(src='@/assets/img/portfolio/600x600.jpg', alt='')
                    .arlo_tm_portfolio_image_main(data-img-url='@/assets/img/portfolio/1.jpg')
              li.photography
                .entry.arlo_tm_portfolio_animation_wrap(data-title='Ind Hed', data-category='Photography')
                  a(href='portfolio-single-2.html')
                    img(src='@/assets/img/portfolio/600x600.jpg', alt='')
                    .arlo_tm_portfolio_image_main(data-img-url='@/assets/img/portfolio/2.jpg')
              li.development
                .entry.arlo_tm_portfolio_animation_wrap(data-title='Paper Mockup', data-category='Development')
                  a(href='portfolio-single-3.html')
                    img(src='@/assets/img/portfolio/600x600.jpg', alt='')
                    .arlo_tm_portfolio_image_main(data-img-url='@/assets/img/portfolio/3.jpg')
              li.photography
                .entry.arlo_tm_portfolio_animation_wrap(data-title='The Nordic', data-category='Photography')
                  a(href='portfolio-single-4.html')
                    img(src='@/assets/img/portfolio/600x600.jpg', alt='')
                    .arlo_tm_portfolio_image_main(data-img-url='@/assets/img/portfolio/4.jpg')
              li.design
                .entry.arlo_tm_portfolio_animation_wrap(data-title='Creatives Castle', data-category='Design')
                  a(href='portfolio-single-5.html')
                    img(src='@/assets/img/portfolio/600x600.jpg', alt='')
                    .arlo_tm_portfolio_image_main(data-img-url='@/assets/img/portfolio/5.jpg')
              li.photography
                .entry.arlo_tm_portfolio_animation_wrap(data-title='White Bag', data-category='Photography')
                  a(href='portfolio-single-6.html')
                    img(src='@/assets/img/portfolio/600x600.jpg', alt='')
                    .arlo_tm_portfolio_image_main(data-img-url='@/assets/img/portfolio/6.jpg')
</template>

<script lang="ts">
  export default {
    name: 'Portfolio',
  }
</script>
