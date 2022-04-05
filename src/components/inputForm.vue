<template>
  <form class="form-group">
    <div class="top-side">
      <div class="date-group">
        <button class="btn btn-custom btn-custom-lg"
                :class="{'active': notToday === false}"
                @click.prevent="setToday">
                <font-awesome-icon icon="fa-solid fa-calendar" />  <span>今日</span>
        </button>
        <button class="btn btn-custom"
                :class="{'active': notToday === true}"
                title="選取其他"
                @click.prevent="anotherDay">
                <font-awesome-icon icon="fa-solid fa-calendar-days" />
        </button>
      </div>
      <div class="form-input"
            :class="{'has-error': validation.hasError('refuelingForm.date')}"
            v-if="notToday">
        <label for="date">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-calendar-check" /></div>
          日期
        </label>
        <input type="date"
                :max="getToday()"
                id="date"
                v-model="refuelingForm.date">
      </div>
      <div class="form-input"
            :class="{'has-error': validation.hasError('refuelingForm.amount')}">
        <label for="amount">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-dollar-sign" /></div>
          金額
        </label>
        <input type="number"
                id="amount"
                v-model="refuelingForm.amount">
        <div class="message">{{ validation.firstError('refuelingForm.amount') }}</div>
      </div>
      <div class="form-input"
            :class="{'has-error': validation.hasError('refuelingForm.gasoline')}">
        <label for="gasoline">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-gas-pump" /></div>
          汽油
        </label>
        <input type="number" step="0.01"
                id="gasoline"
                v-model="refuelingForm.gasoline"> L
        <div class="message">{{ validation.firstError('refuelingForm.gasoline') }}</div>
      </div>
      <div class="form-input"
            :class="{'has-error': validation.hasError('refuelingForm.km')}">
        <label for="km">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-car-side" /></div>
          里程
        </label>
        <input type="number"
                :min="lastKM"
                id="km"
                v-model="refuelingForm.km"> KM
        <div class="message">{{ validation.firstError('refuelingForm.km') }}</div>
      </div>
    </div>
    <div class="bottom-side">
      <button class="btn btn-custom btn-custom-xl send-btn"
              @click.prevent="send">
              送出 <font-awesome-icon icon="fa-solid fa-angle-up" />
      </button>
    </div>
  </form>
</template>

<script>
import exPage from '@/components/exPage.vue';
import GetDate from '@/mixins/GetDate.js';

const SimpleVueValidation = require("simple-vue-validator");
const Validator = SimpleVueValidation.Validator.create({
  templates: {
    required: "此欄位為必填",
  }
});


export default {
  name: 'inputForm',
  props: {
    lastKM: {
      required: true,
    }
  },
  extends: exPage,
  data:() => ({
    notToday: false,
    refuelingForm: {
      date: '',
      amount: '',
      gasoline: '',
      km: '',
    },
  }),
  mixins: [
    GetDate
  ],
  mounted(){
    this.refuelingForm.date = this.getToday();
  },
  validators: {
    "refuelingForm.date": function(value) {
      return Validator.value(value).required();
    },
    "refuelingForm.amount": function(value) {
      return Validator.value(value).required();
    },
    "refuelingForm.gasoline": function(value) {
      return Validator.value(value).required();
    },
    "refuelingForm.km": function(value) {
      return Validator.value(value).required().greaterThan(this.lastKM, `至少要大於 ${this.lastKM}`);
    },
  },
  methods:{
    setToday(){
      this.notToday = false;
      this.refuelingForm.date = this.getToday()
    },
    anotherDay(){
      this.notToday = true;
    },
    send(){
      this.$validate().then(async success =>{
        if (success){
          this.$emit('getAdd', this.refuelingForm)
          this.$emit('close')
        }
      })
      .catch(error => {
        console.error(error)
      });
    },
  },
}
</script>

<style lang="scss" scoped>
  .form-group{
    text-align: left;
    height: calc(100vh - 250px);
    position: relative;
    width: 330px;
    margin-top: 140px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottom-side{
      display: flex;
      justify-content: flex-end;
    }

    .has-error{
      input{
        border: 2px solid#ffbc08 !important;
      }
      .message{
        color: #ffbc08;
      }
    }
    .form-input{
      margin: 20px 0;
      color: #fff;
      .icon{
        width: 20px;
        display: inline-block;
      }

      input{
        border: 1px solid #b5b5b5;
        border-radius: 4px;
        height: 30px;
        width: 215px;
        text-align: center;
        font-size: 15px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }

    .date-group{
      margin-top: 30px;

      .btn{
        margin-right: 5px;
        &:last-child{
          margin-right: 0;
        }
      }

      .active{
        border: 2px solid #EA08FF;
      }
    }
  }

  .btn-custom{
    border-radius: 30px;
    border: 1px solid #e2e2e2;
    height: 40px;
    width: 40px;
    span{
      margin-left: 5px;
    }
  }
  .btn-custom-lg{
    width: 80px;
  }
  .btn-custom-xl{
    width: 120px;
  }
  .send-btn{
    border: 1px solid #EA08FF;
    background-color: #EA08FF;

    svg{
      margin-left: 15px;
    }
  }
</style>
