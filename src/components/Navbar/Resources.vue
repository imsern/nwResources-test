<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a class="navHover" href="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>
    <transition name="fade" apear>
      <div class="sub-menu" v-if="isOpen">
        <!-- <div class="menu-item">
              <router-link :to="{ name: 'Guides' }">Guides</router-link>
            </div> -->
        <div class="menu-item">
          <router-link :to="{ name: 'Imaps' }">Interactive Maps</router-link>
        </div>
        <div class="menu-item">
          <router-link :to="{ name: 'Routes' }">Routes</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Resources",
  props: ["title"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.menu-item {
  z-index: 2;
}
#nav a {
  font-weight: bold;
  color: #9b9b9b;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #d38d0b;
}
.navHover:hover {
  border-bottom: 2px solid orange;
}
.navHover:hover {
  border-bottom: 2px solid orange;
}
</style>