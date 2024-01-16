<template>
  <div class="champions-wrapper">
    <AllChamp />
  </div>
</template>

<script setup>
import { useAllChampions } from "../../store/useChampion";
import { scrollToTop } from "../utils/scrollToTop";
const { state } = useAllChampions();
if (state.champions.length <= 0) {
  try {
    const { data: allChampions } = await useFetch(
      `https://sprout-ripple-frame.glitch.me/allChampions?_page=1&_limit=${
        state.itemPerPage
      }`,
      {
        transform: (allChampions) => {
          return allChampions.map((item) => ({
            uid: item.uid,
            champion_name: item.champion_name,
            champion_splash: item.champion_splash,
            recommended_roles: item.recommended_roles,
            difficulty: item.difficulty,
            champion: item.champion,
          }));
        },
      }
    );
    state.champions = allChampions.value;
  } catch (err) {
    console.log(err);
  }
} else {
  scrollToTop();
}
</script>

<style scoped>
@import url("../../assets/style/AllChamp.css");
</style>
