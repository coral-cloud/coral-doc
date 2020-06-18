var nav = require('./nav.js')
var { IndustryNav, ProductNav, TechnicalNav, DevNav, PersonNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'doc-site',
  description: '文档站点',
  base: '/doc-site/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'wuhaocn/doc-site',
    docsRepo: 'wuhaocn/doc-site',
    docsDir: 'docs',
    editLinks: false,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '行业',
            items: genNav(deepClone(IndustryNav), 'ZH')
          },
          {
            text: '产品',
            items: genNav(deepClone(ProductNav), 'ZH')
          },
          {
            text: '技术',
            items: genNav(deepClone(TechnicalNav), 'ZH')
          },
          {
            text: '开发',
            items: genNav(deepClone(DevNav), 'ZH')
          },
          {
            text: '个人中心',
            items: genNav(deepClone(PersonNav), 'ZH')
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar('/zh')
            },
            {
              title: '进阶',
              collapsable: false,
              children: genAdvancedSidebar('/zh')
            },
            {
              title: '其它',
              collapsable: false,
              children: [
                '/zh/guide/other/faq.md',
                '/zh/guide/other/release-notes.md'
              ]
            }
          ],
          '/zh/feature/component/': getComponentSidebar(
            deepClone(PersonNav),
            'ZH'
          ),
          '/zh/feature/script/': [
            '/zh/feature/script/svgo.md',
            '/zh/feature/script/new.md'
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'A magical vue admin'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/layout.md',
    '/guide/essentials/router-and-nav.md',
    '/guide/essentials/permission.md',
    '/guide/essentials/tags-view.md',
    '/guide/essentials/new-page.md',
    '/guide/essentials/style.md',
    '/guide/essentials/server.md',
    '/guide/essentials/mock-api.md',
    '/guide/essentials/import.md',
    '/guide/essentials/deploy.md',
    '/guide/essentials/env.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/cors.md',
    '/guide/advanced/eslint.md',
    '/guide/advanced/git-hook.md',
    '/guide/advanced/style-guide.md',
    '/guide/advanced/lazy-loading.md',
    '/guide/advanced/chart.md',
    '/guide/advanced/icon.md',
    '/guide/advanced/cdn.md',
    '/guide/advanced/theme.md',
    '/guide/advanced/i18n.md',
    '/guide/advanced/error.md',
    '/guide/advanced/webpack.md',
    '/guide/advanced/sass.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
