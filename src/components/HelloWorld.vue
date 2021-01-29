<template>
  <div class="hello">
    <div class="flex justify-center items-center mt-20">
      <button class="px-12 py-3 border border-green-500 bg-green-500" @click="logout()">logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
     logout() {
    localStorage.removeItem('user');
    this.$router.push({name: "Login"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
