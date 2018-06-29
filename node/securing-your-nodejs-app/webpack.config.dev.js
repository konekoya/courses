import webpack      from "webpack";
import path         from "path";
import autoprefixer from "autoprefixer";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const sassLoaders = [
    "css?sourceMap",
    "postcss-loader",
    "sass?sourceMap"
];

const BABEL_QUERY = {
        plugins: [
        ["transform-es2015-spread"],
        ["transform-class-properties"],
        ["transform-es2015-classes"],
        [
            "react-transform",
            {
                transforms: [
                    {
                        transform: "react-transform-hmr",
                        imports:    ["react"],
                        locals:     ["module"]
                    }
                ]
            }
        ]
    ]
};

export default {
    debug: true,
    devtool: "source-map",
    noInfo: false,
    entry: [
        "react-hot-loader/patch",
        "babel-polyfill",
        "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
        "./src/index"
    ],
    target: "web",
    output: {
        path: __dirname + "/dist", // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./src"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, "shared"), path.join(__dirname, "src")],
                loader: "babel",
                query: BABEL_QUERY
            },
            {
                test: /(\.css)$/,
                loaders: ["style", "css"]},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")),
                include: [path.join(__dirname, "shared/assets/styles")]
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                loader: "url?limit=100000&name=[name].[ext]"
            },
            {
                test: /\.(eot)(\?\S*)?$/,
                loader: "url?limit=100000&mimetype=application/font-otf&name=[name].[ext]"
            },
            {
                test: /\.(woff|woff2)(\?\S*)?$/,
                loader: "url?limit=100000&mimetype=application/x-font-woff&name=[name].[ext]"
            },
            {
                test: /\.(ttf)(\?\S*)?$/,
                loader: "url?limit=100000&mimetype=application/octet-stream&name=[name].[ext]"
            },
            {
                test: /\.(svg)(\?\S*)?$/,
                loader: "url?limit=100000&mimetype=image/svg+xml&name=[name].[ext]"
            }
        ]
    },
    postcss: function() {
        return [autoprefixer({
            browsers: ["last 3 versions"]
        })];
    }
};