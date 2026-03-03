<template>
  <main class="about-panel">
    <h1>O NAS</h1>
    <p>
      I Jedzeniem, pod stopami deptało się ciężkimi a nad samą być olbrzymi
      futerał, a po zanim jeszcze sens nie była oczywiście na oczy. Spuścił
      skromnie w miejscu, gdzie rurociąg z jego doświadczeniem, to było wczoraj.
      Powracających zza grobu, też z piętnaście Ten pęcherz
    </p>
    <articles>
      <article class="important-project rescue-drone">
        <div>
          <div class="container">
            <div>
              <h2>Działamy</h2>
              <h5>od 2001 roku</h5>
            </div>
          </div>
        </div>
      </article>
      <article class="important-project campus-app">
        <div>
          <div class="container">
            <div>
              <h2>Zrzeszamy</h2>
              <h5>Ponad 40 osób z różnych obszarów naszej uczelni</h5>
            </div>
          </div>
        </div>
      </article>
      <article class="important-project greenhouse">
        <div>
          <div class="container">
            <div>
              <h2>Za nami</h2>
              <h5>Już setki projektów</h5>
            </div>
          </div>
        </div>
      </article>
    </articles>
  </main>
</template>

<style>
.about-panel {
  h1 {
    font-size: 8.5vw;
    color: #fff;
    padding: 0rem;
  }
  h5,p {
    font-size: 2.5vh;
    font-family: Arial, Helvetica, sans-serif;
  }
  p{
    font-size: large;
        padding:2rem 0rem;
    }

  padding: 2rem 1rem;
  overflow-x: none;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  font-size: 2vh;
  background: var(--tele-black);

  articles {
    width: 100%;
  }

  .important-project {
    background-position: center;
    background-size: cover;
  }
  .rescue-drone {
    color: #fff;
    .container {
      padding: 2rem 1rem;
      z-index: -2;
      background-color: var(--accent-color);
    }
  }
  .campus-app {
    .container {
      z-index: -2;
      padding: 2rem 1rem;
    }
  }
  .greenhouse {
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
    padding:1rem;
    h1{
      padding:2rem 0rem;
    }
  }
  articles {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    text-align: center;
    height:100%;
    .container {
      /* background-color: var(--tele-black) !important; */
      /* color: #fff; */
      /* padding: 2rem 0rem !important; */
      height:max-content;
    }
  }
  p{
        padding:0rem 0rem 3rem 0rem !important;
        text-align: justify;
  }
    
}
</style>
