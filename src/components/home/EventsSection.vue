<script setup lang="ts">
import TagChip from '@/components/TagChip.vue';

</script>

<template>
  <main class="events-panel home-panel">
    <h2>WYDARZENIA</h2>
    <article class="home-article article-1">
      <div>
        <div class="container">
          <div>
            <h3>Spotkanie koła</h3>
            <div class="tags">
              <TagChip text="Spotkanie"/><TagChip text="Dla członków"/>

            </div>
            <h5>
              Projekt AGH Rescue Drone ma na celu stworzenie zaawansowanego
              systemu wsparcia ratunkowego, który wykorzystuje rój dronów do
              zapewnienia tymczasowej łączności telekomunikacyjnej i analizy
              wideo w czasie rzeczywistym w trudno dostępnych miejscach
            </h5>
            <h4>Więcej-></h4>
          </div>
        </div>
      </div>
    </article>
    <article class="home-article article-2">
      <div>
        <div class="container">
          <div>
            <h3>Rekrutacja 2026</h3>
            <div class="tags">
              <TagChip text="rekrutacja" invert/>
            </div>
            <h5>
              Projekt AGH Rescue Drone ma na celu stworzenie zaawansowanego
              systemu wsparcia ratunkowego, który wykorzystuje rój dronów do
              zapewnienia tymczasowej łączności telekomunikacyjnej i analizy
              wideo w czasie rzeczywistym w trudno dostępnych miejscach
            </h5>
            <h4>Więcej-></h4>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<style>
.events-panel {
  h2 {
    font-size: 8.5vw;
    color: #fff;
    padding: 0;
  }
  h5 {
    font-family: Arial, Helvetica, sans-serif;
  }
  h2,
  h4 {
    text-transform: uppercase;
    padding: 0.5rem 0rem;
  }
  h4{
    font-size: smaller;
  }
  .grants{
    display: flex;
    width:100%;
  }
  .grant {
    padding:1rem 0.5rem;
    width: min-content;
    font-size: small;
    text-align: center;
  }
  padding: 2rem 1rem;
  overflow-x: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 3vh;
  background: var(--tele-black);

  .home-article {
    background-position: center;
    background-size: cover;
    cursor:pointer;
  }
  .home-article:nth-child(2) {
    flex-direction: row-reverse;
  }
  
}
@media only screen and (max-width: 1000px) {
  .projects-panel {
    width: 100%;
  }
}
@media only screen and (max-width: 740px){
  .projects-panel{
    padding:2rem 0rem;
  }
}
</style>
