<template>
    <div class="w-full flex justify-center py-10">
        <div class="w-[80%]">
            <div class="grid grid-cols-3 gap-5">
                <div>
                    <img :src="producto1" alt="">
                </div>
                <div class="col-span-2">
                  <p class="text-2xl font-bold">  {{ product.Name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import producto1 from '@/assets/products/img1.jpeg';
import { findAllProductsApi } from "@/api/ProductsService";

export default ({
    data() {
        return {
            producto1,
        }
    },
    setup() {
        const route = useRoute();
        const routeParams = ref(route.params);
        const product = ref({});

        onMounted(async () => {
            const dataProductsResponse = await findAllProductsApi();
            console.log(dataProductsResponse.data);
            product.value = dataProductsResponse.data.find(prod => prod.id == routeParams.value.id)
        })

        return {
            routeParams,
            product
        }
    }
})
</script>