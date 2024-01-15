<template>
  <div
    class="news-content-container"
    :class="{ 'game-updates': !stateArticles.detailArticles[0].article_body }"
  >
    <div class="news-content-background-container">
      <img
        :src="stateArticles.detailArticles[0].banner.url"
        alt="banner image"
      />
      <div class="news-content-heading-container">
        <div class="news-content-heading-img-continer">
          <img
            :src="stateArticles.detailArticles[0].banner.url"
            alt="banner image"
          />
        </div>
        <div
          class="news-content-infor-title-container"
          :class="{
            'game-updates': !stateArticles.detailArticles[0].article_body,
          }"
        >
          <h2>{{ stateArticles.detailArticles[0].title }}</h2>
          <p>
            {{ stateArticles.detailArticles[0].description }}
          </p>
          <div class="news-content-detail-infor-container">
            <div
              class="news-content-detail-infor-date date-container"
              :class="{
                'game-updates': !stateArticles.detailArticles[0].article_body,
              }"
            >
              <span>{{
                handleTime(stateArticles.detailArticles[0].date)
              }}</span>
            </div>
            <div class="news-content-details-infor-author">
              <div class="news-content-details-infor-inner-author">
                <span class="news-content-detail-type-articles">{{
                  stateArticles.detailArticles[0].category[0]?.title
                }}</span>
                <span
                  class="news-content-details-author"
                  :class="{
                    'game-updates':
                      !stateArticles.detailArticles[0].article_body,
                  }"
                  >Tac gia
                  <span class="news-content-author-name">{{
                    stateArticles.detailArticles[0].author[0]?.title
                  }}</span></span
                >
              </div>
            </div>
            <div class="news-content-detail-infor-date svg-container">
              <a
                @click="
                  openShareWindow(
                    `https://www.facebook.com/sharer/sharer.php?u=https%3A//lienminh.vnggames.com/vi-vn${shareUrl}`
                  )
                "
              >
                <div class="news-content-container-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8.86 17.16"
                  >
                    <path
                      class="st0"
                      d="M2.62 17.16v-.31-7.52-.1H.11C0 9.24 0 9.24 0 9.13V6.31c0-.09.03-.11.11-.11h2.51v-.09c0-.78 0-1.56.01-2.34.01-.63.13-1.24.4-1.81C3.4 1.2 3.99.64 4.78.32 5.31.09 5.87-.01 6.44 0c.65.01 1.31.04 1.96.06.12 0 .24.03.36.03.07 0 .09.03.09.1v2.54c0 .08-.02.1-.1.1-.5 0-.99-.01-1.49 0-.22.01-.45.04-.67.09-.43.09-.68.37-.76.8-.04.16-.06.34-.06.51-.01.64 0 1.27 0 1.91v.07h2.86c.12 0 .12 0 .11.11-.06.5-.13 1-.2 1.5l-.15 1.26c-.02.16-.02.16-.18.16H5.77V17.16H2.62z"
                    ></path>
                  </svg></div
              ></a>
              <a
                @click="
                  openShareWindow(
                    `https://twitter.com/intent/tweet? text=https%3A//lienminh.vnggames.com/vi-vn${shareUrl}`
                  )
                "
              >
                <div class="news-content-container-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250 203.18"
                  >
                    <path
                      class="st0"
                      d="M78.62 203.18c94.34 0 145.94-78.16 145.94-145.94 0-2.22-.05-4.43-.15-6.63A104.404 104.404 0 00250 24.05c-9.19 4.08-19.08 6.83-29.46 8.07 10.59-6.35 18.72-16.4 22.55-28.37a102.668 102.668 0 01-32.57 12.45C201.17 6.24 187.84 0 173.09 0c-28.33 0-51.3 22.97-51.3 51.29 0 4.03.45 7.94 1.33 11.69C80.5 60.84 42.69 40.43 17.4 9.39a51.123 51.123 0 00-6.95 25.78c0 17.8 9.06 33.5 22.82 42.69a50.874 50.874 0 01-23.23-6.42c-.01.21-.01.43-.01.65 0 24.84 17.68 45.58 41.15 50.28-4.31 1.17-8.84 1.8-13.52 1.8-3.3 0-6.52-.33-9.64-.93 6.53 20.38 25.46 35.21 47.92 35.62-17.56 13.76-39.67 21.96-63.7 21.96-4.14 0-8.22-.24-12.24-.71 22.7 14.58 49.65 23.07 78.62 23.07"
                    ></path>
                  </svg></div
              ></a>

              <div class="news-content-container-svg" @click="copyToClipboard">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                  <path
                    class="st0"
                    d="M9.02 14.32c-.22-.06-.43-.15-.64-.24l-1.76 1.76c-.95.95-2.5.95-3.46 0-.95-.95-.95-2.5 0-3.46l3.46-3.46c.44-.44 1.02-.67 1.6-.7.27-.01.54.02.81.09.38.11.75.31 1.05.61.21.21.35.46.47.71.07-.06.15-.11.21-.17l1.6-1.6a4.28 4.28 0 00-.55-.66c-.41-.41-.86-.72-1.35-.95-.28-.14-.56-.24-.85-.32-1.11-.3-2.31-.19-3.37.31-.4.19-.78.44-1.12.74-.08.07-.16.14-.23.21l-3.46 3.46a4.895 4.895 0 000 6.92 4.895 4.895 0 006.92 0l3.28-3.28c-.85.24-1.76.26-2.61.03z"
                  ></path>
                  <path
                    class="st0"
                    d="M17.57 1.43a4.895 4.895 0 00-6.92 0L7.54 4.54c.79-.19 1.63-.2 2.42.02.26.07.5.17.75.28l1.67-1.67c.95-.95 2.5-.95 3.46 0 .95.95.95 2.5 0 3.46l-3.46 3.46c-.44.45-1.02.67-1.6.7-.27.01-.54-.02-.81-.1-.38-.11-.75-.31-1.05-.61-.26-.27-.44-.6-.55-.93-.06.05-.13.09-.19.15l-1.65 1.65c.19.3.4.59.66.86.41.41.86.72 1.35.95a4.915 4.915 0 004.21 0c.4-.19.78-.44 1.12-.74.08-.07.16-.13.23-.21l3.46-3.46a4.886 4.886 0 00.01-6.92z"
                  ></path>
                </svg>
                <div class="copy-alert" :class="{ 'show-alert': isCopied }">
                  <span>Đã được sao chép vào bộ nhớ tạm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="stateArticles.detailArticles[0].article_body"
      class="news-detail-content-container"
      v-for="(article, index) in stateArticles.detailArticles"
      :key="index"
    >
      <a
        v-if="article.youtube_link"
        target="_blank"
        :href="article.youtube_link"
        >{{ article.youtube_link }}</a
      >
      <div v-else>
        <div v-for="(body, bodyIndex) in article.article_body" :key="bodyIndex">
          <div
            v-if="
              body.rich_text_editor && body.rich_text_editor.rich_text_editor
            "
            v-html="body.rich_text_editor.rich_text_editor"
          ></div>
          <div
            style="margin-top: 10px; margin-bottom: 10px"
            v-if="body.video_youtube && body.video_youtube.video_id"
          >
            <iframe
              width="100%"
              height="515"
              :src="`https://www.youtube.com/embed/${body.video_youtube.video_id}`"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="level-up-footer-next-page">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 82.51 11.84"
            class="style__Flourish-sc-1hosomt-2-SvgFlourish bhZEbJ"
          >
            <path
              class="st0"
              d="M81.91.11l.6.6-2.99 2.99H45l-3.86 3.53-3.86-3.53H2.77L0 .93l.6-.6 2.52 2.52h34.49l3.54 3.23 3.53-3.23h34.49L81.91.11z"
            ></path>
            <path
              d="M52.05.56h-.23l-.16.17c-3.47 3.46-6.93 6.93-10.4 10.4L30.86.73 30.7.56h-.23"
              style="
                fill: none;
                stroke: rgb(193, 193, 193);
                stroke-miterlimit: 10;
              "
            ></path>
          </svg>
        </div>

        <div v-for="(body, bodyIndex) in article.article_body" :key="bodyIndex">
          <div v-if="body.author_bio" class="author-infor-container">
            <div class="author-infor-avatar-container">
              <img
                :src="body.author_bio.author_selection[0].avatar?.url"
                alt=""
              />
              <div class="author-infor-svg-outer-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 93.3 100"
                  class="style__Ring-sc-15yrc63-3 cwhsKb"
                >
                  <path
                    fill="rgb(208, 168, 92)"
                    d="M36.8 7.8C11.6 13.2-4.4 38 1.1 63.2s30.2 41.2 55.4 35.7c25.2-5.4 41.2-30.2 35.7-55.4-3.8-17.9-17.8-31.9-35.7-35.7l-9.8 9.8-9.9-9.8zM46.6 22l6.9-6.9c21.1 3.8 35.2 24 31.4 45.1s-24 35.2-45.1 31.4-35.2-24-31.4-45.1c2.9-16 15.4-28.5 31.4-31.4l6.8 6.9zm0 74.9c-24 0-43.5-19.5-43.5-43.5 0-19.9 13.5-37.3 32.7-42.2l2.6 2.6C16.6 18.3 2.5 39.7 7.1 61.6S33 97.5 54.9 92.9 90.8 67 86.2 45.1C82.9 29.3 70.6 17 54.9 13.8l2.6-2.6c23.3 6 37.3 29.7 31.4 53-5 19.2-22.4 32.7-42.3 32.7z"
                  ></path>
                  <path
                    fill="rgb(208, 168, 92)"
                    d="M52.1 5.4l-5.4 5.4-5.4-5.4L46.6 0l5.5 5.4z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="author-infor-name-container">
              {{ body.author_bio.author_selection[0].title }}
            </h3>
          </div>
        </div>
        <div class="line-seperate"></div>
        <div class="tags-container">
          <span>Thẻ:</span>
          <ul class="tags-items-list">
            <li class="tags-item" v-for="tag in article.article_tags">
              <span>{{ tag.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else class="news-detail-content-container type-2">
      <div
        v-html="
          stateArticles.detailArticles[0].patch_notes_body[0]?.patch_notes.html
        "
      ></div>

      <div class="tags-container">
        <span>Thẻ:</span>
        <ul class="tags-items-list">
          <li
            class="tags-item"
            v-for="tag in stateArticles.detailArticles[0].article_tags"
          >
            <span>{{ tag.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { handleTime } from "../../../utils/handleTime";
import { useAllArticles } from "~/store/useArticles";
const { stateArticles } = useAllArticles();
const route = useRouter();
const { data: detailArticles } = await useFetch(
  `${import.meta.env.VITE_API_LOL_BASE}allArticles?url.url=${
    route.currentRoute.value.path
  }`
);
stateArticles.detailArticles = detailArticles.value;

const openShareWindow = (url) => {
  window.open(url, "_blank", "width=800,height=600");
};
const isCopied = ref(false);
const shareUrl = route.currentRoute.value.href;
const copyMessage = ref(`https://lienminh.vnggames.com/vi-vn/${shareUrl}`);
const copyToClipboard = () => {
  const textarea = document.createElement("textarea");
  textarea.value = copyMessage.value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
};
</script>

<style scoped>
@import url("../../../assets/style/newscontent.css");
</style>
