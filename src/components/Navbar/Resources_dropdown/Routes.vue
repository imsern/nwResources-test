<template>
  <div class="container">
    <h3>Ores</h3>
    <div class="btnContainer">
      <div class="btn">
        <router-link class="routerText" to="/routes/iron">Iron</router-link>
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/starmetal"
          >Starmetal</router-link
        >
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/orichalcum"
          >Orichalcum</router-link
        >
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/silver">Silver</router-link>
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/gold">Gold</router-link>
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/platinum"
          >Platinum</router-link
        >
      </div>
    </div>
    <h3>Wood</h3>
    <div class="btnContainer">
      <div class="btn">
        <router-link class="routerText" to="/routes/ironwood"
          >Ironwood Tree</router-link
        >
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/wyrdwood"
          >Wyrdwood Tree</router-link
        >
      </div>
    </div>
    <h3>Plants</h3>
    <div class="btnContainer">
      <div class="btn">
        <router-link class="routerText" to="/routes/hemp">Hemp</router-link>
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/silkweed"
          >Silkweed</router-link
        >
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/wirefiber"
          >Wirefiber</router-link
        >
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/herbs">Herbs</router-link>
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/fungus">Fungus</router-link>
      </div>
      <div class="btn">
        <router-link class="routerText" to="/routes/dyes">Dyes</router-link>
      </div>
    </div>
    <!-- <h3>Essences</h3>
        <div class="btnContainer">
            <div class="btn"><router-link class="routerText" to="/routes/airessence">Air Essence</router-link></div>
            <div class="btn"><router-link class="routerText" to="/routes/deathessence">Death Essence</router-link></div>
            <div class="btn"><router-link class="routerText" to="/routes/earthessence">Earth Essence</router-link></div>
            <div class="btn"><router-link class="routerText" to="/routes/fireessence">Fire Essence</router-link></div>
            <div class="btn"><router-link class="routerText" to="/routes/lifeessence">Life Essence</router-link></div>
            <div class="btn"><router-link class="routerText" to="/routes/spiritessence">Spirit Essence</router-link></div>
            <div class="btn"><router-link class="routerText" to="/routes/wateressence">Water Essence</router-link></div>
        </div> -->
  </div>
</template>

<script>
export default {
  name: "Routes",
  components: {},
};
</script>



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
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
}
.btnContainer {
  width: 100%;
  /* height: 30px; */
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.frame {
  flex: 1 1 1000px;
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
.imgContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.imgRoute {
  align-self: center;
}
.routerText {
  cursor: pointer;
  text-decoration: none;
  color: black;
}
</style>