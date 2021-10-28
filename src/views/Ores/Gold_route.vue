<template>
  <div class="container">
    <div class="btnContainer">
      <div class="btn">
        <router-link class="routerText" :to="{ name: 'Routes' }">⟸</router-link>
      </div>
    </div>
    <div class="imgContainer">
      <h3>Cutlass Keys</h3>
      <p>
        Disclaimer: This might not be the best place to farm if you're at level
        50+, but its a decent amount of gold nodes for level 18 and up.
      </p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Gold/Gold_cutlass_1.png"
        alt="Gold 1"
      />
      <h3>Weaver's Fen</h3>
      <p>
        Good amount of Gold nodes in South-west Weaver's Fen. It does go over
        into Reekwater(58+), might be difficult getting nodes for lower levels
        there.
      </p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Gold/Gold_weaver_1.png"
        alt="Gold 2"
      />
      <h3>Great Cleave</h3>
      <p>This is my go-to area, not to many people here.</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Gold/Gold_greatcleave_1.png"
        alt="Gold 3"
      />
    </div>
  </div>
</template>



<style scoped>
.container {
  margin-top: 30px;
  padding: 10px;
  background-color: rgba(14, 14, 14, 0.445);
  border: 2px solid rgba(255, 255, 255, 0.171);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
}
.imgContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.imgRoute {
  align-self: center;
}
.btnContainer {
  width: 100%;
  height: 30px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.btn {
  width: 50px;
  margin-bottom: 5px;
  flex: 0 1 120px;
  border: 1px solid rgba(0, 0, 0, 0.733);
  background-color: rgba(250, 220, 187, 0.671);
  color: rgb(0, 0, 0);
  border-radius: 4px;
  font-weight: bold;
  padding: 2px;
  text-align: center;
}
.routerText {
  cursor: pointer;
  text-decoration: none;
  color: black;
}

/* @media (min-width: 1280px) {
  .container {
    width: 700px;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 700px;
  }
}
@media (min-width: 320px) {
  .container {
    width: 300px;
  }
}
@media (min-width: 280px) {
  .container {
    width: 250px;
  }
} */
</style>