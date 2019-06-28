<template>
  <div>
    <ul>
    <li v-for="item in usernames" :key="item">{{item}}</li>
  </ul>
  <router-link to="/user/create-user"><button>去添加用户</button></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usernames: ['user1', 'user2']
    }
  },
  created () {
    this.addName()
  },
  methods: {
    addName () {
      const newName = this.$route.query.name
      if (!newName) { return }
      const isExist = this.usernames.includes(newName)
      isExist || this.usernames.push(newName)
    }
  }

}
</script>
