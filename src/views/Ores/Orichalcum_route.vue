<template>
    <div class="container">
        <div class="btnContainer">
            <div class="btn"><router-link class="routerText" :to="{ name: 'Routes' }">⟸</router-link></div>
        </div>
        <div class="imgContainer">
            <h2>You can find Orichalcum a few places in low level zones aswell, but its first at 40+ i would recommend going to Great cleave as its more of it there, and less distance between each node. For farming, I would recommend you get a 5man grp going, and go for Shattered Mountain, but thats for endgame, 60+.</h2>
                  <h3>Great Cleave</h3>
                  <p>This is the first place you'll find a decent amount of orichalcum after my experience.</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Orichalcum/Orichalcum_greatcleave_1.png" alt="Orichalcum 1">
                  <h3>Ebonscale Reach</h3>
                  <p>There is a good spot on the island in Ebonscale aswell. Note: This is also a 60+ zone. Before 60 I would aim for the right-hand side of Ebonscale</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Orichalcum/Orichalcum_ebonscale_1.png" alt="Orichalcum 2">
                  <h3>Shattered Mountain</h3>
                  <p>This is probably the best place to farm Orichalcum, but it is an Elite spot aswell, so I would go there with a group of 5. Note: Everyone is gonna be here to get Orichalcum, so competition is gonna be high.</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Orichalcum/Orichalcum_sm_1.png" alt="Orichalcum 3">
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