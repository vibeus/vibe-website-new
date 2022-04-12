<template>
  <section class="contact">
    <div id="pdf-container"></div>
    <div class="container is-form">
      <div class="product-title">{{ contactSection.title }}</div>
      <div
        v-for="(item, index) in contactSection.choices"
        :key="index"
        class="f-col product-box"
      >
        <div class="is-product">
          <div class="is-image is-hidden-mobile" :id="item.id">
            <lazy-img class="image" :src="item.figure" alt="" />
          </div>
          <div class="is-text">
            <div class="form-check">
              <div class="count-title is-hidden-mobile">{{ item.title }}</div>
              <div class="count-title board-title is-hidden-tablet">
                {{ item.title_mobile }}
              </div>
              <CartCount :cartCount="cartCount" />
            </div>
            <div class="image">
              <lazy-img class="hero-image is-hidden-tablet" :src="item.figure" alt="" />
            </div>
            <div class="divider is-hidden-mobile"></div>
            <div class="includes" id="includes">
              <strong>Includes:</strong>
              <div class="includes-content" id="includes-content">
                {{ item.includes }}
              </div>
            </div>
          </div>
        </div>
        <div :id="item.accessories.id" class="f-row is-accessories">
          <div
            v-for="(i, index) in item.accessories.item"
            :key="index"
            class="f-row accessory"
          >
            <div class="f-col">
              <div class="count-title is-hidden-tablet">{{ i.title }}</div>
              <div class="image">
                <lazy-img class="lazy-image" :src="i.figure" alt="" />
              </div>
            </div>
            <div class="f-col">
              <div class="count-title is-hidden-mobile">{{ i.title }}</div>
              <CartCount :cartCount="cartCount" />
            </div>
          </div>
        </div>
        <div class="divider-mobile is-hidden-tablet"></div>
      </div>

      <div class="disable-input-mask"></div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :name="contactSection.tax_exempt.name"
          :id="contactSection.tax_exempt.id"
        />
        <label class="content form-check-label" for="flexCheckDefault">
          {{ contactSection.tax_exempt.title }}
        </label>
      </div>
      <VForm :formData="contactSection.form" @msgSuccess="elMsgSuccess" />
    </div>
    <div class="official-quote-check" id="official-quote">
      <div class="check-container">
        <input id="official-check" type="checkbox" class="quote-check form-check-input" />
        <label for="official-check"></label>
        <span class="content-check">{{ contactSection.official_quote_check.title }}</span>
      </div>
      <button
        :id="contactSection.official_quote_check.button.id"
        :class="contactSection.official_quote_check.button.class"
        disabled
      >
        {{ contactSection.official_quote_check.button.title }}
      </button>
      <div class="submitted">
        <p class="title">
          {{ contactSection.official_quote_check.submitted.title }}
        </p>
        <p class="content">
          {{ contactSection.official_quote_check.submitted.content }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import VForm from "/@/components/Form.vue";
import CartCount from "/@/components/cartCount.vue";
const props = defineProps({
  contactSection: {
    type: Object,
    required: true,
  },
});
console.log("contactSection: ", props.contactSection);
const cartCount = ref({ class: "is-medium is-rounded is-gray", count: 0 });
</script>
<style lang="sass" scoped>
@import '/@css/base'
*
  margin: 0
  padding: 0
p
  line-height: unset
.title
  color: $vibe-black
  font-family: $family-head
  font-weight: $vibe-bold
  line-height: 1.125
.title:not(:last-child)
  margin-bottom: 1.5rem
.contact
  padding-top: 0
  padding-bottom: 80px
  background: linear-gradient(to bottom,#fc0 220px,#F4F4F4 220px)
  color: $vibe-black
  overflow: hidden
  .divider-mobile
    width: 100vw
    margin: 2rem 0 2rem -0.5rem
    border: 1px solid #ededed

  .title
    text-align: center
    font-size: 24px
  .container
    margin: 0 auto
  .container.is-form
    max-width: 838px
    background-color: #fff
  .product-title
    font-family: $family-head
    font-weight: $vibe-bold
  .count-title
    font-family: $family-body
    font-weight: $vibe-bold
    color: #000
  .divider
    width: 100%
    border: 1px solid #f4f4f4
  .includes
    width: 100%
    font-family: $family-body
    font-size: 14px
    line-height: 144%
    color: $vibe-gray
    border-radius: 8px
    strong
      height: 100%
    .includes-content
      max-width: 421px
  .form-check
    min-height: auto
    display: flex
    align-items: center
    padding-left: 0
    .form-check-input
      width: 1rem
      height: 1rem
      margin: 0 0 0 1rem
    .content.form-check-label
     font-weight: $vibe-bold
  .form-check-input[type=checkbox]
    border-radius: 0.125rem
  .container>.form-check
    margin-bottom: 0.5rem
  .is-product
    display: flex
    .is-image
      .image
        display: block
        height: auto
        width: 100%
    .is-text
      display: flex
      flex-direction: column
    .form-check
      display: flex
      align-items: center
      justify-content: space-between
      padding-left: 0
  .is-accessories
    display: flex
    flex-wrap: wrap
    align-items: center
    width: 100%
    .count-title
      font-family: $family-body
      font-weight: $vibe-bold
      color: #000

.official-quote-check
  /* display: none; */
  margin: 3rem auto 0
  max-width: 500px
  text-align: center
  font-family: $family-body
  .check-container
    display: flex
    .quote-check
      width: 1.8rem
      height: 1rem
      margin-top: .3rem
    .content-check
      margin-left: 1rem
      font-size: 18px
      font-weight: 400
      line-height: 26px
      text-align: left
.form-check-input
  background-color: #fff
  -webkit-appearance: none
  border: 1px solid #c9c9c9
  border-radius: 2px
  outline: none
  position: relative
  &:checked
    background-color: orange
    border-color: transparent
    &::after
      content: ""
      position: absolute
      width: 0.375rem
      height: 0.8125rem
      margin-left: 0.25rem
      margin-top: -1px
      border: 0.125rem solid #000
      border-top: 0
      border-left: 0
      transform: rotate(45deg)


  .button
    margin-top: 1.5rem


@media screen and (min-width: 700px)
  .contact
    .container.is-form
      padding: 73px 52px 48px
    .product-title
      margin-bottom: 2rem
      font-size: 24px
      line-height: 30px
    .product-box
      margin: 0 0 1.5rem
      padding: 1rem 0.5rem
      border: 2px solid #f4f4f4
      box-shadow: 0 4px 32px rgb(0 0 0 / 3%)
      border-radius: 8px
    .divider
      margin-top: 38px
      margin-bottom: 12px
    .is-product
      margin-left: 0.375rem
      margin-right: 1rem
      .is-image
        width: 250px
        height: 151px
        max-width: 100%
        max-height: 179px
        flex-shrink:0
        img
          display: block
          height: auto
          width: 100%
      .is-text
        width: 100%
        margin: 0.75rem 0 1rem 1.5rem
    .is-accessories
      height: 274px
      background: rgba(244,244,244,.5)
      border-radius: 8px
      margin-bottom: -0.5rem
      .accessory
        justify-content: center
        width: 50%
        .image
          width: 120px
          margin-right: 1rem
      .accessory:nth-child(2)
        padding-right: 2rem
        border-left: 1px solid #ededed
      .count-title
        margin-bottom: 1rem
        font-size: 16px
        line-height: 21px
    .is-accessories#req-75-accessory
      height: 147px
    .form-check
      .content.form-check-label
        margin: 0 0 0 0.5rem
        font-size: 16px
@media screen and (max-width: 699px)
  .contact
    margin-bottom: -2rem
    padding: 0
    box-shadow: 0 3px 17px rgb(0 0 0 / 3%)
    border-radius: 32px 32px 0 0
    transform: translateY(-2rem)
    background: linear-gradient(to bottom,#fc0 200px,#F4F4F4 200px)
    .container.is-form
      padding: 32px 8px
    .product-title
      margin-top: 1.5rem
      margin-bottom: 1.5rem
      font-size: 20px
      line-height: 25px
      text-align: center
    .product-box
      align-items: center
    .is-accessories
      flex-direction: column
      margin: 2rem -1.5rem 0
      .accessory
        justify-content: space-between
        width: 100%
        padding: 1.5rem 1rem
        background: rgba(244,244,244,.5)
        border-radius: 8px
        margin-top: 0.5rem
        .image
          width: 136px
    .form-check+.image
      width: 296px
      margin: 0 auto
    .official-quote-check
      padding: 0 34px
      margin-bottom: 80px
      .check-container
        .quote-check
          width: 2.3rem
        .content-check
          font-size: 14px
          line-height: 21px
</style>
