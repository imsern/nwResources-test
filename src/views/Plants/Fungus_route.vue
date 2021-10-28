<template>
  <div class="container">
    <div class="btnContainer">
      <div class="btn">
        <router-link class="routerText" :to="{ name: 'Routes' }">⟸</router-link>
      </div>
    </div>
    <div class="imgContainer">
      <h3>Weaver's Fen</h3>
      <p>Bumbleblossom</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Bumbleblossom_weaver_1.png"
        alt="Bumbleblossom 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Edengrove</h3>
      <p>Capped Tanglewisp</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/CappedTanglewisp_edengrove_1.png"
        alt="Capped Tanglewisp 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Great Cleave</h3>
      <p>Cascaded Gillflower</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/CascadedGillflower_greatcleave_1.png"
        alt="Cascaded Gillflower 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Shattered Mountain</h3>
      <p>Corrupted Bloodspore</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/CorruptedBloodspore_sm_1.png"
        alt="Corrupted Bloodspore 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Windsward</h3>
      <p>Petalcap</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Petalcap_windsward_1.png"
        alt="Petalcap 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Brightwood</h3>
      <p>Slimy Twistcap</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/SlimyTwistcap_brightwood_1.png"
        alt="Slimy Twistcap 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Restless Shore</h3>
      <p>Spinecap</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Spinecap_restless_1.png"
        alt="Spinecap 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Everfall</h3>
      <p>Suncreeper</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Suncreeper_everfall_1.png"
        alt="Suncreeper 1"
      />
    </div>

    <div class="imgContainer">
      <h3>First Light</h3>
      <p>Tanglewisp</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Tanglewisp_firstlight_1.png"
        alt="Tanglewisp 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Cutlass Keys</h3>
      <p>Tendrilspine</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Tendrilspine_cutlass_1.png"
        alt="Tendrilspine 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Ebonscale Reach</h3>
      <p>Void Pitcher</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/VoidPitcher_ebonscale_1.png"
        alt="Void Pitcher 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Monarch's Bluff</h3>
      <p>Warmpetalcap</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Warmpetalcap_monarch_1.png"
        alt="Warmpetalcap 1"
      />
    </div>

    <div class="imgContainer">
      <h3>Reekwater</h3>
      <p>Weepingshellbed</p>
      <img
        class="imgRoute"
        height="600px"
        width="800px"
        src="../../assets/Images/Routes/Fungus/Weepingshellbed_reekwater_1.png"
        alt="Weepingshellbed 1"
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
</style>