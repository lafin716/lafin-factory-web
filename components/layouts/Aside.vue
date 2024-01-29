<script setup lang="ts"></script>
<template>
  <div class="aside-wrap">
    <div class="logo">
      <el-text class="logo-text" type="primary" @click="navigateTo('/')">
        Lafin Factory
      </el-text>
    </div>
    <div class="menu"></div>
  </div>
</template>

<style scoped lang="scss">
.aside-wrap {
}

.logo {
  @apply flex justify-around items-center font-bold text-xl cursor-pointer;
  height: 60px;
}

.logo-text {
  @apply text-lg;
  white-space: nowrap;
}

.menu {
}
</style>
