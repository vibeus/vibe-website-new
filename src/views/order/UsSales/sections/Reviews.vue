<template>
  <section
    id="full-review-section"
    ref="review"
    class="section is-reviews"
  >
    <div class="container">
      <div>
        <h1 class="title is-section-title">
          {{ reviews.title }}
        </h1>
        <div class="review-score-wrap">
          <span class="review-score">4.8</span>
          <div>
            <lazy-img
              class="image"
              src="order/us-sales/stars-5.png"
            />
            <div class="content">
              Based on 61 reviews
            </div>
          </div>
        </div>

        <ul class="reviews-wrap">
          <li
            v-for="rev in reviews.pages[currentPage - 1]"
            :key="rev.author"
            class="reviews-li"
          >
            <div class="review-head is-hidden-tablet">
              <div class="is-start">
                <div class="author">
                  {{ rev.author }}
                </div>
                <div class="channel">
                  {{ rev.channel }}
                </div>
              </div>
              <div class="date">
                {{ rev.date }}
              </div>
            </div>
            <div class="author-wrap is-hidden-mobile">
              <div class="author">
                {{ rev.author }}
              </div>
              <div class="channel">
                {{ rev.channel }}
              </div>
            </div>
            <div class="content-wrap">
              <ul class="review-stars">
                <li
                  v-for="index of 5"
                  :key="index"
                >
                  <svg-icon
                    v-if="index <= rev.stars"
                    icon-name="star-star"
                  />
                  <svg-icon
                    v-else
                    icon-name="star-star-outline"
                  />
                </li>
              </ul>
              <md-format
                class="content"
                :content="rev.body"
              />
            </div>
            <div class="date is-hidden-mobile">
              {{ rev.date }}
            </div>
          </li>
        </ul>
      </div>
      <nav
        id="nav-pagination"
        aria-label="review-navigation"
      >
        <ul class="pagination">
          <li
            :class="`page-item active ${currentPage === 1 ? 'is-disabled' : ''}`"
            @click="currentPage !== 1 && prePage()"
          >
            &lt;
          </li>
          <li
            v-for="(page, index) in reviews.pages"
            :key="page.reviews"
            :class="`page-item ${currentPage == index + 1 ? 'active' : ''}`"
            @click="changePage(index)"
          >
            {{ index + 1 }}
          </li>
          <li
            :class="`page-item active ${
              currentPage == reviews.pages.length ? 'is-disabled' : ''
            }`"
            @click="currentPage !== reviews.pages.length && nextPage()"
          >
            &gt;
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
/* Start Data */
const props = defineProps({
  reviews: {
    type: Object,
    required: true,
  },
});
const currentPage = ref(1);
const review = ref(null);
/* End Data */
watch(currentPage, () => {
  scrollToTop();
});
const changePage = (index) => {
  currentPage.value = index + 1;
  scrollToTop();
};
const prePage = () => {
  currentPage.value--;
};
const nextPage = () => {
  currentPage.value++;
};
const scrollToTop = () => {
  review.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<style lang="sass" scoped>
@import '@css/base'
.is-reviews
  padding:120px 24px 90px
  font-family: $vibe-family-body
  line-height:1.5
  background-color: #fff
  +mobile
    padding-top: 60px
    padding-bottom: 48px
  .container
    display: block
    max-width: 1120px
    .title.is-section-title
      font-size: 24px
      margin-bottom: 24px
    .review-score-wrap
      display: flex
      align-items: center
      .review-score
        margin-right: 12px
        font-size: 48px
        font-weight:$vibe-bold
        font-family: $vibe-family-head
      .image
        height: 20px
      .content
        font-size: 16px
        padding: 0 2px
    .reviews-wrap
      .reviews-li
        border-top: 1px solid #e0e0e0
        font-size: 16px
        +tablet
          display: flex
        .review-head
          display: flex
          justify-content: space-between
          .is-start
            padding: 16px 12px
        .author-wrap
          width:246px
          padding: 40px 12px
        .author
          font-weight: $vibe-bold
        .content-wrap
          padding: 40px 0.75rem
          display: block
          flex-basis: 0
          flex-grow: 1
          flex-shrink: 1
          +mobile
            padding-top: 16px
          .review-stars
            display: flex
            fill:$vibe-yellow
            svg
              width: 20px
              height: 20px
          .content
            :deep(p:first-child)
              margin-bottom: 16px
            :deep(a)
              font-weight: $vibe-bold
              text-decoration: underline
              &:hover
                color: $vibe-purple
        .date
          margin-top: 32px

#nav-pagination
  display: flex
  justify-content: center
  border-top: 1px solid $vibe-black
  height: 3rem
  font-family: $vibe-family-body
  color: $vibe-black
  +tablet
    margin-top: 20px
  .pagination
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    margin-top: 1.5rem
    .page-item
      padding: 0.375rem 0.75rem
      font-size: .9rem
      line-height: 1.5
      -webkit-transition: all .3s linear
      transition: all .3s linear
      cursor: pointer
      font-weight: 400
      border-radius:2px
      overflow: hidden
      +tablet
        margin: 0 0.25rem
      &:hover
        background-color: #eee
      &.active
        font-weight: $vibe-bold
      &.is-disabled
        color: #d8d8d8
        cursor: default
      &.is-disabled:hover
        background-color: unset
</style>
