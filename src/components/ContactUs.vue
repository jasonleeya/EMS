<template>
  <div class="contanct-us">
    <div class="text">
      <p>联系方式：139964886629（王老师）</p>
      <p>地址：重庆市沙坪坝区大学城科技学院</p>
    </div>
    <div class="map" style="width:800px;height:800px;border:#ccc solid 1px;" id="dituContent"></div>
  </div>
</template>

<script>
  export default {
    name: "ContactUs",
    mounted() {
      //创建和初始化地图函数：
      function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
      }

      //创建地图函数：
      function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(106.330207,29.596567);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
      }

      //地图事件设置函数：
      function setMapEvent(){
        map.enableDragging();//禁用地图拖拽事件
        map.disableScrollWheelZoom();//启用地图滚轮放大缩小
        map.disableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.disableKeyboard();//禁用键盘上下左右键移动地图，默认禁用(可不写)
      }

      //地图控件添加函数：
      function addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
      }


      initMap();//创建和初始化地图
    }
  }
</script>

<style scoped>

</style>
<style>
  .iw_poi_title {
    color: #CC5522;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    padding-right: 13px;
    white-space: nowrap
  }

  .iw_poi_content {
    font: 12px arial, sans-serif;
    overflow: visible;
    padding-top: 4px;
    white-space: -moz-pre-wrap;
    word-wrap: break-word
  }
  .contanct-us {
    width: 1200px;
    height: 800px;
    margin:20px auto;

  }

  .map {
    float: right;
  }
  .text {
    width: 350px;
    font-size: 18px;
    font-weight: bold;
    float: left;
  }
  .text p {
    margin-bottom: 20px;
  }
</style>
