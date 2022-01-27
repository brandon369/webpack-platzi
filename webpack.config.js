const path = require('path'); //path esta disponible en node, no hay que instalar
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  // punto de entrada app
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  //dist estandar, aca se guarda el proyecto
    filename: "main.js" //Js resultante,
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.m?js$/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader"
        },
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/
      },
      {
        test: /\.(css|styl)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: "./public/index.html",
        filename: "index.html" //resultado de salida
      }),
    new MiniCssExtractPlugin(),
  ]

}
