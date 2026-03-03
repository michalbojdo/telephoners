<template>
  <main class="projects-panel">
    <h1>PROJEKTY</h1>
    <article class="important-project rescue-drone">
      <div>
        <div class="container">
          <div>
            <h2>AGH Rescue Drone</h2>
            <h5>
              Projekt AGH Rescue Drone ma na celu stworzenie zaawansowanego
              systemu wsparcia ratunkowego, który wykorzystuje rój dronów do
              zapewnienia tymczasowej łączności telekomunikacyjnej i analizy
              wideo w czasie rzeczywistym w trudno dostępnych miejscach
            </h5>
            <div class="grants">
              <h4 class="grant">grant <br />rektora <br />2023</h4>
              <h4 class="grant">grant <br />rektora <br />2024</h4>

              <h4 class="grant">grant <br />rektora <br />2025</h4>
            </div>
            <h4>Więcej-></h4>
          </div>
        </div>
      </div>
    </article>
    <article class="important-project campus-app">
      <div>
        <div class="container">
          <div>
            <h2>Aplikacja miasteczkowa</h2>
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
    <article class="important-project greenhouse">
      <div>
        <div class="container">
          <div>
            <h2>Smart szklarnia</h2>
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
.projects-panel {
  h1 {
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
  width: 70%;
  display: flex;
  flex-direction: column;
  font-size: 3vh;
  background: var(--tele-black);

  .important-project {
    background-position: center;
    background-size: cover;
    cursor:pointer;
  }
  .important-project:nth-child(2) {
    flex-direction: row-reverse;
  }
  .rescue-drone {
    color: var(--tele-black);
    .container {
      padding: 1rem 1rem;
      z-index: -2;
      background-color: rgb(255, 255, 255);
    }
  }
  .campus-app {
    .container {
      z-index: -2;
      padding: 2rem 1rem;
    }
  }
  .greenhouse {
    color: #fff;
    .container {
      z-index: -2;
      padding: 2rem 1rem;
      background-color: var(--accent-color);
    }
  }
}
@media only screen and (max-width: 1000px) {
  .projects-panel {
    width: 100%;
  }
}
</style>
