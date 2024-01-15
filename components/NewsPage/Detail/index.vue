<template>
  <div class="news-details-container">
    <div class="news-detail-title-container">
      <div class="news-detail-inner-container">
        <h3 class="news-details-title">{{ props.label }}</h3>
        <p class="news-details-content">
          {{ props.description }}
        </p>
      </div>
    </div>

    <div class="news-details-items-container">
      <div class="news-details-items-row">
        <div
          class="news-details-items"
          v-for="item in props.dataNews"
          :key="item.uid"
        >
          <nuxt-link
            :to="
              item.external_link
                ? item.external_link
                : item.youtube_link
                ? item.youtube_link
                : item.url.url
            "
          >
            <div class="news-details-img-container">
              <div>
                <img :src="item.banner.url" alt="news thumbnail image" />
              </div>
            </div>
            <div class="news-details-infor-container">
              <h5 class="news-details-infor-heading-type">
                {{ item.category[0].title }}
              </h5>
              <h2 class="news-details-infor-title">
                {{ item.title }}
              </h2>
              <div class="news-details-publish">
                <div class="news-details-author">
                  {{ item.author[0]?.title }}
                </div>
                <div
                  v-if="item.author[0]?.title"
                  class="news-details-line"
                ></div>
                <div class="news-details-date">{{handleTime(item.date) }}</div>
              </div>
            </div></nuxt-link
          >
        </div>
      </div>
      <div
        v-if="isFullNews && props.needLoad"
        class="news-details-button-container"
      >
        <button class="news-details-button" @click="handleLoadMoreNews">
          Tải thêm
        </button>
      </div>
      <LoadingLoadMore v-if="stateArticles.isLoading" />
    </div>
  </div>
</template>

<script setup>
import { handleTime } from "../../../utils/handleTime";

import { useAllArticles } from "../../../store/useArticles";
const { stateArticles } = useAllArticles();
const isFullNews = ref(true);
const emit = defineEmits(["updateDataNews"]);
const props = defineProps({
  dataNews: {
    type: Array,
  },
  label: {
    type: String,
  },
  description: {
    type: String,
  },
  newsType: {
    type: String,
  },
  needLoad: {
    type: Boolean,
  },
});
const handleLoadMoreNews = async () => {
  if (stateArticles.isLoading) return;
  stateArticles.currentPage++;
  stateArticles.isLoading = true;
  try {
    const { data: dataArticles } = await useFetch(
      `${import.meta.env.VITE_API_LOL_BASE}allArticles?_page=${
        stateArticles.currentPage
      }&_limit=${stateArticles.itemPerPage}`,
      {
        transform: (dataArticles) => {
          return dataArticles.map((item) => ({
            uid: item.uid,
            title: item.title,
            date: item.date,
            description: item.description,
            external_link: item.external_link,
            article_types: item.article_types,
            url: item.url,
            banner: item.banner,
            category: item.category,
            youtube_link: item.youtube_link,
            author: item.author,
          }));
        },
      }
    );
    if (props.newsType !== null) {
      const filterFetchNews = computed(() => {
        return dataArticles.value.filter(
          (item) => item.category[0].title === props.newsType
        );
      });
      if (filterFetchNews.value.length > 0) {
        const newData = [...props.dataNews, ...filterFetchNews.value];
        emit("updateDataNews", newData);
      } else {
        isFullNews.value = false;
      }
    } else {
      if (dataArticles.value.length > 0) {
        const newData = [...props.dataNews, ...dataArticles.value];
        emit("updateDataNews", newData);
      } else {
        isFullNews.value = false;
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    stateArticles.isLoading = false;
  }
};
</script>

<style scoped>
@import url("../../../assets/style/newsdetails.css");
</style>
