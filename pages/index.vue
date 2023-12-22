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

    <section class="dowloadGame-section">
      <div>
        <DownloadGame />
      </div>
    </section>

    <section class="navigation-section">
      <div>
        <Navigation />
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("../assets/style/homepage.css");
</style>
