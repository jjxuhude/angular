var webpack = require("webpack");
var path = require("path");

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({ //这是把jquery挂到全局上，不用每个模块都去require
            "$": 'jquery',
            "jQuery": 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js') //有多个入口文件的话提取公共部分，利用浏览器缓存
    ],
    entry: {
        "price/roomEntry": "./static/js/app/src/price/roomEntry.js", //入口文件的作用是进行页面的初始化，比如一些事件绑定，初始数据加载都是放在这里的。每个页面都可以有一个入口文件
        "inventory/room": "./static/js/app/src/inventory/room.js"
    },
    output: {
        path: path.join(__dirname, 'static/js/app/dist'),  //设置打包后的js的输出位置
        filename: "[name].js",  //和入口文件的名字相同
        publicPath: "./dist/"  //浏览器会从这个目录开始查找模块
    },
    resolve: {
        extensions: ['.js', ""],
        alias: {  //注册模块，以后用的时候可以直接requier("模块名")
            cookie: path.join(__dirname,"./static/js/jquery.cookie.js"),
            jquery: path.join(__dirname,"./static/js/jquery.min.js"),
            header: path.join(__dirname,"./static/js/app/src/common/header.js"),
            leftMenu: path.join(__dirname,"./static/js/app/src/common/leftMenu.js"),
            util: path.join(__dirname,"./static/js/app/src/common/util.js"),
            logout: path.join(__dirname,"./static/js/app/src/common/logout.js"),
            AJAXService: path.join(__dirname,"./static/js/app/src/common/AJAXService.js"),
            laydate: path.join(__dirname,"./static/js/lib/laydate/laydate.js"),
            accommodationPriceList: path.join(__dirname,"./static/js/app/src/price/accommodationPriceList.js"),
            virtualDOM: path.join(__dirname,"./static/js/app/src/common/virtualDOM.js"),
            trToggle: path.join(__dirname,"./static/js/app/src/common/trToggle.js")
        }
    },
    devtool: "sourcemap"  //生成用来调试的map
}