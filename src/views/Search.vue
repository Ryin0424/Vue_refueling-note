<template>
  <div class="create-new">

    <div class="circle-btn pull-right" @click="close"> <font-awesome-icon icon="fa-solid fa-xmark" />  </div>

    <searchForm
                @close="addSuccess" />

  </div>

</template>

<script>
import searchForm from '@/components/inputForm.vue';

export default {
  name: 'add-record',
  components: {
    searchForm
  },
  data:() => ({
    searchVal: {
      start: '',
      end: '',
    }
  }),
  methods:{
    close(){
      this.$emit('closeCreate');
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