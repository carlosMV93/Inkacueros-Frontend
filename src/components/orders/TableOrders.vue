<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1 text-sm rounded-lg">
    <template v-slot:[`item.idproduct`]="{ item }"> P00{{ item.id }} </template>
    <template v-slot:[`item.amount`]="{}"> 19 </template>
    <template v-slot:[`item.total`]="{}"> 500 </template>
    <template v-slot:[`item.StatusOrderEmail`]="{ item }">
      <v-btn color="indigo" variant="tonal" v-if="item.StatusOrderEmail">Enviado</v-btn>
      <v-btn color="red" variant="tonal" v-else>No se envio</v-btn>
    </template>
    <template v-slot:[`item.detailSend`]="{}">
      <v-btn color="green" size="small">Ver</v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  props: {
    desserts: Array,
  },
  components: {
    VDataTable,
  },
  emits: ["delete-item", "edit-item"],
  data() {
    return {
      headers: [
        { title: "Cliente", align: "start", key: "IdOrder.Name" },
        { title: "Correo", align: "start", key: "IdUser.email" },
        { title: "Cod. Producto", align: "start", key: "idproduct" },
        { title: "Producto", align: "start", key: "IdProduct.Name" },
        { title: "Cantidad", align: "end", key: "amount" },
        { title: "Precio total", align: "end", key: "total" },
        { title: "Correo enviado", align: "end", key: "StatusOrderEmail" },
        { title: "Detalle enviado", align: "end", key: "detailSend" },
      ],
    };
  },
  setup(_, { emit }) {
    const editItem = (item) => {
      emit("edit-item", { item });
    };

    const deleteItem = (item) => {
      emit("delete-item", { item });
    };

    return {
      editItem,
      deleteItem,
    };
  },
};
</script>
