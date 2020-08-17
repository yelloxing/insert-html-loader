/**
 * html代码文件指定位置插入索引代码
 * -------------------------
 * yelloxing 2019/04/19
 *
 * 使用方法：
 *
 * 首先在webpack.config.js中配置
 * loader: 'insert-html-loader',
 *    options: {
 *       // 调用插入钩子标签名称
 *       hook: "insert-html"
 *    }
 *
 * 在需要插入html-template的地方定义插槽，可以有任意多个
 * <insert-html>./XXX.html</insert-html>
 */

const path = require('path');
const fs = require("fs");
const loaderUtils = require('loader-utils');

module.exports = function (source) {

    let options = loaderUtils.getOptions(this) || {
        "hook": "insert-html-loader"
    };

    let hook = options["hook"];
    let context = this.context;

    const isProduction = options.productionMode || this.minimize || process.env.NODE_ENV === 'production';

    let files = [];

    let newSource = (function doInsert(template) {

        let temp = new RegExp("(<" + hook + ">[^<]+</" + hook + ">){1,}", 'g').exec(template);
        if (temp && temp[1]) {

            // 插入代码
            let url = temp[1].replace("<" + hook + ">", "").replace("</" + hook + ">", "");

            let full_url = path.join(context, url);

            //   加入路径
            files.push(full_url);

            let innsetCode = fs.readFileSync(full_url);

            template = template.replace(temp[1], (innsetCode + "").replace('<template>', '').replace('</template>', ''));

            // 继续解析
            return doInsert(template);
        }

        return template;
    })(source);

    // 如果不是生产环境
    if (!isProduction) {
        for (let i = 0; i < files.length; i++) {

            // 将文件添加到依赖中，从而实现热更新
            this.addDependency(files[i]);

        };
    }

    return newSource;
};
