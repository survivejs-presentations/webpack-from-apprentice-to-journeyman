// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  //Quote,
  Slide
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  commonschunk1: require("../images/commonschunk1.png"),
  commonschunk2: require("../images/commonschunk2.png"),
  codeSplitting: require("../images/codesplitting.png"),
  sourcemaps: require("../images/sourcemaps.png"),
  survivejs: require("../images/survivejs.png"),
  webpackProcess: require("../images/webpack-process.png"),
  webpackPopularity: require("../images/webpack-popularity.png"),
  webpackMergePopularity: require("../images/webpack-merge-popularity.png"),
  wdsOverlay: require("../images/wds-overlay.png")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Webpack - From Apprentice to Journeyman
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/what-is-webpack" textColor="white">What is Webpack</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.webpackProcess} height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="https://webpack.js.org/"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>entry</code> - Where to Start Bundling
          </Heading>
          <CodePane lang="javascript">
        {`{
  entry: {
    app: './entry.js',
  },
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>output</code> - Where to Emit Files
          </Heading>
          <CodePane lang="javascript">
        {`{
  output: {
    // Output to the build directory
    path: path.join(__dirname, 'build'),

    // Capture name from the entry using a pattern
    filename: '[name].js',
  },
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>module.rules</code> - How to Process?
          </Heading>
          <CodePane lang="javascript">
        {`{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>plugins</code> - What Additional Processing to Perform
          </Heading>
          <CodePane lang="javascript">
        {`{
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>resolve</code> - How to Resolve Modules
          </Heading>
          <CodePane lang="javascript">
        {`{
  resolve: {
    alias: { ... },
  },
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Configuration
          </Heading>
          <CodePane lang="javascript">
        {`module.exports = {
  entry: {
    app: './entry.js',
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],

  resolve: {
    alias: { ... },
  },
};`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Webpack
          </Heading>
          <Image src={images.webpackPopularity} margin="40px auto" height="364px" />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack&from=2014-03-19&to=2017-03-19">npm-stat.com</Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="https://opencollective.com/webpack"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Focus on <b>bundling</b></ListItem></Appear>
            <Appear><ListItem>Traverses dependency graph while matching using <b>loaders</b></ListItem></Appear>
            <Appear><ListItem><b>Configuration</b> is used to describe these transformations</ListItem></Appear>
            <Appear><ListItem><b>Plugins</b> have access to webpack <b>runtime hooks</b></ListItem></Appear>
            <Appear><ListItem><b>Code splitting</b> allows you to load functionality as you need</ListItem></Appear>
            <Appear><ListItem><b>Hot Module Replacement</b> popularized webpack</ListItem></Appear>
            <Appear><ListItem>Webpack can generate <b>hashes</b> to filenames for caching</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/developing">Developing</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/getting-started">Getting Started</Link>
          </Heading>
          <List>
            <Appear><ListItem><b>webpack app/index.js build/index.js</b></ListItem></Appear>
            <Appear><ListItem>Shortcut flags for common operations (avoid!)</ListItem></Appear>
            <Appear><ListItem>Current development at <Link href="https://github.com/webpack/webpack-cli">webpack-cli</Link></ListItem></Appear>
            <Appear><ListItem>Eventually you will need <b>webpack.config.js</b></ListItem></Appear>
            <Appear><ListItem>Use <Link href="https://www.npmjs.com/package/html-webpack-plugin">html-webpack-plugin</Link> for generating <b>index.html</b></ListItem></Appear>
            <Appear><ListItem>Use <b>package.json</b> <code>scripts</code> as your task runner</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/automatic-browser-refresh">Automatic Browser Refresh</Link>
          </Heading>
          <List>
            <Appear><ListItem><b>webpack --watch</b></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/webpack-dev-server">webpack-dev-server</Link></ListItem></Appear>
            <Appear><ListItem><b>--env</b>, <b>proxy</b></ListItem></Appear>
            <Appear><ListItem>Hot Module Replacement (HMR)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/linting">Linting JavaScript</Link>
          </Heading>
          <List>
            <Appear><ListItem>Lint to push code quality to a higher standard (disclaimer: does <b>not</b> replace testing)</ListItem></Appear>
            <Appear><ListItem>JSLint &rarr; <Link href="https://www.npmjs.com/package/jshint">JSHint</Link> &rarr; <Link href="http://eslint.org/">ESLint</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/eslint-config-airbnb">eslint-config-airbnb</Link></ListItem></Appear>
            <Appear><ListItem>Optional: connect with webpack using <Link href="https://www.npmjs.com/package/eslint-loader">eslint-loader</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/prettier">Prettier</Link> - Format code automatically</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/danger">Danger</Link> - High level checks (think PRs)</ListItem></Appear>
            <Appear><ListItem><Link href="http://editorconfig.org/">EditorConfig</Link> - Editor level consistency</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            WDS - Overlay Mode
          </Heading>
          <Image src={images.wdsOverlay} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            WDS - Overlay Mode Configuration
          </Heading>
          <CodePane lang="javascript">
        {`devServer: {
  ...

  // overlay: true captures only errors
  overlay: {
    errors: true,
    warnings: true,
  },
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/composing-configuration">Composing Configuration</Link>
          </Heading>
          <List>
            <Appear><ListItem>The need for different targets - development, production, ...</ListItem></Appear>
            <Appear><ListItem>How to manage the targets?</ListItem></Appear>
            <Appear><ListItem>Solutions: higher level abstractions, composition</ListItem></Appear>
            <Appear><ListItem>Option: abstract and consume configuration as a dependency</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            webpack-merge
          </Heading>
          <CodePane lang="bash">
        {`> merge = require('webpack-merge')
...
> merge(
... { a: [1], b: 5, c: 20 },
... { a: [2], b: 10, d: 421 }
... )
{ a: [ 1, 2 ], b: 10, c: 20, d: 421 }`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/webpack-merge">webpack-merge</Link>
          </Heading>
          <Image src={images.webpackMergePopularity} margin="40px auto" height="364px" />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack-merge&from=2015-06-19&to=2017-03-19">npm-stat.com</Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            webpack-merge with webpack
          </Heading>
          <CodePane lang="javascript">
        {`...

const commonConfig = merge([
  ...
]);

const productionConfig = merge([
  ...
]);

...

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Webpack provides specific techniques to speed up development</ListItem></Appear>
            <Appear><ListItem>Learn to use especially <Link href="https://www.npmjs.com/package/webpack-dev-server">webpack-dev-server</Link> well</ListItem></Appear>
            <Appear><ListItem>Lint code to push quality - different linters, different purposes</ListItem></Appear>
            <Appear><ListItem>Compose configuration to conquer complexity</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/styling" textColor="white">Styling</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/loading">Loading Styles</Link>
          </Heading>
          <List>
            <Appear><ListItem><code>use: ['style-loader', 'css-loader']</code></ListItem></Appear>
            <Appear><ListItem>Read as <code>style(css(input))</code></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/css-loader">css-loader</Link> evaluates <code>@import</code> and <code>url()</code> lookups</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/style-loader">style-loader</Link> injects CSS to the DOM and implements HMR</ListItem></Appear>
            <Appear><ListItem>Other formats supported through loaders</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/separating-css">Separating CSS</Link>
          </Heading>
          <List>
            <Appear><ListItem>Webpack inlines CSS by default &rarr; Flash of Unstyled Content (FOUC)</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/extract-text-webpack-plugin">extract-text-webpack-plugin (ETWP)</Link> and <Link href="https://www.npmjs.com/package/extract-loader">extract-loader</Link> to rescue</ListItem></Appear>
            <Appear><ListItem>ETWP works through a loader/plugin pair</ListItem></Appear>
            <Appear><ListItem>Usually you refer to CSS through JavaScript code but it can be maintained through entries or outside of webpack</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/autoprefixing">Autoprefixing</Link>
          </Heading>
          <List>
            <Appear><ListItem>Think of the legacy browsers!</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/autoprefixer">autoprefixer</Link>, a PostCSS plugin, can solve this</ListItem></Appear>
            <Appear><ListItem>Define a <b>browserslist</b>, let tooling do the rest</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            browserslist
          </Heading>
          <CodePane lang="bash">
        {`> 1% # Browser usage over 1%
Last 2 versions # Or last two versions
IE 8 # Or IE 8`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/eliminating-unused-css">Eliminating Unused CSS</Link>
          </Heading>
          <List>
            <Appear><ListItem>Often CSS frameworks come with unused rules</ListItem></Appear>
            <Appear><ListItem>Eliminating those rules will make your CSS bundle smaller</ListItem></Appear>
            <Appear><ListItem>Ideal for static sites, more complex in dynamic cases</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/purify-css">purify-css</Link> and <Link href="https://www.npmjs.com/package/purifycss-webpack">purifycss-webpack</Link> can do this</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/uncss">uncss</Link> is another option</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/linting">Linting CSS</Link>
          </Heading>
          <List>
            <Appear><ListItem>Lint CSS too</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/stylelint">Stylelint</Link> through PostCSS is enough</ListItem></Appear>
            <Appear><ListItem><Link href="http://csslint.net/">CSSLint</Link> is another option</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Starting points: <Link href="https://www.npmjs.com/package/style-loader">style-loader</Link>, <Link href="https://www.npmjs.com/package/css-loader">css-loader</Link></ListItem></Appear>
            <Appear><ListItem>Since webpack inlines CSS by default, you will have to <b>extract</b></ListItem></Appear>
            <Appear><ListItem><b>Autoprefix</b> to save time and to support legacy browsers</ListItem></Appear>
            <Appear><ListItem>Manage browser support through a <b>browserslist</b></ListItem></Appear>
            <Appear><ListItem><b>Eliminate unused CSS</b> to decrease payload</ListItem></Appear>
            <Appear><ListItem>Remember to <b>lint CSS</b> too</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/loading" textColor="white">Loading Assets</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/loader-definitions">Loader Definition</Link>
          </Heading>
          <CodePane lang="javascript">
        {`module: {
  rules: [
    {
      // **Conditions**
      // Match files against RegExp or a function.
      test: /\.js$/,

      // **Restrictions**
      include: path.join(__dirname, 'app'),
      exclude(path) {
        return path.match(/node_modules/);
      },

      // **Actions**
      use: 'babel-loader',
    },
  ],
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loader Evaluation Order
          </Heading>
          <CodePane lang="javascript">
        {`{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}`}
          </CodePane>
          <Layout>equals</Layout>
          <CodePane lang="javascript">
        {`{
  test: /\.css$/,
  use: ['style-loader'],
},
{
  test: /\.css$/,
  use: ['css-loader'],
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Enforcing Order
          </Heading>
          <CodePane lang="javascript">
        {`{
  // Conditions
  test: /\.js$/,
  enforce: 'pre', // 'post' too

  // Actions
  use: 'eslint-loader',
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Inline Definitions
          </Heading>
          <CodePane lang="javascript">
        {`// Process foo.png through url-loader and other
// possible matches.
import 'url-loader!./foo.png';

// Override possible higher level match completely
import '!!url-loader!./bar.png';`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loading Based on <code>resourceQuery</code>
          </Heading>
          <CodePane lang="javascript">
        {`{
  test: /\.css$/,

  oneOf: [
    {
      resourceQuery: /inline/,
      use: 'url-loader',
    },
    {
      resourceQuery: /external/,
      use: 'file-loader',
    },
  ],
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loading Based on <code>issuer</code>
          </Heading>
          <CodePane lang="javascript">
        {`{
  test: /\.css$/,

  rules: [
    {
      issuer: /\.js$/,
      use: 'style-loader',
    },
    {
      use: 'css-loader',
    },
  ],
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/images">Loading Images</Link>
          </Heading>
          <List>
            <Appear><ListItem>To inline or not?</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/url-loader">url-loader</Link> inlines (with a <code>limit</code>)</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/file-loader">file-loader</Link> returns paths and <b>emits</b> files</ListItem></Appear>
            <Appear><ListItem>Lots of other loaders for specific image related purposes (spriting, srcsets, etc.)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/fonts">Loading Fonts</Link>
          </Heading>
          <List>
            <Appear><ListItem><b>url-loader</b> and <b>file-loader</b> again</ListItem></Appear>
            <Appear><ListItem>Choose formats to support carefully. <Link href="https://www.npmjs.com/package/canifont">canifont</Link> to rescue.</ListItem></Appear>
            <Appear><ListItem>Specific loaders like <Link href="https://www.npmjs.com/package/webfonts-loader">webfonts-loader</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/javascript">Loading JavaScript</Link>
          </Heading>
          <List>
            <Appear><ListItem>Webpack processes ES6 modules but not specific features</ListItem></Appear>
            <Appear><ListItem>Problematic with legacy browsers!</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/babel-loader">babel-loader</Link> and <Link href="https://www.npmjs.com/package/babel-preset-env">babel-preset-env</Link> to rescue</ListItem></Appear>
            <Appear><ListItem><b>babel-preset-env</b> generates code/polyfills based on your browser definition</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/building" textColor="white">Building</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/source-maps">Source Maps</Link>
          </Heading>
          <Image src={images.sourcemaps} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Source Maps in Webpack
          </Heading>
          <List>
            <Appear><ListItem>Inline and separate</ListItem></Appear>
            <Appear><ListItem>Inline source maps are <b>included</b> in bundles</ListItem></Appear>
            <Appear><ListItem>Separate source maps are written to <b>separate</b> files</ListItem></Appear>
            <Appear><ListItem>Inline === faster to rebundle, use for development</ListItem></Appear>
            <Appear><ListItem>Separate === slower to generate, use for production</ListItem></Appear>
            <Appear><ListItem>Hidden source maps give only stack traces (missing reference on purpose)</ListItem></Appear>
            <Appear><ListItem><code>devtool: 'source-map'</code>, plugins also</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/splitting-bundles">Splitting Bundles</Link>
          </Heading>
          <List>
            <Appear><ListItem>Anti-pattern - <b>Single</b> bundle with <b>application</b> and <b>vendor</b></ListItem></Appear>
            <Appear><ListItem>First step - Separate into two bundles</ListItem></Appear>
            <Appear><ListItem><code>CommonsChunkPlugin</code> can do the job</ListItem></Appear>
            <Appear><ListItem><code>AggressiveSplittingPlugin</code> and others for advanced chunk control</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Separating Application and Vendor
          </Heading>
          <Image src={images.commonschunk1} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>CommonsChunkPlugin</code>
          </Heading>
          <CodePane lang="javascript">
        {`module.exports = {
  ...
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
  ]
};

function isVendor({ resource }) {
  return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/);
}`}
          </CodePane>
        </Slide>


        <Slide transition={slideTransition}>
          <Heading size={2}>
            Default, children, async modes
          </Heading>
          <Image src={images.commonschunk2} margin="40px auto" height="324px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/code-splitting">Code Splitting</Link>
          </Heading>
          <Image src={images.codeSplitting} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>import()</code>
          </Heading>
          <CodePane lang="javascript">
            {`import('./module').then(
  (module) => {...}
).catch(
  (error) => {...}
);
`}
          </CodePane>
        </Slide>


        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>Promise</code> Patterns
          </Heading>
          <CodePane lang="javascript">
        {`Promise.all([
  import('lunr'),
  import('../search_index.json'),
]).then(([lunr, search]) => {
  return {
    index: lunr.Index.load(search.index),
    lines: search.lines,
  };
});`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>require.ensure</code>
          </Heading>
          <CodePane lang="javascript">
        {`require.ensure(
  // Modules to load, but not execute yet
  ['./load-earlier'],
  () => {
    const loadEarlier = require('./load-earlier');

    // Load later on demand and include to the same chunk
    const module1 = require('./module1');
    const module2 = require('./module2');

    ...
  },
  'optional name'
);`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/tidying-up">Tidying Up</Link>
          </Heading>
          <List>
            <Appear><ListItem>Even though webpack is a bundler, you can find task-oriented plugins for it</ListItem></Appear>
            <Appear><ListItem>Examples: <Link href="https://www.npmjs.com/package/clean-webpack-plugin">clean-webpack-plugin</Link>, <Link href="https://www.npmjs.com/package/git-revision-webpack-plugin">git-revision-webpack-plugin</Link>, <code>BannerPlugin</code></ListItem></Appear>
            <Appear><ListItem>Copy through <Link href="https://www.npmjs.com/package/copy-webpack-plugin">copy-webpack-plugin</Link> or outside of webpack</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Generate <b>source maps</b> to improve debugging flow</ListItem></Appear>
            <Appear><ListItem>Split bundles to benefit from <b>caching</b></ListItem></Appear>
            <Appear><ListItem>Split code to load functionality <b>as you need it</b></ListItem></Appear>
            <Appear><ListItem>Tidy up the build to avoid confusion and to attach metadata to the build</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://presentations.survivejs.com/webpack-from-journeyman-to-master">
            <Heading size={1}>
              Continue to the next presentation
            </Heading>
          </Link>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>
              SurviveJS
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}