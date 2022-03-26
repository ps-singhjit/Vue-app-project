<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue Application</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/register"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/employees"
              >Employees</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/greet"
              >Greetings</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/counter"
              >Counter</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
</style>