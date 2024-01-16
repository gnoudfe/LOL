<template>
  <div class="news-detail-wrapper">
    <NewsPageDetail
      :dataNews="NewsContainer"
      :label="'Cập Nhật Trò Chơi'"
      :newsType="'Cập Nhật Trò Chơi'"
      :needLoad="true"
      :description="'Nguồn thông tin đáng tin cậy nhất về tất cả cập nhật trong trò chơi.'"
      @updateDataNews="updateParentDataNews"
    />
  </div>
</template>

<script setup>
const { data: dataArticles } = await useFetch(
  `https://sprout-ripple-frame.glitch.me/allArticles?_page=1&_limit=12`,
  {
    transform: (dataArticles) => {
      return dataArticles.map((item) => ({
        uid: item.uid,
        title: item.title,
        date: item.date,
        external_link: item.external_link,
        description: item.description,
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

const NewsContainer = ref([]);

const filterArticles = () => {
  NewsContainer.value = dataArticles.value.filter(
    (item) => item.category[0].title === "Cập Nhật Trò Chơi"
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
