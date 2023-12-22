<template>
  <div ref="download" class="download-section-wrapper">
    <div
      ref="downloadVideoOpacity"
      class="download-video-opacity"
      :style="{ opacity: opacityValue }"
    ></div>
    <div class="download-video-container">
      <video
        ref="video"
        src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt14edcfbe47516de6/5e1fc0e7d0427a10aaca9881/footer-1080.mp4"
        autoplay
        muted
        loop
        style="object-fit: cover; object-position: center center"
        preload="none"
      ></video>
    </div>
    <button class="download-btn">CHƠI MIỄN PHÍ</button>
  </div>
</template>

<script setup>
const download = ref(null);
const video = ref(null);
const opacityValue = ref(1);
const transformY = ref(0); // Giá trị transform ban đầu
const handleScroll = () => {
  const element = download.value;
  const videoEle = video.value;

  if (!element) return;
  videoEle.style.transform = `translate3d(0px,${transformY.value}px, 0px)`;
  const elementTop = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  // Tính toán opacity dựa trên vị trí của phần tử so với cửa sổ trình duyệt
  opacityValue.value = Math.min(1, Math.max(0, elementTop / windowHeight));
  transformY.value = Math.max(
    -300,
    Math.min(0, (elementTop / windowHeight) * -300)
  );
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("../../assets/style/download.css");
</style>
