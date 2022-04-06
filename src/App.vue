<template>
  <div id="app">
    <div class="main-side"
        :class="{'main-side-move': open}">
      <Top-Menu class="top-menu"
                @toggleMenu="toggleMenu"
                :open="open" />
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <Personal class="setting-bg"
              @closeMenu="toggleMenu"/>
  </div>
</template>

<script>
import exPage from '@/components/exPage.vue';
import TopMenu from '@/views/TopMenu.vue';
import Personal from '@/views/Personal.vue';

export default {
  name: 'App',
  extends: exPage,
  components: {
    TopMenu,
    Personal,
  },
  data:() => ({
    open: false,
  }),
  methods:{
    toggleMenu(boolean){
      this.open = boolean
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
    z-index: 1;
    overflow: hidden;
    transition: all ease 1s;

    .top-menu{
      background-color: $dark-main-background-color;
      transition: all ease 1s;
    }
    .info-section{
      padding-top: 40px;
    }
  }
  .main-side-move{
    right: -320px;
    top: 50px;
    height: 85vh;
    overflow: hidden;
    transition: all ease .8s;
    border-collapse: separate;
    border-radius: 30px;
    .top-menu{
      border-radius: 30px;
      transition: all ease .8s;
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
