<template>
    <div class="container">
        <div class="btnContainer">
            <div class="btn" @click="changeMap(1)">map 1</div>
            <div class="btn" @click="changeMap(2)">map 2</div>
        </div>
          <iframe class="frame"
            :src="currentMap"
            width="100%"
            height="750px"
            frameborder="0" >
           </iframe>
    </div>
</template>

<script>

export default {
    name: 'Imaps',
    data() {
        return {
            currentMap: 'https://www.newworld-map.com/#/',
            Maps: [
                { id: 1, Link: 'https://www.newworld-map.com/#/', },
                { id: 2, Link: 'https://mapgenie.io/new-world/maps/aeternum', },
            ],
        }
    },
    methods: {
        changeMap(id){ 
            if (id === 1) {
                this.currentMap = this.Maps[0].Link;
            } else{
                this.currentMap = this.Maps[1].Link;
            }
        }
    }
}


</script>



<style scoped>
.container{
    height: 85vh;
    width: 90vw;
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
    align-items: flex-start;
    z-index: 1;
    background-color: rgba(14, 14, 14, 0.445);
}
.btnContainer{
    width: 250px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.frame{
    flex: 1 1 1000px;
}
.btn{
    cursor: pointer;
    margin-bottom: 5px;
    flex: 0 1 100px;
    border: 1px solid rgba(0, 0, 0, 0.733);
    background-color: rgba(250, 220, 187, 0.671);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    font-weight: bold;
    padding: 2px;
}
</style>