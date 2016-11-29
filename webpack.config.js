var config = {
   entry: './client/main.jsx',

   output: {
      path: './client',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 3000
   },

   module: {
      loaders: [
         {
           test: /\.js?$/,
           // dont run node_modules or bower_components through babel loader
           exclude: /(node_modules|bower_components)/,
           // babel is alias for babel-loader
           // npm i babel-core babel-loader --save-dev
           loader: 'babel',
           query: {
                  presets: ['es2015', 'react']
               }
         },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   watch: true
}

module.exports = config;
