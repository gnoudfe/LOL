<template>
  <div class="download-container">
    <div class="download-background-container">
      <video
        src="/img/summoners-rift.mp4"
        loop
        muted
        preload="metadata"
        autoplay
      ></video>
    </div>
    <div class="homepage-container">
      <nuxt-link to="/" class="homepage">
        <img src="/img/lol-logo-vi-vn.png" alt="lien minh huyen thoai image"
      /></nuxt-link>
    </div>
    <div class="content-download-container">
      <h2 class="download-heading-title" v-if="!user">
        chơi liên minh huyền thoại
      </h2>
      <h2 class="download-heading-title" v-if="user">Hoàn thành rồi</h2>
      <p class="download-sub-heading" v-if="user">Giờ thì tải về thôi nào</p>
      <div class="divider-image-container">
        <img src="/img/divider-download.png" alt="divider image" />
        <button @click="handleDownload" class="download-game-button">
          Tải về cho windows
        </button>
        <nuxt-link class="register-page" to="/register"
          >Tạo tài khoản</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const handleDownload = () => {
  window.location = import.meta.env.NEXT_PUBLIC_VITE_API_DOWNLOAD_LINK;
};
</script>

<style scoped>
@import url("../../assets/style/downloadPage.css");
</style>
