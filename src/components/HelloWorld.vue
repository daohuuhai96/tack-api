<template>
  <div class="hello">
    <form class="flex justify-center items-center mt-20">
      <button class="px-12 py-3 border border-green-500 bg-green-500"  @click="logOut()">logout</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      userData: {},
      errors: {},
    }
  },
  methods: {
    async logOut() {
      try {
        await axios.post('https://task.huuhienqt.dev/api/v1/logout')
        localStorage.removeItem('user');
        this.$router.push({name: "Login"})
      } catch (error) {
        console.log (error.response.data)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
