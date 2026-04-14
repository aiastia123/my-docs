import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

export default defineConfig({
  // 基本信息
  lang: 'zh-CN',
  title: 'My Docs',
  // 部署路径配置：
  // - GitHub Pages: 默认 '/my-docs/'（改为你的仓库名）
  // - Cloudflare Pages: 自动检测 CF_PAGES 环境变量，使用 '/'
  // - 其他平台: 可设置环境变量 BASE='/' 来覆盖
  base: process.env.BASE || (process.env.CF_PAGES ? '/' : '/my-docs/'),
  description: '基于 VitePress 的文档模板',

  // 功能开关
  lastUpdated: true,
  cleanUrls: true,

  // Vite 插件配置
  vite: {
    plugins: [
      AutoSidebar({
        // 自动生成侧边栏
        collapsed: false,
        ignoreList: ['public'],
        titleFromFile: true, // 从 md 文件的标题读取侧边栏名称
      }),
    ],
  },

  // HTML 头部配置
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  // 主题配置
  themeConfig: {
    nav: navBar(),
    siteTitle: 'My Docs',
    logo: '/logo.svg',

    // 侧边栏由 vite-plugin-vitepress-auto-sidebar 自动生成
    // 无需手动配置 sidebar

    editLink: {
      pattern: 'https://github.com/aiastia123/my-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aiastia123/my-docs' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present',
    },

    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    outline: [1, 3],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
})

/* ========================================
 * 导航栏配置
 * ======================================== */
function navBar() {
  return [
    { text: '使用指南', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: '开发文档', link: '/dev/basic', activeMatch: '/dev/' },
    {
      text: '更多',
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/aiastia123/my-docs/releases',
        },
        {
          text: '贡献指南',
          link: '/guide/contributing',
        },
      ],
    },
  ]
}