import { defineStore } from "pinia";
export const useAllArticles = defineStore("all-articles", () => {
  // state
  const stateArticles = reactive({
    allArticles: [],
    detailArticles : [],
    currentPage: 1,
    itemPerPage: 6,
    isLoading : false,
    NewsContainer: []
  });

  return { stateArticles };
});
