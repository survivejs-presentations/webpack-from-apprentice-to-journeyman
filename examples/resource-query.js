const config = {
  module: {
    rules: [
      {
        test: /\.png$/,

        oneOf: [
          {
            resourceQuery: /inline/, // foo.png?inline
            use: "url-loader",
          },
          {
            resourceQuery: /external/, // foo.png?external
            use: "file-loader",
          },
        ],
      },
    ],
  },
};
