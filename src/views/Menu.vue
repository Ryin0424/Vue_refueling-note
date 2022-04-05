<template>
  <div class="top-menu">
    <div class="left-side">
      <font-awesome-icon icon="fa-solid fa-bars"
                          @click="toggleMenu" />
    </div>
    <div class="right-side">
      <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> -->
      <!-- <font-awesome-icon icon="fa-solid fa-bell" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-menu',
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  methods:{
    toggleMenu(){
      this.$emit('toggleMenu', !this.open);
    },
  },
}
</script>

<style lang="scss" scoped>
.top-menu{
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  position: fixed;
  z-index: 999;
  color: #e2e2e2;

  svg{
    cursor: pointer;
  }

  .left-side{
    margin-left: 20px;
  }
  .right-side{
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    svg{
      margin-right: 25px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>