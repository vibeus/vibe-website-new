---
hero:
  title: Track Your Order Status
  background: order/status/hero.jpg
  background_mobile: order/status/hero-mobile.jpg
  form:
    action: /api/order/status
    controls:
      - - name: email
          placeholder: Email address*
          required: true
          type: email
      - - name: ordernumber
          placeholder: Order number*
          required: true
          type: number
      - - name: zipcode
          placeholder: Shipping ZIP code*
          required: true
    buttons:
      - type: submit
        title: Track
        class: button is-not-uniform is-rounded is-black is-fullwidth
        
resources:
  title: Other Resources
  links:
    - title: Get Started
      icon: order-status-get-started
      url: /onboarding-2/
    - title: Video Tutorials
      icon: order-status-video-tutorials
      url: /video-tutorial/
    - title: Book a Live Training
      icon: order-status-book-training
      url: https://us02web.zoom.us/webinar/register/WN_oSFgELtCTj67ZgnGfdJ1wg

bottom_cta:
  title: "Can’t find what your’re looking for?"
  cta:
    buttons:
      - title: Contact Support
        class: button is-rounded is-black
        url: https://knowledge.vibe.us/kb-tickets/new
---

<Page />

<script setup>
import Page from '@/views/order/Status/Index.vue'
</script>
