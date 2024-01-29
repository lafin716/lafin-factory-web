<script setup lang="ts">
import Aside from "~/components/layouts/Aside.vue";
import Menu from "~/components/layouts/Menu.vue";
import Header from "~/components/layouts/Header.vue";
</script>
<template>
  <div class="app-container">
    <el-container class="h-screen">
      <el-aside class="aside-container" width="260px">
        <Aside></Aside>
        <Menu></Menu>
      </el-aside>
      <el-container class="content-container">
        <el-header class=""><Header /></el-header>
        <div class="main-slot">
          <slot></slot>
        </div>
        <el-footer class="flex justify-end items-center">
          <el-text>
            Copyright © 2023-{{ new Date().getFullYear() }} LafinSoft. All
            Rights Reserved.
          </el-text>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.app-container {
  @apply h-screen;
}
.aside-container {
  @apply shadow-md h-screen;
  background: #fff;
  z-index: 99999;
  visibility: 1;
  transition: all 270ms ease;
}

.aside-container.hide {
  width: 0;
  visibility: 0;
}

.aside-container.mobileside {
  position: absolute;
}

.content-container {
  transition: all 300ms ease;
}

.main-slot {
  @apply p-10;
  flex: 1;
}
</style>
