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
// @ is an alias to /src

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
.carrier {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10%;
}
</style>
