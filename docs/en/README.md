---
sidebarDepth: 3
---

# Introduction

Vuepress-plugin-serve is a VuePress plugin which serves generated files.

## Usage

### Global Installation

```bash
npm install -g vuepress-plugin-serve
# OR
yarn global add vuepress-plugin-serve
```

### Local Installation

```bash
npm install vuepress-plugin-serve
# OR
yarn add vuepress-plugin-serve
```

### Add to `config.js`

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
or
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

See detailed configurations [here](./config.md).

## CLI

After using this plugin, VuePress will add a `serve` command. This command will created a server based on the generated files. It has the following options:

### --build

Execute `vuepress build` before creating the server.

### --open

Open the browser when the server is ready.

### --host `<host>`

See [host](./config.md#host).

### --port `<port>`

See [port](./config.md#port).
