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
    button:hover{
          opacity: 0.8;
        }
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

