const webpack = require("webpack")
const {VueLoaderPlugin} = require("vue-loader")
const path = require("path")
const distRoot = path.resolve(__dirname, "dist")

module.exports = {
    mode: "development",
    devtool: "eval",
    entry: {
        app: "./src/index.ts"
    },
    resolve: {
        extensions: ["vue", "ts", "js", "json"],
        alias: {
            // 'vue': 'vue/dist/vue.js'
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    output: {
        path: distRoot,
        publicPath: '/dist/',
        filename: `[name]-dist.js`
    },
    /* 이건 도대체 왜 있는 거지
        https://github.com/ankurk91/vue-loading-overlay/commit/d8d78807577a77aa4f992cf69a00cde05e7cc4bc
    */
    // externals: {
    //     "vue": {
    //         commonjs: "vue",
    //         commonjs2: "vue",
    //         amd: "vue",
    //         root: "Vue"
    //     },
    // },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
              },
              {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                }
              },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}