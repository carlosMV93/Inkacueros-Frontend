<template>
  <div class="flex justify-center items-center p-10">
    <div class="w-full">
      <h1 class="text-center font-bold text-3xl py-3 text-gray-500 pb-10">
        Ordenes de pedido
      </h1>
      <TableOrders :desserts="dataOrders" />
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
import { findAllOrdersApi } from "@/api/OrderService";
import TableOrders from "@/components/orders/TableOrders";
import { validateError } from "@/helpers/Validators";
import { onMounted, ref } from "vue";

export default {
  components: { TableOrders },
  setup() {
    const dataOrders = ref([]);
    const dialogLoader = ref(false);

    onMounted(async () => {
      dialogLoader.value = true;
      await readyData();
      dialogLoader.value = false;
    });

    const readyData = async () => {
      await findAllOrdersApi()
        .then((response) => {
          dialogLoader.value = false;
          dataOrders.value = response.data;
        })
        .catch((error) => {
          dialogLoader.value = false;
          validateError(error.response);
        });
    };

    return {
      dialogLoader,
      dataOrders,
    };
  },
};
</script>
