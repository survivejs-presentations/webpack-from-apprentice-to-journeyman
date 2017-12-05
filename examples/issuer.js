const config = {
  module: {
    rules: [
      {
        test: /\.css$/,

        rules: [
          {
            issuer: /\.js$/, // Apply only to imports from js files
            use: "style-loader",
          },
          "css-loader",
        ],
      },
    ],
  },
};
