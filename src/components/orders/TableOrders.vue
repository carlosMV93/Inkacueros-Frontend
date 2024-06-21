<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1 text-sm rounded-lg">
    <template v-slot:[`item.idproduct`]="{ item }">
      <div>
        <div v-for="(i, index) in item.IdProductsOrder" :key="i" class="p-1 rounded-md my-1"
          :style="{ backgroundColor: getColor(index) }">{{ i.id }}</div>
      </div>
    </template>
    <template v-slot:[`item.productName`]="{ item }">
      <div>
        <div v-for="(i, index) in item.IdProductsOrder" :key="i" class="p-1 rounded-md my-1"
          :style="{ backgroundColor: getColor(index) }"> {{
            getProductById(i.IdProduct)
          }}</div>
      </div>
    </template>
    <template v-slot:[`item.amount`]="{ item }">
      <div v-for="(i, index) in item.IdProductsOrder" :key="i" class="p-1 rounded-md my-1"
        :style="{ backgroundColor: getColor(index) }">{{ i.Amount }}</div>
    </template>
    <template v-slot:[`item.total`]="{ item }">
      <div v-for="(i, index) in item.IdProductsOrder" :key="i" class="p-1 rounded-md my-1"
        :style="{ backgroundColor: getColor(index) }">{{ i.TotalPrice }}</div>
    </template>
    <template v-slot:[`item.StatusOrderEmail`]="{ item }">
      <v-btn color="indigo" variant="tonal" v-if="item.StatusOrderEmail" size="small">Enviado</v-btn>
      <v-btn color="red" variant="tonal" v-else size="small">No se envio</v-btn>
    </template>
    <template v-slot:[`item.detailSend`]="{item}">
      <v-btn color="green" size="small" @click="goDetailOrder(item)">Ver</v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { VDataTable } from "vuetify/labs/VDataTable";
import { useRouter } from "vue-router";
import store from "@/store";

export default {
  props: {
    desserts: Array,
    products: Array,
  },
  components: {
    VDataTable,
  },
  methods: {
    getColor(index) {
      return this.colors[index % this.colors.length];
    },
    getProductById(id) {
      const product = this.products.find(item => item.id === id);
      return product ? product.Name : 'Unknown Product';
    },
  },
  emits: ["delete-item", "edit-item"],
  data() {
    return {
      colors: [
        '#FFCBC4', // Light Coral
        '#FFDFC4', // Peach
        '#FFF4C3', // Light Yellow
        '#E9F6E7', // Light Mint
        '#D5ECC2', // Light Green
        '#C9E4DE', // Light Aqua
        '#C2D4F0', // Light Blue
        '#D9CBE6', // Light Lavender
        '#FFD7D7', // Light Pink
        '#FFDCCF', // Light Apricot
      ],
      headers: [
        { title: "Cliente", align: "start", key: "IdOrder.Name" },
        { title: "Correo", align: "start", key: "IdUser.email" },
        { title: "Cod. Producto", align: "start", key: "idproduct" },
        { title: "Producto", align: "start", key: "productName" },
        { title: "Cantidad", align: "end", key: "amount" },
        { title: "Precio total", align: "end", key: "total" },
        { title: "Correo enviado", align: "end", key: "StatusOrderEmail" },
        { title: "Detalle enviado", align: "end", key: "detailSend" },
      ],
    };
  },
  setup(_, { emit }) {
    const router = useRouter();

    const editItem = (item) => {
      emit("edit-item", { item });
    };

    const deleteItem = (item) => {
      emit("delete-item", { item });
    };

    const goDetailOrder= (item) => {
      store.commit("setOrderDetail", item);
      router.push(`orders_detail`);
    }

    return {
      editItem,
      deleteItem,
      goDetailOrder
    };
  },
};
</script>
