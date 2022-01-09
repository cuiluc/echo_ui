const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './lib/index.js',
  mode: 'development',
  output: {
    // 打包后文件路径，以及名称
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      // 返回给使用者的全局变量的名称
      name: 'EchoUI',
      // 编译方式umd模式通用模式
      type: 'umd',
      // 返回后全局变量取到这个位置
      export: 'default'
    }
  },
  module: {
    rules: [
      // 关于vue文件的加载
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          // 用于将 vue 文件中的 vue 文件将 css分离出去
          MiniCssExtractPlugin.loader,
          'css-loader',
          "less-loader"
        ]
      },
      //  用于解析高阶js语法为低阶，保证兼容性
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // babel-loader 所需要的参数
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    // 分离css后的，样式文件名
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};
