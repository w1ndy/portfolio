var path = require('path')
var webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const TerserPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const RobotstxtPlugin = require("robotstxt-webpack-plugin")
const PnpWebpackPlugin = require(`pnp-webpack-plugin`)

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    plugins: [
      PnpWebpackPlugin,
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      UPDATE_DATE: `"${(new Date()).toLocaleDateString()}"`
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.devtool = false
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './index.html'), to: '../' },
      { from: path.resolve(__dirname, './src/assets/cv_eng.pdf'), to: '../' },
      { from: path.resolve(__dirname, './src/assets/cv_chs.pdf'), to: '../' }
    ]),
    new SitemapPlugin('https://dweng.org', ['/'], {
      skipGzip: true,
      lastMod: true
    }),
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'public'),
      routes: ['/'],
      minify: {
        minifyCSS: true,
      },
      postProcess: route => {
        route.html = route.html
          .replace('id="main"', 'id="main" data-server-rendered="true"')
        return route;
      },
      renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
        injectProperty: '__PRERENDER_INJECTED',
        renderAfterDocumentEvent: 'render-event',
        defaultViewport: {
          width: 1920,
          height: 1080
        }
      })
    }),
    new RobotstxtPlugin({
      filePath: '../robots.txt',
      policy: [
        {
          userAgent: "*",
          disallow: "/fuzzy-tribble/"
        }
      ],
      sitemap: "https://dweng.org/dist/sitemap.xml",
      host: "https://dweng.org"
    })
  ])
}
