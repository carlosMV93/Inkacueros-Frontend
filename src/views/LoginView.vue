<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="pb-10">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" min-width="448" max-width="600" rounded="lg">
        <div class="flex justify-center">
          <v-btn icon="mdi mdi-lock" variant="tonal" color="indigo"></v-btn>
        </div>
        <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

        <v-text-field density="compact" placeholder="Ingrese su usuario" prepend-inner-icon="mdi-account"
          variant="outlined" color="brown-darken-1" v-model="username"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contraseña

          <a class="text-caption text-decoration-none text-brown" href="#" rel="noopener noreferrer" target="_blank">
            Olvidaste tu contraseña?</a>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Ingrese su contraseña" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          color="brown-darken-1" v-model="password" @click:append-inner="visible = !visible"></v-text-field>

        <v-btn class="mb-8" color="brown-darken-1" size="large" variant="tonal" block @click="validateCredentials">
          Ingresar
        </v-btn>

        <v-card-text class="text-center">
          <router-link to="/register" class="item-nav" href="/register">
            <a class="text-brown text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
              Registrarse <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </router-link>
        </v-card-text>
      </v-card>
    </div>
  </div>
  <v-dialog v-model="dialogLoader" :scrim="false" persistent width="auto">
    <v-card color="brown-darken-1">
      <v-card-text>
        Procesando...
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { useRouter } from "vue-router";
import { loginApi } from "@/api/UsersService";
import { validateError } from "@/helpers/Validators";
import store from "@/store";
import { ref } from "vue";

export default {
  data: () => ({
    visible: false,
  }),
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const dialogLoader = ref(false);

    const validateCredentials = () => {
      dialogLoader.value = true;
      const data = {
        username: username.value,
        password: password.value,
      };
      loginApi(data)
        .then((response) => {
          dialogLoader.value = false;
          console.log("---------------------------");
          console.log(response.data);
          store.commit("setUsername", response.data.username);
          store.commit("setIsAuthenticated", true);
          router.push("/").then(() => {
            // Espera 2 segundos y luego recarga la vista
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          });
        })
        .catch((error) => {
          dialogLoader.value = false;
          validateError(error.response);
        });
    };

    return {
      validateCredentials,
      dialogLoader,
      username,
      password,
    };
  },
};
</script>
