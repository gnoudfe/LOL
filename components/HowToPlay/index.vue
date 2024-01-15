<template>
  <div class="how-to-play-container">
    <div ref="imgContainer" class="how-to-play-background-img-container">
      <div class="how-to-play-intro-container">
        <h4 class="how-to-play-heading">CHÀO MỪNG ĐẾN VỚI SUMMONER'S RIFT</h4>
        <h2 class="how-to-play-title">HỌC CÁC BƯỚC CƠ BẢN</h2>
        <p class="how-to-play-content">
          Có rất nhiều thứ cần học hỏi trong LMHT, vì vậy, chúng ta sẽ bắt đầu
          từ những điều cơ bản. Khám phá hướng dẫn dưới đây để biết cách chơi
          chế độ phổ biến nhất.
        </p>
        <button class="how-to-play-button" @click="handleClickStart">
          Vào luôn
        </button>
      </div>
      <div class="how-to-play-background-img-container">
        <div
          ref="bgImage"
          class="how-to-play-background-img first-img"
          :style="{ transform: `scale(${1 + limitedTransformY})` }"
        ></div>
        <div
          class="how-to-play-background-img second-img"
          :style="{ transform: `scale(${1 + limitedTransformY})` }"
        ></div>
        <div
          class="how-to-play-background-img third-img"
          :style="{ transform: `scale(${1 + limitedTransformY})` }"
        ></div>
        <div
          class="how-to-play-background-img fourth-img"
          :style="{ transform: `scale(${1 + limitedTransformY})` }"
        ></div>
        <div
          class="how-to-play-background-img fifth-img"
          :style="{ transform: `scale(${1 + limitedTransformY})` }"
        ></div>
        <div
          class="how-to-play-background-img sixth-img"
          :style="{ transform: `scale(${1 + limitedTransformY})` }"
        ></div>
      </div>
    </div>

    <div
      ref="videoContainer"
      class="how-to-play-video-section"
      :class="{ 'is-leaving': isLeaving, 'is-active': isScrollToVideo }"
    >
      <div class="how-to-play-video-container">
        <span class="how-to-play-annouce">GIỚI THIỆU TRÒ CHƠI</span>
        <div class="how-to-play-video-sticky">
          <div class="how-toplay-video-wrapper">
            <video
              ref="videoIntro"
              src="https://www.leagueoflegends.com/static/what-is-league-of-legends-375dbbb5e9164b1a005ed0552850151e.webm"
              preload="metadata"
              muted
              loop
              autoplay
            ></video>
          </div>
        </div>
        <div class="how-to-play-explain-container">
          <h2 class="how-to-play-explain-title">
            LIÊN MINH HUYỀN THOẠI LÀ GÌ?
          </h2>
          <p class="how-to-play-explain-mesg">
            Liên Minh Huyền Thoại là trò chơi phối hợp đồng đội đầy tính chiến
            thuật, nơi hai đội chơi chọn ra 5 vị tướng mỗi bên để đối đầu với
            nhau và phá hủy căn cứ của địch. Chọn lựa từ hơn 140 vị tướng để tạo
            nên những pha giao đấu hoành tráng, tiêu diệt kẻ địch và đánh phá
            trụ nhằm giành lấy chiến thắng vinh quang.
          </p>
        </div>
      </div>
    </div>

    <div ref="mapSection" class="map-setion-wrapper">
      <HowToPlayMap />
    </div>

    <div class="level-up-champion-wrapper">
      <HowToPlayLevelUpChampion />
    </div>

    <div class="champion-skil-wrapper">
      <HowToPlayChampionSkill />
    </div>

    <div class="champion-intro-wrapper">
      <HowToPlayChampionIntroduce />
    </div>
  </div>
</template>

<script setup>
const isScrollToVideo = ref(false);
const bgImage = ref(null);
const imgContainer = ref(null);
const transformY = ref(0);
const videoContainer = ref(null);
const mapSection = ref(null);
const videoIntro = ref(null);
const isLeaving = ref(false);

const limitedTransformY = computed(() => {
  return Math.min(Math.max(transformY.value, 0), 0.3);
});

const handleScroll = () => {
  const bgImageEle = bgImage.value;
  const videoContainerEle = videoContainer.value;
  if (!bgImageEle) return;
  const elementTop = imgContainer.value.getBoundingClientRect().top;
  const videoTop = videoContainerEle.getBoundingClientRect().top;
  const mapTop = mapSection.value.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  transformY.value = -(elementTop / windowHeight);

  if (videoTop < windowHeight) {
    isScrollToVideo.value = true;
  }
  if (elementTop > -520) {
    isScrollToVideo.value = false;
  }

  if (mapTop < windowHeight) {
    isLeaving.value = true;
    videoIntro.value.pause();
  } else {
    isLeaving.value = false;
    videoIntro.value.play();
  }
};

const handleClickStart = () => {
  const videoTop = videoContainer.value.getBoundingClientRect().top;

  window.scrollTo({
    top: videoTop - 700,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("../../assets/style/howtoplay.css");
</style>
