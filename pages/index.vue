<template>
  <div>
    <section class="banner-section">
      <BannerHomeBanner />
    </section>
    <section class="news-section">
      <div class="news-wrapper">
        <NewsHomeNews />
        <NewsViewsAll />
      </div>
    </section>

    <section class="champion-section">
      <div class="champion-wrapper">
        <ChampionHomeChampion />
      </div>
      <ChampionHomeSelect />
    </section>

    <section class="champ-skin-section">
      <div>
        <ChampSkin />
      </div>
    </section>

    <section class="mode-section">
      <div class="mode-wrapper">
        <ModePlay />
      </div>
    </section>

    <section class="start-section">
      <div>
        <StartYourJourney />
      </div>
    </section>

    <section class="reprentnews-section">
      <div>
        <RepresentNews />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAllChampions } from "../../store/useChampion";
import { scrollToTop } from "../utils/scrollToTop";
const { state } = useAllChampions();
if (state.champions.length <= 0) {
  try {
    const { data: allChampions } = await useFetch(
      `${import.meta.env.NEXT_PUBLIC_VITE_API_LOL_BASE}allChampions?_page=1&_limit=${
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
@import url("../assets/style/homepage.css");
</style>
