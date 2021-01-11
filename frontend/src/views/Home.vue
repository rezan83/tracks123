<template>
  <div class="home">
    <Navbar />
    <h2 v-if="userName">Welcome {{userName}}</h2>
    <form v-else class="login" @submit.prevent="logUser(userNameModel)">
      <input  type="text" v-model="userNameModel" placeholder="User Name">
      <button>Log In</button>
    </form>
 
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import {mapActions} from "vuex"

export default {
  name: "Home",
  components: {
    Navbar
  },
  data(){
    return {
      userNameModel: ""
    }
  },
  computed: {
    userName() {return this.$store.state.userName}
  },
  methods: {
    ...mapActions(["logUser"])
    
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .login {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 50px;
    button{
      margin-top: 5px;
    }
  }
}
</style>
