<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
</script>

<template>
  <div class="cont">
      <div class="background-image" />

      <h1>
        AGH<br />
        RESCUE<br />
        DRONE
      </h1>
      <div class="routes">
        <h3>
          <RouterLink to="/projects">Projekty</RouterLink>
        </h3>
        <h3>
          <RouterLink to="/events">Wydarzenia</RouterLink>
        </h3>
        <h3>
          <RouterLink to="/contact ">Kontakt</RouterLink>
        </h3>
        <h3>
          <RouterLink to="/recruitation"
            ><span>Rekrutacja 2026</span></RouterLink
          >
        </h3>
      </div>
    </div>
</template>

<style>
.header-container {
  display: flex;
  flex-direction: column;
}
.tele-panel {
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column-reverse;
}
.routes {
  background-color: var(--tele-black);
  padding: 1rem 1rem;
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-self: end;
  width: 100%;
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

.background-image {
  background-image: url("@/assets/projects/rescue-drone/banner.webp");
  /* background: linear-gradient(to bottom, rgb(88, 88, 88), transparent);   */
  /* background-color: #000000;
opacity: 0.8;
background-image: linear-gradient(45deg, #00f 50%, #000000 50%);
background-size: 37px 37px; */
  filter: opacity(1) saturate(0) brightness(0.6);
  background-position: center;
  background-size: contain;
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
  .routes {
    display: block;
    padding: 0.5rem;

    h3 {
      line-height: 1.1;
      font-size: 4vh;
      padding: 0.2rem;

      a {
        text-decoration: none;
      }
      a > span {
        background-color: #fff;
        color: var(--tele-black);
        padding: 5px;
        line-height: 1.5;
      }
    }
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

  h1 {
    padding: 1rem 1rem;
    line-height: 1;
    font-size: 14vh;
    span {
      color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 5px white;
    }
  }
}
</style>
