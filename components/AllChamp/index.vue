<template>
  <div class="champions-container">
    <div class="champions-infor-container">
      <h3 class="champions-infor-heading">CHỌN NGAY MỘT</h3>
      <h2 class="champions-infor-title">TƯỚNG</h2>
      <p class="champions-infor-des">
        Với hơn 140 tướng, bạn chắc chắn sẽ tìm thấy một lựa chọn phù hợp với
        lối chơi của mình. Chọn một tướng tủ hoặc sử dụng điêu luyện tất cả.
      </p>
    </div>

    <div class="champions-tools-container" :class="{ hide: isSelectLevel }">
      <div class="champions-tools-inner-container">
        <div ref="searchContainer" class="champions-search-container">
          <svg
            class="value-container-loupe__LoupeIcon-sc-1hpvr1c-0-Loupe jjJEtD"
            version="1.1"
            id="Layer_5"
            x="0px"
            y="0px"
            viewBox="0 0 15.69 15.69"
            style="enable-background: new 0 0 15.69 15.69"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M6.46,1.5c2.74,0,4.96,2.23,4.96,4.96s-2.23,4.96-4.96,4.96S1.5,9.2,1.5,6.46S3.73,1.5,6.46,1.5 M6.46,0
		C2.89,0,0,2.89,0,6.46c0,3.57,2.89,6.46,6.46,6.46s6.46-2.89,6.46-6.46C12.93,2.89,10.03,0,6.46,0L6.46,0z"
              ></path>
            </g>
            <g>
              <line
                class="st1"
                x1="10.25"
                y1="10.26"
                x2="15.14"
                y2="15.15"
              ></line>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Tìm kiếm"
            v-model="championName"
            @click="handleDropMenu"
          />
          <div
            v-if="championName"
            class="cancel-button-wrapper"
            @click="handleResetChampName"
          >
            <svg
              style="width: 11px; height: 11px; fill: white; stroke: white"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
              ></path>
            </svg>
          </div>
          <div class="dropdown-menu-container" v-if="isDropMenu">
            <div
              class="dropdown-menu-item"
              v-for="name in filteredChampions"
              :class="{ 'is-active': isSelectItemChamp === name.uid }"
              @click="handleSelectChampName(name.champion_name, name.uid)"
            >
              {{ name.champion_name }}
            </div>
          </div>
        </div>
        <div class="champions-type-container">
          <ul class="champions-type-lists">
            <li
              class="champions-type-list"
              v-for="role in roles"
              :key="role.id"
              :class="{ active: currentRole === role.id }"
              @click="selectRole(role.id, role.nickname)"
            >
              <span class="champion-type-item">{{ role.name }}</span>
            </li>
          </ul>
        </div>
        <div
          ref="diffContainer"
          class="champions-diff-level-container"
          @click="handleSelectSubMenu"
        >
          <span v-if="!selectedDifficulty">TẤT CẢ ĐỘ KHÓ</span>
          <div class="details-level-item" v-if="selectedDifficulty === 'easy'">
            <span class="details-infor-diff-level current-level"></span>
            <span class="details-infor-diff-level"></span>
            <span class="details-infor-diff-level"></span>
          </div>
          <div
            class="details-level-item"
            v-if="selectedDifficulty === 'medium'"
          >
            <span class="details-infor-diff-level current-level"></span>
            <span class="details-infor-diff-level current-level"></span>
            <span class="details-infor-diff-level"></span>
          </div>
          <div class="details-level-item" v-if="selectedDifficulty === 'hard'">
            <span class="details-infor-diff-level current-level"></span>
            <span class="details-infor-diff-level current-level"></span>
            <span class="details-infor-diff-level current-level"></span>
          </div>

          <div
            class="cancel-button-wrapper"
            v-if="selectedDifficulty"
            @click="handleResetDiff"
          >
            <svg
              style="width: 11px; height: 11px; fill: white; stroke: white"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
              ></path>
            </svg>
          </div>
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 8.69 4.69"
            style="width: 14px; height: 7px; color: rgb(194, 144, 45)"
            xml:space="preserve"
            :class="{ 'reverse-svg': isSelectLevel }"
          >
            <polyline
              style="fill: none; stroke: currentcolor; stroke-miterlimit: 10"
              points="0.35,0.37 4.35,4.01 8.35,0.37 "
            ></polyline>
            <polygon
              style="fill: currentcolor"
              points="2.75,0.01 4.35,1.46 5.95,0.01 "
            ></polygon>
          </svg>
          <div
            class="champions-sub-diff-container"
            :class="{ 'is-active': isSelectLevel }"
          >
            <div
              class="details-level-flex"
              :class="{ 'active-items': selectedDifficulty === 'easy' }"
              @click="filterByDifficulty('easy')"
            >
              <span class="details-infor-diff-level current-level"></span>
              <span class="details-infor-diff-level"></span>
              <span class="details-infor-diff-level"></span>
            </div>
            <div
              class="details-level-flex"
              :class="{ 'active-items': selectedDifficulty === 'medium' }"
              @click="filterByDifficulty('medium')"
            >
              <span class="details-infor-diff-level current-level"></span>
              <span class="details-infor-diff-level current-level"></span>
              <span class="details-infor-diff-level"></span>
            </div>
            <div
              class="details-level-flex"
              :class="{ 'active-items': selectedDifficulty === 'hard' }"
              @click="filterByDifficulty('hard')"
            >
              <span class="details-infor-diff-level current-level"></span>
              <span class="details-infor-diff-level current-level"></span>
              <span class="details-infor-diff-level current-level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div ref="championItem" class="champions-infor-img-wrapper-container">
      <div
        class="champions-infor-img-wrapper"
        :class="{ 'first-show': isAccess }"
      >
        <div
          class="champions-infor-img-container"
          v-for="champion in filteredChampions"
          :key="champion.uid"
        >
          <nuxt-link :to="`/champions/${champion.champion_name}`">
            <div class="champions-infor-img-inner-container">
              <img
                :src="
                  champion.champion.profile_image
                    ? champion.champion.profile_image.url
                    : champion.champion_splash
                "
                alt="champion image"
              />
            </div>
            <div class="champions-infor-name">
              {{ champion.champion_name }}
            </div>
          </nuxt-link>
        </div>
        <span
          v-if="isNotFound"
          style="
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
          "
          >Không tìm thấy tướng.</span
        >
      </div>
    </div>
    <div
      class="news-details-button"
      v-if="isFull"
      @click="handleLoadMoreChampions"
    >
      Tải thêm
    </div>

    <LoadingLoadMore v-if="isLoading" />
  </div>
</template>

<script setup>
import { useAllChampions } from "../../store/useChampion";
import { ref, reactive, computed, onMounted } from "vue";
const isDropMenu = ref(false);
const { state } = useAllChampions();
const championName = ref(null);
const currentRole = ref(0);
const searchContainer = ref(null);
const isSelectLevel = ref(false);
const selectedRole = ref(null);
const diffContainer = ref(null);
const isSelectItemChamp = ref(null);
const isNotFound = ref(false);
const isFull = ref(true);
const isLoading = ref(false);
const championItem = ref(null);
const isAccess = ref(false);

const handleAccess = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isAccess.value = true;
        }, 600);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(championItem.value);
};

const handleLoadMoreChampions = async () => {
  if (isLoading.value) return;
  isLoading.value = true;

  state.currentPage++;
  try {
    const { data: MoreChampions } = await useFetch(
      `${import.meta.env.VITE_API_LOL_BASE}allChampions?_page=${
        state.currentPage
      }&_limit=${state.itemPerPage}`,
      {
        transform: (MoreChampions) => {
          return MoreChampions.map((item) => ({
            uid: item.uid,
            champion_name: item.champion_name,
            champion_splash: item.champion_splash,
            recommended_roles: item.recommended_roles,
            difficulty: item.difficulty,
            champion: item.champion,
          }));
        },
      }
    );
    if (MoreChampions.value.length > 0) {
      state.champions = [...state.champions, ...MoreChampions.value];
    } else {
      isFull.value = false;
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

const handleDropMenu = () => {
  isDropMenu.value = true;
};

const handleCloseDropMenu = (event) => {
  if (searchContainer.value) {
    const isClickedInside = searchContainer.value.contains(event.target);
    if (!isClickedInside) {
      isDropMenu.value = false;
    }
  }
  if (diffContainer.value) {
    const isClickedInsideDiff = diffContainer.value.contains(event.target);
    if (!isClickedInsideDiff) {
      isSelectLevel.value = false;
    }
  }
};

const roles = reactive([
  {
    id: 0,
    name: "tất cả",
    nickname: "All",
  },
  {
    id: 1,
    name: "sát thủ",
    nickname: "Assassin",
  },
  {
    id: 2,
    name: "đấu sĩ",
    nickname: "Fighter",
  },
  {
    id: 3,
    name: "pháp sư",
    nickname: "Mage",
  },
  {
    id: 4,
    name: "xạ thủ",
    nickname: "Marksman",
  },
  {
    id: 5,
    name: "hỗ trợ",
    nickname: "Support",
  },
  {
    id: 6,
    name: "đỡ đòn",
    nickname: "Tank",
  },
]);

const selectRole = (id, role) => {
  currentRole.value = id;
  selectedRole.value = role;

  championItem.value.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const handleSelectSubMenu = () => {
  isSelectLevel.value = !isSelectLevel.value;
};

const handleSelectChampName = (name, id) => {
  isSelectItemChamp.value = id;

  championName.value = name;
};
const handleResetChampName = () => {
  isNotFound.value = false;
  championName.value = "";
  isSelectItemChamp.value = null;
};
const selectedDifficulty = ref(null);

const filterChampionsByRole = () => {
  return state.champions.filter((champion) =>
    champion.recommended_roles.includes(selectedRole.value)
  );
};

const filterChampionsByDifficulty = () => {
  return state.champions.filter(
    (champion) =>
      champion.difficulty >= getMinDifficulty() &&
      champion.difficulty <= getMaxDifficulty()
  );
};

const filterChampionsByName = (champions, name) => {
  return champions.filter((champion) =>
    champion.champion_name.toLowerCase().includes(name.toLowerCase())
  );
};
const isCheckChampions = (champions) => {
  if (champions.length > 0) {
    isNotFound.value = false;
  } else {
    isNotFound.value = true;
  }

  return champions;
};

const filteredChampions = computed(() => {
  if (!selectedRole.value || selectedRole.value === "All") {
    if (!selectedDifficulty.value) {
      if (!championName.value || championName.value === "") {
        return state.champions;
      } else {
        const foundChampions = filterChampionsByName(
          state.champions,
          championName.value
        );
        return isCheckChampions(foundChampions);
      }
    } else {
      if (!championName.value || championName.value === "") {
        return filterChampionsByDifficulty();
      } else {
        const filteredByDifficulty = filterChampionsByDifficulty();
        const filteredByNameAndDifficulty = filterChampionsByName(
          filteredByDifficulty,
          championName.value
        );
        return isCheckChampions(filteredByNameAndDifficulty);
      }
    }
  } else {
    if (!selectedDifficulty.value) {
      if (!championName.value || championName.value === "") {
        return filterChampionsByRole();
      } else {
        const filterByRole = filterChampionsByRole();
        const filterByNameAndRole = filterChampionsByName(
          filterByRole,
          championName.value
        );
        return isCheckChampions(filterByNameAndRole);
      }
    } else {
      if (!championName.value || championName.value === "") {
        const filterByRoleAndDifficulty = filterChampionsByRole().filter(
          (champion) =>
            champion.difficulty >= getMinDifficulty() &&
            champion.difficulty <= getMaxDifficulty()
        );
        return filterByRoleAndDifficulty;
      } else {
        const filterByRoleAndDifficulty = filterChampionsByRole().filter(
          (champion) =>
            champion.difficulty >= getMinDifficulty() &&
            champion.difficulty <= getMaxDifficulty()
        );
        const filterByNameAndRoleAndDiff = filterChampionsByName(
          filterByRoleAndDifficulty,
          championName.value
        );
        return isCheckChampions(filterByNameAndRoleAndDiff);
      }
    }
  }
});

const filterByDifficulty = (difficulty) => {
  selectedDifficulty.value = difficulty;
};
const handleResetDiff = (e) => {
  e.stopPropagation();
  selectedDifficulty.value = null;
};

const getMinDifficulty = () => {
  switch (selectedDifficulty.value) {
    case "easy":
      return 0;
    case "medium":
      return 4;
    case "hard":
      return 8;
    default:
      return 1;
  }
};

const getMaxDifficulty = () => {
  switch (selectedDifficulty.value) {
    case "easy":
      return 3;
    case "medium":
      return 7;
    case "hard":
      return 10;
    default:
      return 10;
  }
};
onMounted(() => {
  handleAccess();
  document.addEventListener("click", handleCloseDropMenu);
});
onBeforeMount(() => {
  document.removeEventListener("click", handleCloseDropMenu);
});
</script>

<style scoped>
@import url("../../assets/style/AllChamp.css");
</style>
