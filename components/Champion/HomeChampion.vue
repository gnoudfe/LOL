<template>
  <div
    ref="headingChampContainer"
    class="champion-heading-container"
    :class="{ 'first-show': isIntersecting }"
  >
    <h4 class="champion-heading">CHỌN NGAY MỘT</h4>
    <h2 class="champion-title">TƯỚNG</h2>
    <p class="champion-description">
      Cho dù thích lao vào giao tranh, thích hỗ trợ đồng đội hoặc cả hai, bạn sẽ
      lu ôn tìm thấy vị trí thích hợp dành cho mình trong Summoner's Rift.
    </p>
    <div class="champion-btn-container">
      <nuxt-link to="/champions">
        <ButtonTwo label="KHÁM PHÁ THÊM CÁC VỊ TƯỚNG" />
      </nuxt-link>
      <nuxt-link to="/register">
        <ButtonTwo label="CHƠI NGAY" :isPlaybtn="true" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { handleAccess } from "../../utils/handleAccess";
const isIntersecting = ref(false);
const headingChampContainer = ref(null);

onMounted(() => {
  handleAccess(headingChampContainer.value, isIntersecting, null, null);
});
</script>

<style scoped>
@import url("../../assets/style/champion.css");
</style>
