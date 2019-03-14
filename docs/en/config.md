# Configuration

## commandName

- **type:** `string`
- **default:** `'serve'`

Vuepress-plugin-serve will add a vuepress command. This option can be used to specify the command name.

## host

- **type:** `string`
- **default:** `'localhost'`

Specify the host to use for the server.

## port

- **type:** `number`
- **default:** `8080`

Specify the port to use for the server.

## staticOptions

- **type:** `object`
- **default:** `{}`

Options for [serve-static](https://github.com/expressjs/serve-static#servestaticroot-options).

## beforeServer

- **type:** `(app, server) => void`
- **default:** `undefined`

Executed before the server accepts client information. Similar to VuePress's [beforeDevServer](https://v1.vuepress.vuejs.org/en/plugin/option-api.html#beforedevserver) option.

## afterServer

- **type:** `async (app, server) => void`
- **default:** `undefined`

Executed after the server accepts client information. Similar to VuePress's [afterDevServer](https://v1.vuepress.vuejs.org/en/plugin/option-api.html#afterdevserver) option.
