<template>
  <div class="info-section register">
    <h3>建立一個新帳號吧！</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="register">註冊</button>
    <p>或返回 <router-link to="/login">登入</router-link></p>
  </div>
</template>

<script>
  // import firebase from 'firebase';
  export default {
    name: 'SignUp',
    data() {
      return {
        email: 'guest@mail.com',
        password: 'guest'
      }
    },
    methods: {
      register(){
        console.log('click')
      },
      // login: function() {
      //   firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      //     (user) => {
      //       this.$router.replace('home')
      //     },
      //     (err) => {
      //       alert('Oops. ' + err.message)
      //     }
      //   );
      // }
    }
  }
</script>

<style lang="scss" scoped>
$dark-main-color: #091955;
#app{
  .register {
    background-color: #091955;
    width: 250px;
    height: 300px;
    padding: 30px;
    margin: 60px auto;
    border-radius: 30px;
    color: #fff;
  }
  input{
    border: 1px solid #b5b5b5;
    border-radius: 4px;
    height: 40px;
    width: 240px;
    text-align: center;
    font-size: 15px;
    margin: 10px;
  }
  button {
    margin-top: 20px;
    background-color: #EA08FF;
    color: #e2e2e2;
    width: 150px;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  }
  p {
    margin-top: 30px;
    font-size: 14px;

    a {
      text-decoration: none;
      cursor: pointer;
      color: #7bf71e;
    }
  }
}
</style>