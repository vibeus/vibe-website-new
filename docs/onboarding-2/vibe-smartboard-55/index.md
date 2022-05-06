---
title: 'Vibe 55 Smart Board Onboarding and Training'
description: Learn how to use your Vibe board in this Onboarding and Training series. You'll unbox, install, and set up your device, and register your Vibe board.
stylesPath: css/onboarding.sass
url: /onboarding/vibe-smartboard-55/
layout: product-55
noSitemap: true
noIndex: true
navbar:
  extra:
    - title: Contact Support
      class: is-black is-outlined is-rounded is-in-brand
      url: https://knowledge.vibe.us/kb-tickets/new

hero:
  bg_figure: onboarding/hero-tablet.png
  bg_figure_mobile: onboarding/hero-mobile.png
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
  progress:
    class: is-hidden-mobile
    progress_bars:
      - class: progress-step-1
        bar:
          class: step-bar-1
          url: img/onboarding/step-bar-1.svg
      - class: progress-step-2
        bar:
          class: step-bar-2
          url: img/onboarding/step-bar-2.svg
      - class: progress-step-3
        bar:
          class: step-bar-3
          url: img/onboarding/step-bar-3.svg
      - class: progress-step-4
        bar:
          class: step-bar-4
          url: img/onboarding/step-bar-4.svg
  glide_class: enable-user-select
  steps:
    - order: 1
      component: VideoStep
      mobile_step_number_icon: onboarding-step-number-1
      title: 'Unbox and install your Vibe board and stand.'
      links:
        - link:
            text: 'Vibe 55” digital whiteboard user manual'
            icon:
              class: download-icon
              url: img/common/download-icon.svg
            url: https://vibe.us/resources/New_branded_Vibe_user_manual.pdf
        - link:
            text: 'Vibe-Tafel für interaktive Zusammenarbeit Bedienungsanleitung'
            icon:
              class: download-icon
              url: img/common/download-icon.svg
            url: https://vibe.us/resources/Germany_user_manual.pdf
        - link:
            text: 'Vibe stand assembly'
            icon:
              class: download-icon
              url: img/common/download-icon.svg
            url: https://vibe.us/resources/New_Stand_Assembly-202104.pdf
        - link:
            text: 'FAQ – Can we mount Vibe on a wall or use with other stands?'
            icon:
              class: faq-icon
              text: '  →'
            url: https://knowledge.vibe.us/wall-mount-and-stand
      video:
        playerId: unbox-tablet
        triggerClass: unbox-tablet
        id: 7ZsShHUzqHs
        placeholder: onboarding/installation.png
    - order: 2
      component: StepContent
      mobile_step_number_icon: onboarding-step-number-2
      title: 'Set up your device and Vibe account.'
      figure: onboarding/setup.png
      text: "* If you've already set up a Vibe account, you can use it to sign into the board."
      cta:
        - link:
            text: 'Learn more'
            url: https://knowledge.vibe.us/quick-start-guide
    - class: step-3
      component: StepForm
      mobile_step_number_icon: onboarding-step-number-3
      form_content:
        title: 'Register Your Device'
        body: Your Vibe board purchase includes a [1-year warranty](/warranty/).
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

    - order: 4
      component: EndStep
      mobile_step_number_icon: onboarding-step-number-4
      title: 'You Are All Set!'
      figure: onboarding/desktop-screen.png
      cta:
        text: 'Experience Vibe for yourself.'
        link:
          icon: onboarding-scroll-down-icon
          scroll_to_id: &get_started_id get-started

no_info: false
webinar_section:
  content_box: 
    figure: onboarding/onboarding-webinar-video-55.png
    url: https://us02web.zoom.us/rec/play/2fTuur7U7gXT3t0CdD5tyIUVizuOlHs2Axg0Exf5RHxKi8gJLmhcnazim8okbKtgsm5OA4LJawvrYhtk.el0EH_GBAErV5TQT?startTime=1644519621000
    video_section:
      video:
        # id: KrqMyYSp8fc
        # playerId: video-column-education
        # triggerClass: video-education
        placeholder: onboarding/onboarding-webinar-video-55.png
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

              
get_started:
  title: Get started with Vibe
  id: *get_started_id
  items:
    - title: 'Whiteboarding'
      column_size: is-one-third
      links:
        - text: 'Using the whiteboard'
          url: https://knowledge.vibe.us/toolbar-tutorial
        - text: 'Import files to your Vibe board'
          url: https://knowledge.vibe.us/cloud-drive-file-formats
        - text: 'Save and share a board'
          url: https://knowledge.vibe.us/save-share-board
    - title: 'Screencast & Annotation'
      column_size: is-one-third
      links:
        - text: 'How to screencast'
          url: https://knowledge.vibe.us/how-to-screencast
        - text: 'Using HDMI on Vibe'
          url: https://knowledge.vibe.us/how-to-use-hdmi-with-vibe
        - text: 'Screenshot and Annotation'
          url: https://knowledge.vibe.us/screenshot/annotation-feature
    - title: 'Third party applications'
      column_size: is-one-third
      links:
        - text: 'How to download applications'
          url: https://knowledge.vibe.us/how-to-download-applications
        - text: 'How to use Zoom on Vibe Using'
          url: https://knowledge.vibe.us/zoom-overview
        - text: 'Using Microsoft Teams on Vibe'
          url: https://knowledge.vibe.us/how-to-use-vibe-within-microsoft-teams-app
help:
  items:
    - title: 'Video Tutorials'
      body: 'Step by step walkthroughs of the newest features and customer favorites.'
      figure: onboarding/help-1.png
      url: https://knowledge.vibe.us/video-tutorial/
    - title: 'Help Center'
      body: 'See guides on popular features and search for answers to your questions.'
      figure: onboarding/help-2.png
      url: https://knowledge.vibe.us
    - title: 'Warranty'
      body: 'Detailed information about your Vibe warranty.'
      figure: onboarding/help-3.png
      url: /warranty-2/
  contact_widget:
    title: 'Have Questions ?'
    logo_icon: shared-outline-logo
    collapse_icon: onboarding-contact-widget-collapse-icon
    contact:
      - content: Contact Sales
        icon: onboarding-contact-sales
        url: /contact-2/
      - content: Contact Support
        icon: onboarding-contact-suppprt
        url: https://knowledge.vibe.us/kb-tickets/new
---

<Page />

<script setup>
import Page from '@/views/onboarding/VibeSmartboard55/Index.vue'
</script>
