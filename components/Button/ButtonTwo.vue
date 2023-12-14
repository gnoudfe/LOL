<template>
  <div class="champion-btn" :class="{ play: isPlaybtn }">
    <span>{{ props.label }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  isPlaybtn: {
    type: Boolean,
  },
});
</script>

<style scoped>
@import url("../../assets/style/button.css");
</style>
