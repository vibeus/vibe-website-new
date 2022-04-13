---
hero:
  title: Vibe Security Overview
  body:
    More than 1000 customers–spanning highly competitive industries like Technology, Consulting, Aerospace and Higher Education–all trust Vibe to securely manage their high priority projects.
    </br></br>
    Protect your organization with ease with Vibe’s cutting edge features and state-of-the-art security practices, all designed to safeguard your data.

trust:
  title: Trusted by 1000+ top industry leaders
  customers:
  - img: logo-duke.png
  - img: logo-maryland.png
  - img: logo-redapt.png
  - img: logo-camino.png
  - img: logo-capgemini.png
  - img: logo-digipen.png
  - img: logo-igg.png
  - img: logo-kenmore.png
  - img: logo-kic.png
  - img: logo-azularc.png
  
features:
  title: Security features
  featuresItem: 
    - title: Identity Management
      body: Vibe ensures that only the right people and approved devices can access user’s or team’s content
            in Vibe cloud with <strong>SAML based Single sign-on</strong>. Vibe also support OAuth sign in from trusted
            identity providers like Google, Microsoft and Slack.
      img: idm.png
    - title: Data Protection
      body: Vibe <strong>encrypts all customer data</strong> both in transit and at rest using industry standards like SSL
            v2 and AES-256 alongside Amazon’s Key Management Service (AWS KMS). Deleted user content
            is permanently removed across all back end servers to ensure data governance policy.
      img: data.png
    - title: Audit Log
      body: Stay informed. Vibe audits the track of events related to each individual canvas, so you’re
            always aware of who has accessed your content.
      img: audit.png
    - title: Access Control
      body: When a Vibe board is shared–whether within an organization or across the world–Vibe ensures
            that only the right people can access it.
      img: access.png

specs:
  title: We are serious about security
  body: 
    Carefully vetted security apps, remotely-stored personal information, trusted identity providers,
    AES-256 encryption and AWS S3 storage work together to keep your intellectual property safe
    and secure.
  cta:
    title: Get Security Specs
    class: is-black is-outlined is-rounded is-inverted
    url: /resources/Vibe_Security_Specs.pdf
    target: _blank
  texts:
    - Compliance to various security standards
    - Single-sign-on via industry standard authentication protocols
    - Encryption of data in transit and at rest
    - Security in our software development lifecycle

privacy:
  class: is-privacy
  title: Privacy modes designed with you in mind
  items:
    - title: Ephemeral mode for shared workspaces
      body: 
        Vibe offers a mode for shared spaces that includes guest access roles, an expiring code to limit the sharing time, tap to clear content, multi-user sign in, and a permission control on every canvas.
      figure:
        base: security/privacy1.png
        alt: vibe online canvas can share with people
    - title: Configure for enterprise security
      body:
        Security and privacy come first, and Vibe allows organizations to determine which configuration works best for their unique environment. Use Vibe Cloud, remain completely offline, or use cloud drives like Google Drive, One Drive, DropBox or Box. Customized configurations are possible.
        </br></br>
        <a href="/security/enterprise-security/">Get enterprise security solutions →</a>
      figure:
        base: security/privacy2.png
        alt: vibe board security privacy
      reversed: true

bottom_cta:
  title: Enterprise grade security and capabilities
  body: We provide private cloud service with Enterprise accounts.
  cta:
    title: Contact sales
    url: /contact/
---

<Page />

<script setup>
import Page from '/@/views/security/Index.vue'
</script>