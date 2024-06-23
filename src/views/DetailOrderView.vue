<template>
  <div class="flex justify-center items-center p-10">
    <div class="w-full">
      <h1 class="text-center font-bold text-3xl py-3 text-gray-500 pb-10">
        Detalle de envío
      </h1>
      <div class="grid grid-cols-3 w-full gap-4">
        <div class="col-span-1">
          <v-card class="mx-auto shadow-lg w-full" v-if="Object.keys(product).length > 0">
            <v-card-text>
              <div>
                <p class="text-gray-400 font-bold">Cliente</p>
                <div class="w-full bg-orange-100 p-2 rounded-md">
                  {{ product.IdOrder.Name }}
                </div>
              </div>
              <div class="mt-4">
                <p class="text-gray-400 font-bold">Correo</p>
                <div class="w-full bg-orange-100 p-2 rounded-md">
                  {{ product.IdUser.email }}
                </div>
              </div>
              <div class="mt-4">
                <p class="text-gray-400 font-bold">Productos</p>
                <div class="w-full bg-orange-100 p-2 rounded-md mt-1" v-for="item in product.IdProductsOrder"
                  :key="item">
                  {{ getProductById(item.IdProduct) }}
                </div>
              </div>
              <div class="mt-4">
                <p class="text-gray-400 font-bold">DNI/RUC</p>
                <div class="w-full bg-orange-100 p-2 rounded-md mt-1">
                  {{ product.IdentityDocument }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <v-card class="mx-auto shadow-lg w-full  col-span-2 p-10">
          <div class="w-full h-full rounded-md flex justify-center items-center">
            <div>
              El correo fue enviado correctamente({{ formatDate(product.creationDate)  }})
            </div>
          </div>
        </v-card>
      </div>
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
import { findAllProductsApi } from "@/api/ProductsService";
import { validateError } from "@/helpers/Validators";
import store from "@/store";
import { onMounted, ref } from "vue";

export default {
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }
  },
  setup() {
    const product = ref({});
    const dataProducts = ref([]);
    const dialogLoader = ref(false);

    onMounted(async () => {
      dialogLoader.value = true;
      await readyData();
      dialogLoader.value = false;
    });

    const readyData = async () => {
      try {
        console.log("-------------------------------1")
        console.log(store.state.orderDetail)
        console.log("-------------------------------1")
        product.value = store.state.orderDetail;
        const responseProducts = await findAllProductsApi();
        dataProducts.value = responseProducts.data;
      } catch (error) {
        console.log(error)
        validateError(error);
      }
    };

    const getProductById = (id) => {
      const productItem = dataProducts.value.find(item => item.id === id);
      return productItem ? productItem.Name : 'Unknown Product';
    };

    return {
      getProductById,
      dialogLoader,
      product
    };
  },
};
</script>
