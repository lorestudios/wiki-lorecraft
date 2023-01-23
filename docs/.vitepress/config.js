export default {
  base: "/",
  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: "Lorecraft",

    // algolia: {
    //   appId: "...",
    //   apiKey: "...",
    //   indexName: "...",
    // },

    nav: [
      {text: "Guide", link: "/documentation/welcome"},
      {
        text: "Plugins",
        items: [
          {text: "Asset Brush", link: "/documentation/abr"},
          {text: "Bungee Essentials", link: "/documentation/abr"},
          {text: "FAWE", link: "/documentation/fawe"},
        ],
      },
    ],
    sidebar: [
      {
        text: "Welcome",
        collapsible: true,
        items: [
          {text: "Welcome to Lorecraft", link: "/documentation/welcome"},
          {
            text: "Getting around Lorecraft",
            link: "/documentation/getting-around",
          },
        ],
      },
      {
        text: "Commands",
        collapsible: true,
        items: [
          {text: "Home", link: "/team/"},
          {text: "Team Page", link: "/team/team-page"},
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
