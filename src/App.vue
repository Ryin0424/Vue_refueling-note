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
        <list :refuelingList="sortArray" @update="updateInfo"/>
        <button class="add" @click.prevent="addNew"> + </button>
      </div>
    </div>

    <transition name="fade">
      <Create v-if="createNew"
              @closeCreate="closeCreate" />
      <!-- <inputForm @childMethod="receiveSubmit" v-if="createNew" /> -->
    </transition>

    <Personal class="setting-bg"
              @closeMenu="toggleMenu"/>
  </div>
</template>

<script>
import exPage from '@/components/exPage.vue';
import TopMenu from '@/views/Menu.vue';
import Personal from '@/views/Personal.vue';
import Create from '@/views/Create.vue';
import list from '@/components/list.vue';
import refuelingData from '@/assets/test.json';

export default {
  name: 'App',
  extends: exPage,
  components: {
    TopMenu,
    Personal,
    Create,
    list,
  },
  data:() => ({
    refuelingArray: refuelingData,
    open: false,
    createNew: false,
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
    addNew(){
      this.createNew = true;
    },
    closeCreate(){
      this.createNew = false;
    }
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
    z-index: 1;
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

  .circle-btn {
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border: 2px solid #676767;
    color: #fff;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
  }


  // transition fade
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
