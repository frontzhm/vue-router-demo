# vue-router-demo

[看效果](http://120.79.52.223:3334/)

```shell
npm i
npm run serve
```
登录状态根据login页面的 选中状态

## 需求：

* 现在总共有四个页面 home profile user login，profile是个人中心的意思
* 然后 user下面有 create-user user-list
* 然后设置 只有登录之后 才能去 profile user 否则就跳转到 login
* 每个页面都有导航条

### 1.加四个视图和对应的路由

* `vue create router-apply`，先选择history模式好了
* views增加 每个页面的视图
* router那边配置路径
* app那边就可以写导航条了 `router-link router-view`
* 坑：发现懒加载的情况下，路径不能写成变量，但是可以别名

### 2.user那边增加子页面

* views增加 create-user user-list
* router那边配置路径
* user.vue那边增加router-view

### 3.user子页面能相互跳转，增加的用户跳转的时候传递到user-list

* create-user 有input框和跳转按钮，跳转的时候，带着值，用query的方式
* 顺便还可以设置`/user`路径的时候跳转到`/user/create-user`

### 4.设置只有登录才能去profile和user

* profile和user路径设置meta
* 在router那边增加`beforeEach`钩子

```js
// main.js
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
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

// router.js
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
}
```
