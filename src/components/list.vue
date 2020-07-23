<template>
  <ul class="list">
    <li v-for="(item, index) in refuelingList" :key="index" @dblclick="editItem(index, item)" class="card">
      <div class="info-group" v-if="nowEditing !== index">
        <div>日期：{{item.date}}</div>
        <div>金額：{{item.amount}}</div>
        <div>加油量：{{item.gasoline}}L</div>
        <div>當前里程：{{item.kilometers}}</div>
        <div>本次油耗比：{{fuelConsumption(index, item.kilometers, item.gasoline)}} Km/L</div>
      </div>
      <div class="info-group" v-else>
        <div class="form-group">
          日期：<input type="date" v-model="editData.date">
        </div>
        <div class="form-group">
          金額：<input type="number" v-model="editData.amount">
        </div>
        <div class="form-group">
          汽油：<input type="number" step="0.01" v-model="editData.gasoline"> L
        </div>
        <div class="form-group">
          目前里程：<input type="number" v-model="editData.kilometers">KM
        </div>
        <div>本次油耗比：{{fuelConsumption(index, editData.kilometers, editData.gasoline)}} Km/L</div>
      </div>
      <div class="btn-group">
        <button class="btn btn-success" @click.prevent="endEdit(index)" v-show="nowEditing === index">完成</button>
        <button class="btn btn-danger" @click.prevent="deleteItem(index)">刪除</button>
      </div>
    </li>
  </ul>
</template>


<script>
import exPage from '../components/exPage.vue';

export default {
  name: 'list',
  props: {
    refuelingList: {
      required: true,
      type: Array,
    }
  },
  extends: exPage,
  data:() => ({
    nowEditing: null, // 修改中項目的 Array index
    editData: {
      date: '',
      amount: '',
      gasoline: '',
      kilometers: '',
    },
  }),
  methods:{
    // 計算油耗比（每公升跑幾公里）
    fuelConsumption(index, nowKm, gasoline){
      if(this.refuelingList[index+1] !== undefined){
        let drivingKm = nowKm - this.refuelingList[index+1].kilometers
        return Math.round( (drivingKm/gasoline) * 100) / 100
      }else{
        return '--'
      }
    },

    editItem(index, item){
      this.nowEditing = index
      this.editData = this.deepClone(item)
    },

    endEdit(index){
      this.refuelingList[index] = this.editData
      this.nowEditing = null
    },

    cancelEdit(){
      this.nowEditing = null
    },

    deleteItem(index){
      this.refuelingList.splice(index, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li.card {
  display: flex;
  border: 1px solid gray;
  justify-content: center;
  width: 375px;
  height: 120px;
  margin: 15px auto;
  position: relative;
  overflow: hidden;
  &:hover{
    .btn-group{
      left: 325px;
    }
  }
}
.btn-group{
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 375px;
  height: 120px;
  width: 50px;
  background-color: #c5c5c5;
  transition: all .3s;
  > .btn{
    min-height: 60px;
    height: 120px;
  }
}
.btn-success{
  color: #fff;
  background-color: #00a65a;
  border-color: #008d4c;
}
.btn-danger{
  color: #fff;
  background-color: #dd4b39;
  border-color: #d73925;
}
a {
  color: #42b983;
}
</style>
