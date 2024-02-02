const showNavigation = ref(false);
const isMobile = ref(false);

const useNavigation = () => {
  const toggleNavigation = () => {
    showNavigation.value = !showNavigation.value;
  };

  const openNavigation = () => {
    showNavigation.value = true;
  };

  const closeNavigation = () => {
    // 모바일이 아닌경우 사용안함, 메뉴가 닫혀있으면 사용안함
    if (!isMobile.value || !showNavigation.value) {
      return false;
    }
    showNavigation.value = false;
  };

  // 반응형 대응
  const handleResize = () => {
    showNavigation.value = window.innerWidth > 768;
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    showNavigation,
    isMobile,
    toggleNavigation,
    openNavigation,
    closeNavigation,
  };
};

export default useNavigation;
