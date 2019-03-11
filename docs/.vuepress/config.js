const name = 'vuepress-plugin-serve'

const getEcosystem = (locale, ecosystem, plugins, themes, others) => ({
  text: ecosystem,
  items: [{
    text: plugins,
    items: [{
      text: 'vuepress-plugin-mathjax',
      link: `https://Shigma.github.io/vuepress-plugin-mathjax/${locale}`,
    }, {
      text: 'vuepress-plugin-migrate',
      link: `https://Shigma.github.io/vuepress-plugin-migrate/${locale}`,
    }, {
      text: 'vuepress-plugin-pangu',
      link: 'https://Shigma.github.io/markdown-it-pangu/',
    }]
  }, {
    text: others,
    items: [{
      text: 'vuepress-mergeable',
      link: `https://Shigma.github.io/vuepress-mergeable/${locale}`,
    }]
  }],
})

const guideSidebar = () => [
  '',
  'config.html',
]

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    'serve',
  ],
  
  locales: {
    '/': {
      lang: 'en-US',
      title: name,
      description: 'A VuePress plugin which serves generated files',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: name,
      description: '一个在本地构建生产服务器的 VuePress 插件',
    },
  },
  
  themeConfig: {
    repo: `Shigma/${name}`,
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          getEcosystem('', 'Ecosystem', 'Plugins', 'Themes', 'Others')
        ],
        sidebar: {
          '/': guideSidebar(),
        },
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          getEcosystem('zh/', '生态系统', '插件', '主题', '其他')
        ],
        sidebar: {
          '/zh/': guideSidebar(),
        },
      },
    },
  },

  evergreen: !isProd,
})
