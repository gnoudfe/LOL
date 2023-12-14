<template>
  <div>
    <!-- Banner section -->
    <section class="banner-section">
      <BannerHomeBanner />
    </section>
    <!-- News section -->
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
  </div>
</template>

<style scoped>
@import url("../assets/style/homepage.css");
</style>
