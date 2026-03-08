<template>
  <main class="about-panel home-panel">
    <h2>O NAS</h2>
    <p>
      The Telephoners Scientific Club operates at the Institute of
      Telecommunications at the Faculty of Computer Science, Electronics and
      Telecommunications (CET). It gathers students from both the Faculty of CET
      and beyond. Telephoners exchange knowledge from various fields and carry
      out various scientific and hobby projects.
    </p>
    <articles>
      <article class="home-article article-1">
        <div class="container">
          <div>
            <h3>Działamy</h3>
            <h5>od 2001 roku, a przez ten czas Telephonersi zrealizowali setki własnych projeków</h5>
          </div>
        </div>
      </article>
      <article class="home-article article-2">
        <div class="container">
          <div>
            <h3>WIET</h3>
            <h5>ale nie tylko, działają u nas osoby z różnych wydziałów</h5>
          </div>
        </div>
      </article>
      <article class="home-article article-1">
        <div class="container">
          <div>
            <h3>Nowoczesne laboratoria</h3>
            <h5>
              i duża baza tekstów branżowych oraz podręczników technicznych na
              potrzeby projektów naszych członków
            </h5>
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
    font-size: medium;
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
    font-weight: 400;
    font-size: medium;
    padding: 2rem 0rem;
  }
  padding: 2rem 1rem 0rem 1rem;

  overflow-x: none;
  width: 30%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  background: var(--tele-black);

  articles {
    width: 100%;
  }

  .home-article {
    background-position: center;
    background-size: cover;
    h5 {
      padding: 0;
    }
    .container {
      align-content: center;
      height: 100%;
      padding: 1.5rem 1rem;
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
@media only screen and (max-width: 750px) {
  articles {
    grid-template-columns: 1fr !important;
  }
  .home-article {
    border: 0px !important;
  }
  .about-panel,
  .home-panel {
    padding: 0rem !important;

    h1 {
      font-size: 3ch;
    }

    p {
      padding: 0rem 1rem 3rem 1rem !important;
      font-size: medium;
      text-align: center;
    }
    h3 {
      line-height: 1.2;
      padding: 0px !important;
    }
    h4 {
      font-size: small;
    }
    h5 {
      padding: 0.5rem 0rem;
      font-size: medium;
    }
  }
}
</style>
