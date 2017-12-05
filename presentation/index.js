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
  Slide,
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
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    commonschunk1: require("../images/commonschunk1.png"),
    commonschunk2: require("../images/commonschunk2.png"),
    codeSplitting: require("../images/codesplitting.png"),
    sourcemaps: require("../images/sourcemaps.png"),
    survivejs: require("../images/survivejs.png"),
    webpackProcess: require("../images/webpack-process.png"),
    webpackPopularity: require("../images/webpack-popularity.png"),
    webpackMergePopularity: require("../images/webpack-merge-popularity.png"),
    wdsOverlay: require("../images/wds-overlay.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quarternary: "rgba(255, 219, 169, 0.43)",
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

        <Slide transition={slideTransition}>
          <Heading size={2}>Topics</Heading>
          <List>
            <Appear>
              <ListItem>What is Webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>Developing</ListItem>
            </Appear>
            <Appear>
              <ListItem>Building</ListItem>
            </Appear>
            <Appear>
              <ListItem>Assets</ListItem>
            </Appear>
            <Appear>
              <ListItem>Bundle/code Splitting</ListItem>
            </Appear>
            <Appear>
              <ListItem>Build Analysis and Troubleshooting</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/what-is-webpack"
              textColor="white"
            >
              What is Webpack
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/appendices/comparison">
              Comparison of Build Tools
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <b>Task runners</b> and <b>bundlers</b> can complement each
                other
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                npm <b>package.json</b> can be used as a task runner as well
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Evolution from generic tools to specific ones</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.webpackProcess} height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>entry</code> - Where to Start Bundling
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/entry.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>output</code> - Where to Emit Files
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/output.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>module.rules</code> - How to Process?
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/rules.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>Focus on transforming assets</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>plugins</code> - What Additional Processing to Perform
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/plugins.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>The most powerful way to extend webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Access to entire <b>lifecycle</b> of webpack
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Webpack itself is a collection of plugins</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>resolve</code> - What Happens on <code>require/import</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/resolve.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>Hack around nasty packages</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Also for <code>loaders</code> (<code>resolveLoader</code>)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Configuration</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/configuration.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/getting-started">
              Get Started
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                0.{" "}
                <code>
                  mkdir demo && cd demo && npm init -y && npm i webpack -D
                </code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                1. Set up a project{" "}
                <Link href="https://survivejs.com/webpack/developing/getting-started">
                  as in the book
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2. Set up{" "}
                <Link href="https://www.npmjs.com/package/html-webpack-plugin">
                  html-webpack-plugin
                </Link>. Can you see why it is useful?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                3. Study webpack output. Can you see what is going on?*
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                4. Study{" "}
                <Link href="https://github.com/webpack/webpack.js.org/issues/487">
                  webpack class hierarchy
                </Link>**
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Webpack Output</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/webpack-output.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Recap</Heading>
          <List>
            <Appear>
              <ListItem>
                Focus on <b>bundling</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Traverses dependency graph while processing with <b>loaders</b>{" "}
                and applying <b>plugins</b>. Can you understand the difference?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Configuration</b> declares how to <b>transform</b> source.
                Also inline definitions (code splitting)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/developing">
              Developing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/webpack-dev-server">
              webpack-dev-server
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                0. Execute <code>npm run build -- --watch</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                1. Alter code and see what happens in the terminal
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2.{" "}
                <Link href="https://survivejs.com/webpack/developing/webpack-dev-server">
                  Follow the chapter setup
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>WDS - Overlay Mode</Heading>
          <Image src={images.wdsOverlay} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Building
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Managing Webpack Through <b>package.json</b>
          </Heading>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/npm-scripts.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/composing-configuration">
              Composing Configuration
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                The need for <b>different</b> targets - development, production,
                ...
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>How to manage the targets?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Solutions: higher level abstractions, composition
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Option: consume configuration as a dependency</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>webpack-merge</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/merge-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <div>merges to</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/merge-2.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>webpack-merge with webpack</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/merge-3.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/webpack-merge">
              webpack-merge
            </Link>
          </Heading>
          <Image
            src={images.webpackMergePopularity}
            margin="40px auto"
            height="364px"
          />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack-merge&from=2015-06-19&to=2017-03-19">
              npm-stat.com
            </Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Related Solutions</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/webpack-blocks">
                  webpack-blocks
                </Link>{" "}
                - Andy read the book!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://neutrino.js.org/">neutrino</Link> - Chaining
                DSL
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/create-react-app">
                  create-react-app
                </Link>{" "}
                - Opinionated wrapper for React development. See also{" "}
                <Link href="https://www.npmjs.com/package/react-app-rewired">
                  react-app-rewired
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/nwb">nwb</Link> - Less
                opinionated wrapper for React development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/kyt">kyt</Link> -
                Common app configuration in a single place
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Exercises</Heading>
          <List>
            <Appear>
              <ListItem>
                0. Port the configuration to{" "}
                <Link href="https://www.npmjs.com/package/webpack-merge">
                  webpack-merge
                </Link>{" "}
                as{" "}
                <Link href="https://survivejs.com/webpack/developing/composing-configuration">
                  in the book
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                1. Try different configuration file layouts (target per file
                etc.). Can you see pros/cons?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2. What would it take to package the configuration into
                something you can consume across multiple projects?
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/source-maps">
              Source Maps
            </Link>
          </Heading>
          <Image src={images.sourcemaps} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Inline Source Maps</Heading>
          <Heading size={4}>
            (<code>devtool: 'eval'</code>)
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/inline-source-map.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Inline Source Maps</Heading>
          <List>
            <Appear>
              <ListItem>
                Inline source maps are <b>included</b> in bundles
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Inline === fast to rebundle, use for development
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Separate Source Maps</Heading>
          <Heading size={4}>
            (<code>devtool: 'source-map'</code>)
          </Heading>
          <div>app.js</div>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/source-map-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <div>app.js.map</div>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/source-map-2.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Separate Source Maps</Heading>
          <List>
            <Appear>
              <ListItem>
                Separate source maps are written to <b>separate</b> files
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Separate === slow to generate, use for production
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Use plugins for more control</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Which option to use?</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://github.com/webpack/webpack/issues/2145#issuecomment-294361203">
                  GitHub to rescue
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>cheap-module-source-map</b>,{" "}
                <b>cheap-module-inline-source-map</b>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Exercises</Heading>
          <List>
            <Appear>
              <ListItem>0. Set up development source maps</ListItem>
            </Appear>
            <Appear>
              <ListItem>1. Set up production source maps</ListItem>
            </Appear>
            <Appear>
              <ListItem>2. Examine source maps in the browser</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Assets
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/styling"
              textColor="white"
            >
              Styling
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/loading">
              Loading Styles
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <code>use: ["style-loader", "css-loader"]</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/css-loader">
                  css-loader
                </Link>{" "}
                evaluates <code>@import</code> and <code>url()</code> lookups
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/style-loader">
                  style-loader
                </Link>{" "}
                injects CSS to the DOM and implements HMR
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Other formats supported through loaders</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up style loading and examine the output
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/separating-css">
              Separating CSS
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>Flash of Unstyled Content (FOUC)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/extract-text-webpack-plugin">
                  extract-text-webpack-plugin (ETWP)
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/extract-loader">
                  extract-loader
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up style extraction using the plugin (you
                can also try the loader)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Study{" "}
                <Link href="https://medium.com/webpack/the-new-css-workflow-step-1-79583bd107d7">
                  the proposed CSS workflow
                </Link>*
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/autoprefixing">
              Autoprefixing
            </Link>
          </Heading>
          <Appear>
            <CodePane
              lang="css"
              source={require("!!raw-loader!../examples/autoprefix-1.css")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <div>autoprefixes to</div>
          </Appear>
          <Appear>
            <CodePane
              lang="css"
              source={require("!!raw-loader!../examples/autoprefix-2.css")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/autoprefixer">
                  autoprefixer
                </Link>, a PostCSS plugin, can solve this
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up autoprefixing
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/browserslist">
              .browserslistrc
            </Link>
          </Heading>
          <CodePane
            source={require("!!raw-loader!../examples/browserslistrc")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/eliminating-unused-css">
              Eliminating Unused CSS
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Eliminate redundant rules to make your CSS bundle <b>smaller</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Ideal for <b>static sites</b>, more complex in dynamic cases
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/purify-css">
                  purify-css
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/purifycss-webpack">
                  purifycss-webpack
                </Link>{" "}
                or <Link href="https://www.npmjs.com/package/uncss">uncss</Link>{" "}
                is another option
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up style elimination
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Recap</Heading>
          <List>
            <Appear>
              <ListItem>
                Starting points:{" "}
                <Link href="https://www.npmjs.com/package/style-loader">
                  style-loader
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/css-loader">
                  css-loader
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Since webpack inlines CSS by default, you will have to{" "}
                <b>extract</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Autoprefix</b> to save time and to support legacy browsers
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Manage browser support through a <b>.browserslistrc</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Eliminate unused CSS</b> to decrease payload
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/images">
              Loading Images
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>To inline or not? Or to sprite?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/url-loader">
                  url-loader
                </Link>{" "}
                inlines (with a <code>limit</code>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/file-loader">
                  file-loader
                </Link>{" "}
                returns paths and <b>emits</b> files
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Loaders for specific purposes (spriting, srcsets, etc.)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up image loading
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/fonts">
              Loading Fonts
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <b>url-loader</b> and <b>file-loader</b> again
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Specific loaders like{" "}
                <Link href="https://www.npmjs.com/package/webfonts-loader">
                  webfonts-loader
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up font loading
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/javascript">
              Loading JavaScript
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Webpack processes ES6 modules but not specific features
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Problematic with legacy browsers!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/babel-loader">
                  babel-loader
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/babel-preset-env">
                  babel-preset-env
                </Link>{" "}
                to rescue
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Generate code/polyfills based on a <b>browser definition</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up Babel (target IE 8) and compare the
                output to previous
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/loading/loader-definitions/"
              textColor="white"
            >
              Understanding Loaders
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/loader-definitions">
              Loader Definition
            </Link>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/loader-definition.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Loader Evaluation Order</Heading>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/eval-1.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <div>equals</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/eval-2.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Enforcing Order</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/enforce-order.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Inline Definitions</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/inline.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Loading Based on <code>resourceQuery</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/resource-query.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loading Based on <code>issuer</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/issuer.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Study{" "}
                <Link href="https://github.com/webpack/webpack/blob/master/schemas/webpackOptionsSchema.json">
                  webpack configuration schema related to loaders
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Bundle/code Splitting
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/bundle-splitting">
              Bundle Splitting
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Anti-pattern - <b>Single</b> bundle with <b>application</b> and{" "}
                <b>vendor</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>First step - Separate into two bundles</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Second step - Apply hashes to file names bust cache
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>CommonsChunkPlugin</code> can do the job
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>AggressiveSplittingPlugin</code> etc. for more control
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Separating Application and Vendor
          </Heading>
          <Image src={images.commonschunk1} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>CommonsChunkPlugin</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/commons.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up bundle splitting
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/code-splitting">
              Code Splitting
            </Link>
          </Heading>
          <Image src={images.codeSplitting} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>import()</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/import.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                Familiar <code>Promise</code> patterns work here
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider{" "}
                <Link href="https://www.npmjs.com/package/react-loadable">
                  react-loadable
                </Link>{" "}
                and others
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b>{" "}
                <Link href="https://survivejs.com/webpack/building/code-splitting/">
                  Set up code splitting as in the book
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Code Splitting Output</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/split-output.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                In addition, a small <code>Promise</code> based bit to load the
                code
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/tidying-up">
              Tidying Up
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Even though webpack is a bundler, you can find task-oriented
                plugins for it
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Examples:{" "}
                <Link href="https://www.npmjs.com/package/clean-webpack-plugin">
                  clean-webpack-plugin
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/git-revision-webpack-plugin">
                  git-revision-webpack-plugin
                </Link>, <code>BannerPlugin</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Copy through{" "}
                <Link href="https://www.npmjs.com/package/copy-webpack-plugin">
                  copy-webpack-plugin
                </Link>{" "}
                or outside of webpack
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/optimizing/build-analysis/"
              textColor="white"
            >
              Build Analysis and Troubleshooting
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/build-analysis/">
              Analyzing Build Statistics
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                To know what your build consists of, generate{" "}
                <b>build statistics</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>--json</code> for statistics
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>--profile</code> to capture timing information
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Node API gives access to statistics too and you can find a
                couple of plugins
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Plenty of tools for analysis</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Generate stats and analyze through tooling
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/appendices/troubleshooting">
              Troubleshooting
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Follow a debugging process. This captures most problems.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If you found a real issue, take care in reporting it well
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Figure out whether the problem is on your side or in
                dependencies
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Figure out how to make your build error in
                different ways
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/webpack/">
            <Heading size={1}>SurviveJS - Webpack</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="324px" />
          <Heading size={2}>
            by <Link href="https://twitter.com/bebraw">Juho Vepsäläinen</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://presentations.survivejs.com/webpack-from-journeyman-to-master">
            <Heading size={1} fit>
              Continue to the next presentation
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
