<template lang="pug">
  #about.arlo_tm_section.relative
    .arlo_tm_about_wrapper_all
      .container
        .arlo_tm_title_holder
          h3 Acerca de mi
          span Main informations about me
        
        .arlo_tm_about_wrap
          .author_wrap
            .leftbox
              .about_image_wrap.parallax(data-relative-input='true')
                .image.layer(data-depth='0.1')
                  img(src='@/assets/img/about/550x640.jpg', alt='')
                  .inner(data-img-url='img/about/1.jpg')
                .border.layer(data-depth='0.2')
                  img(src='@/assets/img/about/550x640.jpg', alt='')
                  .inner
            .rightbox
              .arlo_tm_mini_title_holder
                h4
                | I'm Alan Michaelis and 
                span.arlo_tm_animation_text_word
              .definition
                p
                | Hi! My name is 
                strong Alan Michaelis
                | . I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
              .about_short_contact_wrap
                ul
                  li
                    span
                    label Birthday:
                    |  01.07.1990
                  li
                    span
                    label Age:
                    |  28
                  li
                    span
                    label City:
                    |  New York, USA
                  li
                    span
                    label Interests:
                    |  Soccer, UFC
                  li
                    span
                    label Study:
                    |  Chicago University
                  li
                    span
                    label Degree:
                    |  Master
                  li
                    span
                    label Website:
                    a(href='#') www.mywebsite.com
                  li
                    span
                    label Mail:
                    a(href='mailto:example@gmail.com') mymail@gmail.com
                  li
                    span
                    label Phone:
                    a(href='#') +77 022 177 05 05
                  li
                    span
                    label Twitter:
                    a(href='#') @myusername
              .buttons_wrap
                ul
                  li
                    a(href='index.html')
                      span Download CV
                  li.anchor
                    a(href='#contact')
                      span Send Message
</template>

<script lang="ts">
  export default {
    name: 'About',
  }
</script>
