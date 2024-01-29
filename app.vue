<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("page:start", async () => {
  loading.value = true;
});

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <div v-if="loading" class="h-screen">
    <client-only>
      <Vue3Lottie
        animationLink="/assets/lottie/loading.json"
        :width="200"
        :height="200"
      />
    </client-only>
  </div>

  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
