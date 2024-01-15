<template>
  <div class="news-detail-wrapper">
    <NewsPageDetail
      :dataNews="NewsContainer"
      :label="'Thông Báo'"
      :newsType="'Thông Báo'"
      :description="'Những thông báo mới nhất từ studio đã tạo nên LMHT.'"
      @updateDataNews="updateParentDataNews"
    />
  </div>
</template>

<script setup>
const { data: dataArticles } = await useFetch(
  `${import.meta.env.VITE_API_LOL_BASE}allArticles`,
  {
    transform: (dataArticles) => {
      return dataArticles.map((item) => ({
        uid: item.uid,
        title: item.title,
        date: item.date,
        description: item.description,
        article_types: item.article_types,
        url: item.url,
        banner: item.banner,
        category: item.category,
        author: item.author,
        youtube_link: item.youtube_link,
        external_link : item.external_link
      }));
    },
  }
);

const NewsContainer = ref([]);

const filterArticles = () => {
  NewsContainer.value = dataArticles.value.filter(
    (item) => item.category[0].title === "Thông Báo"
  );
};
const updateParentDataNews = (newData) => {
  NewsContainer.value = newData;
};
onMounted(() => {
  filterArticles();
});
</script>

<style scoped>
@import url("../../../assets/style/newsdetails.css");
</style>
