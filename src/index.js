const express = require('express')
const chalk = require('chalk')
const path = require('path')
const opn = require('opn')

module.exports = (options, context) => ({
  extendCli(cli) {
    cli
      .command(options.commandName || 'serve', 'serve generated files')
      .option('-b, --build', 'build project before serving')
      .option('-p, --port <port>', 'use specified port (default: 8080)')
      .option('--host <host>', 'use specified host (default: 0.0.0.0)')
      .option('--open', 'open browser when ready')
      .allowUnknownOptions()
      .action(async (cliOptions) => {
        // build project first if specified
        if (cliOptions.build) {
          await context.build()
        }

        const {
          port = options.port || context.siteConfig.port || 8080,
          host = options.host || context.siteConfig.host || 'localhost',
        } = cliOptions

        // express instance
        const app = express()

        // serve static files
        app.use(context.base, express.static(context.outDir, options.staticOptions))

        // fallback to base url
        app.get(/.*/, (req, res, next) => {
          if (req.path.startsWith(context.base)) {
            res.sendFile(path.resolve(context.outDir, '404.html'))
          } {
            res.redirect(context.base)
          }
        })

        // create server
        const server = app.listen(port, host, async () => {
          if (typeof options.afterServer === 'function') {
            await options.afterServer(app, server)
          }

          const url = `http://${host}:${port}${context.base}`
          console.log(`Server listening at ${chalk.blue(url)}`)

          if (cliOptions.open) opn(url)
        })

        if (typeof options.beforeServer === 'function') {
          options.beforeServer(app, server)
        }
      })
  },
})
