<script>

export default {
  methods:{
    // 計算油耗比（每公升跑幾公里）
    fuelConsumption(data, index, nowKm, gasoline){
      if(data[index+1] !== undefined){
        if(data[index+1].km === null){
          let drivingKm = nowKm - data[index+2].km
          let nowGasoline = gasoline + data[index+1].gasoline
          return Math.round( (drivingKm/nowGasoline) * 100) / 100
        }
        if(nowKm !== null){ // 若本次里程不是空值
          let drivingKm = nowKm - data[index+1].km
          return Math.round( (drivingKm/gasoline) * 100) / 100
        }
      }else{
        return '--'
      }
    },

    // 計算 歷史油價
    calcGasolinePrice(amount, gasoline){
      return ( amount / gasoline)
    },
  },
}
</script>