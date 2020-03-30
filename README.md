# insert-html-loader
在xhtml文件的指定处插入代码。

****
### 作者:心叶
### 邮箱:yelloxing@gmail.com
****

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

### 免责声明
------
*   项目中部分数据（如图片等）来自互联网，如果侵犯到对应权益者请联系我们，方便我们及时删除！
*   本项目保留贡献者全部权利，发生的任何纠纷，本项目作者和维护人概不负责，如有侵权，请及时和我们取得联系。
