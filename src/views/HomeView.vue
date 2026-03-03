<script setup lang="ts">
import HeaderSection from "@/components/HeaderSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import WelcomeSection from "@/components/home/WelcomeSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import EventsSection from "@/components/home/EventsSection.vue";
</script>

<template>
  <div class="container">
    <div class="cont">
    <HeaderSection />
    <WelcomeSection />
    </div>
    <div class="con">
      <div>
    <ProjectsSection />
    <AboutSection/>
    </div>
      <EventsSection/>
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
  flex-direction: column;
  >div{
    align-items: stretch;
    display:flex;
    flex-direction: row-reverse;
  }
}
@media only screen and (max-width:1000px){
  .con{
    flex-direction: column;
    >div{
      flex-direction: column-reverse;
    }
  }
}
</style>