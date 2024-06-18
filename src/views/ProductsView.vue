<template>
  <div class="p-10">
    <div class="w-full grid grid-cols-4">
      <div class="col-span-1 p-4">
        <v-text-field placeholder="Buscar producto" variant="outlined" density="compact" color="indigo"></v-text-field>
        <v-card class="mx-auto shadow-lg w-full">
          <v-card-text>
            <div>Orden</div>
            <v-radio-group color="indigo" v-model="orderSelect">
              <v-radio label="Ascendente" value="1"></v-radio>
              <v-radio label="Descendente" value="2"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto shadow-lg mt-3 w-full">
          <v-card-text>
            <div>Categoria</div>
            <v-radio-group v-model="typeSelect" color="indigo">
              <v-radio label="Todos" value="0"></v-radio>
              <v-radio :label="type.Name" :value="type.id" v-for="type in dataTypes" :key="type.id"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto shadow-lg mt-3 w-full">
          <v-card-text>
            <div>Marca</div>
            <v-radio-group v-model="brandSelect" color="indigo">
              <v-radio label="Todos" value="0"></v-radio>
              <v-radio :label="brand.Name" :value="brand.id" v-for="brand in dataBrand" :key="brand.id"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </div>
      <div class="col-span-3 container_cards_products auto-rows-min">
        <CardProduct :product="product" v-for="product in sortedProducts" :key="product.id"
          @go-detail="goDetailProduct" />
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
import { findAllBrandsApi } from '@/api/BrandService';
import { findAllProductsApi } from '@/api/ProductsService';
import { findAllTypesApi } from '@/api/TypesService';
import CardProduct from '@/components/products/CardProducts.vue';
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default ({
  components: { CardProduct },
  setup() {
    const dataBrand = ref([]);
    const dataTypes = ref([]);
    const dataProducts = ref([]);
    const dialogLoader = ref(false);
    const orderSelect = ref("1");
    const brandSelect = ref(0);
    const typeSelect = ref(0);
    const router = useRouter();

    onMounted(async () => {
      dialogLoader.value = true;
      await readyData();
      dialogLoader.value = false;
    });

    const readyData = async () => {
      const [brandsResponse, typesResponse, productsResponse] = await Promise.all([findAllBrandsApi(), findAllTypesApi(), findAllProductsApi()]);
      dataBrand.value = brandsResponse.data;
      dataTypes.value = typesResponse.data;
      dataProducts.value = productsResponse.data;
    };

    const sortedProducts = computed(() => {
      let products = [...dataProducts.value];

      // Filtrar por tipo
      if (typeSelect.value != 0) {
        products = products.filter(product => product.IdType.id === typeSelect.value);
      }

      // Filtrar por marca
      if (brandSelect.value != 0) {
        products = products.filter(product => product.IdBrand.id === brandSelect.value);
      }

      // Ordenar productos
      if (orderSelect.value == "1") {
        products.sort((a, b) => a.Name.localeCompare(b.Name));
      } else if (orderSelect.value == "2") {
        products.sort((a, b) => b.Name.localeCompare(a.Name));
      }

      return products;
    });

    const goDetailProduct = async (data) => {
      dialogLoader.value = false;
      router.push(`detail_product/${data.productId}`);
    };

    return {
      goDetailProduct,
      sortedProducts,
      orderSelect,
      brandSelect,
      typeSelect,
      dataProducts,
      dialogLoader,
      dataBrand,
      dataTypes
    };
  }
});
</script>

<style>
.container_cards_products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 5 columnas por defecto */
  gap: 1rem;
  /* Puedes ajustar el valor de gap según tus necesidades */
}

@media (max-width: 1400px) {
  .container_cards_products {
    grid-template-columns: repeat(3, 1fr);
    /* 4 columnas cuando el ancho sea menor a 1200px */
  }
}
</style>
