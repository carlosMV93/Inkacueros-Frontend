<template>
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
</template>
<script>
import producto1 from "@/assets/products/img1.png";
import producto2 from "@/assets/products/img2.png";
import producto3 from "@/assets/products/img3.jpg";
import producto4 from "@/assets/products/img4.jpg";

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