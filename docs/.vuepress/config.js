const path = require('path')
module.exports = {
  base: '/vumi/',
  title: 'Yumi UI',
  description: '一个基于 Vue2.x 的 UI 组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/lituanjing/vumi' },
    ],
    sidebar: [
      {
        title: '开发指南',
        children: [
          'views/guide/install.md',
          'views/guide/get-start.md'
        ]
      },
      {
        title: '组件',
        children: [
          'views/components/basic/',
          'views/components/form/',
          'views/components/navigation/',
          'views/components/notice/',
          'views/components/other/'
        ]
      },
    ]
  },
}
