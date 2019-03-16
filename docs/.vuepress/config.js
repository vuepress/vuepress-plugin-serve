const name = 'vuepress-plugin-serve'

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  theme: 'contrib',
  
  locales: {
    '/en/': {
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
    sidebar: [
      '',
      'config.html',
    ],
  },

  evergreen: !isProd,
})
