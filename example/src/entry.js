import Vue from 'vue';

// 引入启动界面
import App from './App.vue';

// 引入路由文件
import router from './route';

// 引入基础样式
import '@yelloxing/normalize.css';

//根对象
window.vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启用路由
    router,

    // 启动vue
    render: createElement => createElement(App)
});
