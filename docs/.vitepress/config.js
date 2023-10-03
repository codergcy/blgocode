export default {
  lang: 'zn-ch',
  title: 'codergcy的博客',
  description: "ECLAIR'S BLOG.",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/code-logo.ico' }]],
  themeConfig: {
    siteTitle: 'codergcy',
    logo: '/avatar.png',
    // nav: [
    //   { text: '个人笔记', link: '/technology/', activeMatch: '/technology/' },
    //   { text: '前端算法', link: '/record/', activeMatch: '/record/' },
    // ],
    nav: [
      { 
        text: '🔥学习专栏 ', 
        items: [
          { text: '📖个人笔记', link: '/notes/', activeMatch: '/notes/' },
          { text: '📋面试专栏', link: '/interview/', activeMatch: '/interview/' },
        ] 
      },
      {
        text: ' 📚 归档', 
        items: [
          { text: '📘前端规范', link: '/webstds/', activeMatch: '/webstds/' },
          { text: '📙后端（待开发）', link: '/record/', activeMatch: '/record/' },
        ] 
      }
    ],
    sidebar: {
      '/webstds/': [
        {
          text: 'HTML',
          items: [
            { text: 'HTML规范', link: '/webstds/' }, // /reading/index.md
          ],
          text: 'CSS',
          items: [
            { text: 'CSS规范', link: '/webstds/' }, // /reading/index.md
          ],
          text: 'Javascript',
          items: [
            { text: 'Javascript规范', link: '/webstds/' }, // /reading/index.md
          ],
        },
      ],
      '/notes': [
        {
          text: 'HTML',
          items: [
            { text: 'Function', link: '/notes/' },
            { text: 'RegularCheck', link: '/notes/regularCheck' },
            { text: 'DateFormat', link: '/notes/dateFormat' },
            { text: 'Style', link: '/notes/style' },
            { text: 'TableMarquee', link: '/notes/tableMarquee' },
          ],
        },
        {
          text: 'CSS',
          items: [
            { text: 'Function', link: '/notes/' },
            { text: 'RegularCheck', link: '/notes/regularCheck' },
            { text: 'DateFormat', link: '/notes/dateFormat' },
            { text: 'Style', link: '/notes/style' },
            { text: 'TableMarquee', link: '/notes/tableMarquee' },
          ],
        },
        {
          text: 'JavaScript',
          items: [
            { text: 'Function', link: '/notes/' },
            { text: 'RegularCheck', link: '/notes/regularCheck' },
            { text: 'DateFormat', link: '/notes/dateFormat' },
            { text: 'Style', link: '/notes/style' },
            { text: 'TableMarquee', link: '/notes/tableMarquee' },
          ],
        },
        { items: [{ text: 'tips', link: '/notes/tips' }] },
      ],
      '/interview/': [
        {
          text: 'HTML',
          items: [
            { text: 'HTML', link: '/interview/' }, // /reading/index.md
          ],
        },
        {
          text: 'CSS',
          items: [{ text: 'CSS', link: '/interview/' }],
        },
        {
          text: 'JavaScript',
          items: [
            { text: 'JavaScript', link: '/interview/' }, // /reading/index.md
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Eclair-H' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Eclair Howe',
    },
  },
};
