import Vue from 'vue'
import VueRouter from 'vue-router'
import InfoList from '@/views/InfoList.vue'
import Setting from '@/views/Setting.vue'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'InfoList',
    component: InfoList,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  },
]

const router = new VueRouter({
  routes
})

export default router
