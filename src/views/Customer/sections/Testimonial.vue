<template>
  <section class="section is-testimonial">
    <div class="container">
      <div class="testimonial">
        <div class="content">
          <svg-icon class="quote-mark is-left" icon-name="testimonials-quote-white" />
          The Vibe board has been a game changer in how we communicate with clients, both
          in-person and virtually.
          <svg-icon class="quote-mark is-right" icon-name="testimonials-quote-white" />
        </div>
        <div class="author">
          <div class="name-warp">
            <p class="name">Karen L. Brady</p>
            <p>Estate Planning Attorney, Arvada, Colorado</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '@css/base'
.is-testimonial
  background-color: $vibe-yellow
  padding: 100px 24px
  +mobile
     padding: 45px 24px 75px
  .container
    max-width: 1110px
    .content
      position: relative
      padding: 32px 0
      font-family: $vibe-family-head
      font-weight: $vibe-bold
      font-size: 20px
      +tablet
        padding: 40px 80px 60px 120px
        font-size: 35px
      .quote-mark
        position: absolute
        width: 62px
        height: 62px
        +mobile
          width:30px
          height:30px
        &.is-left
          left: 0
          top: 0
        &.is-right
          right: 0
          bottom: 0
    .author
      display: flex
      margin-top: 46px
      +tablet
        justify-content: center
      .name-warp
        font-family: $vibe-family-head
        +tablet
          text-align: center
        +mobile
          flex-direction: column-reverse  
        .logo
          height: 64px
          margin-right: 55px
          +mobile
            width: 120px
            height: 36px
            margin-top: 32px
          img
            height: 100%
        .name
          margin-bottom: 8px
          font-weight: $vibe-bold
</style>
