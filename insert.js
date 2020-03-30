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
 * 在需要插入vue-template的地方定义插槽，可以有任意多个
 * <insert-html>./XXX.vue</insert-html>
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

  let newSource = (function doInsert(template) {

    let temp = new RegExp("(<" + hook + ">[^<]+</" + hook + ">){1,}", 'g').exec(template);
    if (temp && temp[1]) {

      // 插入代码
      let url = temp[1].replace("<" + hook + ">", "").replace("</" + hook + ">", "");

      let full_url=path.join(context,url);

      let innsetCode = fs.readFileSync(full_url);

      template = template.replace(temp[1], (innsetCode + "").replace('<template>', '').replace('</template>', ''));

      // 继续解析
      return doInsert(template);
    }

    return template;
  })(source);

  return newSource;
};