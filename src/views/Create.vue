<template>
  <div class="create-new">
    <div class="circle-btn" @click="close"> <font-awesome-icon icon="fa-solid fa-xmark" />  </div>
  </div>
</template>

<script>
export default {
  name: 'add-note',
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
</style>