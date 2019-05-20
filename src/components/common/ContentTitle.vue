<template>
   <div class="content-title">
     <span class="title"><slot name="title">标题</slot></span>
     <span class="right"><slot name="right"></slot></span>
     <div class="line"></div>
     <div class="line"></div>
   </div>
</template>

<script>
    export default {
        name: "ContentTitle"
    }
</script>

<style scoped>
.content-title {
  font-size: 25px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 12px;

}
.title {
  margin-bottom: 13px;
}
  .line {
    width: 100%;
    height: 1px;
    background-color: #8b9dd0;
    margin-top: 2px;
  }
  .right {
    float: right;
    font-size: 20px;
    color: #969696;
  }
</style>
