<template>
  <main class="projects-panel home-panel">
    <h2>PROJEKTY</h2>
    <articles>
      <article class="home-article article-1">
        <div>
          <div class="container">
            <div>
              <h3>AGH Rescue Drone</h3>
              <h5>
                Projekt AGH Rescue Drone ma na celu stworzenie zaawansowanego
                systemu wsparcia ratunkowego, który wykorzystuje rój dronów do
                zapewnienia tymczasowej łączności telekomunikacyjnej i analizy
                wideo w czasie rzeczywistym w trudno dostępnych miejscach
              </h5>
              <!-- <div class="grants">
              <h4 class="grant">grant <br />rektora <br />2023</h4>
              <h4 class="grant">grant <br />rektora <br />2024</h4>

              <h4 class="grant">grant <br />rektora <br />2025</h4>
            </div> -->
              <h4>Więcej-></h4>
            </div>
          </div>
        </div>
      </article>
      <article class="home-article article-2">
        <div>
          <div class="container">
            <div>
              <h3>Aplikacja miasteczkowa</h3>
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
      <article class="home-article article-1">
        <div>
          <div class="container">
            <div>
              <h3>Smart szklarnia</h3>
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
      <article class="icons-article"></article>
    </articles>
  </main>
</template>

<style>
h2,
h4 {
  transition: 250ms;
  cursor: alias;
}
h3 {
  font-size: large;
}
.icons-article {
  height: 100%;
  margin: 2rem 0rem;
  align-self: flex-end;
  background-color: #fff;
  background-image: repeating-radial-gradient(
    circle at 50% 0px,
    transparent 0px,
    transparent 8px,
    #000 8px,
    #000000 50px
  );
}
.projects-panel {
  overflow: hidden;
  h2 {
    font-size: 8.5vw;
    color: #fff;
    padding: 0;
    transition: 250ms;
    cursor: alias;
  }
  h5 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
  }
  h2,
  h4 {
    text-transform: uppercase;
  }
  h4 {
    font-size: x-small;
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
  padding: 2rem 1rem 0rem 1rem;
  margin: 0;
  overflow-x: none;
  width: 70%;
  display: flex;
  flex-direction: column;

  .home-article {
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
}
@media only screen and (max-width: 1000px) {
  .projects-panel {
    width: 100%;
  }
}
@media only screen and (max-width: 750px) {
  .home-panel {
    padding: 2rem 0rem;
  }
}
</style>
