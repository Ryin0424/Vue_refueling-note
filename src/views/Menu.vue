<template>
  <div class="top-menu">
    <div class="left-side">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <div class="right-side">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <!-- <font-awesome-icon icon="fa-solid fa-bell" /> -->
    </div>
    <!-- <font-awesome-icon icon="fa-solid fa-xmark" /> -->
    <!-- <font-awesome-icon icon="fa-solid fa-less-than" /> -->
  </div>
</template>

<style lang="scss" scoped>
.top-menu{
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  background-color: orange;
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