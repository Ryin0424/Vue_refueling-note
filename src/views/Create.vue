<template>
  <div class="create-new">

    <div class="circle-btn pull-right" @click="close"> <font-awesome-icon icon="fa-solid fa-xmark" />  </div>

    <inputForm :lastKM="lastKM"
                @getAdd="newRecord" />

  </div>

</template>

<script>
import inputForm from '@/components/inputForm.vue';

export default {
  name: 'add-record',
  props:{
    lastKM:{
      required: true,
    }
  },
  components: {
    inputForm
  },
  methods:{
    close(){
      this.$emit('closeCreate');
    },
    newRecord(data){
      console.log('get emit', data)
    },
  },
}
</script>

<style lang="scss" scoped>
$dark-main-color: #091955;

.create-new{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background-color: $dark-main-color;
}
.pull-right{
  position: absolute;
  top: 40px;
  right: 40px;
}
</style>