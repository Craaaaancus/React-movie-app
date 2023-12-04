import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type BuildMode = 'production' | 'development';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: { path: path.resolve(__dirname, 'build') },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: 'convertColors',
                      params: {
                        currentColor: true,
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/,
          type: 'asset/inline',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(js|ts)x?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devtool: 'source-map',
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
          hot: true,
        }
      : undefined,
  };

  return config;
};
