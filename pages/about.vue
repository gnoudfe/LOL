<template>
  <h1>about page</h1>
</template>

<script setup>
function findLongestWord(str) {
  var words = str.split(" ");
  let maxLength = 0;
  words.forEach((word) => {
    maxLength = Math.max(maxLength, word.length);
  });
}
</script>
