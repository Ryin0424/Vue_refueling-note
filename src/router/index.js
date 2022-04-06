import Vue from 'vue'
import VueRouter from 'vue-router'
import InfoList from '@/views/InfoList.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
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
    component: Login,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
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
