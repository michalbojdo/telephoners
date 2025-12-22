<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import LoaderSection from "@/components/LoaderSection.vue";

let loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000);

</script>

<template>
  <LoaderSection :loading="loading" />
  <RouterView />
</template>