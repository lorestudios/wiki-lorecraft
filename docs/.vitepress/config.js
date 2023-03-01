export default {
  base: "/",
  title: "Lore Studios",

  head: [
    [
      "link",
      {rel: "apple-touch-icon", sizes: "180x180", href: "/images/logo32.png"},
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/logo32.png",
      },
    ],
  ],

  themeConfig: {
    logo: "/images/logo32.png",
    siteTitle: "Lore Studios",
    outlineTitle: "",

    socialLinks: [{icon: "discord", link: "https://discord.gg/lorestudios"}],
    nav: [
      {
        text: "Marketplace",
        link: "/documentation/organics",
      },
      {
        text: "Education",
        link: "https://www.pikistudios.com/",
      },
      {
        text: "Lorecraft",
        link: "/documentation/welcome",
      },
    ],
    sidebar: [
      {
        text: "Welcome",
        collapsible: true,
        items: [
          {text: "Our community", link: "/documentation/welcome"},
          {text: "Getting around", link: "/documentation/getting-around"},
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
      // {
      //   text: "Tutorials",
      //   collapsible: true,
      //   items: [
      // {text: "Basic Tools", link: "/documentation/basic-tools"},
      // {text: "Advanced Tools", link: "/documentation/advanced-tools"},
      // {text: "Structures", link: "/documentation/structures"},
      // {text: "Terrain", link: "/documentation/terrain"},
      // {text: "Organics", link: "/documentation/organics"},
      //   ],
      // },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: "Copyright © 2023 Lore Studios",
    },
  },
};
