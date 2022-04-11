<template>
  <section class="section is-hero-video">
    <div class="bg-logo">
      <svg-icon icon-name="shared-what-bg" />
    </div>
    <div class="container">
      <lazy-img class="hero-image is-hidden-tablet" src="software/hero.png" alt="" />
      <div class="preview" id="hero-video">
        <video autoplay loop muted playsinline>
          <source src="/assets/video/software/hero-preview.mp4" type="video/mp4" />
        </video>
        <div class="mask">
          <svg-icon icon-name="shared-video-preview-play" />
        </div>
      </div>
    </div>
  </section>
</template>
