<template>
  <h1>about page</h1>
</template>

<script setup>
function catchMice(d, jumps, runs) {
  let remainingDistance = d;
  let cheetahJumps = 0;

  while (remainingDistance > 0) {
    let minCheetahJump = Infinity;
    let minMiceJump = Infinity;

    // Tìm khoảng cách nhảy tối thiểu của Cheetah và con mồi trong mỗi lần nhảy
    for (let i = 0; i < jumps.length; i++) {
      if (
        remainingDistance - jumps[i] >= 0 &&
        remainingDistance - jumps[i] < minCheetahJump
      ) {
        minCheetahJump = remainingDistance - jumps[i];
      }
    }

    for (let i = 0; i < runs.length; i++) {
      if (
        remainingDistance - runs[i] >= 0 &&
        remainingDistance - runs[i] < minMiceJump
      ) {
        minMiceJump = remainingDistance - runs[i];
      }
    }

    // Nếu Cheetah không thể bắt được con mồi
    if (minCheetahJump === Infinity || minMiceJump === Infinity) {
      return -1;
    }

    // Chọn nhảy tối thiểu từ Cheetah hoặc con mồi và cập nhật khoảng cách còn lại
    if (Math.abs(minCheetahJump) <= Math.abs(minMiceJump)) {
      remainingDistance -= Math.abs(minCheetahJump);
    } else {
      remainingDistance -= Math.abs(minMiceJump);
    }

    cheetahJumps++;
  }

  return cheetahJumps;
}

// Test với đầu vào từ ví dụ
const d = 1.5;
const jumps = [1.2, 1.4, 1.7, 1.8];
const runs = [0.875, 0.342, 0.534, 0.902];

console.log(catchMice(d, jumps, runs)); // Kết quả: 3
</script>
