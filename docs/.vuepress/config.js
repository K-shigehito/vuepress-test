module.exports = {
  title: "vuepress test",
  description: "Just playing around",
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          title: "ガイド",
          children: [
            "linehighlight",
            "emoji",
            "toc",
            "customblock",
            "component",
          ],
        },
      ],
    },
  },
};
