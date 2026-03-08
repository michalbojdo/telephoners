<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
</script>

<template>
  <div class="cont project-view">
    <div class="background-image-project" />

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
</template>

<style>
.project-view {
  align-content: end;
}
.header-container {
  display: flex;
  flex-direction: column;
}
.tele-panel {
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column-reverse;
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
}
h3:not(has(span)) {
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
}

.background-image-project {
  background-image: url("@/assets/projects/rescue-drone/banner.webp");
  /* background: linear-gradient(to bottom, rgb(88, 88, 88), transparent);  
  background-color: #000000;
opacity: 0.8;
background-image: linear-gradient(45deg, #00f 50%, #000000 50%);
background-size: 37px 37px; */
  filter: opacity(1) saturate(1) brightness(0.8);
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
