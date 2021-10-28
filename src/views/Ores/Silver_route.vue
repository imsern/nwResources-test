<template>
    <div class="container">
        <div class="btnContainer">
            <div class="btn"><router-link class="routerText" :to="{ name: 'Routes' }">⟸</router-link></div>
        </div>
        <div class="imgContainer">
                  <h3>Everfall</h3>
                  <p>Start in the city, run out right side, to the wolf den. Afterwards run north to Shadow mine. Usually I go for all the veins in the middle, and do a lap around the area afterwards. Then I go back down to the wolf den, and refine what I've gathered, then repeat.</p>
                  <img class="imgRoute" height="600px" width="800px" src="../../assets/Images/Routes/Silver/Silver_everfall_route.png" alt="Silver Route 1">
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