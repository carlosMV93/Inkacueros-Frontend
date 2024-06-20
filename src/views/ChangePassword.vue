<template>
    <div class="w-full h-full flex justify-center items-center">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" min-width="448" max-width="600" rounded="lg">
            <div class="flex justify-center">
                <v-btn icon="mdi mdi-key-change" variant="tonal" color="indigo"></v-btn>
            </div>
            <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

            <v-text-field density="compact" placeholder="Ingrese su usuario" prepend-inner-icon="mdi-account"
                variant="outlined" color="brown-darken-1" v-model="forgetusername"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Contraseña Actual
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Ingrese su contraseña actual" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" color="brown-darken-1" v-model="forgetLastPassword"
                @click:append-inner="visible = !visible"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Nueva Contraseña
            </div>

            <v-text-field :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible2 ? 'text' : 'password'" density="compact" placeholder="Ingrese su nueva contraseña"
                prepend-inner-icon="mdi-lock-outline" variant="outlined" color="brown-darken-1"
                v-model="forgetNewPassword" @click:append-inner="visible2 = !visible2"></v-text-field>

            <v-btn class="mb-8" color="brown-darken-1" size="large" variant="tonal" block @click="changePassword">
                Cambiar contraseña
            </v-btn>
        </v-card>
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { forgetPasswordApi } from '@/api/UsersService';
import { validateError } from '@/helpers/Validators';
import { basicAlert } from '@/helpers/SweetAlert';
import store from "@/store";

export default {
    data: () => ({
        visible: false,
        visible2: false,
    }),
    setup() {
        const router = useRouter();
        const forgetusername = ref("");
        const forgetLastPassword = ref("");
        const forgetNewPassword = ref("");
        const dialogLoader = ref(false);

        const changePassword = () => {
            dialogLoader.value = true;
            const data = {
                username: forgetusername.value,
                last_password: forgetLastPassword.value,
                new_password: forgetNewPassword.value
            }
            forgetPasswordApi(data)
                .then(() => {
                    dialogLoader.value = false;
                    basicAlert(
                        () => {
                            store.commit("setEmail", "");
                            store.commit("setUsername", "");
                            store.commit("setRole", "");
                            store.commit("setIsAuthenticated", false);
                            router.push("/login");
                        },
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
            changePassword,
            forgetusername,
            forgetLastPassword,
            forgetNewPassword,
            dialogLoader
        }
    }
}
</script>