<template>
  <div class="w-full flex justify-center py-10">
    <div class="w-[80%]">
      <div class="grid grid-cols-5 gap-5">
        <div class="col-span-2">
          <template v-if="product.id == 1">
            <img :src="producto1" alt="" class="w-full" />
          </template>
          <template v-else-if="product.id == 2">
            <img :src="producto2" alt="" class="w-full" />
          </template>
          <template v-else-if="product.id == 5">
            <img :src="producto3" alt="" class="w-full" />
          </template>
          <template v-else-if="product.id == 6">
            <img :src="producto4" alt="" class="w-full" />
          </template>
        </div>
        <div class="col-span-3">
          <p class="text-3xl font-bold pt-2 pb-4">{{ product.Name }}</p>
          <div
            class="py-5 flex justify-between gap-4 border-t-2 border-b-2 border-collapse"
          >
            <div class="font-bold">Descripción:</div>
            <div>
              {{ product.Description }}
            </div>
          </div>
          <div
            class="py-5 flex justify-between gap-4 border-b-2 border-collapse"
          >
            <p class="text-lg pt-4" v-if="product.IdBrand">
              Marca: {{ product.IdBrand.Name }}
            </p>
          </div>
          <div
            class="py-5 flex justify-between gap-4 border-b-2 border-collapse"
          >
            <p class="text-lg pt-4" v-if="product.IdType">
              Categoria: {{ product.IdType.Name }}
            </p>
          </div>
          <p class="text-4xl py-3 text-indigo-500 font-bold pt-5">
            S/. {{ product.Price }}
          </p>
          <div class="pt-5 flex items-center gap-4">
            <div>
              <v-text-field
                placeholder="Cantidad"
                variant="outlined"
                density="compact"
                color="indigo"
                type="number"
                hide-details
                v-model="amount"
              ></v-text-field>
            </div>
            <div>
              <v-btn color="indigo" @click="addTrolley"
                >Agregar al carrito</v-btn
              >
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
import producto1 from "@/assets/products/img1.png";
import producto2 from "@/assets/products/img2.png";
import producto3 from "@/assets/products/img3.jpg";
import producto4 from "@/assets/products/img4.jpg";
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
    const amount = ref(0);
    const dialogLoader = ref(false);

    onMounted(async () => {
      dialogLoader.value = true;
      product.value = store.state.productDetail;
      dialogLoader.value = false;
    });

    const addTrolley = () => {
      if (amount.value != 0 && amount.value != "0") {
        const dataTrolley = store.state.trolley;
        console.log("--------------------------------");
        console.log(dataTrolley);
        console.log("--------------------------------");
        dataTrolley.push({ product: product.value, amount: amount.value });
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
          () => {},
          "warning",
          "Advertencia",
          "Seleccione una cantidad mayor a 0 del producto"
        );
      }
    };

    return {
      addTrolley,
      dialogLoader,
      routeParams,
      amount,
      product,
    };
  },
};
</script>
