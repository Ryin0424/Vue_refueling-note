<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <inputForm @childMethod="receiveSubmit"/>
    <list :refuelingList="sortArray" />
  </div>
</template>

<script>
import exPage from './components/exPage.vue';
import inputForm from './components/inputForm.vue'
import list from './components/list.vue'
import refuelingData from './assets/test.json'

export default {
  name: 'App',
  extends: exPage,
  components: {
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
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin: 0 -8px;
}
</style>
