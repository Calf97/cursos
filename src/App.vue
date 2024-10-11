<template>
  <div id="app">
    <SideBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  background: #1a1d1f;
  /* gap: 30px; */
}
.container {
  flex: 1;
  overflow: auto;
  /* padding: 10px; */
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
label {
  font-family: Roboto, sans-serif;
  color: #fff;
}
a {
  text-decoration: none;
  font-family: Roboto, sans-serif;
  color: #fff;
}
ul {
  list-style: none;
}
</style>
