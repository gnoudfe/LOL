<template>
  <div class="champ-skin-container">
    <div ref="background" class="champ-skin-img-wrapper">
      <div
        class="champ-skin-img-container"
        @mousemove="handleMouseMoveParallax"
      >
        <img src="/img/champ-2.png" alt="champ-background-image" />
      </div>
      <div class="champ-skin-img-container">
        <img src="/img/champ-1.png" alt="champ-background-image" />
      </div>
    </div>

    <div ref="champSkin" class="champ-skin-type-wrapper">
      <!-- canvas -->
      <div class="champ-skin-type-canvas-container">
        <canvas ref="diamondCanvas" class="champ-skin-type-canvas"></canvas>
      </div>
      <div>
        <div
          class="champ-skin-type-container"
          :class="{ 'show-champ': image.show, 'hide-champ': !image.show }"
          v-for="image in images"
          :key="image.id"
        >
          <img :src="image.img" alt="skin type image" />
        </div>
      </div>
    </div>

    <div
      ref="champInfor"
      class="champ-skin-type-infor-wrapper"
      :class="{ 'first-show': isAccess }"
    >
      <h3 class="champ-skin-type-heading">HẠ GỤC KẺ ĐỊCH</h3>
      <h2 class="champ-skin-type-title">MỘT CÁCH SANG CHẢNH</h2>
      <p class="champ-skin-type-para">
        Thay đổi diện mạo các vị tướng yêu thích với trang phục để tạo nên điểm
        nhấn của riêng bạn.
      </p>
      <nuxt-link to="/register">
        <button class="champ-skin-type-button">Chơi ngay</button>
      </nuxt-link>
    </div>

    <span class="champ-skin-text-annouce">TRANG PHỤC TƯỚNG</span>
  </div>
</template>

<script setup>
import { handleAccess } from "../../utils/handleAccess";
const champSkin = ref(null);
const champInfor = ref(null);
const isAccess = ref(false);
const background = ref(null);

const handleMouseMoveParallax = (event) => {
  if (window.innerWidth < 768) return;
  const champSkinElement = champSkin.value;
  const champInforElement = champInfor.value;

  if (champInforElement && champSkinElement) {
    const mouseX = event.clientX / 240;
    const mouseY = event.clientY / 240;
    champSkinElement.style.transform = `translateX(-50%) translateY(35%) translate3d(${-mouseX}px, ${mouseY}px, 0)`;
    champInforElement.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }
};

const images = reactive([
  {
    id: 1,
    img: "/img/assasin-2.png",
    show: true,
  },
  {
    id: 2,
    img: "/img/assasin-3.png",
    show: false,
  },
  {
    id: 3,
    img: "/img/assasin-4.png",
    show: false,
  },
]);

const currentIndex = ref(0);
const updateImages = () => {
  setInterval(() => {
    images[currentIndex.value].show = false;
    currentIndex.value = (currentIndex.value + 1) % images.length;
    images[currentIndex.value].show = true;
  }, 3000);
};

const diamondCanvas = ref(null);

const diamondAnimation = () => {
  if (diamondCanvas.value) {
    const canvas = diamondCanvas.value;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const width = (canvas.width = 720); // Thay đổi kích thước tùy thích
      const height = (canvas.height = 720);

      // Vẽ hình thoi
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width, height / 2);
      ctx.lineTo(width / 2, height);
      ctx.lineTo(0, height / 2);
      ctx.closePath();
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.strokeStyle = "#C9A45F";
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();
    }
  }
};
onMounted(() => {
  updateImages();
  diamondAnimation();
  handleAccess(champInfor.value, isAccess, null);
  window.addEventListener("mousemove", handleMouseMoveParallax);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMoveParallax);
});
</script>

<style lang="css" scoped>
@import url("../../assets/style/champskin.css");
</style>
