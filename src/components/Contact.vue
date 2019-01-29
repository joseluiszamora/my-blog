<template lang="pug">
  // Begin of contact section
  .section.section-contact.fp-auto-height-responsive.no-slide-arrows(data-section='contact')
    // begin of information slide
    #information.slide(data-anchor='information')
      // Begin of slide section wrapper
      .section-wrapper
        // title
        .section-title.text-center
          h5.title-bg Contact
        .row
          .col-12.col-md-6
            // content
            .section-content.anim.text-left
              // title and description
              .title-desc
                .anim-2
                  h5 Customer Service
                  h2.display-4.display-title Contact
                  p
                    | For questions about our company and products found on our stores.
                    | Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis
                    | dui. Fusce in urna sem.
                .address-container.anim-3
                  .row
                    .col-12.col-md-12.col-lg-6
                      h4 Contact
                      p Call: 01 234 567 89
                      p Email: ouremail@domain.com
                    .col-12.col-md-12.col-lg-6
                      h4 Address
                      p
                        | Company address
                        br
                        | 12 Street Turning Place
                        br
                        | South Est, Antartica
              // Action button
              .btns-action.anim-4
                a.btn.btn-outline-white.btn-round(href='#contact/message')
                  span.txt Send Message
          .col-12.col-md-6
      // End of slide section wrapper
      // end of information slide
      // begin of message slide
      #message.slide(data-anchor='message')
        // Begin of slide section wrapper
        .section-wrapper
          .row.justify-content-between
            .col-12.col-md-6.center-vh
              // content
              .section-content.anim.text-left
                // title and description
                .title-desc
                  div
                    h5 Customer Service
                    h2.display-4.display-title Email Us
                    p
                      | For questions about our company and products found on our stores.
                      | Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis
                      | dui. Fusce in urna sem.
                // Action button
                .btns-action
                  a.btn.btn-outline-white.btn-round(href='#contact/information')
                    span.txt Information
            .col-12.col-md-6.col-lg-5
              // content
              .section-content.anim.text-left
                // title and description
                div
                  .form-container.form-container-card
                    // Message form container
                    form#message_form.send_message_form.message.form(method='post', action='ajaxserver/serverfile.php')
                      .form-group.name
                        label(for='mes-name') Name :
                        input#mes-name.form-control-line.form-success-clean(name='name', type='text', placeholder='', required='')
                      .form-group.email
                        label(for='mes-email') Email :
                        input#mes-email.form-control-line.form-success-clean(type='email', placeholder='', name='email', required='')
                      .form-group.no-border
                        label(for='mes-text') Message
                        textarea#mes-text.form-control.form-control-outline.thick.form-success-clean(placeholder='...', name='message', required='')
                        div
                          p.message-ok.invisible.form-text-feedback.form-success-visible Your message has been sent, thank you.
                      .btns
                        button#submit-message.btn.btn-normal.btn-white.btn-round.btn-full.email_b(name='submit_message')
                          span.txt Send
                          span.arrow-icon
        // End of slide section wrapper
        // end of message slide
  // End of contact section
</template>
