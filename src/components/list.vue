<template>
  <ul class="list">
    <li v-for="(item, index) in refuelingList" :key="index"
        v-touch:swipe="swipeHandler(index)"
        @dblclick="editItem(index)"
        class="card"
        :class="[{'card-edit': nowEditing === index}, {'card-delete': nowDeleting === index}]">
        <Card-Info :cardData="item"
                    :refuelingList="listAtComponent"
                    :index="index"
                    v-if="nowEditing !== index && nowDeleting !== index" />
        <Card-Edit :cardData="item"
                    :refuelingList="listAtComponent"
                    :index="index"
                    @updateEdit="listEndEdit"
                    @clearEdit="clearEdit"
                    v-if="nowEditing === index" />
        <Card-Dele :index="index"
                    @updateDele="deleteItem"
                    @cancelDelete="cancelDelete"
                    v-if="nowDeleting === index" />
    </li>
  </ul>
</template>


<script>
import exPage from '@/components/exPage.vue';
import Calculator from '@/mixins/Calculator.js';
import CardInfo from '@/views/List/CardInfo.vue';
import CardEdit from '@/views/List/CardEdit.vue';
import CardDele from '@/views/List/CardDele.vue';

export default {
  name: 'List',
  props: {
    refuelingList: {
      required: true,
      type: Array,
    }
  },
  components: {
    CardInfo,
    CardEdit,
    CardDele,
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
  }),
  watch:{
    refuelingList(){
      this.listAtComponent = this.deepClone(this.refuelingList)
    },
  },
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

    editItem(index){
      if(this.nowDeleting === index) return;
      this.nowEditing = index
      // this.editData = this.deepClone(item)
    },

    listEndEdit(newData, index){
      this.listAtComponent[index] = newData
      this.dataUpdate(this.listAtComponent)
      this.clearEdit()
    },

    clearEdit(){
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
  height: calc(100vh - 250px);
  overflow: auto;
  // Firefox
  scrollbar-width:none;
  // IE
  -ms-overflow-style: none;
  // Chrome & Safari
  &::-webkit-scrollbar{
    display: none;
  }
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
