<template>
  <v-toolbar color="brown-darken-1" dark fixed app>
    <div class="w-full flex justify-between items-center px-10">
      <div class="font-bold">Inkacueros</div>
      <div class="flex gap-4 items-center list-none">
        <router-link to="/" class="item-nav" href="/">
          <li
            class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Inicio
          </li>
        </router-link>
        <router-link to="/home" class="item-nav" href="/home">
          <li
            class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Productos
          </li>
        </router-link>
        <router-link to="/home" class="item-nav" href="/home">
          <li
            class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Contactanos
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
  padding: 0.5rem 1rem;

  &.router-link-exact-active {
    border-radius: 5px;
    background-color: rgb(163, 102, 61);
  }
}
</style>
