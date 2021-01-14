<template>
  <div class="carrier">
      <div class="content">
        <h2>Carrier details</h2>
        <h3>Name: {{ carrierId }}</h3>
        <button @click="goBack">Back</button>
      </div>
  </div>
</template>

<script>

export default {
  name: "Carrier",
  props:["carrierId"],
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }

};
</script>

<style lang="scss" scoped>

@import "@/assets/css/variables.scss";

.carrier {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
    margin-top: 10%;
    button {
      @include them-button($main-text-color, $base-green);
    }
  }
}
</style>
