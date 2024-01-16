<template>
  <div class="news-detail-wrapper">
    <NewsPageDetail
      :dataNews="NewsContainer"
      :label="'TIN TỨC MỚI NHẤT'"
      :newsType="null"
      :needLoad="true"
      :description="'Cập nhật những thông tin mới nhất về thế giới Liên Minh Huyền Thoại.'"
      @updateDataNews="updateParentDataNews"
    />
  </div>
</template>

<script setup>
const NewsContainer = ref([]);
const { data: dataArticles } = await useFetch(
  `https://sprout-ripple-frame.glitch.me/allArticles?_page=1&_limit=6`,
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

const updateParentDataNews = (newData) => {
  NewsContainer.value = newData;
};
onMounted(() => {
  NewsContainer.value = dataArticles.value;
});
</script>

<style scoped>
@import url("../../../assets/style/newsdetails.css");
</style>
