<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="pb-10" v-if="typeForm == 'LOGIN'">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" min-width="448" max-width="600" rounded="lg">
        <div class="flex justify-center">
          <v-btn icon="mdi mdi-lock" variant="tonal" color="indigo"></v-btn>
        </div>
        <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

        <v-text-field density="compact" placeholder="Ingrese su usuario" prepend-inner-icon="mdi-account"
          variant="outlined" color="brown-darken-1" v-model="username"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contraseña
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
    <div class="pb-10" v-else-if="typeForm == 'FORGET'">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" min-width="448" max-width="600" rounded="lg">
        <div class="flex justify-center">
          <v-btn icon="mdi mdi-key-change" variant="tonal" color="indigo"></v-btn>
        </div>
        <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

        <v-text-field density="compact" placeholder="Ingrese su usuario" prepend-inner-icon="mdi-account"
          variant="outlined" color="brown-darken-1" v-model="forgetusername"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Nueva Contraseña
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Ingrese su contraseña" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          color="brown-darken-1" v-model="forgetpassword" @click:append-inner="visible = !visible"></v-text-field>

        <v-btn class="mb-8" color="brown-darken-1" size="large" variant="tonal" block @click="changePassword">
          Cambiar contraseña
        </v-btn>

        <v-card-text class="text-center">
          <span class="text-brown text-decoration-none cursor-pointer" @click="selectTypeForm('LOGIN')">
            <v-icon icon="mdi-chevron-left"></v-icon> Login
          </span>
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
import { forgetPasswordApi, loginApi } from "@/api/UsersService";
import { validateError } from "@/helpers/Validators";
import store from "@/store";
import { ref } from "vue";
import { basicAlert } from "@/helpers/SweetAlert";

export default {
  data: () => ({
    visible: false,
  }),
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const forgetusername = ref("");
    const forgetpassword = ref("");
    const dialogLoader = ref(false);
    const typeForm = ref("LOGIN");

    const selectTypeForm = (type) => {
      typeForm.value = type;
    };

    const validateCredentials = () => {
      dialogLoader.value = true;
      const data = {
        username: username.value,
        password: password.value,
      };
      loginApi(data)
        .then((response) => {
          console.log(response.data)
          dialogLoader.value = false;
          store.commit("setEmail", response.data.email);
          store.commit("setUsername", response.data.username);
          store.commit("setUserId", response.data.idUser);
          store.commit("setRole", response.data.admin ? "ADMIN" : "CLIENT");
          store.commit("setIsAuthenticated", true);
          router.push("/");
        })
        .catch((error) => {
          dialogLoader.value = false;
          validateError(error.response);
        });
    };

    const changePassword = () => {
      dialogLoader.value = true;
      const data = {
        username: forgetusername.value,
        new_password: forgetpassword.value
      }
      forgetPasswordApi(data)
        .then(() => {
          dialogLoader.value = false;
          basicAlert(
            () => { typeForm.value = "LOGIN" },
            "success",
            "Logrado",
            "Se ha cambiado correctamente la contraseña"
          );
        })
        .catch((error) => {
          dialogLoader.value = false;
          validateError(error.response);
        });
    }

    return {
      validateCredentials,
      changePassword,
      selectTypeForm,
      forgetusername,
      forgetpassword,
      dialogLoader,
      username,
      password,
      typeForm,
    };
  },
};
</script>
