const path = require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./js/main.js',
    output:{
        filename:'build.js',    //这里是filename
        path:path.resolve(__dirname,'./dist')
    },
    plugins:[
        // new uglify(),
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    },
    devServer:{
        port:8800
    }
}