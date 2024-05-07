import { createRouter, createWebHistory } from 'vue-router'
// 引入组件

// 配置路由
const router = createRouter({
  // history: createWebHashHistory(), // 哈希模式
  history: createWebHistory(), // History模式
  // history: createWebHistory(process.env.BASE_URL),
  // 路由地址
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeIndex')
    },
    {
      path: '/message',
      component: () => import('../views/MessageList.vue')
    },
    {
      path: '/list',
      component: () => import('../views/ChangList.vue')
    }
  ]
})
// 暴露
export default router
