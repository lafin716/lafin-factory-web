<script setup lang="ts">
const comingSoon = () => {
  infoMsg("로그인 기능은 아직 준비중입니다.");
};
</script>
<template>
  <div class="header-wrap">
    <div class="left-header"></div>
    <div class="right-header">
      <el-link @click="comingSoon">로그인</el-link>
    </div>
  </div>
</template>

<style scoped>
.header-wrap {
  @apply flex flex-row justify-between items-center;
  height: 60px;
}

.right-header {
  @apply flex flex-row justify-center items-center;
}

.icon-nav {
  @apply cursor-pointer;
}
</style>
