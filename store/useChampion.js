import { defineStore } from "pinia";
export const useAllChampions = defineStore("all-champion", () => {
  // state
  const state = reactive({
    champions: [],
    detailChampion: [],
    currentPage: 1,
    itemPerPage: 10,
    isLoading: false,
  });

  return { state };
});
