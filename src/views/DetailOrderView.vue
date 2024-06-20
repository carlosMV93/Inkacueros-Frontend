<template>
  <div class="flex justify-center items-center p-10">
    <div class="w-full">
      <h1 class="text-center font-bold text-3xl py-3 text-gray-500 pb-10">
        Detalle de orden
      </h1>
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
import { ref } from "vue";

export default {
  setup() {
    const dialogLoader = ref(false);

    return {
      dialogLoader,
    };
  },
};
</script>
