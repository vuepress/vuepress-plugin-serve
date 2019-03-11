---
sidebarDepth: 3
---

# 介绍

vuepress-plugin-serve 是一个用于从其他网站迁移到 VuePress 的插件。

## 用法

### 全局安装

```bash
npm install -g vuepress-plugin-serve
# 或者
yarn global add vuepress-plugin-serve
```

### 局部安装

```bash
npm install vuepress-plugin-serve
# 或者
yarn add vuepress-plugin-serve
```

### 添加到 `config.js`

```js
module.exports = {
  plugins: [
    ['serve', {
      post: 1234,
      staticOptions: {
        dotfiles: 'allow',
      },
    }],
  ]
}
```
或者
```js
module.exports = {
  plugins: {
    serve: {
      beforeServer(app, server) {
        app.get('/path/to/my/custom', function(req, res) {
          res.json({ custom: 'response' })
        })
      },
    },
  }
}
```

在[这里](./config.md)可以查看详细的配置。

## CLI

使用了这个插件以后，VuePress 会新增一个 `serve` 命令。这个命令会使用已经生成的文件来构建服务器。它拥有以下的选项：

### --build

在构建服务器前先执行一轮 `vuepress build`。

### --open

当服务端准备就绪时自动打开浏览器。

### --host `<host>`

参见[host](./config.md#host)。

### --port `<port>`

参见[port](./config.md#port)。
