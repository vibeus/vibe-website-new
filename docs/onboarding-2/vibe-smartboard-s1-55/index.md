---
title: 'Vibe S1 Smart Board Onboarding and Training'
description: Learn how to use your Vibe board in this Onboarding and Training series. You'll unbox, install, and set up your device, and register your Vibe board.
stylesPath: css/onboarding.sass
url: /onboarding/vibe-smartboard-s1-55/
layout: product-s1-55
noSitemap: true
noIndex: true

navbar:
  extra:
    - title: Contact Support
      class: is-black is-outlined is-rounded is-in-brand
      url: https://knowledge.vibe.us/kb-tickets/new

hero:
  bg_figure: onboarding/hero-tablet-s1.png
  bg_figure_mobile: onboarding/hero-mobile-s1.png
  title: 'Welcome to Vibe!'
  body: "You're the newest member of the growing Vibe community, and we are so glad that you're here."
  link:
    class: scroll-down-link
    text: 'Scroll down to get started'
    scroll_to_id: &setup_id setup
    icon:
      class: scroll-down
      url: img/onboarding/scroll-down-icon.svg
setup:
  id: *setup_id
  class: is-setup-product-s1-55
  steps:
    - order: 1
      component: StepContent
      mobile_step_number_icon: onboarding-step-number-1
      title: 'Unbox Your Vibe Smartboard S1 55″'
      figure: onboarding/setup-1-s1.png
      links:
        - link:
            text: 'Vibe Smartboard S1 55″ User Manual'
            icon:
              class: download-icon
              url: img/common/download-icon.svg
            url: /resources/Vibe_Smartboard_S1_55″_User_Manual.pdf
        - link:
            text: 'Vibe Smartboard S1 55″ Stand Assembly'
            icon:
              class: download-icon
              url: img/common/download-icon.svg
            url: /resources/Vibe_Smartboard_S1_55″_Stand_Assembly_Instruction.pdf
      text: '* The Vibe SmartCam C1 is sent in a different package, please make sure you have received everything before you begin setting up your Vibe Smartboard.'

    - order: 2
      component: StepContent
      mobile_step_number_icon: onboarding-step-number-2
      title: 'Set Up Your Device'
      figure: onboarding/setup-2-s1.png
      text: "* If you're setting up the Vibe board for the first time, please expect to wait 5-10 minutes for system update."
      cta:
        - link:
            text: 'Learn more'
            url: https://knowledge.vibe.us/s1-setup-guide
    - order: 3
      component: EndStep
      mobile_step_number_icon: onboarding-step-number-3
      title: 'You Are All Set!'
      figure: onboarding/desktop-screen-s1.png
      cta:
        text: 'Experience Vibe for yourself.'
        link:
          icon: onboarding-scroll-down-icon
          scroll_to_id: &get_started_id get-started
get_started:
  title: Get Started With Vibe
  id: *get_started_id
  items:
    - title: 'Whiteboarding'
      column_size: is-one-third
      links:
        - text: 'Vibe Canvas navigation guide'
          url: https://knowledge.vibe.us/canvas-2-overview
        - text: 'Whiteboarding toolbar tutorial'
          url: https://knowledge.vibe.us/canvas-2-toolbar

    - title: 'Screencast & Annotation'
      column_size: is-one-third
      links:
        - text: 'How do I screencast with Vibe?'
          url: https://knowledge.vibe.us/s1-casting
        - text: 'Annotation on Vibe'
          url: https://knowledge.vibe.us/s1-annotation
    - title: 'Third Party Applications'
      column_size: is-one-third
      links:
        - text: 'How to download applications	'
          url: https://knowledge.vibe.us/s1-app-download
        - text: 'How to do video conferencing'
          url: https://knowledge.vibe.us/s1-video-conferencing
form_content:
  title: 'Register Your Device'
  # body: Your Vibe board purchase includes a [1-year warranty](/warranty/).
  form:
    # action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/3d3eac66-7345-4825-a6e8-df8d0575832e
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/fea4cc00-f75e-407e-920f-31af171eefce
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
        title: 'Register Your Vibe'
        class: button is-rounded is-black is-outlined is-fullwidth
        id: submit-button
    submitted:
      body: 'Thanks for registering your device.'

bottom_cta:
  title: Still have questions? We’re ready to help.
  cta:
    buttons:
      - title: Contact Support
        url: https://knowledge.vibe.us/kb-tickets/new

help:
  items:
    - title: 'Video Tutorials'
      body: 'Step by step walkthroughs of the newest features and customer favorites.'
      figure: img/onboarding/help-1.png
      url: https://www.youtube.com/watch?v=zXMXv03PG5g&list=PLQWTZKzrs8jNIufAhoCqh2Kv1DXfdU7iu&index=1
      column_size: is-one-third
    - title: 'Help Center'
      body: 'See guides on popular features and search for answers to your questions.'
      figure: img/onboarding/help-2.png
      url: https://knowledge.vibe.us/vibe-smartboard-pro-75
    - title: 'Warranty'
      body: 'Detailed information about your Vibe warranty.'
      figure: img/onboarding/help-3.png
      url: /warranty/
      column_size: is-one-third
  contact_widget:
    title: 'Have Questions ?'
    logo_icon: img/common/outline-logo.svg
    collapse_icon: img/onboarding/contact-widget-collapse-icon.svg
    contact:
      - content: Contact Sales
        icon: img/onboarding/contact-sales.svg
        url: /contact/
      - content: Contact Support
        icon: img/onboarding/contact-suppprt.svg
        url: https://knowledge.vibe.us/kb-tickets/new
---

<Page />

<script setup>
import Page from '@/views/onboarding/VibeSmartboardS1/Index.vue'
</script>
