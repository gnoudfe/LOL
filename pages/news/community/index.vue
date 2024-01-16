<template>
  <div class="news-detail-wrapper">
    <NewsPageDetail
      :dataNews="NewsContainer"
      :label="'Cộng Đồng'"
      :newsType="'Cộng Đồng'"
      :description="'Từ những streamer tiêu biểu đến các nhà sáng tạo nội dung trong cộng đồng, đừng bỏ lỡ bất cứ nội dung hấp dẫn nào.'"
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

const NewsContainer = ref([]);

const filterArticles = () => {
  NewsContainer.value = dataArticles.value.filter(
    (item) => item.category[0].title === "Cộng Đồng"
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
