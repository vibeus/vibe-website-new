---
title: Contact Us
description: Contact Vibe Sales with any questions you may have. We're here for you!
layout: contact
stylesPath: css/contact.sass
hero:
  title: Contact Sales
  body:
    - text: 
        content: Have a question? We’d love to hear from you.
        class: is-hidden-mobile
    - class: spacing-block
    - icon:
        class: contact-location
        url: contact-location
      text: 
        content: If you need a PO or have a delivery address outside of the continental US,
        class: is-hidden-mobile
    - text: 
        content: please
        class: is-hidden-mobile
      link:
        text: request a quote.
        url: /contact-2/request-a-quote/
      
contact:
  form:
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/eda833da-394c-4d3c-8a66-c8b854d7ee77
    controls:
      - - name: firstname
          placeholder: First Name*
          required: true
        - name: lastname
          placeholder: Last Name*
          required: true
      - - name: email
          placeholder: Work Email*
          type: email
          required: true
        - name: phone
          placeholder: Phone Number*
          type: tel
          required: true
      - - name: company
          placeholder: Company Name*
          required: true
        - name: industry_category
          placeholder: Industry*
          required: true
          sortDropdown: true
          dropdown:
            - Arts and Design
            - Architecture and Construction
            - Coaching and Training
            - Consulting
            - Education
            - Engineering
            - Financial Services
            - Government and Organizations
            - Health Care
            - IT Services
            - Legal
            - Manufacturing
            - Marketing and Advertising
            - Real Estate
            - Retail and Consumer Goods
            - Technology
            - Others
      - - name: company_size_classification
          placeholder: Company Size*
          required: true
          dropdown:
            - 1-10
            - 11-100
            - 101-500
            - 501-1000
            - 1001-5000
            - 5001-10000
            - 10001+
        - name: job_role
          placeholder: Role*
          required: true
          dropdown:
            - CXO / VP / President / Owner
            - Principal
            - Teacher / Professor
            - Director
            - IT
            - Manager
            - Designer
            - Engineer
            - Consultant
            - Influencer
            - Instructor
            - Others
      - - name: anything_else_we_should_know_
          placeholder: Anything else we should know?
          type: textarea
          required: true
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary
        column_class: is-hidden-non-us
      - type: submit
        title: Submit
        class: button is-rounded is-primary
        column_class: is-hidden 
        target_action: 'https://api.hsforms.com/submissions/v3/integration/submit/5698963/89a0d8cc-cde8-409f-a1e3-c82cd2a5e0f3'
    submitted:
      title: Thank you for contacting Vibe.
      body: Our sales team is excited to talk with you,<br>and we’ll contact you shortly to assist you further.
  support:
    title: Already a Vibe customer, and in need of assistance?
    subtitle: We’re here to help!
    body: 'If you have technical issues, please <a href="https://knowledge.vibe.us/kb-tickets/new">contact support</a>.'
  get_in_touch: true
bottom_cta:
  title: Experience Vibe for yourself
  cta:
    buttons: 
      - title: See a Demo
        class: is-rounded is-black is-outlined
---

<Page />

<script setup>
import Page from '@/views/contact/Sales/Index.vue'
</script>
