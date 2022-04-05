<template>
  <div id="app">
    <div class="main-side"
        :class="{'main-side-move': open}">
      <TopMenu class="top-menu"
                @toggleMenu="toggleMenu"
                :open="open" />
      <div class="info-section">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- <div>Welcomd, guest!</div> -->
        <!-- <inputForm @childMethod="receiveSubmit" style="display:none;" /> -->
        <list :refuelingList="sortArray" @update="updateInfo"/>
        <button class="add" > + </button>
      </div>
    </div>
    <Personal class="setting-bg"
              @closeMenu="toggleMenu"/>
  </div>
</template>

<script>
import exPage from '@/components/exPage.vue';
// import inputForm from '@/components/inputForm.vue';
import TopMenu from '@/views/Menu.vue';
import Personal from '@/views/Personal.vue';
import list from '@/components/list.vue';
import refuelingData from '@/assets/test.json';


export default {
  name: 'App',
  extends: exPage,
  components: {
    TopMenu,
    Personal,
    // inputForm,
    list,
  },
  data:() => ({
    refuelingArray: refuelingData,
    open: true,
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
    toggleMenu(boolean){
      this.open = boolean
    },
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
  height: 100vh;
  overflow: hidden;

  .main-side{
    background-color: $dark-main-background-color;
    position: relative;
    right: 0;
    top: 0;
    height: 100vh;
    overflow: hidden;
    transition: all ease 1s;
    .top-menu{
      background-color: $dark-main-background-color;
      transition: all ease 1s;
    }
    .info-section{
      padding-top: 40px;
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
  }
  .main-side-move{
    right: -320px;
    top: 50px;
    height: 85vh;
    overflow: hidden;
    transition: all ease 1s;
    border-collapse: separate;
    border-radius: 30px;
    .top-menu{
      border-radius: 30px;
      transition: all ease 1s;
    }
    .add{
      display: none;
    }
  }
  .setting-bg{
    background-color: $dark-main-color;
  }
}
</style>
