<template>
  <div class="form-login">
    <form action="" @submit="postUserRegister()" @submit.prevent>
      <div class="flex">
        <router-link to="/login" class="w-1/2 text-center text-xl font-bold border-r-2 border-black">LOGIN</router-link>
        <router-link to="/register" class="w-1/2 text-center text-xl font-bold">REGISTER</router-link>
      </div>
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" v-if="hasError">
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">Vui long nhap day du thong tin</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
      <div class="form-control" :class="{ 'form-group--error': $v.form.name.$error }">
        <p class="font-semibold">Name</p>
        <input class="border-b italic border-gray-400 focus:outline-none text-sm::placeholder" v-model="form.name" type="text" placeholder="Name">
        <div class="error mt-2 text-red-500" v-if="!$v.form.name.minLength">Name must have at least {{$v.form.name.$params.minLength.min}} letters.</div>
        <div class="error mt-2 text-red-500" v-if="typeof errors.name !== 'undefined'">{{ errors.name[0] }}</div>
      </div>

      <div class="form-control" :class="{ 'form-group--error': $v.form.email.$error }">
        <p class="font-semibold">Email</p>
        <input class="border-b italic border-gray-400 focus:outline-none text-sm::placeholder" v-model="form.email" type="email" placeholder="Email">
        <div class="error mt-2 text-red-500" v-if="!$v.form.email.required">Field is required</div>
        <div class="error mt-2 text-red-500" v-if="!$v.form.email.minLength">Name must have at least {{$v.form.email.$params.minLength.min}} letters.</div>
        <div class="error mt-2 text-red-500" v-if="!$v.form.email.email">Phai dung dinh dang email.</div>
        <div class="error mt-2 text-red-500" v-if="typeof errors.email !== 'undefined'">{{ errors.email[0] }}</div>
      </div>

      <div class="form-control" :class="{ 'form-group--error': $v.form.password.$error }">
        <p class="font-semibold">Password</p>
        <input class="border-b border-gray-400 italic focus:outline-none text-sm::placeholder" v-model="form.password" type="password" placeholder="Password">
        <div class="error mt-2 text-red-500" v-if="!$v.form.password.required">Field is required</div>
        <div class="error mt-2 text-red-500" v-if="!$v.form.password.minLength">Name must have at least {{$v.form.password.$params.minLength.min}} letters.</div>
      </div>
      <div class="form-control" :class="{ 'form-group--error': $v.form.password_confirmation.$error }">
        <p class="font-semibold">Password confirmation</p>
        <input class="focus:outline-none border-b italic border-gray-400 text-sm::placeholder" v-model="form.password_confirmation" type="password" placeholder="Password_confirmation">
        <div class="error mt-2 text-red-500" v-if="!$v.form.password_confirmation">Field is required</div>
        <div class="error mt-2 text-red-500" v-if="!$v.form.password_confirmation.sameAsPassword">Passwords must be identical.</div>
        <div class="error mt-2 text-red-500" v-if="typeof errors.password !== 'undefined'">{{ errors.password[0] }}</div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <button class="text-white text-base font-bold focus:outline-none rounded">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
const { required, minLength, email, sameAs } = require('vuelidate/lib/validators')

export default {
  name: 'Register',
  mixins: [validationMixin],
  data () {
    return {
      form: {},
      userData: {},
      hasError: false,
      errors: {},
    }
  },
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(4),
        email
      },
      password: {
        required,
        minLength: minLength(6),
      },
      password_confirmation: {
        sameAsPassword: sameAs('password'),
      },
      name: {
        minLength: minLength(4),
      }
    },
  },
  methods: {
    async postUserRegister() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.hasError = true
      } else {
        this.hasError = false
        try {
           await axios.post('https://task.huuhienqt.dev/api/v1/register/', this.form)
          this.$router.push({name: "Login"})
        } catch (error) {
          console.log (error.response.data)
          if (typeof error.response.data.meta.errors !== 'undefined') {
            this.errors = error.response.data.meta.errors
          }
        }
      }
    }
  }

}
</script>
<style scoped>
.form-login {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
  height: 100vh;
}
form {
  border-radius: 20px;
  padding: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  width: 450px;
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}
h1 {
  color: green;
  text-align: center;
}
p {
  margin-top: 30px;
}
input {
  margin-top: 6px;
  width: 100%;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 15px;
}
button {
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 50px;
  background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
</style>