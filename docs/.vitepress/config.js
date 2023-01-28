export default {
  base: "/",
  themeConfig: {
    logo: "/images/logo32.png",
    siteTitle: "Lorecraft",

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
        text: "Welcome",
        collapsible: true,
        items: [
          {text: "Our community", link: "/documentation/welcome"},
          {text: "Getting around", link: "/documentation/page-one"},
        ],
      },
      {
        text: "Tools",
        collapsible: true,
        items: [
          {text: "Commands List", link: "/documentation/commands"},
          {
            text: "Schematics",
            link: "/documentation/schematics",
          },
          {text: "Build Plugins", link: "/documentation/plugins"},
          {text: "Custom Plugins", link: "/documentation/custom"},
        ],
      },
      {
        text: "Events",
        collapsible: true,
        items: [
          {text: "How To Enter", link: "/documentation/how-to-enter"},
          {text: "Alien Planet", link: "/documentation/alien-planet"},
        ],
      },
      {
        text: "Tutorials",
        collapsible: true,
        items: [
          {text: "Basic Tools", link: "/documentation/basic-tools"},
          {text: "Advanced Tools", link: "/documentation/advanced-tools"},
          {text: "Structures", link: "/documentation/structures"},
          {text: "Terrain", link: "/documentation/terrain"},
          {text: "Organics", link: "/documentation/organics"},
        ],
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: "Copyright © 2023 Lore Studios",
    },
  },
};
