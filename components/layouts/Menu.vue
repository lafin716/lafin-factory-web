<script setup lang="ts">
import menuItems from "~/data/menu";
const userMenuItems = computed(() => {
  return menuItems.filter((item) => {
    if (!item.loggedin) {
      return true;
    }

    return false;
  });
});

const goMenu = (to: string) => {
  if (!to) {
    return false;
  }

  navigateTo(to);
};
</script>

<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <template v-for="(item, index) in userMenuItems" :key="index">
      <!-- 단일메뉴 -->
      <el-menu-item
        v-if="!item.children"
        :index="String(index)"
        @click="goMenu(item.to)"
      >
        <Icon
          :name="`material-symbols:${item.icon}`"
          size="18"
          class="me-3 text-gray-600"
        />
        <span class="text-gray-600">{{ item.title }}</span>
      </el-menu-item>

      <!-- 서브메뉴 -->
      <el-sub-menu v-else :index="String(index)">
        <template #title>
          <Icon
            :name="`material-symbols:${item.icon}`"
            size="18"
            class="me-3 text-gray-600"
          />
          <span class="text-gray-600">{{ item.title }}</span>
        </template>

        <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
          <el-menu-item
            :index="String(`${index}-${subIndex}`)"
            @click="goMenu(subItem.to)"
          >
            <Icon
              :name="`material-symbols:${subItem.icon}`"
              size="18"
              class="me-3 text-gray-600"
            />
            <span class="text-gray-600">{{ subItem.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped></style>
