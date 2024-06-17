<template>
  <v-sheet class="mx-auto w-full">
    <v-slide-group show-arrows>
      <v-slide-group-item
        v-for="comment in dataComments"
        :key="comment"
        v-slot="{}"
      >
        <v-card
          class="mx-2 my-1"
          prepend-icon="mdi mdi-format-quote-close"
          subtitle="Inkacueros"
          width="400"
        >
          <template v-slot:title>
            <span class="font-weight-black">{{ comment.name }}</span>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            {{ comment.comment }}
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
  setup() {
    const dataComments = [
      {
        name: "Karla Mideiros",
        comment:
          "En mi experiencia valen la pena. Llevo usando mi cartera desde hace más de 5 años y no tiene señales de alto desgaste. Eso si, como cualquier producto de cuero, lo vas a tener que limpiar cada cierto tiempo.",
      },
      {
        name: "Dante Sanabria",
        comment:
          "Cada vez que vuelvo a Peru y necesito renovar me compro una ahi. Son demasiado buenas y hay varios modelos. Personalmente uso las billeteras con monedero",
      },
      {
        name: "Jasmine Torres",
        comment:
          "Me encanta esta marca! Me compré una cartera y una billetera hermosísimas! La calidad es inmejorable y tiene muy buenos precios. Lo súper recomiendo!",
      },
    ];
    return {
      dataComments,
    };
  },
};
</script>
