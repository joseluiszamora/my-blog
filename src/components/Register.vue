<template lang="pug">
  // Begin of register/login/signin section
  .section.section-register.fp-auto-height-responsive(data-section='register')
    // Begin of section wrapper
    .section-wrapper
      // title
      .section-title.text-center
        h5.title-bg Subscribe
      // content
      .section-content.anim.text-center
        .row.align-items-center.justify-content-center
          .col-12.col-md-8.col-lg-6
            // Registration form container
            form.send_email_form.form-container.form-container-transparent.form-container-white(method='post', action='ajaxserver/serverfile.php')
              .form-desc
                h2.display-4.display-title.anim-2 Subscribe
                p.invite.anim-3 Don't miss any new opportunity, Hurry up! register now
              .form-input.anim-4
                .form-group.form-success-gone
                  label(for='reg-name') Name
                  input#reg-name.form-control-line.form-control-white(name='name', type='text')
                .form-group.form-success-gone
                  label(for='reg-email') Email
                  input#reg-email.form-control-line.form-control-white(name='email', type='email', required='', placeholder='your@email.address', data-validation-type='email')
                .form-group.mb-0
                  div
                    p.email-ok.invisible.form-text-feedback.form-success-visible Your email has been registred, thank you.
                  button#submit-email.btn.btn-white.btn-round.btn-full.form-success-gone(name='submit_email') Subscribe
    // End of section wrapper
  // End of register/login/signin section

</template>
