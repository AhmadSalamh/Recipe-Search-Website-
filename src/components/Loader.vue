<template >
  <div class="loader">
    <div></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.loader > div {
  border: 5px solid rgb(204, 195, 195, 0.5);
  border-radius: 50%;
  border-top: 5px solid #f97316;
  width: 76px;
  height: 75px;
  animation: spin 2s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>