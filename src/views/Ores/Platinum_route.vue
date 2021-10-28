<template>
    <div class="container">
        <div class="btnContainer">
            <div class="btn"><router-link class="routerText" :to="{ name: 'Routes' }">⟸</router-link></div>
        </div>
        <div class="imgContainer">
                  <h2>If you're under level 40, I would just check the interactive map and see where you can find platinum, because they are spread around the world, and not many nodes in the same places before later zones.</h2>
                  
                  <h3>Great Cleave</h3>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Platinum/Platinum_greatcleave_1.png" alt="Platinum 1">
                  
                  <h3>Edengrove</h3>
                  <p>There is a decent amount of ironwood abit south of this area, so if you need both Platinum and Ironwood, this is a decent spot</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Platinum/Platinum_edengrove_1.png" alt="Platinum 2">
                  
                  <h3>Reekwater</h3>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Platinum/Platinum_reekwater_1.png" alt="Platinum 3">
                  
                  <h3>Ebonscale Reach</h3>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Platinum/Platinum_ebonscale_1.png" alt="Platinum 4">
                  
                  <h3>Shattered Mountain</h3>
                  <p>This is the best place to farm both Platinum and Orichalcum ores</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Platinum/Platinum_sm_1.png" alt="Platinum 5">
              </div>
    </div>
</template>



<style scoped>
.container{
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
.imgContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.imgRoute{
    align-self: center;
}
.btnContainer{
    width: 100%;
    height: 30px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.btn{
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