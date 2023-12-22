<template>
  <div class="select-champion-container">
    <div class="select-champion-left">
      <div class="select-champion-bottom-border"></div>
      <div class="select-champion">
        <button
          class="champion-type"
          v-for="championType in championTypes"
          :key="championType.id"
          @click="handleSelectChamp(championType.id)"
        >
          <span class="champion-type-logo-container">
            <span
              class="champion-type-logo"
              :class="{
                'current-champ': currentChampSelect === championType.id,
              }"
            >
              <ChampionHomeType
                :championType="championType.name"
                :currentChamp="currentChampSelect === championType.id"
              />
            </span>
            <span
              class="champion-type-logo-outer"
              :class="{
                'current-champ': currentChampSelect === championType.id,
              }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path
                  fill="rgb(195, 144, 49)"
                  d="M59.84 7.78L50 17.63l-4.43-4.43-5.41-5.42a46.63 46.63 0 1019.68 0zm-12 12L50 22l2.2-2.19 4.67-4.67a38.86 38.86 0 11-13.74 0zM50 96.89a43.52 43.52 0 01-10.82-85.68l2.59 2.59a40.42 40.42 0 1016.46 0l2.59-2.59A43.52 43.52 0 0150 96.89z"
                ></path>
                <path
                  fill="rgb(195, 144, 49)"
                  d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"
                ></path>
              </svg>
            </span>
          </span>
          <span
            class="champion-type-name"
            :class="{ 'current-champ': currentChampSelect === championType.id }"
          >
            {{ championType.name }}</span
          >
          <span
            class="champion-type-button"
            :class="{ 'current-champ': currentChampSelect === championType.id }"
          >
          </span>
        </button>
        <div :style="{ left: champButtonPosition }" class="current-champ-btn">
          <span></span>
        </div>
      </div>
      <div class="select-champion-bottom-border"></div>

      <div class="champ-vid-container">
        <video
          v-for="vid in champVids"
          :key="vid.id"
          :src="vid.src"
          class="champ-vid"
          :class="{
            'show-vid': currentChampSelect === vid.id,
          }"
          loop
          muted
          autoplay
        ></video>
      </div>
    </div>
    <div class="select-champion-right">
      <div class="select-champ-wrapper">
        <div
          v-for="champ in champImage"
          :key="champ.id"
          class="select-champion-img-container"
          :class="{
            'hide-champ': currentChampSelect !== champ.id && champ.type !== 2,
            'show-champ': currentChampSelect === champ.id && champ.type !== 3,
            'show-champ-2': currentChampSelect === champ.id && champ.type === 3,
            'hide-champ-2': currentChampSelect !== champ.id && champ.type === 2,
          }"
        >
          <img
            :src="champ.img"
            alt="champion img"
            class="select-champion-img"
          />
        </div>
      </div>
      <div ref="canvasContainer" class="canvas-circle-container">
        <canvas
          ref="canvasCircle"
          class="canvas-circle"
          :width="canvasSize.width"
          :height="canvasSize.height"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
const champImage = reactive([
  {
    id: 1,
    img: "/img/assasin.png",
    type: 2,
  },
  {
    id: 2,
    img: "/img/yasou.png",
    type: 3,
  },
  {
    id: 3,
    img: "/img/lux.png",
    type: 2,
  },
  {
    id: 4,
    img: "/img/jinx.png",
    type: 3,
  },
  {
    id: 5,
    img: "/img/thresh.png",
    type: 2,
  },
  {
    id: 6,
    img: "/img/leona.png",
    type: 3,
  },
]);

const champVids = reactive([
  {
    id: 1,
    src: "https://lienminh.vnggames.com/static/assassin-8bb741f0fe6d55c0844ede6e3fe1b5ad.webm",
  },
  {
    id: 2,
    src: "https://lienminh.vnggames.com/static/fighter-56f0e81707c5104dd35ee7a2b1d8e72a.webm",
  },
  {
    id: 3,
    src: "https://lienminh.vnggames.com/static/mage-8beae0975cae649908a0d539435306db.webm",
  },
  {
    id: 4,
    src: "https://lienminh.vnggames.com/static/marksman-d7367883b0979249f9309c03efdd23d9.webm",
  },
  {
    id: 5,
    src: "https://lienminh.vnggames.com/static/support-10b76f08757ee3ce7169c344108b457b.webm",
  },
  {
    id: 6,
    src: "https://lienminh.vnggames.com/static/tank-7bc533fcd17c3eca769764141020debb.webm",
  },
]);

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

const currentChampSelect = ref(1);
const championTypes = [
  { id: 1, name: "SÁT THỦ" },
  { id: 2, name: "ĐẤU SĨ" },
  { id: 3, name: "PHÁP SƯ" },
  { id: 4, name: "XẠ THỦ" },
  { id: 5, name: "HỖ TRỢ" },
  { id: 6, name: "ĐỠ ĐÒN" },
];

const handleSelectChamp = (id) => {
  currentChampSelect.value = id;
};
const champButtonPositions = {
  1: "6.7%",
  2: "23.4%",
  3: "40%",
  4: "56.7%",
  5: "73.4%",
  6: "90%",
};
const champButtonPosition = computed(() => {
  return champButtonPositions[currentChampSelect.value] || "6.5%";
});
</script>

<style scoped>
@import url("../../assets/style/champion.css");
</style>
