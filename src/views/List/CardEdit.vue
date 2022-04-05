<template>
  <div class="form-group">
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
      <button class="btn btn-success" @click.prevent="endEdit(index)">完成</button>
      <button class="btn btn-github" @click.prevent="clearEdit()">取消</button>
    </div>
  </div>
</template>

<script>
import exPage from '@/components/exPage.vue';
import Calculator from '@/mixins/Calculator.js';

export default {
  name: 'CardInfo',
  props: {
    cardData: {
      required: true,
      type: Object,
    },
    index: {
      required: true,
    }
  },
  extends: exPage,
  mixins: [
    Calculator
  ],
  mounted(){
    this.editData = this.deepClone(this.cardData)
  },
  data:() => ({
    editData: {
      date: '',
      amount: '',
      gasoline: '',
      km: '',
    },
  }),
  methods:{
    endEdit(index){
      this.$emit('updateEdit', this.editData ,index)
    },
    clearEdit(){
      this.$emit('clearEdit')
    },
  }
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
.btn-custom{
  border-radius: 50px;
  width: 50px;
  height: 25px;
  border: none;
}
</style>
