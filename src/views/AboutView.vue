<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div class="background-image" />  
  <div class="background-tint" />

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
  .background-tint{
    background-color: var(--tele-black);
     background-position: center;
  background-size: 80vh;
  filter: opacity(0.5);
  position: fixed;
  display: block;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  }
.background-image {
  background-image: url("@/assets/drone.webp");
  background-position:center;
  background-size:cover;
  filter: opacity(0.8);
  position: fixed;
  display: block;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
main {
  padding: 0px 20px;
}
</style>
