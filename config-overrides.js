const {
  override,
  addLessLoader,
  addWebpackAlias,
  addWebpackModuleRule,
  addBabelPlugins,
  addBabelPreset,
  overrideDevServer,
} = require('customize-cra')

const fs = require('fs')

const path = require('path')

const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

// index.html 文件默认标题
const title = 'react-awesome-template'

// 是否输出配置到文件便于查看
const isOutputConfig = true

/**
 * @param target: 要遍历的对象
 * @param name: 插件名
 * @param callback: 回调函数，第一个参数为该插件对象
 * @return null
 */
function invade(target, name, callback) {
  target.forEach((item) => {
    // console.log(item)
    if (item.constructor.name === name) {
      callback(item)
    }
  })
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  paths: function (paths) {
    paths.appBuild = resolve('./dist')
    return paths
  },
  devServer: overrideDevServer((config) => {
    if (process.env.NODE_ENV === 'development') {
      config.proxy = {
        [process.env.REACT_APP_BASE_API]: {
          target: process.env.REACT_APP_SERVICE_URL,
          changeOrigin: true,
          pathRewrite: {
            ['^' + process.env.REACT_APP_BASE_API]: '',
          },
        },
      }
      isOutputConfig &&
        fs.writeFileSync(
          `./config-${process.env.NODE_ENV}-dev-server.json`,
          JSON.stringify(config)
        )
    }
    return config
  }),
  webpack: override(
    addWebpackAlias({
      '@': resolve('src'),
      '@a': resolve('src/assets'),
      '@c': resolve('src/components'),
      '@p': resolve('src/pages'),
    }),

    // 全局 less 资源
    addLessLoader({
      additionalData: `@import "${resolve('./src/styles/variable.less')}";`,
    }),

    // svg-sprite-loader
    addWebpackModuleRule({
      test: /\.svg$/,
      include: [resolve('src/icons')],
      use: [
        {
          loader: 'svg-sprite-loader',
          options: { symbolId: 'icon-[name]' },
        },
      ],
    }),

    // emotion css props support
    addBabelPreset('@emotion/babel-preset-css-prop'),

    // babel plugin
    addBabelPlugins(
      process.env.NODE_ENV === 'production' ? '@emotion' : 'dynamic-import-node'
    ),

    (config) => {
      if (process.env.NODE_ENV === 'production') {
        config.devtool = false

        // 去除 chunk 的 '.chunk' 部分
        config.output.chunkFilename = config.output.chunkFilename.replace(
          '.chunk',
          ''
        )

        // 去除 console 和注释
        invade(config.optimization.minimizer, 'TerserPlugin', (e) => {
          e.options.extractComments = false
          e.options.terserOptions.compress.drop_console = true
        })
        invade(config.plugins, 'MiniCssExtractPlugin', (e) => {
          e.options.chunkFilename = e.options.chunkFilename.replace(
            '.chunk',
            ''
          )
        })
        invade(config.plugins, 'HtmlWebpackPlugin', (e) => {
          e.options.title = title
        })

        // splitChunk 分包策略
        config.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial', // only package third parties that are initially dependent
            },
            commons: {
              name: 'chunk-commons',
              test: resolve('src/components'),
              minChunks: 3,
              priority: 5,
              reuseExistingChunk: true,
            },
            react: {
              name: 'chunk-react',
              priority: 20,
              test: /[\\/]node_modules[\\/]_?react(.*)/,
            },
          },
        }

        // 抽取 runtime 至 index.html 内联
        config.plugins.push(
          new ScriptExtHtmlWebpackPlugin({
            inline: /runtime\..*\.js$/,
          })
        )
        config.optimization.runtimeChunk = 'single'
      }

      isOutputConfig &&
        fs.writeFileSync(
          `./config-${process.env.NODE_ENV}.json`,
          JSON.stringify(config)
        )

      return config
    }
  ),
}
