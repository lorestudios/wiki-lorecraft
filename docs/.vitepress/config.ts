import {defineConfig} from "vitepress";
// import { getLatestVersion } from './utils/latestVersion'

const title = "Lorecraft";
const description =
  "A flexible and language-agnostic addon-compiler for the Bedrock Edition of Minecraft.";
const url = "https://wiki.lorecraft.online";

export default defineConfig({
  title,
  description,
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: "with-subfolders",
  // base: "/wiki/",

  head: [
    ["link", {rel: "icon", type: "image/x-icon", href: "favicon.ico"}],
    ["meta", {property: "og:type", content: "website"}],
    ["meta", {property: "og:title", content: title}],
    ["meta", {property: "og:url", content: url}],
    ["meta", {property: "twitter:description", content: description}],
    ["meta", {property: "twitter:title", content: title}],
    ["meta", {property: "twitter:card", content: "summary_large_image"}],
    ["meta", {property: "twitter:url", content: url}],
  ],

  themeConfig: {
    logo: "/logo.png",

    editLink: {
      text: "A Builders Village.",
      pattern: "https://wiki.lorecraft.online",
    },

    socialLinks: [{icon: "discord", link: "https://discord.gg/3exus-burrow"}],

    footer: {
      message: "Released under the MIT license.",
      copyright: `Copyright © ${new Date().getFullYear()} Lore Studios.`,
    },

    nav: [
      {
        text: "Guide",
        link: "/guide/profiles",
        activeMatch: "/guide/",
      },
      {
        text: "Community",
        link: "/guide/community",
      },
      {
        text: "Plugins",
        // link: "/plugins/",
        items: [
          {
            text: "Server Plugins",
            link: "/plugins/assetbrush",
          },
          {
            text: "Custom Plugins",
            link: "/plugins/assetbrush",
          },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          collapsible: true,
          items: [
            {
              text: "Welcome to Lorecraft",
              link: "/guide/tour",
            },
            {
              text: "Installing",
              link: "/guide/installing",
            },
            {
              text: "Getting Started",
              link: "/guide/getting-started",
            },
            {
              text: "Troubleshooting",
              link: "/guide/troubleshooting",
            },
          ],
        },
        {
          text: "Advanced",
          collapsible: true,
          items: [
            {
              text: "Configuration File",
              link: "/guide/configuration",
            },
            {
              text: "User Configuration",
              link: "/guide/user-configuration",
            },
            {
              text: "Data Folder",
              link: "/guide/data-folder",
            },
            {
              text: "Export Targets",
              link: "/guide/export-targets",
            },
            {
              text: "Profiles",
              link: "/guide/profiles",
            },
            {
              text: "Safety",
              link: "/guide/safety",
            },
          ],
        },
        {
          text: "Filters",
          collapsible: true,
          items: [
            {
              text: "Introduction",
              link: "/guide/filters",
            },
            {
              text: "Local Filters",
              link: "/guide/local-filters",
            },
            {
              text: "Custom Filters",
              link: "/guide/custom-filters",
            },
            {
              text: "Online Filters",
              link: "/guide/online-filters",
            },
            {
              text: "Installing Filters",
              link: "/guide/installing-filters",
            },
            {
              text: "Filter Run Modes",
              link: "/guide/filter-run-modes",
            },
            {
              text: "Create a Filter",
              link: "/guide/create-a-filter",
            },
          ],
        },
        {
          text: "Filter Types",
          collapsible: true,
          items: [
            {
              text: "Java Filters",
              link: "/guide/java-filters",
            },
            {
              text: ".NET Filters",
              link: "/guide/dotnet-filters",
            },
            {
              text: "Nim Filters",
              link: "/guide/nim-filters",
            },
            {
              text: "Python Filters",
              link: "/guide/python-filters",
            },
            {
              text: "Shell Filters",
              link: "/guide/shell-filters",
            },
            {
              text: "NodeJS Filters",
              link: "/guide/node-filters",
            },
            {
              text: "Deno Filters",
              link: "/guide/deno-filters",
            },
            {
              text: "Profile Filters",
              link: "/guide/profile-filters",
            },
          ],
        },
      ],
    },
  },
});
