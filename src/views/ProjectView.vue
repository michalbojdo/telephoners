<script setup lang="ts">
import HeaderSection from "@/components/HeaderSection.vue";
import { useRoute} from "vue-router";

const projectID = useRoute().params.projectID;
console.log(projectID)

const props = defineProps({
  'project': String
})

</script>

<template>
  <div class="cont project-view">
    <div class="background-image-project" />
    <HeaderSection/>
    <h1>
      <a @click="$router.go(-1)"><</a>
    </h1>
    <h1>
      AGH<br />
      RESCUE<br />
      DRONE
    </h1>
    <div class="routes">
      <h3>
        <RouterLink to="/projects">Cele</RouterLink>
      </h3>
      <h3>
        <RouterLink to="/events">Członkowie</RouterLink>
      </h3>
      <h3>
        <RouterLink to="/contact ">Granty</RouterLink>
      </h3>
    </div>
  </div>
  <div class="project-content">
    <h2>Cele</h2>
  </div>
</template>

<style>
.project-view {
  display:grid;
  height: 100%;
  min-height: 100vh;
  align-items:space-between;

  background-image: repeating-radial-gradient(
    circle at 50% 100%,
    transparent 0px,
    transparent 50px,
    #ffffff10 50px,
    #ffffff10 52px
  );
}
.header-container {
  display: flex;
  flex-direction: column;
}
h1 {
  width: 100%;
  padding: 0rem 1rem;
  line-height: 1;
  font-size: 16vh;
  color: rgb(255, 255, 255);
  align-items: center;
  span {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 5px rgb(0, 0, 0);
  }
  img {
    height: 16vw;
  }
  a{
    text-decoration: none;
  }
}
/* h3:not(has(span)) {
  line-height: 1.1;
  font-size: 2vw;
  margin: 8px 2px;

  a {
    text-decoration: none;
  }
  a > span {
    background-color: #fff;
    color: var(--tele-black);
    padding: 5px;
    line-height: 1.5;
  }

  a:hover {
    font-style: italic;
  }
} */

.background-image-project {
  filter: grayscale(2) contrast(4) brightness(0.6) blur(4px);
  background-image: url("@/assets/projects/rescue-drone/banner.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  position: fixed;
  z-index: -3;
  width: 100vw;
  min-height: 36vw;
  height: 100%;
}

@media only screen and (max-width: 1000px) {
  .tele-panel {
    padding: 0rem 0rem 0rem 0rem;
  }

  .header-container {
    display: flex;
    flex-direction: column;
  }

  main {
    padding: 1rem 0rem 0rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
