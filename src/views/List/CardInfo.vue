<template>
  <div class="info-group">
    <div class="card-item">
      <div class="title">
        <div class="icon"><font-awesome-icon icon="fa-solid fa-calendar-check" /></div>
        日期
      </div>
      {{cardData.date}}
    </div>
    <div class="card-item">
      <div class="title">
        <div class="icon"><font-awesome-icon icon="fa-solid fa-dollar-sign" /></div>
        金額
      </div>{{cardData.amount}}
    </div>
    <div class="card-item">
      <div class="title">
        <div class="icon"><font-awesome-icon icon="fa-solid fa-gas-pump" /></div>
        加油量
      </div>
      {{cardData.gasoline}} L
    </div>
    <div class="card-item">
      <div class="title">
        <div class="icon"><font-awesome-icon icon="fa-solid fa-car-side" /></div>
        目前里程
      </div>
      {{cardData.km}}
    </div>
    <div class="card-item text-green">
      <div class="title">本次油耗比</div>
      {{fuelConsumption(refuelingList, index, cardData.km, cardData.gasoline)}} Km/L</div>
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
    refuelingList: {
      required: true,
      type: Array,
    },
    index: {
      required: true,
    }
  },
  extends: exPage,
  mixins: [
    Calculator
  ],
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
  text-align: start;
  transition: width ease .3s, height ease .6s;
  position: relative;
  overflow: hidden;

  .info-group{
    text-align: start;
    margin: auto 0;
  }

  .card-item{
    .title{
      display: inline-block;
      width: 110px;
    }
  }
}

.icon{
  width: 20px;
  display: inline-block;
}
.text-green{
  color: #7bf71e;
}
</style>
