import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/index"
  },
  {
    path:"/index",
    component:()=>import("../views/index/index.vue"),
    redirect:"/index/home",
    children:[
      {
        path:"/index/home",
        component:()=>import("../views/index/home/home.vue")
      },
      {
        path:"/index/my",
        component:()=>import("../views/index/my/my.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
