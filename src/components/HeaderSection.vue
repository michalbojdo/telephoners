<template>
  <header>
    <h2>
      <a></a>
      <div>
        SKN
        <img src="@/assets/logos/logo_light_lb.png" />
        Telephoners
      </div>
      <div class="icons social-media">
        <img src="@/assets/logos/logo_light.png" />
        <img src="@/assets/social-media/linkedin.png" />
        <img src="@/assets/social-media/facebook.png" />
        <img src="@/assets/social-media/youtube.png" />
      </div>
    </h2>
  </header>
</template>

<style>
header {
  padding: 2vh;

  h2 {
    /* display: flex;
    justify-content: space-between; */
    font-size: 3vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: #fff;
    font-weight: 300;
    height: 2rem;

    * {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      max-height: 4rem;
      vertical-align: middle;
    }
  }
}
.icons.social-media {
  display: flex;
  justify-content: flex-end;
  * {
    height: 2rem;
    margin: 5px;
  }
}

@media only screen and (max-width: 1000px) {
  header {
    padding: 0.5rem 1rem;

    h2 {
      font-size: 1rem;
      grid-template-columns: 0fr 1fr 1fr;
      height: 1.5rem;

      * {
        justify-content: left;
        align-items: left;
        max-height: 3rem;
      }
    }
  }
  .icons.social-media {
    display: flex;
    justify-content: flex-end;
    * {
      height: 1.5rem;
      margin: 5px;
    }
  }
}
</style>
