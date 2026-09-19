import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  outDir: '../dist/docs',
  lang: 'zh-CN',
  title: '墨客',
  description: '墨客（Moke）跨平台电子书客户端使用文档',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/docs/logo.png' }],
    ['meta', { name: 'keywords', content: '墨客,Moke,moke,Talebook,电子书,阅读器,离线阅读,帮助文档' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: '墨客帮助文档' }],
    ['meta', { property: 'og:description', content: '安装墨客、连接 Talebook、在线阅读与离线书架使用指南。' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '使用指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '认识界面', link: '/guide/interface' },
          { text: '阅读与离线', link: '/guide/online-reading' },
        ],
      },
      { text: '常见问题', link: '/guide/troubleshooting' },
      { text: '下载', link: 'https://github.com/talebook/moke/releases/latest' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          collapsed: false,
          items: [
            { text: '关于墨客', link: '/guide/about' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装墨客', link: '/guide/installation' },
            { text: '连接 Talebook', link: '/guide/connect-talebook' },
            { text: '认识界面', link: '/guide/interface' },
          ],
        },
        {
          text: '核心功能',
          collapsed: false,
          items: [
            { text: '书库、搜索与书架', link: '/guide/library' },
            { text: '在线阅读', link: '/guide/online-reading' },
            { text: '下载与离线阅读', link: '/guide/offline-reading' },
            { text: '设置与显示', link: '/guide/settings' },
          ],
        },
        {
          text: '连接与平台',
          collapsed: true,
          items: [
            { text: '网络与安全', link: '/guide/network-security' },
            { text: '平台差异', link: '/guide/platforms' },
          ],
        },
        {
          text: '排查与参与',
          collapsed: false,
          items: [
            { text: '常见问题', link: '/guide/troubleshooting' },
            { text: '反馈问题与贡献', link: '/guide/contributing' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/talebook/moke' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置',
            backButtonTitle: '关闭',
            noResultsText: '未找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc',
            },
          },
        },
      },
    },
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '目录' },
    darkModeSwitchTitle: '切换至深色主题',
    lightModeSwitchTitle: '切换至浅色主题',
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    editLink: {
      pattern: 'https://github.com/hehetoshang/website/edit/main/site/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    lastUpdated: { text: '最后更新于' },
    footer: {
      message: '连接 Talebook，使用 Readest 阅读',
      copyright: 'Copyright © 2026 Moke Contributors',
    },
  },
})
