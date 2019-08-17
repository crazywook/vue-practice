const {VueLoaderPlugin} = require("vue-loader")
const path = require("path")
const distRoot = path.resolve(__dirname, "dist")

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        app: ["./src/index.ts"]
    },
    resolve: {
        extensions: ["vue", "ts", "js", "json"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    output: {
        path: distRoot,
        publicPath: '/dist/',
        filename: `[name]-dist.js`
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env'],
            //         }   
            //     }
            // },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
