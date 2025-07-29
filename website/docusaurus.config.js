import autoprefixer from "autoprefixer";
import katex from "rehype-katex";
import math from "remark-math";
import tailwind from "tailwindcss";

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hantswilliams/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/hantswilliams",
  },
  padlet: {
    label: "Padlet",
    href: "https://padlet.com/",
  },
  email: {
    label: "Email",
    href: "mailto:hantsawilliams@gmail.com",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  publications: {
    label: "Publications",
    to: "publications",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  resume: {
    label: "Resume",
    href: "https://about.hants-williams.com/pdf/hantswilliams_academic_cv_2025.pdf",
  },
};

module.exports = {
  title: "Hants Williams",
  tagline:
    "A senior health care professional with a passion for data, technology, and software development.",
  url: "https://hants-williams.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/hants.jpeg",
  organizationName: "hantswilliams",
  projectName: "hants-about-projects",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Hants Williams",
      logo: {
        alt: "Hants Williams",
        src: "img/hw_white_logo.png",
        target: "_self",
      },
      items: [
        // { to: "blog/", label: "Blog", position: "left" },
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        // {
        //   to: "publications/",
        //   label: "Publications",
        //   position: "left",
        // },
        { to: "projects/", label: "Projects", position: "right" },
        {
          href: "https://about.hants-williams.com/pdf/hantswilliams_academic_cv_2025.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.padlet,
            internetProfiles.email,
          ],
        },
        // {
        //   title: "Discover",
        //   items: [
        //     internetProfiles.blog,
        //     internetProfiles.publications,
        //     internetProfiles.docs,
        //     internetProfiles.projects,
        //     internetProfiles.resume,
        //   ],
        // },
      ],
      copyright: `Hants Williams: Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        showReadingTime: true,
        editUrl:
          "https://github.com/hantswilliams/hants-about-projects/tree/main/website/",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "publications",
        routeBasePath: "publications",
        path: "./publications",
        showReadingTime: true,
        blogSidebarTitle: "Recent Publications",
        editUrl:
          "https://github.com/hantswilliams/hants-about-projects/tree/main/website/",
      },
    ],
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],
};