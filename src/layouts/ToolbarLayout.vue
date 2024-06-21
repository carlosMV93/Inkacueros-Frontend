<template>
  <v-toolbar color="brown-darken-1" dark fixed app>
    <div class="w-full flex justify-between items-center px-10">
      <div class="font-bold">
        <img :src="logoInkacueros" alt="" class="w-[5rem]" />
      </div>
      <div class="flex gap-4 items-center list-none">
        <template v-if="!statusAdmin">
          <router-link to="/" class="item-nav" href="/">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Inicio
            </li>
          </router-link>
          <router-link to="/products" class="item-nav" href="/products">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Productos
            </li>
          </router-link>
          <router-link to="/contacts" class="item-nav" href="/contacts">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Contactanos
            </li>
          </router-link>
        </template>
        <template v-else>
          <router-link to="/" class="item-nav" href="/">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Inicio
            </li>
          </router-link>
          <router-link to="/orders" class="item-nav" href="/orders">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Ordenes
            </li>
          </router-link>
          <router-link to="/contacts" class="item-nav" href="/contacts">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Contactanos
            </li>
          </router-link>
        </template>
      </div>
      <div class="flex gap-4 items-center list-none">
        <template v-if="!statusAdmin">
          <router-link to="/trolley" class="item-nav" href="/trolley">
            <div class="relative py-2">
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div v-if="cartItemCount > 0" class="absolute top-0 right-0">
                <p
                  class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                >
                  {{ cartItemCount }}
                </p>
              </div>
            </div>
          </router-link>
        </template>
        <template v-if="statusAuthenticated">
          <div class="flex gap-2 items-center">
            <img :src="avatarImage" alt="" class="w-10 h-10" />
            <span class="text-sm"
              >Hola, {{ usernameValue }} <br />
              <span class="text-xs">{{ roleUser }} </span></span
            >
          </div>
          <MenuAsPopoverVue
            :username="usernameValue"
            :rol="roleUser"
            :avatarPath="avatarImage"
          />
        </template>
        <template v-else>
          <router-link to="/login" class="item-nav" href="/login">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Login
            </li>
          </router-link>
          <router-link to="/register" class="item-nav" href="/register">
            <li
              class="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
            >
              Registro
            </li>
          </router-link>
        </template>
      </div>
    </div>
  </v-toolbar>
</template>
<script>
import store from "@/store";
import logoInkacueros from "@/assets/logoInkakueros.png";
import avatarImage from "@/assets/iconuser_hombre.png";
import { ref } from "vue";
import MenuAsPopoverVue from "@/components/generales/MenuAsPopover.vue";

export default {
  components: { MenuAsPopoverVue },
  computed: {
    cartItemCount() {
      return this.$store.state.trolley.length;
    },
    statusAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    statusAdmin() {
      return this.$store.state.role == "ADMIN" ? true : false;
    },
    roleUser() {
      return this.$store.state.role == "ADMIN" ? "Administrador" : "Usuario";
    },
    usernameValue() {
      return this.$store.state.username;
    },
  },
  data() {
    return {
      logoInkacueros,
      avatarImage,
    };
  },
  setup() {
    const isAuthenticated = ref(store.state.isAuthenticated);
    return {
      isAuthenticated,
    };
  },
};
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
