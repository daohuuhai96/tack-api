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
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Phone_number: </span> {{userData.phone_number}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Address: </span> {{userData.address}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Bios: </span> {{userData.bios}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Gender: </span> {{userData.gender}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Birthday: </span> {{userData.birthday}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">First_name: </span> {{userData.first_name}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Last_name: </span> {{userData.last_name}} </p>
        <p class="mt-2 italic font-medium text-base"><span class="font-bold text-xl mr-4">Is_notify: </span> {{userData.is_notify}} </p>
        <button class="px-12 py-2 mt-8 border rounded border-blue-400 font-bold text-xl bg-blue-400"  @click="logOut()">logout</button>
      </div>
    </div>
    <!-- <div class="mt-20">
      <div v-for="projectData in projectDatas" :key="projectData">
        <p>{{ projectData }}</p>
      </div>
      <p>{{ projectDatas.name }}</p>
    </div>
    <div>
      <form>
        <input type="text" name="" v-model="title">
        <input type="submit" value="ADD" class="">
      </form>
    </div> -->
    <div class="pl-5 pr-5 mt-2 container m-auto shadow-2xl mb-20">
      <div class="flex items-center pt-6">
        <p class="w-1/2 font-bold text-blue-400">PROJECT</p>
        <form action="" class="w-1/2">
          <input class="py-1.5 border-b w-full border-gray-300  pl-4 focus:outline-none" v-model="search" type="text" name="" id="" placeholder="Search....">
        </form>
      </div>
      <div class="flex border-b border-gray-300 pb-4 pt-8">
        <p class="w-2/12 font-semibold text-lg">Name</p>
        <p class="w-1/12 font-semibold text-lg">Code</p>
        <p class="w-3/12 font-semibold text-lg">Category</p>
        <p class="w-2/12 font-semibold text-lg">Member</p>
        <p class="w-2/12 font-semibold text-lg">Creater at</p>
        <p class="w-2/12 font-semibold text-lg">Updated at</p>
      </div>
      <div class="mt-6 flex pb-6" v-for="projectData in projectDatas" :key="projectData.id">
        <p class="w-2/12 font-bold text-base"> {{projectData.name}} </p>
        <p class="w-1/12 font-normal text-base">{{projectData.code}}</p>
        <p class="w-3/12 font-normal text-base"> {{projectData.category.title}} </p>
        <p class="w-2/12 font-normal text-base">{{projectData.member}}</p>
        <p class="w-2/12 font-normal text-base">{{projectData.created_at}}</p>
        <p class="w-2/12 font-normal text-base">{{projectData.updated_at}}</p>
      </div>
      <div class="pb-6 flex justify-center items-center" v-if="maxPage > 1">
        <a href="#" class="w-8 h-8 bg-blue-400 text-white flex justify-center items-center rounded"
          :class="[ { dissabled: queries.page <= 1 } ]"
          @click.prevent="goToPage(queries.page - 1)">
          <i class="fal fa-chevron-left"></i>
        </a>

        <a href="#" @click.prevent="goToPage(p)" class="ml-2 w-8 h-8 bg-blue-400 text-white flex justify-center items-center rounded" v-for="p in maxPage" :key="`page-${p}`">
          {{ p }}
        </a>
        <a href="#" class="ml-2 w-8 h-8 bg-blue-400 text-white flex justify-center items-center rounded"
          :class="[ { dissabled: this.queries.page >= maxPage } ]"
          @click.prevent="goToPage(queries.page + 1)">
          <i class="fal fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'Vue'

export default {
  name: 'Home',
  data () {
    // const title = ref('')
    return {
      // title,
      userData: {},
      errors: {},
      projectDatas: [],
      projectUrl: '/projects',
      search: null,
      paginate: {},
      queries: {
        page: 1,
        limit: 20,
      },
      maxPage: 1,
    }
  },
  computed: {
    queryUrl() {
      var str = [];
      for (var p in this.queries) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.queries.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(this.queries[p]));
        }
      }
      return str.join("&");
    }
  },
  watch: {
    search() {
      if (this.search && this.search.length >= 2) {
        this.queries.search = `name:${this.search}`
        this.getProject()
      }
    }
  },
  created() {
    this.getProFile()
    this.getProject()
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

    async getProject() {
      try {
        const respon = await this.$axios.get(`${this.projectUrl}?${this.queryUrl}`)
        this.projectDatas = respon.data.data.data
        this.maxPage = respon.data.data.last_page
      } catch (errors) {
          //todo
      }
    },

    async goToPage(page) {
      if (page < 1 || page > this.maxPage) return;
      this.queries.page = page
      await this.getProject()
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
