const buildType = process.env.BUILD_TYPE;

module.exports = {
  title: "Docusaurus Search",
  tagline:
    "An offline/local search example using @easyops-cn/docusaurus-search-local",
  url: "https://hitruns-wiki.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "easyops-cn", // Usually your GitHub org/user name.
  projectName: "docusaurus-search-local", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", ...(buildType === "i18n" ? ["zh-CN", "zh-TW"] : [])],
  },
  themeConfig: {
    navbar: {
      title: "HitRuns Wiki",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "guides/index",
          activeBasePath: "guides",
          label: "Guides",
          position: "left",
        },
        {
          href: "https://github.com/easyops-cn/docusaurus-search-local",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Guides",
          items: [
            {
              label: "Style Guide",
              to: "guides/doc1",
            },
            {
              label: "Second Guide",
              to: "guides/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/easyops-cn/docusaurus-search-local",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
			path: 'guides',
			routeBasePath: 'guides',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/easyops-cn/docusaurus-search-local/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/easyops-cn/docusaurus-search-local/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};
