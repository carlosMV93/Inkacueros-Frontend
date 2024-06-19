<template>
  <div class="p-10">
    <div class="text-2xl font-bold text-gray-500">Mi Carrito</div>
    <div class="grid grid-cols-3 gap-5 pt-5">
      <div class="col-span-2">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Imagen</th>
              <th class="text-left">Producto</th>
              <th class="text-left">Precio</th>
              <th class="text-left">Cantidad</th>
              <th class="text-left">Subtotal</th>
              <th class="text-left">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataTrolley" :key="item.product.id">
              <td>
                <div class="w-[4rem]">
                  <ImgComponentVue :product="item.product" />
                </div>
              </td>
              <td>{{ item.product.Name }}</td>
              <td>{{ item.product.Price }}</td>
              <td class="flex justify-start items-center">
                <div class="relative flex items-center max-w-[8rem] mt-5">
                  <button type="button" @click="decrement"
                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                    <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="quantity-input" v-model="quantity"
                    class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                    required />
                  <button type="button" @click="increment"
                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                    <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </td>
              <td>{{ subTotal }}</td>
              <td>
                <v-btn icon="mdi-delete" variant="tonal" size="small" color="red"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div class="col-span-1">
        <v-card class="mx-auto shadow-lg w-full">
          <v-card-text>
            <p class="text-lg text-indigo-500 font-bold">Resumen del carrito</p>
            <div class="pt-3 pb-3">
              <div class="flex flex-col border border-gray-500 rounded-lg">
                <div class="flex justify-between border-b border-gray-500 p-3">
                  <span>Subtotal</span>
                  <span>S/. {{ subTotal }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-500 p-3">
                  <span>Envío</span>
                  <span>S/. 35</span>
                </div>
                <div class="flex justify-between p-3 font-bold">
                  <span>Total</span>
                  <span>S/.{{ subTotal + 35 }} </span>
                </div>
              </div>
            </div>
            <v-btn color="indigo" class="w-full">Checkout</v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { onMounted, ref } from "vue";
import ImgComponentVue from '@/components/generales/ImgComponent.vue';

export default {
  components: { ImgComponentVue },
  setup() {
    const dataTrolley = ref([]);
    const quantity = ref(0);
    const subTotal = ref(0);

    const increment = () => {
      quantity.value++;
      subTotal.value = quantity.value * dataTrolley.value[0].product.Price;
    }

    const decrement = () => {
      if (quantity.value > 0) {
        quantity.value--;
        subTotal.value = quantity.value * dataTrolley.value[0].product.Price;
      }
    }

    onMounted(() => {
      dataTrolley.value = store.state.trolley;
      quantity.value = dataTrolley.value[0].amount;
      subTotal.value = quantity.value * dataTrolley.value[0].product.Price;
    });

    return {
      dataTrolley,
      increment,
      decrement,
      subTotal,
      quantity
    };
  },
};
</script>
