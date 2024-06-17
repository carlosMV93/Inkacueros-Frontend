<template>
  <v-toolbar color="blue-darken-2" dark fixed app>
    <div class="w-full flex justify-between items-center px-3">
      <div>Sports Center</div>
      <div class="flex gap-4 items-center list-none">
        <router-link to="/" class="item-nav" href="/">
          <li
            class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Home
          </li>
        </router-link>
        <router-link to="/home" class="item-nav" href="/home">
          <li
            class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Store
          </li>
        </router-link>
        <router-link to="/home" class="item-nav" href="/home">
          <li
            class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Contact
          </li>
        </router-link>
      </div>
      <div class="flex gap-4 items-center list-none">
        <v-btn icon="mdi mdi-cart"></v-btn>
        <li>Login</li>
        <li>Register</li>
      </div>
    </div>
  </v-toolbar>
</template>
<script>
export default {};
</script>
<style scoped>
.item-nav {
  &.router-link-exact-active {
    border-bottom: 2px solid red;
  }
}
</style>
