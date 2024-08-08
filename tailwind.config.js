/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// const webpack = require('webpack');

// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [
//       //...
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'images/[hash]-[name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   //...
// };

// module.exports = {
//   entry: "./src/index.js",
//   module: {
//     rules: [
//       //...
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         type: "asset/resource",
//       },
//     ],
//   },
//   //...
// };