var nav = require('./nav.js')
var { XgNav, XgAppNav, IoTNav, IaIoTNav, DevNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: '5G生态实验室',
  description: '5G生态实验室',
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
            text: '5G基础网络',
            items: genNav(deepClone(XgNav), 'ZH')
          },
          {
            text: '5G应用消息',
            items: genNav(deepClone(XgAppNav), 'ZH')
          },
          {
            text: '物联网',
            items: genNav(deepClone(IoTNav), 'ZH')
          },
          {
            text: '工业互联网',
            items: genNav(deepClone(IaIoTNav), 'ZH')
          },
          {
            text: '技术',
            items: genNav(deepClone(DevNav), 'ZH')
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '5G网络',
              collapsable: true,
              children: genEssentialsSidebar('/zh')
            }
            // ,
            // {
            //   title: '5G应用',
            //   collapsable: true,
            //   children: genAdvancedSidebar('/zh')
            // }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '5G生态导读'
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
  const mapArr = ['/xg/5gc.md', '/xg/device.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = ['/xgapp/maap.md', '/xgapp/rcs.md']
  return mapArr.map(i => {
    return type + i
  })
}
