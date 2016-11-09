var config = {
   entry: './client/main.js',

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
