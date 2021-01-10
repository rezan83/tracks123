<template>
  <Navbar />
  <router-view />

</template>
<script type="text/javascript">
  import Navbar from '@/components/Navbar.vue'
  export default{
    components:{
      Navbar
    }
  }

</script>
<style lang="scss">

body {
    background-color: #bccbd4;
    margin: 0;
    padding-top: 70px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
.m-0 {
    margin: 0;
  }
  .card-shadow {
    -webkit-box-shadow: 0px 5px 5px 0px rgba(8, 8, 8, 0.5);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  }
}
</style>

