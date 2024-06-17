<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="pb-10 pt-15">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        min-width="448"
        max-width="600"
        rounded="lg"
      >
        <div class="flex justify-center">
          <v-btn icon="mdi mdi-lock" variant="tonal" color="indigo"></v-btn>
        </div>
        <div class="text-subtitle-1 text-medium-emphasis">Correo</div>

        <v-text-field
          density="compact"
          placeholder="Ingrese su correo"
          prepend-inner-icon="mdi-email"
          variant="outlined"
          color="brown-darken-1"
          v-model="email"
        ></v-text-field>
        <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

        <v-text-field
          density="compact"
          placeholder="Ingrese su usuario"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          color="brown-darken-1"
          v-model="username"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Contraseña

          <a
            class="text-caption text-decoration-none text-brown"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Olvidaste tu contraseña?</a
          >
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Ingrese su contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          color="brown-darken-1"
          v-model="password"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          class="mb-8"
          color="brown-darken-1"
          size="large"
          variant="tonal"
          block
          @click="onCreateUser"
        >
          Registrarse
        </v-btn>

        <v-card-text class="text-center">
          <router-link to="/login" class="item-nav" href="/login">
            <a
              class="text-brown text-decoration-none"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <v-icon icon="mdi-chevron-left"></v-icon>Ingresar
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
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { createUserApi } from "@/api/UsersService";
import { basicAlert } from "@/helpers/SweetAlert";
import { validateError } from "@/helpers/Validators";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  data: () => ({
    visible: false,
  }),
  setup() {
    const router = useRouter();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const dialogLoader = ref(false);

    const onCreateUser = () => {
      if (username.value != "" && email.value != "" && password.value != "") {
        dialogLoader.value = true;
        const data = {
          username: username.value,
          email: email.value,
          password: password.value,
          is_staff: true,
          is_superuser: true,
        };
        createUserApi(data)
          .then(() => {
            dialogLoader.value = false;
            basicAlert(
              () => {
                router.push("/login");
              },
              "success",
              "Logrado",
              "Se ha registrado el usuario correctamente"
            );
          })
          .catch((error) => {
            dialogLoader.value = false;
            validateError(error.response);
          });
      } else {
        basicAlert(
          () => {},
          "warning",
          "Advertencia",
          "Verfique que los campos no sean vacios"
        );
      }
    };

    return {
      onCreateUser,
      dialogLoader,
      username,
      email,
      password,
    };
  },
};
</script>
