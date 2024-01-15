<template>
  <div class="banner-blur-container">
    <video
      class="video-hid-in-mobile"
      ref="video1"
      preload="metadata"
      style="
        object-fit: cover;
        object-position: center top;
        height: 100%;
        max-height: 530px;
     
      "
      loop
      muted
      autoplay
    >
      <source
        src="https://lienminh.vnggames.com/static/hero-blurred-7572101a2ce5e003b66483b7fe5c5d36.webm"
        type="video/webm"
      />
    </video>
    <div class="banner-inner-container">
      <video
        ref="video2"
        preload="metadata"
        style="object-fit: cover; object-position: center center"
        autoplay
        loop
        muted
      >
        <source
          src="https://lienminh.vnggames.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
          type="video/webm"
        />
      </video>
      <div class="banner-name-game-container">
        <img src="/img/lmht.png" alt="lien minh huyen thoai" />
      </div>

      <nuxt-link to="/download">
        <div class="banner-btn-container">
          <Button canvasWidth="307" canvasHeight="99" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const video1 = ref(null);
const video2 = ref(null);

const handleVideo = () => {
  if (video1.value && video2.value) {
    const maxDuration = Math.max(video1.value.duration, video2.value.duration);

    video1.value.play();
    video2.value.play();

    const desiredTime = 0;
    if (
      !isNaN(desiredTime) &&
      isFinite(desiredTime) &&
      desiredTime >= 0 &&
      desiredTime <= maxDuration
    ) {
      video1.value.currentTime = desiredTime;
      video2.value.currentTime = desiredTime;
    }
  }
};
onMounted(() => {
  handleVideo();
});
</script>

<style scoped>
@import url("../../assets/style/banner.css");
</style>
