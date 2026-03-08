<template>
  <footer>
    <div>
      <a>
        <!-- <img class="icons" src="@/assets/logos/logo_light_lb.svg" /> -->
        <img class="icons" src="@/assets/logos/logo_agh.png" />
        <img class="icons" src="@/assets/logos/logo_wiet.png" /> </a
      ><a>SKN Telephoners 2026</a> <a>telephoners@agh.edu.pl</a>
    </div>
    <div>
      <a>Statut</a>
      <a>Zarząd</a>
      <a>Panel członka ⤴</a>
    </div>
    <div>
      <a href="">LinkedIn ⤴</a><a href="">Facebook ⤴</a>
      <a href="">YouTube ⤴</a>
    </div>
  </footer>
</template>
<style>
footer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;
  background-color: var(--tele-black);
  background-image: repeating-radial-gradient(
    circle at 50% 0%,
    transparent 0px,
    transparent 40px,
    #ffffff08 8px,
    #ffffff08 48px
  );
  padding: 2rem 1rem;
  border-top: 8px #080808 solid;
  > div {
    display: grid;
    align-items: center;
    padding: 4px;
  }
  .icons {
    max-height: 3rem;
  }
  a {
    text-decoration: none;
  }
}

@media only screen and (max-width: 750px) {
  footer {
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr;
    > div:nth-of-type(2) {
      /* justify-items: right; */
    }
  }
}
</style>
