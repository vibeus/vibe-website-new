export default [ // menu
  {
    title: 'Product',
    // activeMatch: `^/(product)/`,
    submenu: [
      { text: 'Vibe Smartboard 55″', link: '/products/vibe-smartboard-55/' },
      { text: 'Vibe Smartboard Pro 75″', link: '/products/vibe-smartboard-pro-75/' },
      { text: 'Vibe Software', link: '/software/' },
      { text: 'App Integrations', link: '/android-app-store/' },
      { text: 'Security', link: '/security/' },
      { text: 'Product Comparison', link: '/comparison/' },
      { text: 'Customer Testimonials', link: '/customer/' },
    ]
  },
  {
    title: 'Solutions',
    // activeMatch: `^/(product)/`,
    columnSubmenu: [
      {
        title: 'Scenario',
        items: [ // TODO: column_submenu
          { text: 'Brainstorming', link: '/lp/scenario-brainstorming/' },
          { text: 'Entertainment', link: '/lp/scenario-entertainment/' },
          { text: 'Meeting', link: '/lp/scenario-meeting/' },
          { text: 'Presenting', link: '/lp/scenario-presenting/' },
          { text: 'Remote Collaboration', link: '/lp/scenario-remote/' },
          { text: 'Training', link: '/lp/scenario-training/' },
        ]
      },
      {
        title: 'Industry',
        items: [
          { text: 'Distance Learning', link: '/lp/scenario-distance-learning/' },
          { text: 'Education', link: '/lp/scenario-education/' },
          { text: 'Engineering', link: '/lp/scenario-engineering/' },
          { text: 'Marketing', link: '/lp/scenario-marketing/' },
          { text: 'Professional Services', link: '/lp/scenario-professional-services/' },
          { text: 'Technology', link: '/lp/scenario-technology/' },
        ]
      }
    ]
  },
  {
    title: 'Resources',
    // activeMatch: `^/(product)/`,
    submenu: [
      { text: 'Buyer\'s FAQ', link: '/buyer-faq/', nofollow: true },
      { text: 'Blogs', link: '/blog/', nofollow: true },
      { text: 'Product Videos', link: '/video-tutorial/', nofollow: true },
      { text: 'Help Center', link: 'https://knowledge.vibe.us', target: '_blank', nofollow: true },
      { text: 'Contact Sales', link: '/contact/', nofollow: true },
      { text: 'Contact Support', link: 'https://knowledge.vibe.us/kb-tickets/new', target: '_blank', nofollow: true },
      { text: 'Request a Quote', link: '/contact/request-a-quote/', nofollow: true },
      { text: 'Track Your Order', link: '/order/status/', nofollow: true },
    ]
  },
  {
    title: 'Partners',
    link: 'https://vibe.us/reseller/',
    nofollow: true
  }
]
