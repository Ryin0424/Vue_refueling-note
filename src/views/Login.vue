<template>
  <div class="info-section login">
    <h3>加油紀錄</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">登入</button>
    <p>還沒有帳號嗎？ 您可以 <router-link to="/sign-up">註冊一個</router-link></p>
    <!-- <hr/>
    <div class="user-others">
      <p>用其他帳號開始</p>
      <div class="btn-group">
        <div class="circle-btn yahoo"> <font-awesome-icon icon="fa-brands fa-yahoo" /> </div>
        <div class="circle-btn github"> <font-awesome-icon icon="fa-brands fa-github" /> </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  // import firebase from 'firebase';
  export default {
    name: 'login',
    data() {
      return {
        email: 'guest@mail.com',
        password: 'guest'
      }
    },
    methods: {
      login(){
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
  .login {
    background-color: #091955;
    width: 370px;
    height: 400px;
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

  .btn-group{
    display: flex;
    justify-content: center;

    .circle-btn{
      font-size: 22px;
      margin: 0 5px;
    }
  }
  .yahoo{
    background-color: #6000D2;
  }
  .github{
    background-color: #222;
  }
}
</style>