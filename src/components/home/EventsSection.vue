<script setup lang="ts">
import TagChip from "@/components/TagChip.vue";
</script>

<template>
  <main class="events-panel home-panel">
    <h2>WYDARZENIA</h2>
    <article class="home-article article-3">
      <div>
        <div class="container">
          <div>
            <h3>Wykorzystanie sieci komórkowej w projektach IoT</h3>
            <div class="tags">
              <TagChip text="18.03.2026" nokia />
              <TagChip text="13:30" nokia />
              <TagChip text="D6 s.201" nokia />
              <TagChip text="Wykład" nokia />
            </div>
            <h5>
              W imieniu SKN Telephoners zapraszamy na wykład otwarty "Jak
              wykorzystać sieć komórkową w projektach IoT?" W programie wykładu:
              , IoT i sieci komórkowe, od teorii do praktyki, Sprzęt w akcji,
              prezentacja modułu SIM8262E-M2 5G HAT, Live demo: konfiguracja
              urządzenia i połączenie z komercyjną siecią komórkową przy użyciu
              komend AT, Integracja modułu z projektami studenckimi i R&D,
              Spotkanie z zespołem Nokia, informacje o ofertach praktyk i
              programie Working Student Przyjdź i zobacz, jak możesz zastosować
              sieci komórkowe we własnym projekcie! Wykład organizowany we
              współpracy z firmą Nokia
            </h5>
            <!-- <h4>
              Więcej-><img
                src="https://www.nokia.com/themes/custom/onenokia_reskin/logo.svg"
              />
            </h4> -->
          </div>
        </div>
      </div>
    </article>
    <article class="home-article article-1">
      <div>
        <div class="container">
          <div>
            <h3>Cyberwave</h3>
            <div class="tags">
              <TagChip text="10/11.03.2026" bright />
              <TagChip text="D6 | B9" bright />
              <TagChip text="AI" bright />
              <TagChip text="Cybersec" bright />
            </div>
            <h5>
              Przypominamy o zbliżającej się konferencji CyberWave, która już
              10–11 marca 2026 odbędzie się na kampusie AGH. To świetna
              okazja, żeby poszerzyć wiedzę o AI, cyberbezpieczeństwie i
              bezpiecznej komunikacji, poznać najnowsze trendy z branży oraz
              spotkać ludzi, którzy na co dzień tworzą technologie przyszłości.
              W programie m.in. prelekcje o najnowszych technologiach i
              rozwiązaniach z rynku, warsztaty prowadzone przez specjalistów z
              uznanych firm, networking z przedstawicielami branży, konkursy
              tematyczne z nagrodami
            </h5>
            <!-- <h4>Więcej-></h4> -->
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
              <TagChip text="01.01.2026" />
              <TagChip text="rekrutacja" />
            </div>
            <h5>
              W świecie, gdzie wszystko jest połączone, SKN Telephoners badają,
              jak to połączenie działa Koło Naukowe Telephoners zrzesza
              pasjonatów telekomunikacji, informatyki i elektroniki, którzy chcą
              rozwijać swoje zainteresowania i realizować praktyczne projekty z
              pogranicza tych dziedzin. Rekrutacja jest otwarta — zapraszamy
              wszystkich, którzy chcą poszerzać swoje horyzonty i działać w
              zespole z pasją! Telephonersi spotykają się co dwa tygodnie, w
              środy o 18:30 sala 011, budynek B9
            </h5>
            <!-- <h4>Więcej-></h4> -->
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
    font-size: medium;
  }
  h2,
  h4 {
    text-transform: uppercase;
    padding: 0.5rem 0rem;
    align-items: center;

    img {
      height: 2rem;
      padding: 0.5rem;
      background-color: #fff;
      border-radius: 0.5rem;
    }
  }
  h4 {
    font-size: smaller;
    display: flex;
    justify-content: space-between;
  }
  .grants {
    display: flex;
    width: 100%;
  }
  .grant {
    padding: 1rem 0.5rem;
    width: min-content;
    font-size: small;
    text-align: center;
  }
  padding: 2rem 1rem;
  overflow-x: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--tele-black);

  .home-article {
    background-position: center;
    background-size: cover;
    cursor: pointer;
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
@media only screen and (max-width: 750px) {
  .projects-panel {
    padding: 2rem 0rem;
  }
}
</style>
