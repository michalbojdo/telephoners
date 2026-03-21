<script setup lang="ts">
const props = defineProps(["loading"]);
</script>
<template>
  <Transition>
    <div v-if="props.loading">
      <main class="loader">
        <img src="@/assets/logos/logo_light_lb.png" class="pulse" />
      </main>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
main.loader {
  background-color: var(--tele-black);
  position: fixed;
  z-index:50;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.pulse {
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
  height: 20vh;
  width: 20vh;
  box-shadow: 0 0 0 0 rgb(0, 0, 0);
  transform: scale(1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
