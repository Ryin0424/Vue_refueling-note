<template>
  <div>
    <div class="setting-side">
      <div class="user-info">
        <router-link to="/login">
          <div class="user-avatar" style="margin: 40px 0 25px 0;">
            <img src="https://drcinc.org/wp-content/uploads/2017/05/vagmAzMznjBJGQf_sumV.gif"
                  alt="avatar"
                  class="user-avatar">
          </div>
        </router-link>
        <div class="circle-btn" @click="closeMenu"> <font-awesome-icon icon="fa-solid fa-less-than" /> </div>
      </div>
      <h1 class="user-name">
        Guest
      </h1>
      <ul class="options">
        <router-link to="/"> <li> <font-awesome-icon icon="fa-solid fa-list" /> 紀錄小卡 </li> </router-link>
        <li> <font-awesome-icon icon="fa-solid fa-chart-pie" /> 分析 </li>
        <li> <font-awesome-icon icon="fa-solid fa-chart-column" /> 分析 </li>
        <router-link to="/setting"> <li> <font-awesome-icon icon="fa-solid fa-gear" /> 設定 </li> </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal-setting',
  methods:{
    closeMenu(){
      this.$emit('closeMenu', false);
    },
  },
}
</script>

<style lang="scss">
$dark-main-color: #091955;

.setting-bg{
  position: fixed;
  top: 0;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  color: #fff;

  .setting-side{
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    padding-left: 40px;

    .user-info{
      margin-top: 60px;
      margin-right: 80px;
      display: flex;
      justify-content: space-between;

      .user-avatar{
        width: 75px;
        height: 75px;
        background-color: #e2e2e2;
        border-radius: 50%;
        position: relative;
        &::before{
          content: '';
          display: block;
          position: absolute;
          top: -3px;
          left: -3px;
          width: 81px;
          height: 81px;
          border-radius: 50%;
          z-index: -1;
          background-color: $dark-main-color;
        }
        &::after{
          content: '';
          display: block;
          position: absolute;
          top: -6px;
          left: -6px;
          width: 87px;
          height: 87px;
          border-radius: 50%;
          z-index: -2;
          background-color: #EA08FF;
        }
      }
    }

    .options{
      list-style: none;
      line-height: 50px;
      padding-left: 0;

      a{
        color: #fff;
        text-decoration: none;
      }

      li{
        svg{
          margin-right: 20px;
          color: #676767;
        }
      }
    }
  }
}
</style>