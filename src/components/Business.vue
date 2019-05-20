<template>
  <div class="business clearfix">
    <div class="side-nav" ref="sideNav" v-if="$store.state.headerHeight!==0">
      <div class="side-nav-title">
        中心业务
      </div>
      <!--根据路由绑定active class-->
      <div :class="{'item':true,'nav-active':$route.fullPath===item.link}"
           v-for="item in navItemList"
           :key="item.key">
        <router-link :to="item.link">{{item.value}}</router-link>

      </div></div>
    <!--根据路由显示相应文章-->
    <div v-if="$route.query.id===item.id"
         class="article"
         v-for="item in articleList"
         :key="item.id">
      <!--<a class="mao" :name="item.id"></a>-->
      <content-title>
      <span slot="title">
        {{item.title}}
      </span>
      </content-title>
      <div class="article-text">
        <p>
          {{item.content}}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  import ContentTitle from '@/components/common/ContentTitle'

  export default {
    name: "Business",
    components: {
      ContentTitle
    },
    data() {
      return {
        navItemList: [{
          id: 1,
          value: '1.城市沿江涉水桥墩船撞风险评估',
          link: '/business?id=a1'
        }, {
          id: 2,
          value: '2.城市地铁隧道（公路隧道）跨越断层地震风险评估',
          link: '/business?id=a2'
        }, {
          id: 3,
          value: '3.城市供水管网运行安全评估与病害诊断技术服务',
          link: '/business?id=a3'
        }, {
          id: 4,
          value: '4.区域地质灾害风险评价与风险管控技术服务',
          link: '/business?id=a4'
        }, {
          id: 5,
          value: '5.地质灾害治理工程技术服务',
          link: '/business?id=a5'
        }, {
          id: 6,
          value: '6.安全生产智能执法系统及应急管理信息系统研发',
          link: '/business?id=a6'
        }],
        articleList: [
          {
            id: 'a1',
            title: '1.城市沿江涉水桥墩船撞风险评估',
            content: '采用全概率风险分析理论，将涉水桥墩撞击风险分为：桥梁撞击危险性和桥梁撞击倒塌概率两大部分。主要研究包括涉水桥墩所处区域的偏航船只或大质量物撞击桥墩危险性分析、涉水桥墩所处区域的偏航船只或大质量物撞击力分析、涉水桥墩抗撞击能力分析、涉水桥墩撞击风险分析、涉水桥墩撞击风险控制对策及建议。其中，桥梁撞击危险性分析中考虑了：船舶的航迹分布、船舶的偏航角度和船舶的停船距离的随机因素；在桥梁撞击倒塌概率分析中，统合考虑了船舶撞击力和桥墩抗撞击力。'
          }, {
            id: 'a2',
            title: '2.城市地铁隧道（公路隧道）跨越断层地震风险评估',
            content: '城市地铁隧道（公路隧道）是生命线工程的重要组成部分，但由于交通功能的需求，不可避免地穿越地震活动断层的情况越来越多，其（抵）抗断（层错位）风险问题的研究对城市防灾减灾工作意义重大。基于PEER-PBEE方法，针对不同的地震断层类别和城市地铁隧道结构（公路隧道），从断层错位危险性分析、地铁隧道结构响应分析、地铁隧道（公路隧道）结构易损性模型、以及损失分析四个方面，展开地铁隧道（公路隧道）在地震断层错位作用下的地震风险量化研究，为跨越活动断层地铁隧道（公路隧道）的抗震设计与地震风险管理提供理论基础与科学依据。'
          }, {
            id: 'a3',
            title: '3.城市供水管网运行安全评估与病害诊断技术服务',
            content: '从供水管网系统全寿命、全周期的角度出发，通过收集供水管网系统的基础属性数据、日常维修记录数据和日常监测数据等，结合管线结构的破坏机理，采用统计方法对其致险因素、致灾规律和影响范围等进行研究；采用大数据分析中的深度学习方法，结合供水管网系统的基础属性数据和日常维修记录数据，建立某区域供水管网系统漏水、爆管等事故发生时间、发生地点、事故特征、事故原因和事故机理等特征因素与这些基础数据之间的内在关系，通过训练和校准，预测供水管网系统具体的病害位置和病害程度；采用随机建模方法，研究管线结构的老化、腐蚀和力学破坏等主要特征，通过建立结构性能演变方程，建立不同类型管线结构的风险分级标准，进而应用工程风险分析方法，建立供水管网系统的病害诊断模型；基于深度学习预测结果和病害诊断模型，生成供水管网系统在不同时间尺度内（年、月、日、时）的动态运行风险图，进而结合水务部门的地理信息平台建设，开发日常运维风险预报模块，推动供水管网系统的运维管理模式从被动向主动发展，为供水管网系统维护、检修方案的选择，检修时间间隔的设置以及更新、改造方案的优化提供技术支持。'
          }
          , {
            id: 'a4',
            title: '4.区域地质灾害风险评价与风险管控技术服务',
            content: '本研究方向从我国重庆地区特殊地质条件出发，紧密结合国家加强地质灾害防治的具体要求，深入研究各类地质灾害（滑坡、崩塌、泥石流、地面沉降、地面塌陷、地震液化）形成的地质条件、发育规律、成因机理及防治处理措施。充分利用3S技术手段（区域GIS数据、高分辨率遥感影像RS、滑坡GPS监测视频数据），基于大量实测数据，运用人工智能等一系列算法，提出适用于空间区域地质灾害的整体风险量化方法和风险管控措施，为地质灾害管理部门区域灾害防治决策提供科学依据和技术支持。'
          }, {
            id: 'a5',
            title: '5.地质灾害治理工程技术服务',
            content: '通过大量地质灾害发生特征的调查、研究和模拟试验，建立各类地质灾害（如滑坡）临灾前兆的判识模式，建立、校准和耦合区域地质灾害失稳概率模型。在此基础上，采用大数据分析技术及人工智能等一系列算法，研究、开发地质灾害防治监测、预警及灾害应急治理工程的新技术、新方法、新软件和新工艺，保障地灾防治工程的可靠性、安全性和合理性。建立可推广使用的地质灾害监测、预警系统和治理技术方法体系，从而为区域地质灾害防治提供强有力的技术手段支撑。'
          }, {
            id: 'a6',
            title: '6.安全生产智能执法系统及应急管理信息系统研发',
            content: ''
          }

        ]
      }
    },
    mounted() {
      // document.addEventListener('scroll', function () {
      //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //   //获取header的高度
      //   var headerHeight = this.$store.state.headerHeight;
      //   if (scrollTop > headerHeight + 25) {
      //     this.$refs.sideNav.style.position = 'fixed';
      //     this.$refs.sideNav.style.top = 50 + 'px';
      //   } else {
      //     this.$refs.sideNav.style.position = 'static';
      //   }
      //
      // }.bind(this));
    }
  }
</script>

<style scoped>
  .business {
    width: 1200px;
    margin: 30px auto;

  }

  .side-nav {
    float: left;
  }

  .side-nav-title {
    width: 255px;
    height: 92px;
    background-color: #091947;
    background-image: url("../assets/imgs/triangle.png");
    text-align: center;
    color: #FFF;
    font-size: 40px;
    line-height: 92px;
  }

  .item {
    box-sizing: border-box;
    padding: 10px;
    width: 255px;
    height: 60px;
    line-height: 20px;
    background-color: #5872bc;
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    letter-spacing: 2px;
  }

  .item a {
    color: #FFF;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .article {
    float: right;
    width: 916px;
    margin-bottom: 20px;
  }

  .article p {
    margin-top: 10px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
    text-indent: 2em;
  }

  /* .mao {
     position: relative;
     top: -50px;
     display: block;
     height: 0;
     overflow: hidden;
   }*/
  .nav-active {
    background-color: #1a347e;
  }
</style>
