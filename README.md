# insert-html-loader
在xhtml文件的指定处插入代码。

[![downloads](https://img.shields.io/npm/dm/insert-html-loader.svg)](https://yelloxing.github.io/npm-downloads?interval=7&packages=insert-html-loader)
[![install size](https://packagephobia.now.sh/badge?p=insert-html-loader)](https://packagephobia.now.sh/result?p=insert-html-loader)
[![Version](https://img.shields.io/npm/v/insert-html-loader.svg)](https://www.npmjs.com/package/insert-html-loader)
[![License](https://img.shields.io/npm/l/insert-html-loader.svg)](https://github.com/yelloxing/insert-html-loader/blob/master/LICENSE)

如何调试？
--------------------------------------

首先进入example例子项目，运行：

```bash
npm run debug
```

在需要调试的地方提前添加“ debugger ”语句，这和普通的web端调试一样，接着，在chrome浏览器地址栏中输入：

```
chrome://inspect/#devices
```

接着，请点击“ Open dedicated DevTools for Node ”后进入调试界面。

如何使用？
--------------------------------------

首先需要安装

```bash
npm install --save-dev insert-html-loader
```

接着在webpack.config.js中配置

 ```js
 loader: 'insert-html-loader',
     options: {
        // 调用插入钩子标签名称
        hook: "insert-html"
     }
```

在需要插入html-template的地方定义插槽，可以有任意多个

 ```html
 <insert-html>./XXX.html</insert-html>
 ```

当然，后缀不一定需要是.html，理论上，任意的后缀都可以，并且在非生产模式下是热更新的。

## 开源协议

[MIT](https://github.com/yelloxing/insert-html-loader/blob/master/LICENSE)

Copyright (c) 2019-2020 走一步 再走一步
