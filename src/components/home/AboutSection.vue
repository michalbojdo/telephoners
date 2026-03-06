<template>
  <main class="about-panel home-panel">
    <h2>O NAS</h2>
    <p>
      I Jedzeniem, pod stopami deptało się ciężkimi a nad samą być olbrzymi
      futerał, a po zanim jeszcze sens nie była oczywiście na oczy. Spuścił
      skromnie w miejscu, gdzie rurociąg z jego doświadczeniem, to było wczoraj.
      Powracających zza grobu, też z piętnaście Ten pęcherz
    </p>
    <articles>
      <article class="home-article article-1">
        <div>
          <div class="container">
            <div>
              <h3>Działamy</h3>
              <h5>od 2001 roku</h5>
            </div>
          </div>
        </div>
      </article>
      <article class="home-article article-2">
        <div>
          <div class="container">
            <div>
              <h3>Zrzeszamy</h3>
              <h5>Ponad 40 osób z różnych obszarów naszej uczelni</h5>
            </div>
          </div>
        </div>
      </article>
      <article class="home-article article-3">
        <div>
          <div class="container">
            <div>
              <h3>Nowoczesne laboratoria</h3>
              <h5>
                i duża baza tekstów branżowych oraz podręczników technicznych na
                potrzeby projektów naszych członków
              </h5>
            </div>
          </div>
        </div>
      </article>
    </articles>
  </main>
</template>

<style>
.about-panel {
  h2 {
    font-size: 8.5vw;
    color: #fff;
    padding: 0rem;
  }
  h5,
  p {
    font-size: 2.5vh;
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
    font-weight: 400;
    font-size: large;
    padding: 2rem 0rem;
  }

  padding: 2rem 1rem;
  overflow-x: none;
  width: 30%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  font-size: 2vh;
  background: var(--tele-black);

  articles {
    width: 100%;
  }

  .home-article {
    background-position: center;
    background-size: cover;
  }
  .article-1 {
    border: 1rem var(--accent-color) ridge;

    color: #fff;
    .container {
      padding: 2rem 1rem;
      z-index: -2;
      background-color: var(--accent-color);
    }
  }
  .article-2 {
    border: 1rem var(--tele-black) ridge;

    .container {
      z-index: -2;
      padding: 2rem 1rem;
    }
  }
  .article-3 {
    border: 1rem #fff ridge;

    color: var(--tele-black);
    .container {
      z-index: -2;
      padding: 2rem 1rem;
      background-color: rgb(255, 255, 255);
    }
  }
}
@media only screen and (max-width: 1000px) {
  .about-panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    h1 {
      padding: 2rem 0rem 0rem 0rem;
    }
  
  articles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    
    text-align: center;
    height: 100%;
    .container {
      /* background-color: var(--tele-black) !important; */
      /* color: #fff; */
      /* padding: 2rem 0rem !important; */
      height: max-content;
    }
  }
  p {
    padding: 0rem 0rem 2rem 0rem !important;
    text-align: justify;
  }
}
}
@media only screen and (max-width: 740px) {
    articles{
      grid-template-columns: 1fr !important;
    }
    .home-article{
      border:0px !important;
    }
    .about-panel, .home-panel{
      padding:0rem !important;
      
      h1{
        font-size: 3ch;
      }

      p{
        padding:0rem 1rem 3rem 1rem !important;
        font-size: medium;
        text-align: center;
      }
      h3{
        line-height: 1.2;
        padding:0px !important;
      }
      h4{
        font-size: large;
      }
      h5{
        padding:0.5rem 0rem;
        font-size: medium
      }
    }
  }




</style>
