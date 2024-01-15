<template>
  <div class="news-container">
    <div class="news-inner-container">
      <div class="news-container-left">
        <div
          class="news-item-container"
          v-for="article in stateArticles.allArticles"
          :key="article.uid"
        >
          <nuxt-link
            class="news-item-inner-link-container"
            :to="article.youtube_link ? article.youtube_link : article.url.url"
          >
            <div class="news-item-img-container">
              <img :src="article.banner.url" alt="news thumbnail image" />
            </div>
            <div
              ref="contentContainer"
              class="news-content-container"
              :class="{ 'first-show': isFirstShow }"
            >
              <div class="news-content-inner">
                <h5 class="news-content-type">
                  {{ article.category[0].title }}
                </h5>
                <h3 class="news-content-title">
                  {{ article.title }}
                </h3>
                <p class="news-content">
                  {{ article.description }}
                </p>
                <div class="news-publish-container">
                  <span class="news-author">{{
                    article.author[0]?.title
                  }}</span>
                  <span
                    v-if="article.author[0]?.title"
                    class="news-line"
                  ></span>
                  <span class="news-date">{{ handleTime(article.date) }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="news-type-container">
        <div
          ref="TypeItemContainer"
          class="news-type-item-container"
          :class="{ 'first-show': isAccess }"
          v-for="item in articleTypes"
          :key="item.id"
        >
          <nuxt-link :to="item.link">
            <div class="news-type-img-container">
              <img :src="item.src" alt="news image" />
            </div>
            <h3 class="news-name-type">{{ item.title }}</h3>
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link to="/news/lastest-news">
      <div class="news-button-views-all-container">
        <span>XEM TIN MỚI NHẤT</span>
        <svg
          style="
            width: 15px;
            height: 15px;
            vertical-align: middle;
            margin-left: 6px;
            fill: rgb(11, 198, 227);
            transition: transform 200ms ease 0s;
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          class="style__Arrow-llbdtx-2 dCeYdP"
        >
          <path
            d="M3.47 53.47A3.47 3.47 0 116.94 50a3.47 3.47 0 01-3.47 3.47zM26.24 46.53h60.47l-23-23 4.91-4.91L100 50 68.62 81.38l-4.91-4.91 23-23H26.24z"
          ></path>
        </svg>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import { handleTime } from "../../utils/handleTime";
const contentContainer = ref(null);
const TypeItemContainer = ref(null);
const isAccess = ref(false);
const isFirstShow = ref(false);
import { useAllArticles } from "~/store/useArticles";
const { stateArticles } = useAllArticles();
import { handleAccess } from "../../utils/handleAccess";
const articleTypes = reactive([
  {
    id: 0,
    title: "CẬP NHẬT TRÒ CHƠI",
    src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbde6ab65a78493c4/6369a91c15157538267b0105/game-updates-card.jpg",
    link: "/news/game-updates",
  },
  {
    id: 1,
    title: "ESPORTS",
    src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt424706aae017bff0/651b6ebc3ce1e8351affe597/esports_v2.jpg",
    link: "/news/esports",
  },
  {
    id: 2,
    title: "ĐỘI NGŨ PHÁT TRIỂN",
    src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta5b9f6bc64d4f512/6369a8c8b90a0b39444b2f3e/dev-card.jpg",
    link: "/news/dev",
  },
  {
    id: 3,
    title: "Truyền Thông",
    src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt28bf9582b1866f7b/6369a937acc7e051595d5602/media-card.jpg",
    link: "/news/media",
  },
  {
    id: 4,
    title: "Cộng đồng",
    src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta788c7cfe994fc39/65711d799a47df00545b3f81/news-community-update.jpg",
    link: "/news/community",
  },
  {
    id: 5,
    title: "Riot games",
    src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfeb3960c3f495eec/5dec58795885d57e9b84722a/riotgames.jpg",
    link: "/news/announcements",
  },
]);

onMounted(() => {
  handleAccess(contentContainer.value[0], null, isFirstShow, 400);
  handleAccess(TypeItemContainer.value[0], null, isAccess, 1000);
});
</script>

<style scoped>
@import url("../../assets/style/news.css");
</style>
