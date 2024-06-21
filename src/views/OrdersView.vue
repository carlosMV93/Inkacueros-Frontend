<template>
  <div class="flex justify-center items-center p-10">
    <div class="w-full">
      <h1 class="text-center font-bold text-3xl py-3 text-gray-500 pb-10">
        Ordenes de pedido
      </h1>
      <TableOrders :desserts="dataOrders" :products="dataProducts" />
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
import { findAllOrdersApi } from "@/api/OrderService";
import { findAllProductsApi } from "@/api/ProductsService";
import TableOrders from "@/components/orders/TableOrders";
import { validateError } from "@/helpers/Validators";
import { onMounted, ref } from "vue";

export default {
  components: { TableOrders },
  setup() {
    const dataOrders = ref([]);
    const dataProducts = ref([]);
    const dialogLoader = ref(false);

    onMounted(async () => {
      dialogLoader.value = true;
      await readyData();
      dialogLoader.value = false;
    });

    const readyData = async () => {
      try {
        const [responseOrders, responseProducts] = await Promise.all([findAllOrdersApi(), findAllProductsApi()]);
        dataProducts.value = responseProducts.data;
        dataOrders.value = responseOrders.data;
      } catch (error) {
        console.log(error)
        validateError(error);
      }
    };

    return {
      dataProducts,
      dialogLoader,
      dataOrders,
    };
  },
};
</script>
