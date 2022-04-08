import { defineConfig } from 'dumi';

// const repo = 'dumi-template';

export default defineConfig({
  title: 'x-design-mobile',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: '/',
  publicPath: '/',
  exportStatic: {},
  navs: [null],
  // sass: {},
  // cssLoader: {
  //   import: true,
  //   modules: {
  //     rules: [
  //       {
  //         test: /\.css$/i,
  //         use: ["style-loader", "css-loader"],
  //       },
  //       {
  //         test: /\.scss$/,
  //         use: ["style-loader", "css-loader", "sass.loader"],
  //       }
  //       // {
  //       //   test: /\.less$/,
  //       //   use: ["style-loader", "css-loader", "less.loader"],
  //       // }
  //     ],
  //   }
  // }
  // more config: https://d.umijs.org/config
});
