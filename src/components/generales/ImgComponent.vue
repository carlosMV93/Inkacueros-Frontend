<template>
    <template v-if="product.id == 7">
        <img :src="producto1" alt="" class="w-full" />
    </template>
    <template v-else-if="product.id == 8">
        <img :src="producto2" alt="" class="w-full" />
    </template>
    <template v-else-if="product.id == 5">
        <img :src="producto3" alt="" class="w-full" />
    </template>
    <template v-else-if="product.id == 6">
        <img :src="producto4" alt="" class="w-full" />
    </template>
</template>
<script>
import producto1 from "@/assets/products/image1.png";
import producto2 from "@/assets/products/image2.png";
import producto3 from "@/assets/products/image3.png";
import producto4 from "@/assets/products/image4.png";

export default {
    props: {
        product: Object
    },
    data() {
        return {
            producto1,
            producto2,
            producto3,
            producto4,
        };
    },
}
</script>