<template>
  <div class="p-10">
    <div>Mi Carrito</div>
    <div class="grid grid-cols-3 gap-5">
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
              <td></td>
              <td>{{ item.product.Name }}</td>
              <td>{{ item.product.Price }}</td>
              <td>
                <v-text-field
                  placeholder="Cantidad"
                  variant="outlined"
                  density="compact"
                  color="indigo"
                  type="number"
                  hide-details
                  :value="item.amount"
                ></v-text-field>
              </td>
              <td>1000</td>
              <td class="flex justify-start items-center">
                <v-btn icon="mdi-delete" variant="tonal" size="small"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div class="col-span-1">
        <v-card class="mx-auto shadow-lg w-full">
          <v-card-text>
            <p>Resumen del carrito</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const dataTrolley = ref([]);

    onMounted(() => {
      dataTrolley.value = store.state.trolley;
    });

    return {
      dataTrolley,
    };
  },
};
</script>
