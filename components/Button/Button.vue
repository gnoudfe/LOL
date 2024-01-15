<template>
  <div class="" style="cursor: pointer">
    <button class="button defaultSize"><span>Chơi miễn phí</span></button>
    <div class="btn-canvas-container">
    
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
    canvasWidth: {
        type : String,
    },
    canvasHeight : {
        type : String,
    }
})
const cv = ref(null);
onMounted(() => {
  if (cv.value) {
    const ctx = cv.value.getContext("2d");
    const x = 0;
    const y = 0;
    const width = cv.value.width;
    const height = cv.value.height;
    const cutSize = 30; // Adjust the corner radius as needed
    ctx.beginPath();
    ctx.moveTo(x + cutSize, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height - cutSize);
    ctx.lineTo(x + width - cutSize, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + cutSize);
    ctx.closePath();
    // Set a transparent background
    ctx.fillStyle = "rgba(0, 0, 0, 0)"; // Transparent black (Change '0' for transparency)
    ctx.fill();

    // Stroke the border if needed
    ctx.strokeStyle = "#d1d1d1"; // Change color as needed
    ctx.lineWidth = 2;
    ctx.stroke();
  }
});
</script>

<style scoped>
@import url("../../assets/style/button.css");
</style>
