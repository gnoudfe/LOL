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

    <Loading v-if="isLoading" />
  </div>
</template>

<script setup>
const isLoading = ref(false);
const router = useRouter();
const user = useSupabaseUser();
if (user.value) {
  isLoading.value = true;
  setTimeout(() => {
    router.push("/download");
  }, 1000);
}
</script>

<style scoped>
@import url("../assets/style/homepage.css");
</style>
