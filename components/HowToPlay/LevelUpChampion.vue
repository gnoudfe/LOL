<template>
  <div>
    <div class="level-up-header-container">
      <h2
        ref="levelUpHead"
        class="level-up-head"
        :class="{ 'first-show': isAcces }"
      >
        TĂNG SỨC MẠNH CHO TƯỚNG
      </h2>
      <p
        ref="levelUpDes"
        class="level-up-content"
        :class="{ 'first-show': isAcces }"
      >
        Các vị tướng trở nên mạnh mẽ hơn bằng cách thu thập điểm kinh nghiệm để
        thăng cấp và kiếm vàng để mua những trang bị uy lực hơn theo tiến trình
        của trận đấu. Luôn dẫn đầu trong hai yếu tố này là điều quan trọng để áp
        đảo đội địch và phá hủy căn cứ của họ.
      </p>
    </div>

    <div ref="levelUpStep" class="level-up-step-wrapper">
      <div class="level-up-step-inner-row" :class="{ 'first-show': isAcces2 }">
        <div class="level-up-step-video-left-container">
          <div
            class="level-up-step-video-container"
            v-for="video in videosStep"
            :key="video.id"
            :class="{ open: currentStep === video.id }"
          >
            <video
              preload="metadata"
              loop
              muted
              playsinline
              autoplay
              :src="video.src"
            ></video>
          </div>
          <div
            class="level-up-step-video-container"
            :class="{ open: currentStep === 2 }"
          >
            <img src="/img/shop.jpg" alt="shop keeper" />
          </div>
        </div>
        <div class="level-up-step-right">
          <ul class="level-up-step-items-wrapper">
            <li
              class="level-up-step-items"
              v-for="step in steps"
              :key="step.id"
              :class="{ open: currentStep === step.id }"
            >
              <div class="level-up-step-item-content-container">
                <div
                  class="level-up-header-items-container"
                  @click="selectStep(step.id)"
                >
                  <svg
                    v-if="currentStep === step.id"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path d="M0 40v20h100V40z"></path>
                  </svg>
                  <h3 class="level-up-step-item-heading">
                    {{ step.title }}
                  </h3>
                </div>
                <p class="level-up-step-item-des">
                  {{ step.des }}
                </p>
              </div>
            </li>
          </ul>
        </div>
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
          style="fill: none; stroke: rgb(193, 193, 193); stroke-miterlimit: 10"
          d="M52.05.56h-.23l-.16.17c-3.47 3.46-6.93 6.93-10.4 10.4L30.86.73 30.7.56h-.23"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
const levelUpHead = ref(null);
const levelUpDes = ref(null);
const levelUpStep = ref(null);
const isAcces = ref(null);
const isAcces2 = ref(null);
import { handleAccess } from "../../utils/handleAccess";
const steps = reactive([
  {
    id: 0,
    title: "TÍCH LŨY KINH NGHIỆM",
    des: "Khi một tướng thu thập đủ lượng điểm kinh nghiệm nhất định, họ sẽ thăng cấp và có thể mở khóa hoặc cường hóa các kỹ năng cũng như gia tăng chỉ số cơ bản. Thu thập điểm kinh nghiệm bằng cách tiêu diệt/hỗ trợ tiêu diệt lính và tướng địch, cũng như phá hủy các công trình phòng thủ.",
  },
  {
    id: 1,
    title: "KIẾM VÀNG",
    des: "Vàng là đơn vị tiền tệ trong trận đấu được sử dụng để mua trang bị cho tướng. Thu thập vàng bằng cách tiêu diệt/hỗ trợ tiêu diệt lính và tướng địch, cũng như phá hủy các công trình phòng thủ và sử dụng những trang bị cộng thêm vàng.",
  },
  {
    id: 2,
    title: "CỬA HÀNG",
    des: "Cửa Hàng là nơi bạn có thể mua bán các trang bị bằng số vàng bạn đã kiếm được. Bạn chỉ có thể vào Cửa Hàng khi đứng tại Bệ Đá Cổ.",
  },
]);

const videosStep = reactive([
  {
    id: 0,
    src: "https://lienminh.vnggames.com/static/experience-720-d5afe06bd7f50d8078d0a7b635c726b2.webm",
  },
  {
    id: 1,
    src: "https://lienminh.vnggames.com/static/gold-720-6154cdb7e69cba368f79ce3215ba8d65.webm",
  },
]);

const currentStep = ref(0);
const selectStep = (id) => {
  currentStep.value = id;
};

onMounted(() => {
  handleAccess(levelUpHead.value, isAcces);
  handleAccess(levelUpDes.value, isAcces);
  handleAccess(levelUpStep.value, isAcces2);
});
</script>

<style scoped>
@import url("../../assets/style/howtoplay.css");
</style>
