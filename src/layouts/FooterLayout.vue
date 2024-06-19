<template>
    <div class="py-10 bg-gray-50 w-full flex justify-center">
        <div class="flex justify-between items-center w-[70%]">
            <div>
                <img :src="logoInkacueros" alt="" class="w-[10rem]" />
            </div>
            <div>
                <div class="flex gap-3 items-center">
                    <v-btn icon="mdi mdi-map-marker" variant="text"></v-btn>
                    <p>Calle 2 Mz CH Lt 8 Grupo 21A Sector 1 <br> Lima - Villa el Salvador</p>
                </div>
                <div class="flex gap-3 pt-4 items-center">
                    <v-btn icon="mdi mdi-email" variant="text" @click="sendEmail"></v-btn>
                    <p>inkacuerosventas@gmail.com</p>
                </div>
                <div class="flex gap-3 pt-4 items-center">
                    <v-btn icon="mdi mdi-phone" variant="text"></v-btn>
                    <p>+51 987 920 416</p>
                </div>
            </div>
            <div class="flex gap-2">
                <v-btn icon="mdi mdi-facebook" variant="text"
                    @click="redirectTo('https://www.facebook.com/inkacueros')"></v-btn>
                <v-btn icon="mdi mdi-whatsapp" variant="text" @click="redirectTo('https://wa.link/7le6sl')"></v-btn>
                <v-btn icon="mdi mdi-instagram" variant="text"
                    @click="redirectTo('https://www.instagram.com/inkacuerosperu/')"></v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import logoInkacueros from "@/assets/logoInkakueros.png";

export default {
    data() {
        return {
            logoInkacueros,
        };
    },
    methods: {
        redirectTo(url) {
            window.open(url, "_blank");
        },
        sendEmail() {
            window.location.href = "mailto:inkacuerosventas@gmail.com";
        },
    },
};
</script>