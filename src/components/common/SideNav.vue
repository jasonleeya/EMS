<template>
  <div class="side-nav">
    <div class="side-nav-title">
      中心组织
    </div>
    <div class="item">组织结构</div>
  </div>
</template>

<script>
  export default {
    name: "SideNav",
    data() {
      return{
        list:[]
      }
    }
  }
</script>

<style scoped>
.side-nav-title {
  width: 255px;
  height: 92px;
  background-color: #091947;
  background-image: url("../../assets/imgs/triangle.png");
  text-align: center;
  color: #FFF;
  font-size: 40px;
  line-height: 92px;
}
  .item {
    width: 255px;
    height: 60px;
    line-height: 60px;
    background-color: #5872bc;
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    letter-spacing: 2px;
  }
</style>
