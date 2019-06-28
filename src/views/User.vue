<template>
  <div class="user">
    <h1>This is an user page</h1>
    <section class="container">
      <nav>
        <router-link to="/user/create-user">create-user</router-link><br>
        <router-link to="/user/user-list">user-list</router-link>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </section>
  </div>
</template>
<style scoped>
.container{
  display: flex;
  width: 800px;
  margin: 50px auto;
}
nav{
  flex-basis: 300px;
  border-right: 1px solid;
}
main{
  flex:1;
}
</style>
