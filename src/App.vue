<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="custom-classes-transition"
                  enter-active-class="animated slideInUp"
                  leave-active-class="animated slideOutUp"
                  mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fb{
  font-size: 58px;
}
</style>
