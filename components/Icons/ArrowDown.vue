<template>
  <svg class="" viewBox="0 0 8 5" width="10" height="10">
    <path
      :fill="props.isHoverLogo ? 'red' : '#737373'"
      d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"
    ></path>
  </svg>
</template>

<script setup>
const props = defineProps({
  isHoverLogo: {
    type: Boolean,
  },
});
</script>
