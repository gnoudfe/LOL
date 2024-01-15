<template>
  <div class="details-champions-wrapper">
    <div class="details-background-container">
      <div class="details-background-img-container">
        <img
          :src="state.detailChampion[0].champion_splash"
          alt="background champ image"
        />
      </div>

      <div class="details-img-container">
        <img
          :src="state.detailChampion[0].champion_splash"
          alt="background champ image"
        />
      </div>

      <div class="details-infor-champ-wrapper">
        <div class="details-infor-name-container">
          <h3>{{ state.detailChampion[0].champion_title }}</h3>
          <h2>{{ state.detailChampion[0].champion_name }}</h2>
        </div>
        <div
          ref="inforChampion"
          class="details-infor-champ-container-wrapper"
          :class="{ 'first-show': isAccess }"
        >
          <div class="details-infor-champ-container">
            <div class="details-infor-role">
              <div class="details-infor-role-container">
                <svg
                  data-testid="overview:roleicon"
                  class="style__StyledSpecsIcon-sc-8gkpub-17-i kUmjKh"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M67.84,56.35v5.5h0c8.62-8.62,14.37,0,14.37,0C112.14,40.78,90.35,2,90.35,2s-.72,17.24-15.08,27.77V46.29c-.24,4.79-3.84,7.9-7.43,10.06"
                  ></path>
                  <path
                    d="M17.79,62.09s4.07-6.46,10.78-2.63L20.91,48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14,41,17.79,62.09"
                  ></path>
                  <path
                    d="M26.89,83.89,32.4,65.21l-.24-.48L19.23,77.9A17.78,17.78,0,0,1,7.5,83.17H3L2,85.56l12,11.5Z"
                  ></path>
                  <path
                    d="M92.27,83.89a16.24,16.24,0,0,1-11.74-5.27L68.8,66.88,72.63,84.6,85.8,98l12-11.49-1-2.4Z"
                  ></path>
                  <path
                    d="M55.87,42.7c0,.24-.24.48-.24.71h.72c5.75.48,7.66,2.64,9.1,7.67a9.35,9.35,0,0,0,2.39-1.92c1-1,1.68-1.67,1.68-2.63V28.09a2,2,0,0,0-1.68-1.92L36.47,20.43H36a2.39,2.39,0,0,0-2.39,2.39v6.71l24.9,3.35Z"
                  ></path>
                  <path
                    d="M60.18,54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78,48V44.13h5.51A4.09,4.09,0,0,0,50.36,41l1-3.35L32.4,35l-5,12.22,11.74,17L33.6,82.69,49.88,98,66.41,82.93s-6.23-28.5-6.23-29"
                  ></path>
                  <path d="M49.88,2.23,45.09,12.52l4.79,3.83,4.79-3.83Z"></path>
                  <path d="M62.1,9.41l1.43,6h6l2.87-11Z"></path>
                  <path d="M30.25,15.4h6l.24-.72,1.2-5.27-10.3-5Z"></path>
                </svg>
                <div class="details-role title">Vai trò</div>
                <div class="details-role">
                  {{
                    changeRoleVnese(
                      state.detailChampion[0].recommended_roles[0]
                    )
                  }}
                </div>
              </div>
              <div class="details-infor-diff-level-container">
                <div class="details-level-flex" v-if="isEasyDiff">
                  <span class="details-infor-diff-level current-level"></span>
                  <span class="details-infor-diff-level"></span>
                  <span class="details-infor-diff-level"></span>
                </div>
                <div class="details-level-flex" v-if="isMediumDiff">
                  <span class="details-infor-diff-level current-level"></span>
                  <span class="details-infor-diff-level current-level"></span>
                  <span class="details-infor-diff-level"></span>
                </div>
                <div class="details-level-flex" v-if="isHardDiff">
                  <span class="details-infor-diff-level current-level"></span>
                  <span class="details-infor-diff-level current-level"></span>
                  <span class="details-infor-diff-level current-level"></span>
                </div>
                <div class="details-role title">Độ khó</div>
                <div class="details-role" v-if="isEasyDiff">Dễ</div>
                <div class="details-role" v-if="isMediumDiff">Trung bình</div>
                <div class="details-role" v-if="isHardDiff">Khó</div>
              </div>
            </div>
            <ol class="details-infor-story">
              <li :class="{ 'full-text': isViewMore }">
                <span :class="{ 'full-text': isViewMore }">{{
                  state.detailChampion[0].lore
                }}</span>
              </li>

              <span
                v-if="!isViewMore"
                class="view-more-des-btn"
                @click="handleViewMoreDes"
                >Xem thêm</span
              >
            </ol>
          </div>
          <div class="details-infor-champ-eff">
            <span class="details-proficency">THÔNG THẠO TƯỚNG</span>
            <nuxt-link
              v-for="link in state.detailChampion[0].links"
              :to="link.href"
              target="_blank"
            >
              <span class="details-data">{{ link.title }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="details-skill-champ">
      <div class="details-skill-champ-container">
        <div class="details-skill-description">
          <div class="details-skill-border"></div>
          <div class="details-select-skill-container">
            <h3 class="details-skill-title">KỸ NĂNG</h3>
            <div class="details-infor-skills-container-wrapper">
              <ol
                class="details-skill-name-container"
                v-for="item in skills"
                :key="item.id"
              >
                <li :class="{ 'is-show': currentSkillSelect === item.id }">
                  <span class="details-skill-type">{{ item.type }}</span>
                  <h3 class="details-skill-name-call">{{ item.name }}</h3>
                  <p class="details-skill-name-des">
                    {{ item.des }}
                  </p>
                </li>
              </ol>
            </div>
            <button
              class="details-skill"
              v-for="skill in skills"
              :key="skill.id"
              :class="{ active: currentSkillSelect === skill.id }"
              @click="handleSelectSkill(skill.id)"
            >
              <div class="details-skill-img-container">
                <img :src="skill.img" alt="skill champ img" />
              </div>
              <span class="details-skill-button"></span>
            </button>
            <div
              :style="{ left: skillButtonPosition }"
              class="details-current-skills"
            >
              <span></span>
            </div>
          </div>
          <div class="details-skill-border"></div>
        </div>
        <div class="details-skill-video-container">
          <div v-for="video in videoSource" :key="video.id">
            <video
              class="details-skill-video"
              :class="{ 'is-show': currentSkillSelect === video.id }"
              :src="video.src"
              autoplay
              preload="none"
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div class="details-skill-background-container">
        <svg viewBox="0 0 100 100">
          <path
            d="M67.84,56.35v5.5h0c8.62-8.62,14.37,0,14.37,0C112.14,40.78,90.35,2,90.35,2s-.72,17.24-15.08,27.77V46.29c-.24,4.79-3.84,7.9-7.43,10.06"
          ></path>
          <path
            d="M17.79,62.09s4.07-6.46,10.78-2.63L20.91,48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14,41,17.79,62.09"
          ></path>
          <path
            d="M26.89,83.89,32.4,65.21l-.24-.48L19.23,77.9A17.78,17.78,0,0,1,7.5,83.17H3L2,85.56l12,11.5Z"
          ></path>
          <path
            d="M92.27,83.89a16.24,16.24,0,0,1-11.74-5.27L68.8,66.88,72.63,84.6,85.8,98l12-11.49-1-2.4Z"
          ></path>
          <path
            d="M55.87,42.7c0,.24-.24.48-.24.71h.72c5.75.48,7.66,2.64,9.1,7.67a9.35,9.35,0,0,0,2.39-1.92c1-1,1.68-1.67,1.68-2.63V28.09a2,2,0,0,0-1.68-1.92L36.47,20.43H36a2.39,2.39,0,0,0-2.39,2.39v6.71l24.9,3.35Z"
          ></path>
          <path
            d="M60.18,54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78,48V44.13h5.51A4.09,4.09,0,0,0,50.36,41l1-3.35L32.4,35l-5,12.22,11.74,17L33.6,82.69,49.88,98,66.41,82.93s-6.23-28.5-6.23-29"
          ></path>
          <path d="M49.88,2.23,45.09,12.52l4.79,3.83,4.79-3.83Z"></path>
          <path d="M62.1,9.41l1.43,6h6l2.87-11Z"></path>
          <path d="M30.25,15.4h6l.24-.72,1.2-5.27-10.3-5Z"></path>
        </svg>
      </div>
    </div>

    <div class="details-all-skin-available">
      <span class="details-all-skin-annouce"> TRANG PHỤC HIỆN CÓ </span>
      <div class="details-all-skin-inner">
        <div class="details-skin-img-container">
          <div
            class="details-skin-img-wrapper"
            v-for="(item, index) in state.detailChampion[0].skins"
            :key="index"
            :class="{ 'active-skin': currentSkin === index }"
          >
            <img
              :src="item.imageUrl"
              alt="champion skin"
              class="details-skin-img"
            />
          </div>
        </div>

        <div class="details-skin-select-container">
          <h2 class="details-skin-select-heading">TRANG PHỤC HIỆN CÓ</h2>
          <ul ref="skinContainer" class="details-skin-select-wrapper">
            <li
              class="details-skin-select-items"
              v-for="(skin, index) in state.detailChampion[0].skins"
              :key="index"
              @click="handleSelectSkin(index)"
              :class="{ 'active-skin': currentSkin === index }"
            >
              <div class="details-skin-img-item-container">
                <img :src="skin.imageUrl" alt="skin champion image" />
              </div>
              <h4 class="details-skin-name">
                {{
                  skin.name === "default"
                    ? state.detailChampion[0].champion_name
                    : skin.name
                }}
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAllChampions } from "../../store/useChampion";
import { handleAccess } from "../../utils/handleAccess";
const { state } = useAllChampions();
const isEasyDiff = ref(false);
const isMediumDiff = ref(false);
const isHardDiff = ref(false);
const inforChampion = ref(null);
const isAccess = ref(false);
const isViewMore = ref(false);
const handleViewMoreDes = () => {
  isViewMore.value = true;
};

const rangesDiff = reactive([
  {
    min: 0,
    max: 3,
  },
  {
    min: 4,
    max: 7,
  },
  { min: 8, max: 10 },
]);

const determineDifficulty = (difficulty) => {
  isEasyDiff.value =
    difficulty >= rangesDiff[0].min && difficulty <= rangesDiff[0].max;
  isMediumDiff.value =
    difficulty >= rangesDiff[1].min && difficulty <= rangesDiff[1].max;
  isHardDiff.value =
    difficulty >= rangesDiff[2].min && difficulty <= rangesDiff[2].max;
};

const filterDifficulty = () => {
  const championDifficulty = state.detailChampion[0].difficulty;
  determineDifficulty(championDifficulty);
};

const changeRoleVnese = (role) => {
  switch (role.toLowerCase()) {
    case "fighter":
      return "Đấu Sĩ";
    case "assassin":
      return "Sát thủ";
    case "mage":
      return "Pháp sư";
    case "marksman":
      return "Xạ thủ";
    case "support":
      return "Hỗ Trợ";
    case "tank":
      return "Đỡ đòn";
  }
};

const currentSkillSelect = ref(1);
const currentSkin = ref(0);
const skinContainer = ref(null);
const pos = reactive({
  top: 0,
  left: 0,
  x: 0,
  y: 0,
});
onMounted(() => {
  skinContainer.value.scrollTop = 100;
  skinContainer.value.scrollLeft = 150;

  const mouseDownHandler = (e) => {
    pos.value = {
      left: skinContainer.value.scrollLeft,
      top: skinContainer.value.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.value.x;
    const dy = e.clientY - pos.value.y;

    // Scroll the element
    skinContainer.value.scrollTop = pos.value.top - dy;
    skinContainer.value.scrollLeft = pos.value.left - dx;
  };
  const mouseUpHandler = () => {
    skinContainer.value.style.cursor = "grab";
    skinContainer.value.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  skinContainer.value.addEventListener("mousedown", mouseDownHandler);
});
const skills = reactive([
  {
    id: 1,
    img: state.detailChampion[0].champion_passive.champion_passive_icon,
    type: "Nội tại",
    name: state.detailChampion[0].champion_passive.champion_passive_name,
    des: state.detailChampion[0].champion_passive.champion_passive_description,
  },
  {
    id: 2,
    img: state.detailChampion[0].champion_q.champion_q_icon,
    type: "Q",
    name: state.detailChampion[0].champion_q.champion_q_name,
    des: state.detailChampion[0].champion_q.champion_q_description,
  },
  {
    id: 3,
    img: state.detailChampion[0].champion_w.champion_w_icon,
    type: "W",
    name: state.detailChampion[0].champion_w.champion_w_name,
    des: state.detailChampion[0].champion_w.champion_w_description,
  },
  {
    id: 4,
    img: state.detailChampion[0].champion_e.champion_e_icon,
    type: "E",
    name: state.detailChampion[0].champion_e.champion_e_name,
    des: state.detailChampion[0].champion_e.champion_e_description,
  },
  {
    id: 5,
    img: state.detailChampion[0].champion_r.champion_r_icon,
    type: "R",
    name: state.detailChampion[0].champion_r.champion_r_name,
    des: state.detailChampion[0].champion_r.champion_r_description,
  },
]);

const videoSource = reactive([
  {
    id: 1,
    src: state.detailChampion[0].champion_passive.champion_passive_video_webm,
  },
  {
    id: 2,
    src: state.detailChampion[0].champion_q.champion_q_video_webm,
  },
  {
    id: 3,
    src: state.detailChampion[0].champion_w.champion_w_video_webm,
  },
  {
    id: 4,
    src: state.detailChampion[0].champion_e.champion_e_video_webm,
  },
  {
    id: 5,
    src: state.detailChampion[0].champion_r.champion_r_video_webm,
  },
]);

const handleSelectSkin = (id) => {
  currentSkin.value = id;
};

const handleSelectSkill = (id) => {
  currentSkillSelect.value = id;
};
const BallPosition = reactive({
  1: "7.75%",
  2: "27.65%",
  3: "47.8%",
  4: "67.7%",
  5: "87.8%",
});
const skillButtonPosition = computed(() => {
  return BallPosition[currentSkillSelect.value] || "7.75%";
});
onMounted(() => {
  filterDifficulty();
  handleAccess(inforChampion.value, isAccess, null, 700);
});
</script>

<style scoped>
@import url("../../assets/style/DetailChamp.css");
</style>
