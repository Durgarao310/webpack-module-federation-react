const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
            plugins: ['babel-plugin-styled-components'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[name].[contenthash][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'ui',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './Button': './src/components/Button',
        './Input': './src/components/Input',
        './Label': './src/components/Label',
        './Checkbox': './src/components/Checkbox',
        './ThemeProvider': './src/components/ThemeProvider',
        './ThemeToggleButton': './src/components/ThemeToggleButton',
      },
      remotes: {
        app: 'app@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true  },
        'react-dom': { singleton: true, eager: true },
        'styled-components': { singleton: true, eager: true },
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
};
