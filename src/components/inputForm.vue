<template>
  <form class="input-form">
    <!-- <div class="form-group">
      日期：<input type="date" v-model="refuelingForm.date">
    </div>
    <div class="form-group">
      金額：<input type="number" v-model="refuelingForm.amount">
    </div>
    <div class="form-group">
      汽油：<input type="number" step="0.01" v-model="refuelingForm.gasoline"> L
    </div>
    <div class="form-group">
      目前里程：<input type="number" v-model="refuelingForm.kilometers">KM
    </div> -->
    <textarea name="" id="" cols="30" rows="10" v-model="lazyInput"></textarea>
    <div class="form-group">
      <button @click.prevent="send">送出</button>
    </div>
  </form>
</template>

<script>
import exPage from '../components/exPage.vue';

export default {
  name: 'inputForm',
  props: {

  },
  extends: exPage,
  data:() => ({
    lazyMode: true,
    refuelingForm: {
      date: '',
      amount: '',
      gasoline: '',
      kilometers: '',
    },
    lazyInput: '',
  }),
  methods:{
    send(){
      if(this.lazyMode){
        let textAreaInput = this.lazyInput.replace(/\n/g,';');
        let arr = textAreaInput.split(";");
        const data = {
          date: arr[0],
          amount: arr[1],
          gasoline: arr[2],
          kilometers: arr[3],
        }
        console.log(data)
        this.$emit('childMethod', data)
      }else{
        const data = this.deepClone(this.refuelingForm)
        this.$emit('childMethod', data)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
