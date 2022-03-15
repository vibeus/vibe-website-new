<template>
  <section class="resources" id="resources">
    <div class="container">
      <h1 class="title">{{resources.title}}</h1>
      <div class="link-list">
        <a v-for="item in resources.links" :key="item.title" class="link-item" :herf="item.url">
          <span class="item-icon">
            <svg-icon :icon-name="item.icon" :alt="item.alt" />
          </span>
          <div class="item-title">{{item.title}}</div>
          <span class="item-arrow">
           <svg-icon icon-name="order-status-link-arrow" /></span>
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
@import '/@css/base'
a
  color: $vibe-black
  cursor: pointer
  text-decoration: none
section.resources
  padding-top: 104px
  padding-bottom: 104px
  .title
    text-align: center
    color: $vibe-black
    font-family: Stratos,BlinkMacSystemFont,-apple-system,microsoft yahei,segoe ui,roboto,oxygen,ubuntu,cantarell,droid sans,helvetica neue,helvetica,arial,sans-serif
    font-size: 2rem
    font-weight: 500
    line-height: 1.125
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
      font-family: $vibe-family-heading
      font-weight: $vibe-bold
      color: $vibe-black
    .item-icon, .item-arrow
      line-height: 0
      margin: 20px 48px
      svg
        width:56px
        height:56px

</style>
