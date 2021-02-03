<template>
  <div class="hello">
    <div class="flex justify-between header-herro px-8 py-8">
      <div class="flex justify-center items-center">
        <img class="h-12" src="../assets/logo.png" alt="">
        <p class="ml-3 text-3xl font-bold text-white italic">Task-System</p>
      </div>
      <div class="flex justify-center items-center">
        <a href="#"><img class="rounded-full w-12 h-12 mr-4" :src="userData.avatar" alt=""></a>
        <p class="italic font-medium text-white text-xl"> {{ userData.name }}</p>
      </div>
    </div>
    <div class="container m-auto mt-24 flex">
      <div>
        <img class="rounded-full w-32 h-32" :src="userData.avatar" alt="">
      </div>
      <div class="ml-20">
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Name: </span> {{ userData.name }}</p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Email: </span> {{ userData.email }}</p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Phone_number: </span>  {{userData.phone_number}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Address: </span>  {{userData.address}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Bios: </span>  {{userData.bios}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Gender: </span>  {{userData.gender}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Birthday: </span>  {{userData.birthday}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">First_name: </span>  {{userData.first_name}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Last_name: </span>  {{userData.last_name}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Is_notify: </span>  {{userData.is_notify}} </p>
        <button class="px-12 py-2 mt-8 border rounded border-blue-400 font-bold text-xl bg-blue-400"  @click="logOut()">logout</button>
      </div>
    </div>
  </div>
</template>

<script>
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
    async logOut() {
      try {
        await this.$axios.post('/logout')
        localStorage.removeItem('user');
        this.$router.push({name: "Login"})
      } catch (error) {
        //todo
      }
    },

    async getProFile() {
      try {
        const res = await this.$axios.post('/me')
        // console.log(res.data.data)
        this.userData = res.data.data
      } catch (errors) {
        // console.log (errors.response.data)
        }
      },
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-herro {
    background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
  }
</style>
