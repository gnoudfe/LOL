<template>
  <div class="news-wrapper">
    <NewsPage />
  </div>
</template>

<script setup>
import { useAllArticles } from "../../store/useArticles";
const { stateArticles } = useAllArticles();
if (stateArticles.allArticles.length <= 0) {
  try {
    const { data: allArticles } = await useFetch(
      `${import.meta.env.VITE_API_LOL_BASE}allArticles?_page=1&_limit=5`,
      {
        transform: (allArticles) => {
          return allArticles.map((item) => ({
            uid: item.uid,
            title: item.title,
            date: item.date,
            description: item.description,
            external_link: item.external_link,
            article_types: item.article_types,
            url: item.url,
            banner: item.banner,
            category: item.category,
            author: item.author,
            youtube_link: item.youtube_link,
          }));
        },
      }
    );
    stateArticles.allArticles = allArticles.value;
  } catch (err) {
    console.log(err);
  }
}

onMounted(() => {});
</script>

<style scoped>
@import url("../../assets/style/news.css");
</style>
