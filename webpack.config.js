const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry : [
    path.join(__dirname,'src/main.js')
  ],
  output:{
    path : path.join(__dirname,'dist'),
    filename : 'bundle.js'
  },
  // content:__dirname + "/app",
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        use : [
          {
            loader : "babel-loader",
            options: {
              presets:['es2015']
            }
          }
        ],
        exclude : /node_modules/
      },
      {
        test : /\.css$/,
        use : ["style-loader","css-loader"],
        exclude : /node_modules/
      },
      {
        test : /\.less$/,
        use : ["style-loader","css-loader","less-loader"],
        exclude : /node_modules/
      }
    ]
  },

  devServer : {
      port : 8888,
      hot : true,
      inline : true
  },

  plugins : [
    new webpack.BannerPlugin('create by andy!!')
  ]

};
