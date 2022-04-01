<template>
  <ul class="list">
    <li v-for="(item, index) in refuelingList" :key="index"
        v-touch:swipe="swipeHandler(index)"
        @dblclick="editItem(index, item)"
        class="card"
        :class="[{'card-edit': nowEditing === index}, {'card-delete': nowDeleting === index}]">
        <div class="info-group" v-show="nowEditing !== index && nowDeleting !== index">
          <div>日期：{{item.date}}</div>
          <div>金額：{{item.amount}}</div>
          <div>加油量：{{item.gasoline}}L</div>
          <div>當前里程：{{item.km}}</div>
          <div class="text-green">本次油耗比：{{fuelConsumption(refuelingList, index, item.km, item.gasoline)}} Km/L</div>
        </div>
        <div class="form-group" v-show="nowEditing === index">
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
          <div class="btn-group edit-group">
            <button class="btn btn-success" @click.prevent="endEdit(index)" v-show="nowEditing === index">完成</button>
            <button class="btn btn-github" @click.prevent="clearEdit(index)" v-show="nowEditing === index">取消</button>
          </div>
        </div>
        <div class="" v-show="nowDeleting === index">
          <font-awesome-icon icon="fa-solid fa-trash-can"/>  <span>確定要刪除此項紀錄嗎？</span>
          <div class="btn-group delete-group">
            <button class="btn btn-custom btn-danger" @click.prevent="deleteItem(index)">確定</button>
            <button class="btn btn-custom btn-success" @click.prevent="cancelDelete">取消</button>
          </div>
        </div>
    </li>
  </ul>
</template>


<script>
import exPage from './exPage.vue';
import Calculator from '../mixins/Calculator.js';

export default {
  name: 'list',
  props: {
    refuelingList: {
      required: true,
      type: Array,
    }
  },
  extends: exPage,
  mixins: [
    Calculator
  ],
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
    swipeHandler (index) {
      return function(dir) {
        console.log(dir, index);
        if (this.nowDeleting !== index && dir === 'left') {
          if (this.nowEditing === index) return;
          this.nowDeleting = index
          // if (this.nowDeleting === index && dir === 'left') {
          //   this.deleteItem(index)
          // }
        } else if (this.nowDeleting === index && dir === 'right') {
          this.nowDeleting = null
        }
      }.bind(this)
    },

    // swipeHandler (direction) {
    //   alert(direction)
    //   console.log(direction)  // May be left / right / top / bottom
    // },

    editItem(index, item){
      if(this.nowDeleting === index) return;
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
      console.log('del', index)
      this.nowDeleting = null
      this.clearEdit()
      this.listAtComponent.splice(index, 1)
      this.dataUpdate(this.listAtComponent)
    },

    cancelDelete(){
      this.nowDeleting = null;
    },

    // 任何在 component 內改動的資料，傳回父層
    dataUpdate(data){
      console.log('emit')
      this.$emit('update', data)
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
    .edit-group{
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
  }
}
li.card-delete{
  width: 250px;
  height: 65px;
  transition: width ease .3s, height ease .6s;
  span{
    margin-left: 15px;
  }
  .delete-group{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
}

.btn-custom{
  border-radius: 50px;
  width: 50px;
  height: 25px;
  border: none;
}
</style>
