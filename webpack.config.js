module.exports = {
    module: {
      rules: [
        {
          test: /\.jsx?$/, // Ensure both .js and .jsx are supported
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/, // Add CSS support
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Ensure Webpack resolves JSX files
    },
  };
  