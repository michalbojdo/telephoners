<template>
  <header>
    <h2>
      <div>
        <img class="icons" src="@/assets/logos/logo_light_lb.svg" />    
                <img class="icons" src="@/assets/logos/logo_agh.png" />
                <img class="icons" src="@/assets/logos/logo_wiet.png" />    


      </div>
      <div class="icons social-media">
        <img src="@/assets/logos/logo_light_lb.svg" />
        <img src="@/assets/social-media/linkedin.png" />
        <img src="@/assets/social-media/facebook.png" />
        <img src="@/assets/social-media/youtube.png" />
      </div>
    </h2>
  </header>
</template>

<style>
header {
  padding:0.5rem 0.5rem;
  h2 {
    font-size: 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #000000;
    font-weight: 300;

    * {
      display: flex;
      justify-content: start;
      align-items: start;
      height: 100%;
      max-height: 16vh;
      vertical-align: middle;
    }
  }
}
.icons{
  /* filter:invert(); */
}
.icons.social-media {
  display: flex;
  justify-content: flex-end;
  * {
    height: 7vh !important;
    margin: 5px;
  }
}


</style>
