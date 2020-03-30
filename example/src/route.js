import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入首页
import Home from './pages/Home.vue';

// 配置路由
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/*',
      redirect: 'home'
    }]
});

export default router;
