<template>
<div>
    <input type="text" v-model="username" placeholder="添加用户">
    <button @click="clickAdd">添加之后去列表</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    clickAdd () {
      const name = this.username
      this.$router.push({ path: '/user/user-list', query: { name } })
    }
  }
}
</script>
