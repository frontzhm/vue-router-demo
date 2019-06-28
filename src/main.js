import Vue from 'vue'
import App from './App.vue'
import router from './router'
localStorage.isLogin = '1'
Vue.config.productionTip = false
// 这边手动控制
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const isLogin = localStorage.isLogin === '1'
    if (!isLogin) {
      next({
        path: '/login',
        // 方便登录之后返回来
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
