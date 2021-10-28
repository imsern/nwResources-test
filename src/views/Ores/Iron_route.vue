<template>
    <div class="container">
        <div class="btnContainer">
            <div class="btn"><router-link class="routerText" :to="{ name: 'Routes' }">⟸</router-link></div>
        </div>
        <div class="imgContainer">
                  <h3>First light</h3>
                  <p>Start from the right, go counter clock-wise. The one at blue can be gathered if you're going fast enough so the iron dont spawn in time. Corruption can spawn in this area, if it does, it wont be worth using until its cleared in my opinion. This is also a very popular route to run, so competition can be high. Even 2 people farming at once makes the efficiancy of this route bad</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Iron/Iron_FirstLight_route.png" alt="Iron Route 1">
                  <h3>First light</h3>
                  <p>I havent tried this route personally. Follow the red line. If you come fom the south, i would take the ores at the bottom, if not i'd just follow the red line in a cirle. Blue line is optional to check from time to time. There is also alot of oil in this area, so if you need both, this is a good spot!</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Iron/Iron_FirstLight_route2.png" alt="Iron Route 2">
                  <h3>Windsward</h3>
                  <p>This is supposed to be one of the best iron farms at the moment. The more laps you do, the better. At a point the iron veins should be spawning right as you get to them. This area can also be affected by corruption and are also a very popular one, so expect competition. I usually start from the top right, and follow the route clock-wise</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Iron/Iron_Windsward_route.png" alt="Iron Route 3">
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