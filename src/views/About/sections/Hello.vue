<template>
  <section class="section is-hello">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="title is-section-title">
            {{ hello.title }}
          </h2>
          <div class="content">
            <md-format
              class="is-section-content"
              :content="hello.body"
            />
          </div>
          <div class="cta content">
            <a :href="hello.cta.url">{{ hello.cta.title }}</a>
          </div>
        </div>
        <div class="column">
          <figure class="image">
            <lazy-img
              src="about/hello.png"
              alt="about/hello.png"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  hello: {
    type: Object,
    require: true,
    default: () => {}
  }
});
</script>

<style lang="sass" scoped >
@import '@css/base'
.section.is-hello
  padding: 48px 24px
  background-color: $vibe-white
  +tablet
    .columns
      min-height: calc(648px - 3rem - 12px * 2)
    .image
      width: 747px
      position: absolute
      top: calc(-1.5rem - 24px)
      right: 50%
      margin-right: 64px
  .columns
    flex-direction: row-reverse
    margin: -12px
    +mobile
      display: block
    .column
      padding: 12px
  .title
    margin-bottom: 48px

  :deep(.is-section-content) 
    p:not(:last-child)
      margin-bottom: 18px
  :deep(.cta)
    margin-top: 24px
    a
      font-weight: $vibe-bold
      color: $vibe-purple

</style>


