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
      {text: "Guide", link: "/documentation/welcome"},
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
        text: "Network",
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
          {text: "Commands List", link: "/team/"},
          {text: "Build Plugins", link: "/team/"},
          {text: "Custom Plugins", link: "/team/team-page"},
        ],
      },
      {
        text: "Events",
        collapsible: true,
        items: [{text: "Alien Planet", link: "/documentation/alien-planet"}],
      },
    ],
  },
};
