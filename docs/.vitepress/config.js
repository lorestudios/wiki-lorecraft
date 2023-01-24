export default {
  base: "/",
  themeConfig: {
    logo: "/images/logo32.png",
    siteTitle: "Lorecraft",

    // algolia: {
    //   appId: "...",
    //   apiKey: "...",
    //   indexName: "...",
    // },

    nav: [
      {text: "Home", link: "/"},
      {text: "Guide", link: "/documentation/page-one"},
      {text: "Sponsers", link: "/documentation/page-two"},
      {
        text: "Plugins",
        items: [
          {text: "Standard", link: "/documentation/page-one"},
          {text: "Custom", link: "/documentation/page-two"},
        ],
      },
    ],
    sidebar: [
      {
        text: "Welcome",
        collapsible: true,
        items: [
          {text: "Welcome to Lorecraft", link: "/documentation/welcome"},
          {text: "Getting around", link: "/documentation/page-one"},
          {text: "Our community", link: "/documentation/page-two"},
        ],
      },
      {
        text: "Tools",
        collapsible: true,
        items: [
          {text: "Our Plugins", link: "/team/"},
          {text: "Custom Plugins", link: "/team/team-page"},
        ],
      },
      {
        text: "Events",
        collapsible: true,
        items: [
          {text: "Introduction", link: "/introduction"},
          {text: "Getting Started", link: "/getting-started"},
        ],
      },
    ],
  },
};
