---
url: /warranty/
title: &title Limited Hardware Warranty and Support Terms
description: Vibe offers a one year warranty for the Vibe board. Customers who purchased their Vibe board directly from Vibe’s online store will be automatically registered.
aliases:
  - /documents/warranty/
# notIncludeMDB: true

hero:
  hero_imgs:
    img: /documents/warranty/product.png
    img_mobile: /documents/warranty/product-mobile.png
  hero_bg: true
  title: *title
  summary: |
    Thank you for purchasing Vibe Products.

    The warranties provided by Vibe inc. (Vibe) in this Limited Hardware
    Warranty apply only to Hardware Products you purchase for your use, and not for resale. The term
    “Hardware Product” means a computing device with a specific function and limited configuration ability.
    The Hardware Product is sold by Vibe for the purpose of executing the specific Vibe Software supplied with it.
    NOTHING IN THIS STATEMENT OF LIMITED WARRANTY AFFECTS ANY STATUTORY RIGHTS OF CONSUMERS THAT CANNOT BE WAIVED
    OR LIMITED BY CONTRACT.
register:
  form:
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/3d3eac66-7345-4825-a6e8-df8d0575832e
    controls:
      - - name: firstname
          placeholder: 'First Name*'
          required: true
        - name: lastname
          placeholder: 'Last Name*'
          required: true
      - - name: serial_number
          placeholder: 'Serial Number*'
          required: true
        - name: email
          placeholder: 'Email Address*'
          type: email
          required: true
      - - name: industry_category
          placeholder: 'Industry*'
          required: true
          dropdown:
            - Agencies (Design, Marketing, Advertising)
            - Architecture and Construction
            - Consulting
            - Coaching and Training
            - Education
            - Financial Services
            - Government and Organizations
            - Health Care
            - IT Services
            - Legal
            - Manufacturing and Engineering
            - Real Estate
            - Retail and Consumer Goods
            - Technology
            - Others
        - name: company_size_classification
          placeholder: 'Company Size'
          dropdown:
            - 1-10
            - 11-100
            - 101-500
            - 501-1000
            - 1001-5000
            - 5001-10000
            - 10001+
      - - name: use_case
          placeholder: 'What will you be using Vibe for?*'
          multiple: true
          required: true
          dropdown:
            - Annotations
            - Brainstorming and Ideation
            - Entertainment
            - Presentations
            - Teaching and Learning
            - Training and Coaching
            - Others
        - name: work_scenarios
          placeholder: 'Work Scenarios*'
          multiple: true
          required: true
          dropdown:
            - In-person
            - Hybrid
            - Remote

    buttons:
      - type: submit
        title: Register Your Vibe
        class: button is-rounded is-primary
    submitted:
      body: Thanks for registering your device. You are all set!
---

<Page />

<script setup>
import Page from '/@/views/documents/warranty/Index.vue'
</script>