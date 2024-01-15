<template>
  <div class="loading-state">
    <div class="loading"></div>
  </div>
</template>

<style scoped>
.loading-state {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  /* background-color: rgba(0, 0, 0, 0.3); */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.loading {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #ddd;
  border-top-color: orange;
  animation: loading-ac4e25eb 1s linear infinite;
}
@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
</style>
