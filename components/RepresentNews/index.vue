<template>
  <div class="respresent-news-wrapper">
    <div
      ref="newsContainerTitle"
      class="represent-news_title-container"
      :class="{ 'first-show': isAccess }"
    >
      <h3 class="represent-news_heading">RẤT NHIỀU ĐIỀU ĐỂ</h3>
      <h2 class="represent-news_title">KHÁM PHÁ</h2>
    </div>

    <div class="represent-news-max">
      <div ref="representNewsCol" class="represent-news-col-container">
        <div
          class="represent-news-col"
          :class="{ 'first-show': isAccessNewsCol }"
        >
          <nuxt-link to="/news/game-updates/patch-13-24-notes/">
            <div class="represent-news-img-container">
              <img src="/img/news-1.jpg" alt="news img" />
            </div>
            <div class="represent-news-infor-container">
              <h3 class="represent-news-infor">THÔNG TIN BẢN CẬP NHẬT 13.24</h3>
            </div>
          </nuxt-link>
        </div>

        <div
          class="represent-news-col"
          :class="{ 'first-show': isAccessDelay }"
        >
          <nuxt-link
            to="/news/game-updates/teamfight-tactics-patch-13-24-notes/"
          >
            <div class="represent-news-img-container">
              <img src="/img/news-2.jpg" alt="news img" />
            </div>
            <div class="represent-news-infor-container">
              <h3 class="represent-news-infor">
                ĐẤU TRƯỜNG CHÂN LÝ - THÔNG TIN BẢN CẬP NHẬT 13.24
              </h3>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <span class="champ-skin-text-annouce"> TIÊU BIỂU </span>
  </div>
</template>

<script setup>
import { handleAccess } from "../../utils/handleAccess";
const newsContainerTitle = ref(null);
const isAccess = ref(false);
const isAccessDelay = ref(false);
const representNewsCol = ref(null);
const isAccessNewsCol = ref(false);

onMounted(() => {
  handleAccess(newsContainerTitle.value, isAccess);
  handleAccess(representNewsCol.value, isAccessNewsCol, isAccessDelay, 500);
});
</script>

<style scoped>
@import url("../../assets/style/representnews.css");
</style>
