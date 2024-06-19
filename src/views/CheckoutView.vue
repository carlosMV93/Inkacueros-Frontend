<template>
    <div class="flex justify-center items-center p-10">
        <div class="w-[80%]">
            <v-card class="mx-auto shadow-lg w-full">
                <h1 class="text-center font-bold text-3xl py-3 text-indigo-500">Checkout</h1>
                <v-timeline direction="horizontal" line-inset="12">
                    <v-timeline-item :dot-color="typeForm == 'DIRECTION' ? 'indigo' : 'grey'">
                        <template v-slot:opposite>
                            Dirección de envio
                        </template>
                    </v-timeline-item>

                    <v-timeline-item :dot-color="typeForm == 'CONFIRM' ? 'indigo' : 'grey'">
                        <template v-slot:opposite>
                            Confirma tu pedido
                        </template>
                    </v-timeline-item>
                </v-timeline>
                <div class="px-[5rem] py-10" v-if="typeForm == 'DIRECTION'">
                    <p class="font-bold text-gray-500">Dirección de envio</p>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <v-text-field label="Nombre" variant="underlined" color="indigo"></v-text-field>
                        </div>
                        <div>
                            <v-text-field label="Apellidos" variant="underlined" color="indigo"></v-text-field>
                        </div>
                    </div>
                    <v-text-field label="Dirección Linea 1" variant="underlined" color="indigo"></v-text-field>
                    <v-text-field label="Dirección Linea 2" variant="underlined" color="indigo"></v-text-field>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <v-text-field label="Ciudad" variant="underlined" color="indigo"></v-text-field>
                        </div>
                        <div>
                            <v-text-field label="Provincia" variant="underlined" color="indigo"></v-text-field>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <v-text-field label="Codigo postal" variant="underlined" color="indigo"></v-text-field>
                        </div>
                        <div>
                            <v-text-field label="País" variant="underlined" color="indigo"></v-text-field>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <v-btn size="small" color="indigo" @click="typeForm = 'CONFIRM'">Siguiente</v-btn>
                    </div>
                </div>
                <div class="px-[5rem] py-10" v-if="typeForm == 'CONFIRM'">
                    <p class="font-bold text-gray-500">Confirma tu pedido</p>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">Imagen</th>
                                <th class="text-left">Producto</th>
                                <th class="text-left">Cantidad</th>
                                <th class="text-left">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in dataTrolley" :key="item.product.id">
                                <td>
                                    <div class="w-[5rem]">
                                        <ImgComponentVue :product="item.product" />
                                    </div>
                                </td>
                                <td>{{ item.product.Name }}</td>
                                <td>{{ item.amount }}</td>
                                <td>{{ item.amount * item.product.Price }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                    <div class="flex justify-end w-full">
                        <div class="w-[15rem]">
                            <div class="pt-3 pb-3">
                                <div class="flex flex-col border border-gray-500 rounded-lg">
                                    <div class="flex justify-between border-b border-gray-500 p-3">
                                        <span>Subtotal</span>
                                        <span>S/. {{ cartSubtotal }}</span>
                                    </div>
                                    <div class="flex justify-between border-b border-gray-500 p-3">
                                        <span>Envío</span>
                                        <span>S/. 35</span>
                                    </div>
                                    <div class="flex justify-between p-3 font-bold">
                                        <span>Total</span>
                                        <span>S/.{{ cartSubtotal + 35 }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3 pt-5">
                        <v-btn size="small" color="indigo" variant="tonal"
                            @click="typeForm = 'DIRECTION'">Retroceder</v-btn>
                        <v-btn size="small" color="indigo">Realizar orden</v-btn>
                    </div>
                </div>
            </v-card>
        </div>

    </div>
</template>
<script>
import ImgComponentVue from '@/components/generales/ImgComponent.vue';
import { computed, onMounted, ref } from 'vue';
import store from "@/store";

export default ({
    components: { ImgComponentVue },
    setup() {
        const typeForm = ref("DIRECTION");
        const dataTrolley = ref([]);

        onMounted(() => {
            dataTrolley.value = store.state.trolley.map(item => ({
                ...item,
                amount: item.amount || 1
            }));
        });

        const cartSubtotal = computed(() => {
            return dataTrolley.value.reduce((total, item) => {
                return total + (item.amount * item.product.Price);
            }, 0);
        });

        return {
            cartSubtotal,
            dataTrolley,
            typeForm,
        }
    }
})
</script>