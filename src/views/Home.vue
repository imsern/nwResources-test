<template>
  <div class="container">
    <a
      class="twitter-timeline"
      data-lang="en"
      data-width="800"
      data-height="800"
      data-theme="dark"
      href="https://twitter.com/playnewworld?ref_src=twsrc%5Etfw"
      >Tweets by playnewworld</a
    >
    <script
      type="application/javascript"
      async
      defer
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  </div>
</template>


<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  width: 700px;
  margin-top: 5px;
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.171);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(14, 14, 14, 0.445);
}
.frame {
  flex: 1 1 1000px;
}
@media (max-width: 1280px) {
  .container {
    width: 700px;
  }
}
@media (max-width: 1024px) {
  .container {
    width: 700px;
  }
}
@media (max-width: 540px) {
  .container {
    width: 500px;
  }
}
@media (max-width: 414px) {
  .container {
    width: 390px;
  }
}
@media (max-width: 411px) {
  .container {
    width: 390px;
  }
}
@media (max-width: 375px) {
  .container {
    width: 350px;
  }
}
@media (max-width: 360px) {
  .container {
    width: 300px;
  }
}
@media (max-width: 320px) {
  .container {
    width: 300px;
  }
}
@media (max-width: 280px) {
  .container {
    width: 250px;
  }
}
</style>