<template>
  <div class="banner-blur-container">
    <video
      preload="metadata"
      style="
        object-fit: cover;
        object-position: center top;
        height: 100%;
        max-height: 530px;
        display: block;
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
      <!-- <div class="canvas-container">
        <CanvasBorderItem
          canvasWidth="2254"
          canvasHeight="854"
          :canvasBanner="true"
        />
      </div> -->
      <div class="banner-btn-container">
        <Button canvasWidth="307" canvasHeight="99" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../../assets/style/banner.css");
</style>
