<template>
    <div>
        <h2>Detalle del producto</h2>
    </div>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default ({
    setup() {
        const route = useRoute();
        const routeParams = ref(route.params);

        return {
            routeParams
        }
    }
})
</script>