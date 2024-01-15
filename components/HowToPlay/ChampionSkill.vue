<template>
  <div ref="abilities" class="champion-skill-all-wrapper">
    <div class="champion-background-container-outer">
      <div
        ref="firstBackground"
        class="champion-background-container first-background"
      ></div>
    </div>
    <div class="champion-background-container-outer">
      <div class="champion-background-container second-background"></div>
    </div>
    <div class="champion-background-2-container"></div>

    <div
      ref="championSkillRef"
      class="champion-skill-infor-container"
      :class="{ 'first-show': isAccess }"
    >
      <h3 class="champion-skill-heading">MỞ KHÓA KỸ NĂNG</h3>
      <p class="champion-skill-content">
        Mỗi tướng có 5 kỹ năng chính, 2 phép bổ trợ đặc biệt và có thể sở hữu
        cùng lúc tối đa 7 trang bị. Khám phá ra thứ tự kỹ năng, phép bổ trợ và
        cách lên đồ tối ưu cho tướng của bạn sẽ giúp bạn cũng như cả đội giành
        được chiến thắng.
      </p>
    </div>

    <div class="champion-skill-step-wrapper">
      <button
        class="champion-skill-button"
        v-for="skill in skills"
        :key="skill.id"
        @click="handleSelectSkill(skill.id)"
        :class="{ 'active-skill': currentSkill === skill.id }"
      >
        <span>{{ skill.name }}</span>
        <div class="champion-skill-bullet"></div>
      </button>

      <div
        :style="{ left: currentPosition }"
        class="champ-current-skill-container"
      >
        <div class="champ-current-skill-inner"></div>
      </div>
    </div>

    <div class="champion-skill-step-expl-container">
      <p
        class="champion-skill-step-expl"
        v-for="item in explSkills"
        :key="item.id"
        :class="{ 'active-skill': currentSkill === item.id }"
      >
        {{ item.des }}
      </p>
    </div>
    <div class="champion-skill-image-wrapper">
      <div class="champion-skill-image-inner-container">
        <div class="champion-hudLayer-static">
          <img src="/img/staticBase.png" alt="HUD static image" />
        </div>
        <div class="champion-hudLayer-static">
          <img src="/img/championavatar.png" alt="Avatar hud image" />
        </div>
        <button
          class="champion-hudLayer-img-container abilities-hud"
          :class="{ 'is-active': currentSkill === 0 }"
          @click="handleSelectSkill(0)"
        >
          <img src="/img/abilities.png" alt="abilities image" />
        </button>
        <button
          class="champion-hudLayer-img-container spells-hud"
          :class="{ 'is-active': currentSkill === 1 }"
          @click="handleSelectSkill(1)"
        >
          <img src="/img/spell.png" alt="spell image" />
        </button>
        <button
          class="champion-hudLayer-img-container items-hud"
          :class="{ 'is-active': currentSkill === 2 }"
          @click="handleSelectSkill(2)"
        >
          <img src="/img/items.png" alt="spells image" />
        </button>
        <div class="champion-hudLayer-static">
          <img src="/img/static2.png" alt="extra hud image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { handleAccess } from "../../utils/handleAccess";
const championSkillRef = ref(null);
const isAccess = ref(null);
const abilities = ref(null);
const firstBackground = ref(null);
const skills = reactive([
  {
    id: 0,
    name: "Kỹ năng",
  },

  {
    id: 1,
    name: "Phép bổ trợ",
  },
  {
    id: 2,
    name: "Trang bị",
  },
]);

const explSkills = reactive([
  {
    id: 0,
    des: "Đa số các tướng đều sở hữu một bộ kỹ năng độc nhất bao gồm 5 kỹ năng: 1 Nội Tại, 3 Kỹ Năng Cơ Bản và 1 Chiêu Cuối. Những kỹ năng này được gán mặc định cho các phím Q, W, E và R.",
  },
  {
    id: 1,
    des: "Phép bổ trợ là những kỹ năng với hiệu ứng độc đáo mà các tướng có thể sử dụng. Chúng được gán mặc định cho phím D và F. Có rất nhiều phép bổ trợ, nhưng các phép được sử dụng phổ biến là Tốc Biến, Dịch Chuyển, Trừng Phạt và Thiêu Đốt.",
  },
  {
    id: 2,
    des: "Các trang bị sẽ cường hóa sức mạnh cho tướng, ví dụ như tăng tốc độ di chuyển, cải thiện sát thương và giảm thời gian hồi chiêu. Khác với Phụ Kiện, người chơi cần sử dụng vàng để mua trang bị.",
  },
]);

const currentSkill = ref(0);
const currentPositionRange = {
  0: "32%",
  1: "48.5%",
  2: "65%",
};

const currentPosition = computed(() => {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    currentPositionRange[0] = "25%";
    currentPositionRange[2] = "71%";
  }
  return currentPositionRange[currentSkill.value] || currentPositionRange[0];
});

const handleSelectSkill = (id) => {
  currentSkill.value = id;
};
const transformPosition = ref(0);
const handleBackgroundScroll = () => {
  if (abilities.value) {
    const eleTop = abilities.value.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    transformPosition.value = Math.min(
      Math.max(((windowHeight - eleTop) / windowHeight) * 200 - 100, -600),
      200
    );

    firstBackground.value.style.transform = `translate3d(0px,${transformPosition.value}px,0px`;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleBackgroundScroll);
  handleAccess(championSkillRef.value, isAccess);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleBackgroundScroll);
});
</script>

<style scoped>
@import url("../../assets/style/championSkill.css");
</style>
