<template>
  <div class="">
    <DetailChamp />
  </div>
</template>

<script setup>
import { useAllChampions } from "../../store/useChampion";
const { state } = useAllChampions();
const route = useRouter();

const { data: detailChampion } = await useFetch(
  `https://sprout-ripple-frame.glitch.me/allChampions?champion_name=${
    route.currentRoute.value.params.id
  }`,
  {
    transform: (detailChampion) => {
      return detailChampion.map((item) => ({
        lore: item.lore,
        champion_name: item.champion_name,
        champion_splash: item.champion_splash,
        recommended_roles: item.recommended_roles,
        links: item.links,
        skins: item.skins,
        champion_passive: item.champion_passive,
        champion_q: item.champion_q,
        champion_w: item.champion_w,
        champion_e: item.champion_e,
        champion_r: item.champion_r,
        difficulty: item.difficulty,
        champion_title: item.champion_title,
      }));
    },
  }
);
state.detailChampion = detailChampion.value;
</script>

<style scoped>
@import url("../../assets/style/DetailChamp.css");
</style>
