---
title: Request a Quote
description: Request a quote, get a PO, or help with a bulk order. We're here for you!
layout: request-quote
stylesPath: css/request-a-quote.sass
hero:
  title: Request a Quote
  body: 
    Need a PO? Have a bulk order? Have a delivery address outside of the continental US?
    Use this form to let us know how we can best help.
contact_section:
  title: Your Request
  choices:
    - figure: contact/req-quote-55.png
      title: Vibe Smartboard 55″
      title_mobile: Vibe Board 55″
      cart_count:
        id: number-of-55-board
        name: number_of_boards
        required: true
      id: image-box-contact-checkbox-55
      value: contact-checkbox-55
      includes: Vibe Smartboard 55″, styluses (x2), power cord, quick start guide.
      accessories:
        id: req-55-accessory
        item:
          - figure: contact/req-accessory-1.jpg
            title: Portable Stand (Red)
            cart_count:
              id: number-of-55-stand
              name: number_of_stands
          - figure: contact/req-accessory-2.jpg
            title: Additional Styluses
            cart_count:
              id: number-of-55-styluses
              name: how_many_pairs_of_additional_styluses_would_you_like_
          - figure: contact/req-accessory-3.jpg
            title: Portable Stand (White)
            cart_count:
              id: number-of-55-white-stand
              name: number_of_white_stands
    - figure: contact/req-quote-75.png
      title: Vibe Smartboard Pro 75″
      title_mobile: Vibe Board Pro 75″
      cart_count:
        id: number-of-75-board
        name: number_of_75__boards
        required: true
      id: image-box-contact-checkbox-75
      value: contact-checkbox-75
      includes: Vibe Smartboard Pro 75″, styluses (x2), wall mount, remote controller, HDMI & USB cables, power cords (x3), quick start guide.
      accessories:
        id: req-75-accessory
        item:
          - figure: contact/req-accessory-4.jpg
            title: Portable Stand
            cart_count:
              id: number-of-75-stand
              name: number_of_75__compatible_stands
  tax_exempt:
    id: tax-exempt
    name: tax_exempt
    title: Tax Exempt
  form:
    class: draft-form
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/ef181a88-e583-4509-a8ad-1a6085c7c5ab
    controls:
      - - form_title: Contact Information
          name: firstname
          placeholder: First name*
          required: true
        - name: lastname
          placeholder: Last name*
          required: true
      - - name: email
          placeholder: Email address*
          type: email
          required: true
        - name: industry_category
          placeholder: Industry
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
      - - name: company
          placeholder: Company name*
          required: true
        - name: company_size_classification
          placeholder: Company size
          dropdown:
            - 1-10
            - 11-100
            - 101-500
            - 501-1000
            - 1001-5000
            - 5001-10000
            - 10001+
      - - name: job_role
          placeholder: Role
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
        - name: country
          placeholder: Country*
          required: true
          dropdown:
            - United States
            - Canada
            - Afghanistan
            - Albania
            - Algeria
            - American Samoa
            - Andorra
            - Angola
            - Anguilla
            - Antarctica
            - Antigua and Barbuda
            - Argentina
            - Armenia
            - Aruba
            - Australia
            - Austria
            - Azerbaijan
            - Bahamas (the)
            - Bahrain
            - Bangladesh
            - Barbados
            - Belarus
            - Belgium
            - Belize
            - Benin
            - Bermuda
            - Bhutan
            - Bolivia (Plurinational State of)
            - Bonaire
            - Bosnia and Herzegovina
            - Botswana
            - Bouvet Island
            - Brazil
            - British Indian Ocean Territory (the)
            - Brunei Darussalam
            - Bulgaria
            - Burkina Faso
            - Burundi
            - Cabo Verde
            - Cambodia
            - Cameroon
            - Cayman Islands (the)
            - Central African Republic (the)
            - Chad
            - Chile
            - China
            - Christmas Island
            - Cocos (Keeling) Islands (the)
            - Colombia
            - Comoros (the)
            - Congo (the Democratic Republic of the)
            - Congo (the)
            - Cook Islands (the)
            - Costa Rica
            - Croatia
            - Cuba
            - Curaçao
            - Cyprus
            - Czechia
            - Côte d'Ivoire
            - Denmark
            - Djibouti
            - Dominica
            - Dominican Republic
            - Ecuador
            - Egypt
            - El Salvador
            - Equatorial Guinea
            - Eritrea
            - Estonia
            - Eswatini
            - Ethiopia
            - Falkland Islands (the) [Malvinas]
            - Faroe Islands (the)
            - Fiji
            - Finland
            - France
            - French Guiana
            - French Polynesia
            - French Southern Territories (the)
            - Gabon
            - Gambia (the)
            - Georgia
            - Germany
            - Ghana
            - Gibraltar
            - Greece
            - Greenland
            - Grenada
            - Guadeloupe
            - Guam
            - Guatemala
            - Guernsey
            - Guinea
            - Guinea-Bissau
            - Guyana
            - Haiti
            - Heard Island and McDonald Islands
            - Holy See (the)
            - Honduras
            - Hong Kong
            - Hungary
            - Iceland
            - India
            - Indonesia
            - Iran (Islamic Republic of)
            - Iraq
            - Ireland
            - Isle of Man
            - Israel
            - Italy
            - Jamaica
            - Japan
            - Jersey
            - Jordan
            - Kazakhstan
            - Kenya
            - Kiribati
            - Korea (the Democratic People's Republic of)
            - Korea (the Republic of)
            - Kuwait
            - Kyrgyzstan
            - Lao People's Democratic Republic (the)
            - Latvia
            - Lebanon
            - Lesotho
            - Liberia
            - Libya
            - Liechtenstein
            - Lithuania
            - Luxembourg
            - Macao
            - Madagascar
            - Malawi
            - Malaysia
            - Maldives
            - Mali
            - Malta
            - Marshall Islands (the)
            - Martinique
            - Mauritania
            - Mauritius
            - Mayotte
            - Mexico
            - Micronesia (Federated States of)
            - Moldova (the Republic of)
            - Monaco
            - Mongolia
            - Montenegro
            - Montserrat
            - Morocco
            - Mozambique
            - Myanmar
            - Namibia
            - Nauru
            - Nepal
            - Netherlands
            - New Caledonia
            - New Zealand
            - Nicaragua
            - Niger (the)
            - Nigeria
            - Niue
            - Norfolk Island
            - Northern Mariana Islands (the)
            - Norway
            - Oman
            - Pakistan
            - Palau
            - Palestine
            - Panama
            - Papua New Guinea
            - Paraguay
            - Peru
            - Philippines (the)
            - Pitcairn
            - Poland
            - Portugal
            - Puerto Rico
            - Qatar
            - Republic of North Macedonia
            - Romania
            - Russian Federation (the)
            - Rwanda
            - Réunion
            - Saint Barthélemy
            - Saint Kitts and Nevis
            - Saint Lucia
            - Saint Martin (French part)
            - Saint Pierre and Miquelon
            - Saint Vincent and the Grenadines
            - Samoa
            - San Marino
            - Sao Tome and Principe
            - Saudi Arabia
            - Senegal
            - Serbia
            - Seychelles
            - Sierra Leone
            - Singapore
            - Sint Maarten (Dutch part)
            - Slovakia
            - Slovenia
            - Solomon Islands
            - Somalia
            - South Africa
            - South Georgia and the South Sandwich Islands
            - South Sudan
            - Spain
            - Sri Lanka
            - Sudan (the)
            - Suriname
            - Svalbard and Jan Mayen
            - Sweden
            - Switzerland
            - Syrian Arab Republic
            - Taiwan (Province of China)
            - Tajikistan
            - Tanzania
            - Thailand
            - Timor-Leste
            - Togo
            - Tokelau
            - Tonga
            - Trinidad and Tobago
            - Tunisia
            - Turkey
            - Turkmenistan
            - Turks and Caicos Islands (the)
            - Tuvalu
            - Uganda
            - Ukraine
            - United Arab Emirates
            - United Kingdom
            - United States Minor Outlying Islands (the)
            - Uruguay
            - Uzbekistan
            - Vanuatu
            - Venezuela (Bolivarian Republic of)
            - Vietnam
            - Virgin Islands (British)
            - Virgin Islands (U.S.)
            - Wallis and Futuna
            - Western Sahara
            - Yemen
            - Zambia
            - Zimbabwe
            - Åland Islands
      - - name: state
          placeholder: State/Region*
          required: true
        - name: zip
          placeholder: Zip*
          required: true
      - - name: anything_else_we_should_know_
          placeholder: Anything else we should know?
          type: textarea
      - - name: number_of_boards   
          placeholder: 55 boards 
          column_class: is-hidden
        - name: number_of_stands
          placeholder: 55 red stand 
          column_class: is-hidden
      - - name: how_many_pairs_of_additional_styluses_would_you_like_
          placeholder: Additional styluses
          column_class: is-hidden
        - name: number_of_white_stands 
          placeholder: 55 white stand 
          column_class: is-hidden
      - - name: number_of_75__boards
          placeholder: 75 boards
          column_class: is-hidden
        - name: number_of_75__compatible_stands
          placeholder: 75 stands
          column_class: is-hidden
      - - name: request_quote_tax_exempt
          placeholder: Tax
          column_class: is-hidden
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary
        id: req-a-quote-submit
    submitted:
      body: Whoops! There was a problem previewing this document with your mobile browser.<br> **Click here** to view it, or try again on a desktop browser.
  official_quote_check:
    id: official_quote_check
    name: official_quote
    title: I would like an official quote to complete my purchase. (It usually takes 1-2 days for us to process your quote.)
    button: 
      title: Request Official Quote
      class: button is-rounded is-primary
      id: official-submit-button
    submitted: 
      title: Your Quote Request has been Received
      content: Thanks for your interest in Vibe! We'll have a quote together for you in one to two business days. 
bottom_cta:
  title: Experience Vibe for yourself
  cta:
    buttons: 
      - title: See a Demo
        class: is-rounded is-black is-outlined
---

<Page />

<script setup>
import Page from '/@/views/contact/request-a-quote/Index.vue'
</script>
