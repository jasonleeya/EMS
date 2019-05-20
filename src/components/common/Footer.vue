<template>
  <div class="footer" v-show="$store.state.headerHeight!==0">
    <span class="contact">
      联系方式：139964886629（王老师）
    </span>
    <span class="address">
      地址：重庆市沙坪坝区大学城科技学院
    </span>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    background-color: #000c20;
    width: 100%;
    height: 64px;
    text-align: center;
    line-height: 64px;
    color: #969696;
    font-size: 18px;
  }

  .address {
  margin-left: 50px;
  }


</style>
