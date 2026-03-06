<script setup lang="ts">
import HeaderSection from "@/components/HeaderSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import WelcomeSection from "@/components/home/WelcomeSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import EventsSection from "@/components/home/EventsSection.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>

<template>
  <div class="home-container">
    <div class="home-start">
      <HeaderSection />
      <WelcomeSection />
    </div>
    <div class="home-sections">
      <div>
        <ProjectsSection />
        <AboutSection />
      </div>
      <EventsSection />
    </div>
    <FooterSection />
  </div>
</template>

<style>
.home-start {
  display: grid;
  height: 100%;
  min-height: 100vh;
  align-items: stretch;
}
.home-sections {
  background-color: var(--tele-black);
  display: flex;
  flex-direction: column;
  > div {
    align-items: stretch;
    display: flex;
    flex-direction: row-reverse;
  }
}
@media only screen and (max-width: 1000px) {
  .home-sections {
    flex-direction: column;
    > div {
      flex-direction: column-reverse;
    }
  }
}
@media only screen and (max-width: 740px) {
}
</style>
