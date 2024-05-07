import { createRouter, createWebHistory } from 'vue-router'
// 引入组件
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
// 配置路由
const router = createRouter({
  // history: createWebHashHistory(), // 哈希模式
  history: createWebHistory(), // History模式
  // history: createWebHistory(process.env.BASE_URL),
  // 路由地址
  routes: [
    {
      path: '/', // 路径
      component: Home // 组件
    },
    {
      path: '/about', // 路径
      component: About // 组件
    }
  ]
})
// 暴露
export default router
