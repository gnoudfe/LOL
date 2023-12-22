<template>
  <div class="start-wrapper">
    <div class="start-wrapper-items">
      <div ref="mapContainer" class="style_map-container">
        <div class="start_map_wrapper">
          <img src="/img/map.png" alt="map image" />
        </div>
      </div>
      <div class="style_content-container">
        <h3 class="style_content-title">HÃY BẮT ĐẦU</h3>
        <h2 class="style_content-heading">HUYỀN THOẠI CỦA BẠN</h2>
        <p class="style_content-des">
          Bạn Là Lính Mới? Hãy xem tóm tắt những điều cơ bản về chế độ chơi phổ
          biến nhất.
        </p>

        <div class="start-btn-container">
          <button class="start-btn type-1">BẮT ĐẦU</button>
          <button class="start-btn type-2">CHƠI MIỄN PHÍ</button>
        </div>
      </div>
    </div>

    <span class="champ-skin-text-annouce">
        CÁCH CHƠI
    </span>
  </div>
</template>

<script setup>
const mapContainer = ref(null);
const handleMouseMoveParallax = (e) => {
  const mapContainerElement = mapContainer.value;
  const mouseX = e.clientX / 120;
  const mouseY = e.clientY / 120;
  mapContainerElement.style.transform = `translateX(-50px) translate3d(${-mouseX}px, 0px, 0)`;
};
onMounted(() => {
  window.addEventListener("mousemove", handleMouseMoveParallax);
});
onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMoveParallax);
});


</script>

<style scoped>
@import url("../../assets/style/journey.css");
</style>
