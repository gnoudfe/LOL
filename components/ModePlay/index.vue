<template>
  <div class="mode-play-container">
    <div class="mode-play-btn-wrapper mobile">
      <h3>RẤT NHIỀU CÁCH</h3>
      <h2>CHƠI</h2>
      <button><nuxt-link to="/register"> CHƠI NGAY </nuxt-link></button>
    </div>
    <div class="mode-play-img-wrapper">
      <div
        class="mode-play-img"
        v-for="img in images"
        :key="img.id"
        :class="{ 'show-img': currentThumnailMap === img.id }"
      >
        <img :src="img.img" alt="mode play img" />
      </div>
    </div>

    <div class="mode-video-thumbnail-container">
      <div ref="canvasContainer" class="canvas-circle-container">
        <canvas
          ref="canvasCircle"
          class="canvas-circle"
          :width="canvasSize.width"
          :height="canvasSize.height"
        ></canvas>
      </div>
      <div class="mode-svg-outsite-container">
        <svg class="mode-svg-outsite" viewBox="0 0 100 100" style="">
          <path
            d="M49.22,100l0-1h.08l0,1Zm1.51-1h.09v1h-.08Zm-3,1,0-1h.08l0,1Zm4.52-1h.09l0,1h-.08Zm-6,.91.07-1h.09l-.08,1Zm7.54-1h.08l.07,1h-.08Zm-9.06.86.11-1h.08l-.11,1Zm10.55-1h.08l.11,1h-.09Zm-12.06.82.13-1h.09l-.14,1Zm13.54-1h.08l.14,1h-.08Zm-15,.77.16-1h.09l-.17,1Zm16.53-1h.08l.17,1h-.09Zm-18,.71.2-1,.08,0-.2,1Zm19.5-1,.08,0,.19,1-.08,0Zm-21,.66.23-1,.08,0-.23,1Zm22.45-1,.08,0,.22,1-.07,0Zm-23.93.6.26-1,.07,0-.25,1Zm25.38-1,.08,0,.25,1-.07,0Zm-26.85.55L36,97l.08,0-.29,1ZM64,97l.08,0,.28,1-.08,0Zm-29.75.5.32-1,.08,0-.31,1Zm31.17-1,.08,0,.32,1-.08,0ZM32.8,97l.35-1,.08,0-.34,1Zm34-.94.08,0,.34,1-.08,0Zm-35.45.39.38-.93.07,0-.37.93Zm36.85-.92.08,0,.37.94-.08,0ZM30,95.84l.4-.93.08,0-.4.92Zm39.63-.92.08,0,.4.93-.08,0Zm-41,.28.43-.9.07,0-.43.91ZM71,94.29l.08,0,.43.91-.08,0Zm-43.74.24.46-.89.07,0-.45.9Zm45.09-.9.07,0,.46.9-.08,0Zm-46.43.19.48-.88.08,0-.49.88Zm47.76-.9.06,0,.48.88-.07,0Zm-49.08.14.51-.86.07,0-.51.87Zm50.37-.87.07,0,.51.87-.07,0Zm-51.67.08.54-.85.07,0-.54.85Zm52.94-.87.07,0,.54.85-.07,0ZM22,91.43l.56-.83.07.05-.57.83Zm55.46-.85.07,0,.57.83-.07,0Zm-56.71,0,.59-.82.06.05-.58.82Zm57.94-.83.06,0,.6.81-.07.05Zm-59.16-.08.61-.8.07.05-.62.8Zm60.36-.82.06,0,.62.8-.07,0ZM18.33,88.7l.64-.78L19,88l-.64.77Zm62.73-.8.06-.05.64.77-.07.06Zm-63.89-.18.66-.76.06.06-.66.75Zm65-.79.06-.05.66.76-.06,0ZM16,86.7l.69-.74.06.06-.68.74Zm67.28-.77.06-.05.69.74-.07,0Zm-68.38-.28.71-.72.06.06-.71.72Zm69.46-.75.06-.06.71.72-.06.06Zm-70.53-.34.73-.7.06.07-.73.69Zm71.58-.72,0-.06.73.69-.06.06Zm-72.62-.4.75-.67.06.06-.75.68Zm73.63-.7.06-.06.75.67-.06.06Zm-74.63-.45.77-.65.05.07-.76.65Zm75.61-.67.06-.07.77.65-.06.07Zm-76.58-.51.79-.62,0,.06-.78.63Zm77.53-.65.05-.06.79.62,0,.07ZM9.92,79.91l.81-.61,0,.07L10,80Zm79.37-.63,0-.07.81.6-.05.07ZM9,78.67l.82-.58.05.07-.83.58Zm81.14-.6,0-.07.83.58-.05.06Zm-82-.66L9,76.85l.05.08-.85.55ZM91,76.83l0-.07.84.55,0,.08ZM7.35,76.12l.86-.53,0,.07-.86.53Zm84.45-.55,0-.07.86.53,0,.07ZM6.57,74.8l.87-.5,0,.08-.88.5Zm86-.51,0-.07.88.5,0,.07ZM5.83,73.47,6.72,73l0,.08-.89.47ZM93.28,73l0-.07.89.47,0,.08ZM5.14,72.11l.9-.45,0,.08-.91.44ZM94,71.66l0-.08.9.45,0,.07ZM4.48,70.73l.92-.42,0,.07-.92.42Zm90.12-.42,0-.07.91.41,0,.08Zm-90.73-1,.92-.38,0,.07-.93.39ZM95.2,69l0-.08.93.39,0,.08Zm-91.9-1,.94-.35,0,.07L3.33,68Zm92.45-.33,0-.08.94.36,0,.08Zm-93-1.1,1-.33,0,.08-1,.33Zm93.5-.31,0-.07,1,.33,0,.08ZM2.29,65l1-.29,0,.08-1,.3Zm94.45-.26,0-.08,1,.3,0,.08ZM1.85,63.55l1-.27,0,.08-1,.28Zm95.32-.24,0-.08,1,.27,0,.09ZM1.46,62.08l1-.24,0,.08-1,.24Zm96.09-.21,0-.08,1,.24,0,.08ZM1.12,60.59l1-.21,0,.08-1,.22Zm96.77-.18,0-.08,1,.22,0,.08ZM.82,59.1l1-.18,0,.08-1,.18ZM98.18,59l0-.08,1,.18,0,.08ZM.57,57.6l1-.16,0,.09-1,.15Zm97.86-.12v-.09l1,.15v.09ZM.36,56.09l1-.13v.09l-1,.12ZM98.63,56v-.09l1,.12v.09ZM.2,54.57l1-.09v.08l-1,.09Zm98.59-.06v-.08l1,.09v.08ZM.09,53.05l1-.06v.08l-1,.06Zm98.82,0v-.08l1,.06v.08ZM0,51.52l1,0v.09l-1,0Zm99,0v-.09l1,0v.09Zm0-3.07,1,0v.09l-1,0ZM0,48.49v-.08l1,0v.09ZM98.9,47l1-.06V47l-1,0ZM.09,47v-.08l1,.06V47Zm98.7-1.5,1-.09v.08l-1,.1ZM.2,45.45v-.09l1,.1v.08ZM98.63,44l1-.13V44l-1,.12ZM.36,43.94v-.09l1,.12v.08Zm98.07-1.43,1-.16,0,.09-1,.15ZM.57,42.42v-.08l1,.15v.09ZM98.18,41l1-.18v.08l-1,.18ZM.82,40.92v-.08l1,.18v.08Zm97.06-1.35,1-.22,0,.09-1,.21ZM1.12,39.42v-.08l1,.22,0,.08Zm96.43-1.31,1-.24,0,.08-1,.24ZM1.46,37.94l0-.08,1,.24,0,.08Zm95.7-1.27,1-.28,0,.09-1,.27ZM1.85,36.46l0-.08,1,.28,0,.08Zm94.88-1.22,1-.31,0,.08-1,.31ZM2.28,35l0-.08,1,.31,0,.08Zm94-1.19.95-.33,0,.08-.95.33Zm-93.5-.26,0-.08,1,.33,0,.09Zm93-1.14.94-.37,0,.08-.94.36ZM3.29,32.12l0-.08.94.36,0,.08Zm.56-1.41,0-.08.93.39,0,.08ZM95.18,31l.93-.39,0,.07-.93.39ZM4.46,29.31l0-.07.91.42,0,.07Zm90.12.33.92-.41,0,.07-.91.42ZM5.11,27.94l0-.07.9.44,0,.08Zm88.83.35.9-.44,0,.07-.9.45ZM5.8,26.59l0-.08.89.48,0,.07ZM93.25,27l.89-.47,0,.07-.89.47ZM6.54,25.25l0-.07.87.5,0,.07Zm86,.4.87-.5,0,.07-.87.5ZM7.31,23.94l.05-.07.85.53,0,.07Zm84.45.42.86-.52,0,.07-.86.53ZM8.13,22.66l0-.07.84.55,0,.07ZM91,23.1l.84-.55,0,.07-.84.55ZM9,21.4l0-.07.82.58,0,.06Zm81.14.47.82-.58,0,.07-.82.57ZM9.87,20.16l.05-.07.81.61-.05.06Zm79.37.5.81-.61,0,.07-.81.6ZM10.8,19l0-.06.79.62-.05.07Zm77.53.52.78-.63.06.07-.79.63Zm-76.57-1.7.06-.06.77.65-.06.06Zm75.62.55.76-.66.06.07-.77.65Zm-74.62-1.7.06-.06.75.67-.06.07Zm73.63.57.75-.67.06.06-.75.67ZM13.8,15.5l.06-.06.72.7-.05.06Zm71.58.6.72-.7.06.06-.73.7ZM14.87,14.42l.06-.06.7.72-.06.05ZM84.33,15l.7-.71.06,0-.71.72ZM16,13.36,16,13.3l.68.74-.06.06ZM83.24,14l.69-.74.06.06-.69.74ZM17.1,12.34l.06-.06.66.76-.06.06Zm65,.67.66-.76.06.05-.66.76ZM18.26,11.35l.07,0,.64.78-.07.05ZM81,12l.64-.78.06.06-.64.78ZM19.46,10.4l.06-.05.62.8-.07,0Zm60.36.72.61-.8.07,0-.62.8ZM20.68,9.49l.07-.05.59.81-.07.05Zm57.94.74.59-.82.07.05-.59.81ZM21.93,8.61l.07,0,.56.84-.07,0Zm55.47.76L78,8.54l.07,0-.56.84ZM23.2,7.77l.08,0,.54.85-.08,0Zm53,.78.54-.85.07,0-.54.85ZM24.51,7l.07,0,.51.87-.07,0Zm50.37.81.51-.87.07,0L75,7.82Zm-49-1.57.08,0,.48.88-.07,0ZM73.58,7l.49-.88.07,0-.49.88ZM27.18,5.49l.07,0,.46.89-.07,0Zm45.08.85.46-.9.08,0-.46.9ZM28.55,4.82l.08,0,.43.91-.08,0Zm42.38.86.43-.91.07,0L71,5.72Zm-41-1.5.08,0,.4.92-.08,0Zm39.63.89.4-.93.08,0-.4.92ZM31.35,3.59l.08,0,.37.93-.08,0Zm36.85.9.37-.93.08,0-.38.93ZM66.8,4l.35-1,.08,0-.35,1ZM32.78,3l.08,0,.34,1-.08,0Zm32.61.43.31-1,.09,0-.32,1ZM34.22,2.54l.08,0,.32,1-.08,0ZM64,3l.29-1,.08,0L64,3ZM35.68,2.08l.08,0L36,3,36,3Zm26.84.54.26-1,.08,0-.26,1Zm-25.38-1,.09,0,.25,1-.08,0Zm23.93.6.23-1,.08,0-.22,1Zm-22.44-1h.08l.22,1-.08,0Zm21,.65.2-1h.08l-.2,1ZM40.12,1h.08l.2,1-.09,0Zm18,.71.17-1,.08,0-.16,1ZM41.61.69h.09l.16,1-.08,0Zm15.06.76.13-1,.09,0-.14,1ZM43.12.46h.09l.13,1h-.08Zm12.06.81.11-1h.08l-.1,1ZM44.64.28h.08l.11,1h-.09Zm9,.86.08-1h.08l-.07,1Zm-7.52-1h.07l.07,1h-.08Zm6,.91,0-1h.08l0,1Zm-4.52-1h.08l.05,1h-.09ZM49.2,0h.08l0,1h-.08Zm1.51,1,0-1h.08l0,1Z"
          ></path>
        </svg>
      </div>
      <div
        ref="videoContainer"
        class="mode-video-wrapper"
        :class="{ 'first-show': isAccess }"
      >
        <!-- video 1-->
        <div
          v-for="video in videos"
          :key="video.id"
          class="mode-video-container"
          :class="{ 'active-video': currentThumnailMap === video.id }"
        >
          <video
            :src="video.src"
            preload="metadata"
            loop
            muted
            autoplay
          ></video>
        </div>
      </div>

      <div class="mode-play-infor-container">
        <div class="mode-play-btn-wrapper">
          <h3>RẤT NHIỀU CÁCH</h3>
          <h2>CHƠI</h2>
          <button><nuxt-link to="/register"> CHƠI NGAY </nuxt-link></button>
        </div>
        <div>
          <div
            v-for="item in descriptions"
            :key="item.id"
            class="mode-play-desription-wrapper"
            :class="{ 'active-des': currentThumnailMap === item.id }"
          >
            <h3 class="mode-play-title">{{ item.title }}</h3>
            <p>
              {{ item.des }}
            </p>
          </div>
        </div>

        <div
          class="mode-play-select-wrapper"
          :style="{ top: champButtonPosition }"
        >
          <div
            class="mode-play-select-container"
            v-for="item in thumbnails"
            :key="item.id"
            @click="handleSelectMap(item.id)"
          >
            <h3 class="mode-play-select-title">{{ item.title }}</h3>
            <div
              class="mode-play-select-img-thumbnail-container"
              :class="{ 'active-map': currentThumnailMap === item.id }"
            >
              <img :src="item.img" alt="thumbnail img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile only -->
    <div class="mode-video-select-mobile-container">
      <div class="mode-video-select-inner-container-mobile">
        <div
          class="mode-video-select-img-mobile-container"
          v-for="item in thumbnails"
          :key="item.id"
          @click="handleSelectMap(item.id)"
          :class="{ 'active-map': currentThumnailMap === item.id }"
        >
          <img :src="item.img" alt="mode play image" />
        </div>
      </div>
      <div class="mode-mobile-button-container">
        <span class="mode-mobile-name">DAU TRUONG CHAN LY</span>
      </div>
      <div
        class="mode-mobile-description-container"
        v-for="item in descriptions"
        :key="item.id"
        :class="{ 'active-des': currentThumnailMap === item.id }"
      >
        <h3>{{ item.title }}</h3>
        <p>
          {{ item.des }}
        </p>
      </div>
    </div>
    <span class="champ-skin-text-annouce">CHẾ ĐỘ CHƠI</span>
  </div>
</template>

<script setup>
import { handleAccess } from "../../utils/handleAccess";
const isAccess = ref(false);
const videoContainer = ref(null);

const images = reactive([
  {
    id: 1,
    img: "/img/aram.jpg",
  },
  {
    id: 2,
    img: "/img/aram-1.jpg",
  },
  {
    id: 3,
    img: "/img/tft.jpg",
  },
]);

const descriptions = reactive([
  {
    id: 1,
    title: "CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT",
    des: "Dọn dường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch truowccs khi Nhà chính của bạn bị phá hủy.",
  },
  {
    id: 2,
    title: "TẤT CẢ NGẪU NHIÊN, CHỈ ĐI ĐƯỜNG GIỮA",
    des: "Chiến đấu trên một cây cầu băng giá với những vị tướng ngẫu nhiên để xông thẳng tới Nhà Chính của địch trong chế độ 5v5 vui nhộn và hỗn loạn.",
  },
  {
    id: 3,
    title: "MỘT TRẬN HỖN CHIẾN ĐỂ GIÀNH NGÔI VỊ BÁ CHỦ",
    des: "Tập hợp những vị tướng để chiến đấu cho bạn. Vượt qua 7 đối thủ khác để trở thành người sống sót cuối cùng.",
  },
]);

const videos = reactive([
  {
    id: 1,
    src: "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt04d1a8eb899e9dd4/5d87c234c7fab32df76ddee5/summonersrift.mp4",
  },
  {
    id: 2,
    src: "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt368bbe12c8917439/5d87c69c5b3acf6e5c6efa6a/howlingabyss.mp4",
  },
  {
    id: 3,
    src: "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt358cbfdb47618c25/5d87c2345b3acf6e5c6efa5e/teamfighttactics.mp4",
  },
]);

const currentThumnailMap = ref(2);

const thumbnails = reactive([
  {
    id: 1,
    img: "/img/summonersrift.jpg",
    title: "SUMMONER'S RIFT",
  },
  {
    id: 2,
    img: "/img/aram-thumbnail.jpg",
    title: "ARAM",
  },
  {
    id: 3,
    img: "/img/tft-thumbnail.jpg",
    title: "ĐẤU TRƯỜNG CHÂN LÝ",
  },
]);


const handleSelectMap = (id) => {
  currentThumnailMap.value = id;
};

const champButtonPositions = {
  1: "35%",
  2: "8%",
  3: "-20%",
};

const champButtonPosition = computed(() => {
  return champButtonPositions[currentThumnailMap.value] || "8%";
});

// canvas

const canvasCircle = ref(null);
const canvasContainer = ref(null);
let resizeObserver;

const canvasSize = reactive({ width: 0, height: 0 });

const calculateCanvasSize = () => {
  if (!canvasContainer.value) return;

  const width = canvasContainer.value.offsetWidth;
  const height = canvasContainer.value.offsetHeight;
  // Ensure the canvas maintains a square aspect ratio
  const size = Math.min(width, height);
  canvasSize.width = size;
  canvasSize.height = size;
};
const resizeCanvas = () => {
  calculateCanvasSize();
  if (!canvasCircle.value) return;

  const ctx = canvasCircle.value.getContext("2d");
  if (!ctx) return;

  const { width, height } = canvasSize;
  const centerX = width / 2;
  const centerY = height / 2;
  const mainRadius = width / 2 - 10; // Main circle radius

  ctx.clearRect(0, 0, width, height);

  // Draw main circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, mainRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.fill();
  ctx.strokeStyle = "rgb(186, 194, 204)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();

  // Draw red lines around the main circle
  const numLines = 3; // Number of lines
  const lineRadius = mainRadius; // Radius for the lines around the main circle

  for (let i = 0; i < numLines; i++) {
    const angle = (i * (2 * Math.PI)) / numLines + performance.now() / 1000; // Adding time-based animation
    ctx.beginPath();
    ctx.arc(centerX, centerY, lineRadius, angle, angle + 1.2); // Adjust the angle to draw a small arc
    ctx.lineWidth = 3; // Adjust line width as desired
    ctx.strokeStyle = "#C9A45F"; // Set line color to red
    ctx.stroke();
    ctx.closePath();
  }

  requestAnimationFrame(resizeCanvas); // Loop the animation
};

onMounted(() => {
  calculateCanvasSize();
  resizeCanvas();
  handleAccess(videoContainer.value, isAccess);
  resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(canvasContainer.value);
  window.addEventListener("resize", resizeCanvas);
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  window.removeEventListener("resize", resizeCanvas);
});
</script>

<style scoped>
@import url("../../assets/style/modeplay.css");
</style>
