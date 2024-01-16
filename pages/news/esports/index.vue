<template>
  <div class="news-detail-wrapper">
    <NewsPageDetail
      :dataNews="NewsContainer"
      :label="'ESPORTS'"
      :newsType="'Esports'"
      :needLoad="false"
      :description="'Sàn đấu quốc tế dành cho các game thủ Liên Minh Huyền Thoại chuyên nghiệp.'"
      @updateDataNews="updateParentDataNews"
    />
  </div>
</template>

<script setup>
const { data: dataArticles } = await useFetch(
  `https://sprout-ripple-frame.glitch.me/allArticles`,
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
    (item) => item.category[0].title === "Esports"
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
