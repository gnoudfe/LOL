<template>
  <canvas
    ref="canvas"
    :width="props.canvasWidth"
    :height="props.canvasHeight"
    :class="{
      'canvas-banner': props.canvasBanner,
      'canvas-news': props.canvasNews,
    }"
  >
  </canvas>
</template>

<script setup>
const props = defineProps({
  canvasWidth: {
    type: String,
    required: true,
  },
  canvasHeight: {
    type: String,
    required: true,
  },
  canvasBanner: {
    type: Boolean,
  },
  canvasNews: {
    type: Boolean,
  },
});

const canvas = ref(null);
onMounted(() => {
  if (canvas.value) {
    const ctx = canvas.value.getContext("2d");
    // Define the dimensions of the rectangle
    const x = 0;
    const y = 0;
    const width = canvas.value.width - 30;
    const height = canvas.value.height;
    const cutSize = 60; // Adjust the corner radius as needed
    // Draw the rectangle with a cut top-right corner
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width - cutSize, y);
    ctx.lineTo(x + width, y + cutSize);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.closePath();
    // Set a transparent background
    ctx.fillStyle = "rgba(0, 0, 0, 0)"; // Transparent black (Change '0' for transparency)
    ctx.fill();

    // Stroke the border if needed
    ctx.strokeStyle = "rgb(108, 111, 116)"; // Change color as needed
    ctx.lineWidth = 2;
    ctx.stroke();
  }
});
</script>

<style scoped>
.canvas-banner {
  height: 569.792px;
  width: 1502.67px;
}
.canvas-news {
  height: 202px;
  width: 465px;
}
</style>
