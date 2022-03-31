<template>
  <ul class="list">
    <li v-for="(item, index) in refuelingList" :key="index"
        v-touch:swipe="swipeHandler(index)"
        @dblclick="editItem(index, item)"
        class="card"
        :class="[{'card-edit': nowEditing === index}, {'card-delete': nowDeleting === index}]">
        <div class="info-group" v-if="nowEditing !== index">
          <div>日期：{{item.date}}</div>
          <div>金額：{{item.amount}}</div>
          <div>加油量：{{item.gasoline}}L</div>
          <div>當前里程：{{item.km}}</div>
          <div class="text-green">本次油耗比：{{fuelConsumption(index, item.km, item.gasoline)}} Km/L</div>
        </div>
        <div class="form-group" v-else>
          <div class="form-input">
            日期：<input type="date" v-model="editData.date">
          </div>
          <div class="form-input">
            金額：<input type="number" v-model="editData.amount">
          </div>
          <div class="form-input">
            汽油：<input type="number" step="0.01" v-model="editData.gasoline"> L
          </div>
          <div class="form-input">
            里程：<input type="number" v-model="editData.km"> KM
          </div>
        </div>
      <div class="btn-group">
        <button class="btn btn-success" @click.prevent="endEdit(index)" v-show="nowEditing === index">完成</button>
        <button class="btn btn-" @click.prevent="clearEdit(index)" v-show="nowEditing === index">取消</button>
        <!-- <button class="btn btn-danger" @click.prevent="deleteItem(index)">刪除</button> -->
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
  mounted(){
    this.listAtComponent = this.deepClone(this.refuelingList)
  },
  data:() => ({
    listAtComponent: [],
    nowEditing: null, // 修改中項目的 Array index
    nowDeleting: null, // 進入刪除確認的 Array index
    editData: {
      date: '',
      amount: '',
      gasoline: '',
      km: '',
    },
  }),
  methods:{
    // 計算油耗比（每公升跑幾公里）
    fuelConsumption(index, nowKm, gasoline){
      if(this.listAtComponent[index+1] !== undefined){
        if(this.listAtComponent[index+1].km === null){
          let drivingKm = nowKm - this.listAtComponent[index+2].km
          let nowGasoline = gasoline + this.listAtComponent[index+1].gasoline
          return Math.round( (drivingKm/nowGasoline) * 100) / 100
        }
        if(nowKm !== null){ // 若本次里程不是空值
          let drivingKm = nowKm - this.listAtComponent[index+1].km
          return Math.round( (drivingKm/gasoline) * 100) / 100
        }
      }else{
        return '--'
      }
    },
    // 計算歷史油價
    calcHistoricalOilPrices(amount, gasoline){
      // 取至小數點後兩位
      return Math.round(amount / gasoline * 100) / 100;
    },

    swipeHandler (index) {
      return function(dir) {
        console.log(dir, index);
        if(dir === 'left'){
          this.nowDeleting = index;
        }
      }
    },

    // swipeHandler (direction) {
    //   alert(direction)
    //   console.log(direction)  // May be left / right / top / bottom
    // },

    editItem(index, item){
      this.nowEditing = index
      this.editData = this.deepClone(item)
    },

    endEdit(index){
      this.listAtComponent[index] = this.editData
      this.dataUpdate(this.listAtComponent)
      this.clearEdit()
    },

    clearEdit(){
      this.editData = {
        date: '',
        amount: '',
        gasoline: '',
        km: '',
      }
      this.nowEditing = null
    },

    deleteItem(index){
      this.listAtComponent.splice(index, 1)
    },

    // 任何在 component 內改動的資料，傳回父層
    dataUpdate(data){
      console.log('emit')
      this.$emit('dataFromComponent', data)
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
  width: 355px;
  height: 120px;
  margin: 15px auto;
  transition: width ease .3s, height ease .6s;
  position: relative;
  overflow: hidden;
}
.btn-group{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 337px;
  height: 192px;
  width: 40px;
  // background-color: #c5c5c5;
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
.text-green{
  color: #7bf71e;
}


li.card-edit{
  width: 375px;
  height: 180px;
  transition: width ease .3s, height ease .6s;
  .form-group{
    text-align: left;
    .form-input{
      margin: 8px 0;
      input{
        border: 1px solid #b5b5b5;
        border-radius: 4px;
        height: 30px;
        width: 165px;
        text-align: center;
        font-size: 15px;
      }
    }
  }
}
</style>
