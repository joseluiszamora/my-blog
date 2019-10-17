<template lang="pug">
  #contact.arlo_tm_section
    .container
      .arlo_tm_title_holder.contact
        h3 Contact Me
        span Get in touch with me
    .arlo_tm_footer_contact_wrapper_all
      .arlo_tm_contact_wrap_all
        .container
          .leftbox
            .arlo_tm_mini_title_holder.contact
              h4 Get in Touch
            .short_info_wrap
              ul
                li
                  p
                    label Address:
                    span 123 Qwerty Avenue NYC, USA
                li
                  p
                    label Email:
                    span
                      a(href='mailto:example@gmail.com') example@gmail.com
                li
                  p
                    label Phone:
                    span +77 022 177 05 05
                li
                  p
                    label Website:
                    span
                      a(href='mailto:example@gmail.com') www.yourdomain.com
          .rightbox
            .arlo_tm_contact_wrap
              .main_input_wrap
                form#contact_form.contact_form(action='/', method='post')
                  .returnmessage(data-success='Your message has been received, We will contact you soon.')
                  .empty_notice
                    span Please Fill Required Fields
                  .wrap
                    input#name(type='text', placeholder='Your Name')
                  .wrap
                    input#email(type='text', placeholder='Your Email')
                  .wrap
                    textarea#message(placeholder='Your Message')
                  .arlo_tm_button
                    a#send_message(href='#')
                      span Send Message
      .arlo_tm_footer_wrap
        .container
          p © Copyright 2019. All Rights are Reserved.
</template>

<script lang="ts">
  export default {
    name: 'Contact',
  }
</script>
