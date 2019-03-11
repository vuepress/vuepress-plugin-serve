# 配置

## commandName

- **类型:** `string`
- **默认值:** `'serve'`

vuepress-plugin-serve 会增加一个 vuepress 命令，这个选项可用于自定义命令名称。

## host

- **类型:** `string`
- **默认值:** `'localhost'`

指定服务器的主机名。

## port

- **类型:** `number`
- **默认值:** `8080`

指定服务器监听的端口。

## staticOptions

- **类型:** `object`
- **默认值:** `{}`

提供给 [serve-static](https://github.com/expressjs/serve-static#servestaticroot-options) 的选项。

## beforeServer

- **类型:** `(app, server) => void`
- **默认值:** `undefined`

在服务器接受客户端信息之前执行。类似于 VuePress 的 [beforeDevServer](https://v1.vuepress.vuejs.org/zh/plugin/option-api.html#beforedevserver) 选项。

## afterServer

- **类型:** `async (app, server) => void`
- **默认值:** `undefined`

在服务器接受客户端信息之后执行。类似于 VuePress 的 [afterDevServer](https://v1.vuepress.vuejs.org/zh/plugin/option-api.html#afterdevserver) 选项。
