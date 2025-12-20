<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="container">
    <Header />
    <div class="background-image" />
    <div class="background-tint" />

    <main>
      <h1>TELE<br />PHON<br />ERS</h1>
      <div class="routes">
        <H2><RouterLink to="/projects">Projekty</RouterLink></H2>
        <H2><RouterLink to="/events">Wydarzenia</RouterLink></H2>
        <H2><RouterLink to="/contact">Kontakt</RouterLink></H2>
        <H2><RouterLink to="/recrutation"><span>Rekrutacja 2026</span></RouterLink></H2>
      </div>
      
    </main>
  </div>
</template>

<style scoped>
  .routes{
    background-color: var(--tele-black);
  }
main {
  display: flex;
  justify-content: space-between;
}

h1 {
  line-height: 1;
  max-width: 4ch;
  font-size: 14vw;
  span {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 5px white;
  }
} 
h2{
  line-height: 1.1; 
  font-size: 4vw;
  padding:2px 8px;

  a{
    text-decoration: none;
  }
  a > span{
    background-color: #fff;
    color: var(--tele-black);
    padding:5px;
    line-height: 1;
  }

  a:hover{
    font-style: italic;
  }
}
.container { 
}

.background-tint {
  background: linear-gradient(top, rgb(141, 45, 45),var(--tele-black));
  background-color: var(--tele-black);
  background-position: center;
  background-size: 80vh;
  filter: opacity(0.6);
  position: fixed;
  top: 0;
  left:0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}

.background-image {
  background-image: url("@/assets/logos/logo_light.png");
  background-position: center;
  background-size: cover;
  filter: opacity(0.5);
  left: 0;
  top: 0;
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}

main {
  padding: 0px 20px;
}
</style>
