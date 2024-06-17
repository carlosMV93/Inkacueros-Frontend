<template>
  <main class="w-full h-screen overflow-hidden block">
    <ToolbarLayout />
    <div class="w-full h-full flex overflow-hidden">
      <div class="w-full h-full overflow-hidden">
        <div class="main-container w-full h-[calc(100vh-50px)] overflow-y-auto">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import ToolbarLayout from "./ToolbarLayout.vue";
export default {
  components: { ToolbarLayout },
};
</script>
