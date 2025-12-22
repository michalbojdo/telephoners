<template>
  <div class="background-image" />
  <div class="background-tint" />

  <main class="tele-panel">
    <h1>
      TELE<br />
      PHON<br />
      ERS
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
        <RouterLink to="/recruitation"><span>Rekrutacja 2026</span></RouterLink>
      </h3>
    </div>
  </main>
</template>

<style>
.routes {
  background-color: var(--tele-black);
  padding: 0.5rem;
}
main.projects-panel {
  padding: 2rem 4rem;
  font-size: 2vw;
  height: 100vh;
  background-color: var(--tele-black);
}
main {
  padding: 2rem 0rem 0rem 2rem;
  display: flex;
  justify-content: space-between;
}

h1 {
  padding: 5vw 2rem;
  line-height: 1;
  max-width: 4ch;
  font-size: 10vw;
  span {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 5px white;
  }
}
h3 {
  line-height: 1.1;
  font-size: 2vw;
  padding: 2px 8px;

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
.background-tint {
  background: linear-gradient(#000000bd, var(--tele-black));
  background-position: center;
  background-size: 80vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}

.background-image {
  background-image: url("@/assets/logos/logo_light.png");
  background-position: center;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}

@media only screen and (max-width: 1000px) {
  .routes {
    background-color: var(--tele-black);
    padding: 0.5rem;
  }

  main.projects-panel {
    padding: 2rem 4rem;
    font-size: 2vw;
    height: 100vh;
    background-color: var(--tele-black);
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
    max-width: 4ch;
    font-size: 12vw;
    span {
      color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 5px white;
    }
  }
  h3 {
    line-height: 1.1;
    font-size: 3vh;
    padding: 2px 8px;

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
</style>
