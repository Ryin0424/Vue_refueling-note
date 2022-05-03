<template>
  <ul class="list">
    <li class="card">
      <div class="info-group">
        <div class="card-item" style="width: 200px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
      </div>
    </li>
    <li class="card">
      <div class="info-group">
        <div class="card-item" style="width: 200px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
      </div>
    </li>
    <li class="card">
      <div class="info-group">
        <div class="card-item" style="width: 200px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
      </div>
    </li>
    <li class="card">
      <div class="info-group">
        <div class="card-item" style="width: 200px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
      </div>
    </li>
    <li class="card">
      <div class="info-group">
        <div class="card-item" style="width: 200px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
        <div class="card-item" style="width: 250px;"></div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
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
  text-align: start;
  transition: width ease .3s, height ease .6s;
  position: relative;
  overflow: hidden;
  .info-group{
    margin: auto 0;
  }
  .card-item{
    background-color: #b5b5b578;
    height: 10px;
    margin: 15px 0;
    border-radius: 15px;
  }
}
</style>