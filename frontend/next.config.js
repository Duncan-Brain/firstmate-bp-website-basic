// Webpack config allows md files to be displayed

//"extends": ["eslint:recommended", "plugin:react/recommended", "airbnb", "airbnb/hooks", "plugin:@next/next/recommended"],
module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: [
          {
            loader: "raw-loader"
          },
        ],
      }
    )

    return config
  },
  // mocks and tests not tested natively
  eslint: {
    dirs: [
      'pages',
      'components',
      'lib',
      '__tests__',
      '__mocks__'
    ]
  },
}
