<template>
  <v-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(banner, i) in dataContent" :key="i">
      <v-sheet height="100%">
        <div
          class="d-flex fill-height justify-between align-center px-[5rem] container_banner"
        >
          <div>
            <div class="text-white text-4xl font-bold">{{ banner.title }}</div>
            <p class="text-white text-xl pt-4">{{ banner.description }}</p>
          </div>

          <div class="banner_img">
            <img :src="banner.img" alt="" style="width: 20rem" />
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import banner1 from "@/assets/banner/cueros01.png";
import banner2 from "@/assets/banner/cueros02.png";
import banner3 from "@/assets/banner/cueros03.png";
import banner4 from "@/assets/banner/cueros04.png";

export default {
  data() {
    return {
      dataContent: [
        {
          title: "¡Nuestros Cueros!",
          description:
            "No hay nada con más estilo que los productos hechos con nuestros cueros.",
          img: banner1,
        },
        {
          title: "¡Innovadores!",
          description:
            "Cuando buscas un producto de calidad, comienza con una cartera.",
          img: banner2,
        },
        {
          title: "¡La calidad habla por sí misma!",
          description:
            "Te ofrecemos los mejores productos en cuero, precios y promociones.",
          img: banner3,
        },
        {
          title: "100% cuero auténtico",
          description:
            "Que en tu guardarropa no falte nunca un buen producto de cuero, ello combina con todo. visitanos.",
          img: banner4,
        },
      ],
    };
  },
};
</script>
<style scoped>
.container_banner {
  background-image: url("../../assets/banner/banner.jpg");
  background-size: cover;
  background-position: center;
}
</style>
