<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>

    <router-view /> -->

    <TopMenu></TopMenu>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>Welcomd, guest!</div>
    <inputForm @childMethod="receiveSubmit" style="display:none;" />
    <list :refuelingList="sortArray" @update="updateInfo"/>
    <button class="add" > + </button>
  </div>
</template>

<script>
import exPage from '@/components/exPage.vue';
import inputForm from '@/components/inputForm.vue';
import TopMenu from '@/views/Menu.vue';
import list from '@/components/list.vue';
import refuelingData from '@/assets/test.json';


export default {
  name: 'App',
  extends: exPage,
  components: {
    TopMenu,
    inputForm,
    list,
  },
  data:() => ({
    refuelingArray: refuelingData,
  }),
  computed:{
    sortArray(){
      // let ary = this.refuelingArray.map( node => {
      //   node.inRevise = false;
      //   return node
      // })
      let ary = this.refuelingArray
      // sort by Obj value
      // note by https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
      let newArray = ary.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
      return newArray.reverse()
    },
  },
  methods:{
    receiveSubmit(data){
      console.log('origin:', this.refuelingArray)
      this.refuelingArray.push(data)
    },
    updateInfo(data){
      console.log(data);
      this.refuelingArray = data;
    },
  },
}
</script>

<style lang="scss">
$dark-main-background-color: #3451A1;
$dark-main-color: #091955;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin: -8px;
  background-color: $dark-main-background-color;
  position: relative;
  .add{
    position: fixed;
    bottom: 30px;
    right: 15px;
    background-color: #EA08FF;
    color: #e2e2e2;
    width: 50px;
    height: 50px;
    font-size: 24px;
    border-radius: 50%;
    border: none;
  }
  .card{
    border-radius: 15px;
    background-color: $dark-main-color;
    padding: 5px 0;
    color: #fff;
  }
}
</style>
