<template>
  <div class="">
    <font-awesome-icon icon="fa-solid fa-trash-can"/>  <span>確定要刪除此項紀錄嗎？</span>
    <div class="btn-group delete-group">
      <button class="btn btn-custom btn-danger" @click.prevent="deleteItem(index)">確定</button>
      <button class="btn btn-custom btn-success" @click.prevent="cancelDelete">取消</button>
    </div>
  </div>
</template>

<script>
import exPage from '@/components/exPage.vue';

export default {
  name: 'list',
  props: {
    index: {
      required: true,
    }
  },
  extends: exPage,
  mounted(){
    // this.listAtComponent = this.deepClone(this.refuelingList)
  },
  data:() => ({
  }),
  methods:{
    deleteItem(index){
      this.$emit('updateDele', index)
    },
    cancelDelete(){
      this.$emit('cancelDelete')
    },
  },
}
</script>

<style lang="scss" scoped>
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
}.btn-custom{
  border-radius: 50px;
  width: 50px;
  height: 25px;
  border: none;
}
</style>
