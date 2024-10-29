const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.scss$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader', "sass-loader",], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/france.html',
      filename: 'france.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/bordeaux.html',
      filename: 'bordeaux.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/price.html',
      filename: 'price.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};