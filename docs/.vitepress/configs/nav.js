export default [ // menu
  {
    title: 'Product',
    // activeMatch: `^/(product)/`,
    submenu: [
      { text: 'Vibe Smartboard 55″', link: 'https://vibe.us/products/vibe-smartboard-55/' },
      { text: 'Vibe Smartboard Pro 75″', link: 'https://vibe.us/products/vibe-smartboard-pro-75/' },
      { text: 'Vibe Software', link: '/software-2/' },
      { text: 'App Integrations', link: '/android-app-store-2/' },
      { text: 'Security', link: '/security-beta/' },
      { text: 'Product Comparison', link: 'https://vibe.us/comparison/' },
      { text: 'Customer Testimonials', link: '/customer-2/' },
    ]
  },
  {
    title: 'Solutions',
    // activeMatch: `^/(product)/`,
    columnSubmenu: [
      {
        title: 'Scenario',
        items: [ // TODO: column_submenu
          { text: 'Brainstorming', link: 'https://vibe.us/lp/scenario-brainstorming/' },
          { text: 'Entertainment', link: 'https://vibe.us/lp/scenario-entertainment/' },
          { text: 'Meeting', link: 'https://vibe.us/lp/scenario-meeting/' },
          { text: 'Presenting', link: 'https://vibe.us/lp/scenario-presenting/' },
          { text: 'Remote Collaboration', link: 'https://vibe.us/lp/scenario-remote/' },
          { text: 'Training', link: 'https://vibe.us/lp/scenario-training/' },
        ]
      },
      {
        title: 'Industry',
        items: [
          { text: 'Distance Learning', link: 'https://vibe.us/lp/scenario-distance-learning/' },
          { text: 'Education', link: 'https://vibe.us/lp/scenario-education/' },
          { text: 'Engineering', link: 'https://vibe.us/lp/scenario-engineering/' },
          { text: 'Marketing', link: 'https://vibe.us/lp/scenario-marketing/' },
          { text: 'Professional Services', link: 'https://vibe.us/lp/scenario-professional-services/' },
          { text: 'Technology', link: 'https://vibe.us/lp/scenario-technology/' },
        ]
      }
    ]
  },
  {
    title: 'Resources',
    // activeMatch: `^/(product)/`,
    submenu: [
      { text: 'Buyer\'s FAQ', link: 'https://vibe.us/buyer-faq/', nofollow: true },
      { text: 'Blogs', link: 'https://vibe.us/blog/', nofollow: true },
      { text: 'Product Videos', link: 'https://vibe.us/video-tutorial/', nofollow: true },
      { text: 'Help Center', link: 'https://knowledge.vibe.us', target: '_blank', nofollow: true },
      { text: 'Contact Sales', link: '/contact-2/sales/', nofollow: true },
      { text: 'Contact Support', link: 'https://knowledge.vibe.us/kb-tickets/new', target: '_blank', nofollow: true },
      { text: 'Request a Quote', link: '/contact-2/request-a-quote/', nofollow: true },
      { text: 'Track Your Order', link: '/order-2/status/', nofollow: true },
    ]
  },
  {
    title: 'Partners',
    link: 'https://vibe.us/reseller/',
    nofollow: true
  }
]
