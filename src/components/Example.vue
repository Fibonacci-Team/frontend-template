<template>
  <section id="main">
    <div class="container">
      <h1>Webpack Template</h1>
      <p>{{ message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      message: null
    }
  },
  created() {
    this.message = this.$store.getters.getMessage
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
