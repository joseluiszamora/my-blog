<template lang="pug">
  .arlo_tm_section
    .arlo_tm_skills_wrap
      .container
        .inner_wrap
          .leftbox
            .arlo_tm_mini_title_holder
              h4 Some About my Abilities
              p
              | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.
          .rightbox
            .progress_bar_wrap_total
              .arlo_tm_progress_wrap(data-size='small', data-round='c', data-strip='off')
                .arlo_tm_progress(data-value='95', data-color='#000')
                  span
                    span.label
                      | Wordpress - 
                      span.experience 5 years of experience
                    span.number 95%
                  .arlo_tm_bar_bg
                    .arlo_tm_bar_wrap
                      .arlo_tm_bar
                .arlo_tm_progress(data-value='85', data-color='#000')
                  span
                    span.label
                      | Css - 
                      span.experience 3 years of experience
                    span.number 85%
                  .arlo_tm_bar_bg
                    .arlo_tm_bar_wrap
                      .arlo_tm_bar
                .arlo_tm_progress(data-value='75', data-color='#000')
                  span
                    span.label
                      | HTML - 
                      span.experience 4 years of experience
                    span.number 75%
                  .arlo_tm_bar_bg
                      .arlo_tm_bar_wrap
                        .arlo_tm_bar
                .arlo_tm_progress(data-value='90', data-color='#000')
                  span
                    span.label
                      | After Effect - 
                      span.experience 6 years of experience
                    span.number 90%
                  .arlo_tm_bar_bg
                    .arlo_tm_bar_wrap
                      .arlo_tm_bar
</template>

<script lang="ts">
  export default {
    name: 'Skills',
  }
</script>
