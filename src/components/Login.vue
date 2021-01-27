<template>
  <div class="form-login">
    <form action="" @submit="priven">
      <h1>LOGIN</h1>
      <p>Email</p>
      <input type="text" placeholder="Email">
      <p>Password</p>
      <input type="text" placeholder="Password">
      <button>Login</button>
    </form>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.form-login {
  margin-top: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  padding: 30px;
  padding-bottom: 60px;
  padding-right: 50px;
  border: 1px solid green;
  width: 500px;
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
  padding: 10px 30px;
  background-color: #42b983;
  border: #42b983;
  cursor: pointer;
}
</style>