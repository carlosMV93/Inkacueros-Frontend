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
            <tr v-for="(item, index) in dataTrolley" :key="item.product.id">
              <td>
                <div class="w-[4rem]">
                  <ImgComponentVue :product="item.product" />
                </div>
              </td>
              <td>{{ item.product.Name }}</td>
              <td>{{ item.product.Price }}</td>
              <td>
                <div class="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    @click="decrement(index)"
                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      class="w-3 h-3 text-gray-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    v-model="item.amount"
                    class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                    required
                  />
                  <button
                    type="button"
                    @click="increment(index)"
                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      class="w-3 h-3 text-gray-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td>{{ item.amount * item.product.Price }}</td>
              <td>
                <v-btn
                  icon="mdi-delete"
                  variant="tonal"
                  size="small"
                  color="red"
                  @click="removeItem(index)"
                ></v-btn>
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
                  <span>S/. {{ cartSubtotal }}</span>
                </div>
                <div class="flex justify-between p-3 font-bold">
                  <span>Total</span>
                  <span>S/.{{ cartSubtotal }} </span>
                </div>
              </div>
            </div>
            <v-btn color="indigo" class="w-full" @click="onCheckout"
              >Checkout</v-btn
            >
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import store from "@/store";
import { onMounted, ref, computed } from "vue";
import ImgComponentVue from "@/components/generales/ImgComponent.vue";
import { basicAlert } from "@/helpers/SweetAlert";

export default {
  components: { ImgComponentVue },
  setup() {
    const router = useRouter();
    const dataTrolley = ref([]);

    const increment = (index) => {
      dataTrolley.value[index].amount++;
    };

    const decrement = (index) => {
      if (dataTrolley.value[index].amount > 1) {
        dataTrolley.value[index].amount--;
      }
    };

    const removeItem = (index) => {
      dataTrolley.value.splice(index, 1);
      store.commit("setTrolley", dataTrolley.value);
    };

    const cartSubtotal = computed(() => {
      return dataTrolley.value.reduce((total, item) => {
        return total + item.amount * item.product.Price;
      }, 0);
    });

    onMounted(() => {
      dataTrolley.value = store.state.trolley.map((item) => ({
        ...item,
        amount: item.amount || 1,
      }));
    });

    const onCheckout = () => {
      if (dataTrolley.value.length > 0) {
        if (store.state.isAuthenticated) {
          store.commit("setTrolley", dataTrolley.value);
          router.push("/checkout");
        } else {
          basicAlert(
            () => {
              router.push("/login");
            },
            "warning",
            "Advertencia",
            "Debe ingresar a su cuenta para realizar el checkout"
          );
        }
      } else {
        basicAlert(
          () => {},
          "warning",
          "Advertencia",
          "Debe seleccionar tener al menos 1 producto en el carrito"
        );
      }
    };

    return {
      onCheckout,
      dataTrolley,
      increment,
      decrement,
      removeItem,
      cartSubtotal,
    };
  },
};
</script>
