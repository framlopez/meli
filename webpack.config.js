module.exports = {
  entry: [
    './source/index.jsx'
  ],
  output: {
    path: __dirname + '/public/scripts',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "/api/*": {
        target:"http://localhost:3001/",
        secure:"false"
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: /node_modules/
      }
    ]
  }
};
