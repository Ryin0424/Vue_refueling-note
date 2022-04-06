<template>
  <div class="info-section">
    <img alt="Vue logo" src="@/assets/logo.png">
    <Card-List :refuelingList="sortArray" @update="updateInfo"/>
    <button class="add" @click.prevent="addNew"> + </button>

    <transition name="fade">
      <Create v-if="createNew"
              :lastKM="sortArray[0].km"
              @closeCreate="closeCreate"
              @receiveSubmit="receiveSubmit" />
    </transition>
  </div>
</template>

<script>
import exPage from '@/components/exPage.vue';
import CardList from '@/components/CardList.vue';
import Create from '@/views/Create.vue';
// import refuelingData from '@/assets/test.json';
import firebase from '@/firebaseInit.js';
import { getDatabase, ref, onValue, set } from 'firebase/database'
// import { getDatabase, ref, set, onValue, get, child } from 'firebase/database'
const db = getDatabase(firebase);

export default {
  name: 'Info-List',
  extends: exPage,
  components: {
    CardList,
    Create,
  },
  data:() => ({
    refuelingArray: [],
    createNew: false,
  }),
  mounted(){
    this.getRealTimeData();
  },
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
    getRealTimeData(){
      return onValue(ref(db, '/'), (snapshot) => {
        this.refuelingArray = snapshot.val();
      }, {
        onlyOnce: true
      });
    },
    updateInfo(newData){
      set(ref(db, '/'), newData);
      this.getRealTimeData();
    },
    addNew(){
      this.createNew = true;
    },
    receiveSubmit(data){
      let newData = this.deepClone(this.refuelingArray).reverse()
      newData.push(data)
      set(ref(db, '/'), newData.reverse())
      this.getRealTimeData();
    },
    closeCreate(){
      this.createNew = false;
    },
  },
}
</script>

<style lang="scss">
$dark-main-background-color: #3451A1;
$dark-main-color: #091955;

.info-section{

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
    cursor: pointer;
  }
  .card{
    border-radius: 15px;
    background-color: $dark-main-color;
    padding: 5px 0;
    color: #fff;
  }
}
</style>
