<script setup></script>

<template>
  <header>
    
    <h2>
      <l></l>
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
  padding: 1rem;

  h2 {
    /* display: flex;
    justify-content: space-between; */ 
    display:grid;
    grid-template-columns: 1fr 1fr 1fr; 
    color: #fff;
    font-weight: 300;
    height: 3rem;

    * {
      display:flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      max-height: 3rem;
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
</style>
