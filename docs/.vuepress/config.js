module.exports = {
  base: '/vumi/',
  title: 'Yumi UI',
  description: '一个基于 Vue2.x 的 UI 组件库',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '开发指南',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
        ]
      },
    ]
  }
}
