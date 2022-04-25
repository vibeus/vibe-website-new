---
title: 'Vibe 75 Smart Board Onboarding and Training'
description: Learn how to use your Vibe board in this Onboarding and Training series. You'll unbox, install, and set up your device, and register your Vibe board.
stylesPath: css/onboarding.sass
url: /onboarding/vibe-smartboard-pro-75/
layout: product-75
noSitemap: true
noIndex: true

navbar:
  extra:
    - title: Contact Support
      class: is-black is-outlined is-rounded is-in-brand
      url: https://knowledge.vibe.us/kb-tickets/new

hero:
  title: 'Welcome to Vibe!'
  body: "You're the newest member of the growing Vibe community, and we are so glad that you're here."
  cta:
    - class: is-hidden-mobile
      link:
        class: scroll-down-link
        text: 'Scroll down to get started ↓'
        scroll_to_id: &setup_id setup
    - class: is-hidden-tablet
      title: 'Scroll down to get started'
      link:
        class: scroll-down-link
        scroll_to_id: &setup_id setup
        icon:
          class: scroll-down
          url: img/onboarding/scroll-down-icon.svg
setup:
  id: *setup_id
  class: is-setup-product-75
  progress:
    class: is-hidden-mobile
    progress_bars:
      - class: progress-step-1
      - class: progress-step-2
      - class: progress-step-3
      - class: progress-step-4
  glide_class: enable-user-select
  steps:
    - class: step-1
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-1.svg
      columns:
        - class: content-text-column
          header:
            title: 'Unbox Your Vibe Smartboard Pro 75″'
          body:
            - figure:
                class: is-hidden-from-900px
                url: img/onboarding/setup-1.png
            - text: '* The Computing Module is sometimes sent in a different package, please make sure you have received everything before you begin setting up your Vibe Smartboard.'
        - class: figure_column is-hidden-until-900px
          column_size: is-7
          body:
            - figure:
                class: is-hidden-mobile
                url: img/onboarding/setup-1.png
    - class: step-2
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-2.svg
      columns:
        - class: content-text-column
          header:
            title: 'Install Your Vibe Board & Computing Module'
          body:
            - figure:
                class: is-hidden-from-900px
                url: img/onboarding/setup-3.png
          cta:
            - link:
                text: 'Vibe Smartboard Pro 75″ user manual'
                icon:
                  class: download-icon
                  url: img/common/download-icon.svg
                url: /resources/Vibe_Smartboard_Pro_75%E2%80%B3_User_Manual.pdf
            - link:
                text: 'Vibe Smartboard Pro 75″ stand assembly'
                icon:
                  class: download-icon
                  url: img/common/download-icon.svg
                url: /resources/Vibe_Pro_75″_Stand_Assembly_Instruction.pdf
        - class: figure_column is-hidden-until-900px
          column_size: is-7
          body:
            - figure:
                class: is-hidden-mobile
                url: img/onboarding/setup-2.png
    - class: step-3
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-3.svg
      columns:
        - class: content-text-column
          header:
            title: 'Set Up Your Device'
          body:
            - figure:
                class: is-hidden-from-900px
                url: img/onboarding/setup-3.png
            - text: "* If you're setting up the Vibe board for the first time, please expect to wait 5-10 minutes for system update."
          cta:
            - link:
                text: 'Learn more'
                url: https://knowledge.vibe.us/setup-guide-75
        - class: figure_column is-hidden-until-900px
          column_size: is-7
          body:
            - figure:
                class: is-hidden-mobile
                url: img/onboarding/setup-3.png

    - class: step-4
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-4.svg
      columns:
        - class: content-text-column
          header:
            title: 'You Are All Set!'
          body:
            - figure:
                url: img/onboarding/desktop-screen-75.png
          cta:
            - body: 'Experience Vibe for yourself.'
            - link:
                class: scroll-down-link
                icon:
                  class: scroll-down-icon
                  url: img/onboarding/scroll-down-icon.svg
                scroll_to_id: &get_started_id get-started
get_started:
  title: Get started with Vibe
  id: *get_started_id
  items:
    - title: 'Whiteboarding'
      column_size: is-one-third
      links:
        - text: 'Vibe Canvas navigation guide'
          url: https://knowledge.vibe.us/canvas-overview-75
        - text: 'Whiteboarding toolbar tutorial'
          url: https://knowledge.vibe.us/whiteboard-toolbar-75

    - title: 'Screencast & Annotation'
      column_size: is-one-third
      links:
        - text: 'How do I screencast with Vibe?'
          url: https://knowledge.vibe.us/how-to-screencast-75
        - text: 'Annotation on Vibe'
          url: https://knowledge.vibe.us/annotation-on-vibe-75
    - title: 'Third party applications'
      column_size: is-one-third
      links:
        - text: 'How to add app shortcuts'
          url: https://knowledge.vibe.us/add-app-shortcuts-75
        - text: 'Using Zoom on Vibe'
          url: https://knowledge.vibe.us/using-zoom-on-vibe-75

webinar_section:
  content_box: 
    figure: onboarding/onboarding-webinar-video-75.png
    url: https://us02web.zoom.us/rec/share/cntxA_l4WRvCJXekzP_3HveYJ3BiT0feJZMIhjXvpGf173CV8ebNaBWfSmtCXr7H.qx8XqdfmxwUYoEqx
    video_section:
      video:
        # id: KrqMyYSp8fc
        # playerId: video-column-education
        # triggerClass: video-education
        placeholder: img/onboarding/onboarding-webinar-video-75.png
  info_detail:
    info_cate: Webinar Replay 
    info_title: Get a walk-through of your Vibe Pro basics
    info_time: 
      icon: img/onboarding/time-icon.svg
      text: 45 mins
    info_content: |
      * How to use your whiteboard (Toolbar Overview, Importing Files, Sharing and Sending and more)
      * Using the casting feature
      * How to conduct video conferences
      * FAQs


faq:
  title: Frequently Asked Questions
  items:
    - title: Why is my Vibe Smartboard not turning on?
      body: Please follow [these steps](https://knowledge.vibe.us/troubleshooting-boot-75) for troubleshooting. If you still have problems turning it on, please [contact support](https://knowledge.vibe.us/kb-tickets/new).
    - title: Why is screencasting not working?
      body: Please be noted that the casting steps for Vibe Smartboard Pro 75″ is different from that of Vibe Smartboard 55″. You may follow [these steps](https://knowledge.vibe.us/how-to-screencast-75) to cast your screen onto the Vibe board. If you still have problems, please [contact support](https://knowledge.vibe.us/kb-tickets/new).

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
import Page from '@/views/onboarding/VibeSmartboardPro75/Index.vue'
</script>
