<template>
  <div class="hello">
    <div class="flex justify-between header-herro px-8 py-16">
      <div class="flex justify-center items-center">
        <img class="h-12" src="../assets/logo.png" alt="">
        <p class="ml-3 text-3xl font-bold text-white italic">LOGO</p>
      </div>   
      <div class="flex justify-center items-center">
        <button class="px-12 py-2 border rounded border-purple-50 font-bold text-xl bg-purple-50"  @click="logOut()">logout</button>
      </div>
    </div>
    <p>{{ userData.name }}</p>
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
  created() {
    this.getProFile()
  },
  methods: {
    // async logOut() {
    //   try {
    //     await axios.post('https://task.huuhienqt.dev/api/v1/logout')
    //     localStorage.removeItem('user');
    //     this.$router.push({name: "Login"})
    //   } catch (error) {
    //     console.log (error.response.data)
    //   }
    // }
    logOut() {
      localStorage.removeItem('user'),
      this.$router.push({name: "Login"})
    },
    async getProFile () {
      try {
      await axios.post('https://task.huuhienqt.dev/api/v1/me')
      // const userData = data.data.data
      } catch (errors) {
        console.log (errors.response.data)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-herro {
    background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
  }
</style>
