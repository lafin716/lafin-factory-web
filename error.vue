<script setup lang="ts">
import { messages } from "@/data/error";
const props = defineProps({
  error: Object,
});

const errorMessage = computed(() => {
  return messages[props.error.statusCode] ?? "알 수 없는 오류에요!";
});
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error-wrap">
    <span class="status-code">{{ error!.statusCode }}</span>
    <span class="msg">{{ errorMessage }}</span>
    <el-button type="info" @click="handleError">메인으로 이동</el-button>
  </div>
</template>

<style scoped>
.error-wrap {
  @apply w-full h-screen flex flex-col justify-center items-center;
}

.status-code {
  @apply text-6xl;
}

.msg {
  @apply text-3xl my-6;
}
</style>
