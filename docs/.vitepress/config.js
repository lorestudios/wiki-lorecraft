export default {
  base: "lorestudios.github.io",
  themeConfig: {
    logo: "/assets/images/logo.png",
    siteTitle: "Lorecraft",

    algolia: {
      appId: "...",
      apiKey: "...",
      indexName: "...",
    },

    nav: [
      {text: "Home", link: "/"},
      {text: "Page One", link: "/documentation/page-one"},
      {text: "Page Two", link: "/documentation/page-two"},
      {
        text: "Pages",
        items: [
          {text: "Home ", link: "/"},
          {text: "Page One", link: "/documentation/page-one"},
          {text: "Page Two", link: "/documentation/page-two"},
          {text: "Team Page", link: "/team/team-page"},
        ],
      },
    ],
    sidebar: [
      {
        text: "Doc Page",
        collapsible: true,
        items: [
          {text: "Home", link: "/documentation/"},
          {text: "Page one", link: "/documentation/page-one"},
          {text: "Page two", link: "/documentation/page-two"},
        ],
      },
      {
        text: "Team Page",
        collapsible: true,
        items: [
          {text: "Home", link: "/team/"},
          {text: "Team Page", link: "/team/team-page"},
        ],
      },
      {
        text: "Integreation",
        collapsible: true,
        items: [
          {text: "Introduction", link: "/introduction"},
          {text: "Getting Started", link: "/getting-started"},
        ],
      },
    ],
  },
};
