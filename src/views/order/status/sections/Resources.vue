<template>
  <section class="resources" id="resources">
    <div class="container">
      <h2 class="title">{{resources.title}}</h2>
      <div class="link-list">
        <a v-for="item in resources.links" :key="item.title" class="link-item" :herf="item.url">
          <span class="item-icon">
            <svg-icon :icon-name="item.icon" :alt="item.alt" />
          </span>
          <div class="item-title">{{item.title}}</div>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  resources: {
    type: Object,
    required: true
  }
});
console.log('resources: ', props.resources);
</script>

<style lang="sass" scoped>
.resources
  padding-top: 104px
  padding-bottom: 104px
  .title
    text-align: center
  .link-list
    margin-top: 48px
  .link-item
    display: flex
    align-items: center
    max-width: 721px
    margin: auto
    margin-bottom: 16px
    background: white
    border: 2px solid #f4f4f4
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03)
    border-radius: 8px

    &:hover
      filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.05))
    .item-title
      flex: 1
      font-size: 24px
      // font-family: $vibe-family-heading
      // font-weight: $vibe-bold
      // color: $vibe-black
    .item-icon, .item-arrow
      line-height: 0
      margin: 20px 48px

</style>
