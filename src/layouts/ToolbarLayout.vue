<template>
  <v-toolbar color="blue-darken-2" dark fixed app>
    <div class="w-full flex justify-between items-center px-3">
      <div>Sports Center</div>
      <div class="flex gap-4 items-center list-none">
        <li
          class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
        >
          Home
        </li>
        <li
          class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
        >
          Store
        </li>
        <li
          class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
        >
          Contact
        </li>
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
