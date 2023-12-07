<template>
  <div class="news-items-container">
    <div class="news-present">
      <span>TIN TỨC TIÊU BIỂU</span>
    </div>
    <div class="news-items" v-for="item in news" :key="item.id">
      <div class="news-img-container">
        <img :src="item.img" alt="news img" class="news-img" />
      </div>
      <div class="news-infor-container">
        <h4 class="news-infor-notifi">{{ item.notifi }}</h4>
        <h3 class="news-infor-heading">{{ item.title }}</h3>
        <p class="news-infor-description">
          {{ item.description }}
        </p>
      </div>
      <div class="canvas-container">
        <CanvasBorderItem
          canvasWidth="698"
          canvasHeight="303"
          :canvasNews="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const news = reactive([
  {
    id: 1,
    notifi: "CẬP NHẬT TRÒ CHƠI",
    title: "Thông Tin Bản Cập Nhật 13.24",
    description: "Chuẩn bị cho mùa nghỉ lễ ấm áp với Bản cập nhật 13.24!",
    img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf6e1234810ef7df4/64c0765c75211b32bff34422/072823_Arena_FAQ_Banner.jpg?quality=90&crop=1%3A1&width=480",
  },
  {
    id: 2,
    notifi: "ĐỘI NGŨ PHÁT TRIỂN",
    title: "Nhật ký phát triển: Thay Đổi Trang Phục Mùa 2024",
    description:
      "Hậu trường phía sau một số thay đổi về trang bị dành cho Mùa Giải 2024 của chúng tôi.",
    img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt50d3289173d834a8/6565239452b29b2f005c08d6/ItemShop.jpg?quality=90&crop=1%3A1&width=480",
  },
  {
    id: 3,
    notifi: "Cộng ĐỒNG",
    title: "Cất lên tiếng nói của bạn. Lựa chọn tổ chức từ thiện bạn muốn.",
    description:
      "Bỏ phiếu để quyết định nơi mà 5,4 triệu Đô La Mỹ từ Quy Tắc Động Xã Hội của Riot Games sẽ được phân bố",
    img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt67869740804e919a/655c169e0a03ad3bb23985c0/112423_Client_SF_Franchise_Banner.jpg?quality=90&crop=1%3A1&width=480",
  },
]);
</script>

<style scoped>
@import url("../../assets/style/homenews.css");
</style>
