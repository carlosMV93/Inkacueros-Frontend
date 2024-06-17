<template>
  <section class="min-h-full w-full pb-[5rem] lg:pb-[2rem]">
    <CarrouselSlide />
    <div class="w-full flex justify-center py-10">
      <div class="w-[80%]">
        <div>
          <h2 class="text-3xl font-bold">Nosotros</h2>
          <div class="grid grid-cols-7 gap-4 w-full py-10">
            <div
              class="col-span-3 p-4 rounded-md border border-green-500 text-center flex items-center"
            >
              <p>
                Somos una empresa familiar dedicada a la confección de distintos
                articulos artesanales en cueros tales como carteras, billeteras,
                cartapacios y agendas. Utilizando la mejor calidad en cuero para
                así ofrecer mejores acabados para nuestros clientes.
              </p>
            </div>
            <div class="col-span-2 p-4 rounded-md border border-green-500">
              <img :src="producto1" alt="" class="w-full" />
            </div>
            <div class="col-span-2 p-4 rounded-md border border-green-500">
              <img :src="producto2" alt="" class="w-full" />
            </div>
          </div>
        </div>
        <div class="py-10">
          <h2 class="text-3xl font-bold">Comentarios</h2>
          <div class="py-10">
            <CarrouselCards />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CarrouselCards from "@/components/home/CarrouselCards.vue";
import CarrouselSlide from "@/components/home/CarrouselSlide.vue";
import producto1 from "@/assets/producto02.png";
import producto2 from "@/assets/producto03.png";

export default {
  data() {
    return {
      producto1,
      producto2,
    };
  },
  components: { CarrouselSlide, CarrouselCards },
};
</script>
