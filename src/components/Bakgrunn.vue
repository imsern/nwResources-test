<template>
  <img class="bgimg" src="../assets/Images/nwBg.jpg" alt="Logo" />
</template>

<script>
export default {
  name: "Bakgrunn",
};
</script>

<style scoped>
.bgimg {
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
  z-index: -1;
}
</style>