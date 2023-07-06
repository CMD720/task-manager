<template>
  <div class="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {Navbar}

}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  //pointer-events: none;

  a{
    text-decoration: none;
    color: inherit;
  }
}
.app{
  padding: 20px;
}
</style>