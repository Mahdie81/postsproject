<template>
  <div id="app">

    <Navigation />

    <div class="main-container">

      <router-view />

    </div>

    <Footer />
  </div>
</template>

<script>

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {

  name: "App",

  components: {

    Navigation,
    Footer,


  },
  mounted: () => {
    

  },

  methods: {

  }
};


</script>
<style lang="scss">
:root{
--themcolor:rgb(139, 62, 62);
--themcolor-lowopacity:rgba(167, 72, 72, 0.261);

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    a{
        text-decoration: none;
        color: #2c3e50;
    }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
