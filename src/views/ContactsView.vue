<template>
  <div class="w-full flex justify-center py-10">
    <div class="w-[80%]">
      <div class="grid grid-cols-2">
        <div class="flex justify-center">
          <div class="border border-gray-400 product_box w-[50%] p-5 rounded-lg h-[40%]">
            <p class="font-bold">Lima - Villa el Salvador</p>
            <p>Calle 2 Mz CH Lt 8 Grupo 21A Sector 1</p>
            <p>Lunes a Domingo de 10:00 am a 10:00 pm</p>
            <p class="text-blue-500 pt-5 cursor-pointer"
              @click="redirectTo('https://www.google.com/maps/place/Villa+De+Salvador+Sector+I+Grupo+21,+Lima+15829/@-12.193054,-76.958205,16z/data=!4m6!3m5!1s0x9105b90cb8990479:0xf4297fbc9e7f4d58!8m2!3d-12.192944!4d-76.9574647!16s%2Fg%2F1tcxqr0s?hl=es&entry=ttu')">
              Ver
              Ubicación Google Maps</p>
          </div>
        </div>
        <div>
          <div class="product_box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.8119506323037!2d-76.96045816077866!3d-12.193195259936942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90cb8990479%3A0xf4297fbc9e7f4d58!2sVilla%20De%20Salvador%20Sector%20I%20Grupo%2021%2C%20Lima%2015829!5e0!3m2!1ses!2spe!4v1708493131878!5m2!1ses!2spe"
              width="600" height="450" style="border:0;" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterLayout />
</template>
<script>
import FooterLayout from "@/layouts/FooterLayout.vue";

export default {
  components: { FooterLayout },
  methods: {
    redirectTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
