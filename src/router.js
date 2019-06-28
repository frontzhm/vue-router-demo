import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Profile from './views/Profile.vue'
// import User from './views/User.vue'
// import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "profile" */ Profile)
      // 懒加载的情况下 不能使用上面的那行
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      meta: {
        needLogin: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
      children: [
        {
          path: 'create-user',
          alias: '',
          component: () => import(/* webpackChunkName: "createUser" */ './views/CreateUser.vue')
        },
        {
          path: 'user-list',
          component: () => import(/* webpackChunkName: "userList" */ './views/UserList.vue')
        }
      ],
      meta: {
        needLogin: true
      }
    },

    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})
