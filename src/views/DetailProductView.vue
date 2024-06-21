<template>
  <div class="w-full flex justify-center py-10">
    <div class="w-[80%]">
      <div class="grid grid-cols-5 gap-5">
        <div class="col-span-2">
          <template v-if="product.id == 7">
            <img :src="producto1" alt="" class="h-full" />
          </template>
          <template v-else-if="product.id == 8">
            <img :src="producto2" alt="" class="h-full" />
          </template>
          <template v-else-if="product.id == 5">
            <img :src="producto3" alt="" class="h-full" />
          </template>
          <template v-else-if="product.id == 6">
            <img :src="producto4" alt="" class="h-full" />
          </template>
        </div>
        <div class="col-span-3">
          <p class="text-3xl font-bold pt-2 pb-4">{{ product.Name }}</p>
          <div class="py-5 flex justify-between gap-4 border-t-2 border-b-2 border-collapse">
            <div class="font-bold">Descripción:</div>
            <div v-html="renderDescription(product.Description)"></div>
          </div>
          <div class="py-5 flex justify-between gap-4 border-b-2 border-collapse">
            <p class="text-lg pt-4" v-if="product.IdBrand">
              Marca: {{ product.IdBrand.Name }}
            </p>
          </div>
          <div class="py-5 flex justify-between gap-4 border-b-2 border-collapse">
            <p class="text-lg pt-4" v-if="product.IdType">
              Categoria: {{ product.IdType.Name }}
            </p>
          </div>
          <p class="text-4xl py-3 text-indigo-500 font-bold pt-5">
            S/. {{ product.Price }}
          </p>
          <div class="pt-5 flex items-center gap-4">
            <div>
              <div class="relative flex items-center max-w-[8rem]">
                <button type="button" @click="decrement(index)"
                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h16" />
                  </svg>
                </button>
                <input type="text" v-model="amount" disabled
                  class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                  required />
                <button type="button" @click="increment(index)"
                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <v-btn color="indigo" @click="addTrolley">Agregar al carrito</v-btn>
            </div>
          </div>
        </div>
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
import producto1 from "@/assets/products/image1.png";
import producto2 from "@/assets/products/image2.png";
import producto3 from "@/assets/products/image3.png";
import producto4 from "@/assets/products/image4.png";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";
import { basicAlert } from "@/helpers/SweetAlert";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      producto1,
      producto2,
      producto3,
      producto4,
    };
  },
  setup() {
    const route = useRoute();
    const routeParams = ref(route.params);
    const product = ref({});
    const amount = ref(1);
    const dialogLoader = ref(false);

    onMounted(async () => {
      dialogLoader.value = true;
      product.value = store.state.productDetail;
      dialogLoader.value = false;
    });

    const increment = () => {
      amount.value++;
    };

    const decrement = () => {
      if (amount.value > 1) {
        amount.value--;
      }
    };

    const addTrolley = () => {
      if (amount.value > 0 && amount.value != "0") {
        let dataTrolley = store.state.trolley;
        const productExisting = dataTrolley.find(
          (item) => item.product.id == product.value.id
        );

        if (productExisting) {
          dataTrolley = dataTrolley.map((item) => {
            if (item.product.id == product.value.id) {
              return {
                product: item.product,
                amount: item.amount + parseInt(amount.value, 10),
              };
            }
            return item;
          });
        } else {
          dataTrolley.push({
            product: product.value,
            amount: parseInt(amount.value, 10),
          });
        }
        console.log(dataTrolley);
        store.commit("setTrolley", dataTrolley);
        Swal.fire({
          icon: "success",
          text: "Se ha agregado el producto correctamente",
          position: "bottom-end",
          showConfirmButton: false,
          timer: 5000,
          toast: true,
          customClass: {
            container: "swal-bottom-end",
          },
        });
      } else {
        basicAlert(
          () => { },
          "warning",
          "Advertencia",
          "Seleccione una cantidad mayor a 0 del producto"
        );
      }
    };

    const renderDescription = (description) => {
      // Reemplaza los <br> por saltos de línea en el texto HTML
      if (description) {
        return description.replace(/<br>/g, "\n");
      }
      else {
        return "";
      }
    };

    return {
      renderDescription,
      addTrolley,
      increment,
      decrement,
      dialogLoader,
      routeParams,
      amount,
      product,
    };
  },
};
</script>
