<template>
    <div class="container">
        <div class="btnContainer">
            <div class="btn"><router-link class="routerText" :to="{ name: 'Routes' }">⟸</router-link></div>
        </div>
        <div class="imgContainer">
                  <h3>Brightwood</h3>
                  <p>Not a specific route to run, but a good spot ive found to get some starmetal, atleast for lower levels</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Starmetal/Starmetal_brightwood_1.png" alt="Starmetal 1">
                  <h3>Weaver's Fen</h3>
                  <p>Another decent location to find starmetal</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Starmetal/Starmetal_weaver_1.png" alt="Starmetal 2">
                  <h3>Mourningdale</h3>
                  <p>Decent spot to get some starmetal while doing quests</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Starmetal/Starmetal_mourningdale_1.png" alt="Starmetal 3">
                  <h3>Great Cleave</h3>
                  <p>Prob the best route to run at 50+</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Starmetal/Starmetal_greatcleave_1.png" alt="Starmetal 4">
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