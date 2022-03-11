---
layout: order/status

hero:
  title: Track Your Order Status
  background: order/status/logo.svg
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
        - name: company_size_classification
          placeholder: Company size*
          required: true
          dropdown:
            - 1-10
            - 11-100
            - 101-500
            - 501-1000
    buttons:
      - type: submit
        title: Track
        class: button is-not-uniform is-rounded is-black is-fullwidth
---

<Page />

<script setup>
import Page from '/@/views/order/status/Index.vue'
</script>
