<template>
  <div class="login">
    <h1>This is an login page</h1>
    <input type="checkbox" id="isLogin" v-model="isLogin">
    <label for="isLogin">已登录</label>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLogin: localStorage.isLogin === '1'
    }
  },
  watch: {
    isLogin (newValue) {
      const is = newValue ? '1' : '0'
      localStorage.isLogin = is
    }
  }
}
</script>
