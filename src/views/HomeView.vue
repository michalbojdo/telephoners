<script setup lang="ts">
import HeaderSection from "@/components/HeaderSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import WelcomeSection from "@/components/home/WelcomeSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
</script>

<template>
  <div class="container">
    <div class="cont">
    <HeaderSection />
    <WelcomeSection />
    </div>
    <div class="con">

    <ProjectsSection />
    <AboutSection/>
    </div>

  </div>
</template>

<style>
.cont{
  display:grid;
  height: 100%;
  min-height:100vh;
  align-items:stretch;
}
.con{
  display:flex;
  flex-direction: row-reverse;
}
@media only screen and (max-width:1000px){
  .con{
    flex-direction: column-reverse;
  }
}
</style>