<template>
  <div class="project clearfix">
    <div class="side-nav" ref="sideNav" v-if="$store.state.headerHeight!==0">
      <div class="side-nav-title">
        中心业务
      </div>
      <!--根据路由绑定active class-->
      <div :class="{'item':true,'nav-active':$route.fullPath===item.link}"
           v-for="item in navItemList"
           :key="item.key">
        <router-link :to="item.link">{{item.value}}</router-link>

      </div>
    </div>

    <div v-if="$route.query.id===item.id"
         class="content"
         v-for="item in projectList"
         :key="item.id">
      <content-title>
        <span slot="title">{{item.title}}</span>
      </content-title>

      <span class="content-title">项目时间：</span><span class="project-time">{{item.time}}</span>
      <br>
      <span class="content-title">项目内容：</span>
      <p class="project-content">
        {{item.text}}
      </p>
      <img :src="pic" alt="" v-for="pic in item.pics" :key="pic">

    </div>
  </div>
</template>

<script>
  import ContentTitle from '@/components/common/ContentTitle'

  export default {
    name: "Project",
    components: {
      ContentTitle
    },
    data() {
      return {
        navItemList: [{
          id: 1,
          value: '1.沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估',
          link: '/project?id=p1'
        }, {
          id: 2,
          value: '2.乌鲁木齐轨道交通2号线一期工程马平区间断层错动风险评估',
          link: '/project?id=p2'
        }, {
          id: 3,
          value: '3.乌鲁木齐轨道交通2号线一期工程B03标断层错动风险评估',
          link: '/project?id=p3'
        }, {
          id: 4,
          value: '4.乌鲁木齐轨道交通4号线一期工程03标断层错动风险评估',
          link: '/project?id=p4'
        }, {
          id: 5,
          value: '5.基于大数据的市政供水管网病害智能动态诊断预报技术与应用示范',
          link: '/project?id=p5'
        }],
        projectList: [
          {
            id: 'p1',
            title: '1.沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估',
            time: '2018年12月-2019年1月',
            text: '采用全概率风险分析理论，将沙坪坝区涉水桥墩撞击风险分为：桥梁撞击危险性和桥梁撞击倒塌概率两大部分。其中，桥梁撞击危险性分析中考虑了：船舶的航迹分布、船舶的偏航角度和船舶的停船距离的随机因素；在桥梁撞击倒塌概率分析中，统合考虑了船舶撞击力和桥墩抗撞击力。根据这一评估思路，按照以下几个部分开展了相关调查和研究工作，包括：沙坪坝区沙滨路涉水桥墩所处区域的自然及航道基础资料的搜集和整理、沙坪坝区沙滨路涉水桥墩所处区域的偏航船只或大质量物撞击桥墩危险性分析、沙坪坝区沙滨路涉水桥墩所处区域的偏航船只或大质量物撞击力分析、沙坪坝区沙滨路涉水桥墩抗撞击能力分析、沙坪坝区沙滨路涉水桥墩撞击风险分析、沙坪坝区沙滨路涉水桥墩撞击风险控制对策及建议。',
            pics: [
              require('@/assets/imgs/p1_1.jpg'),
              require('@/assets/imgs/p1_2.jpg'),
              require('@/assets/imgs/p1_3.jpg'),
              require('@/assets/imgs/p1_4.jpg'),
            ]
          }, {
            id: 'p2',
            title: '3.乌鲁木齐轨道交通2号线一期工程马平区间断层错动风险评估',
            time: '2017年9-2017年11月',
            text: '乌鲁木齐地铁2号线在马料地站和平川路站之间大角度通过西山断层北支。该断层形成于中更新世中晚期，最新活动时间为晚更新世晚期，属晚更新世活动断层，具逆冲性质。该活断层严重影响2号线施工及运营阶段的安全。根据国内外对乌市活动断层现有的研究成果和工程场地地震安全性评价结果，并在进一步理清穿越西山断层的轨道交通2号线一期工程马平区间地质构造特征、几何运动规律的基础上，给出针对该断层基岩最大位错量的危险性分析，即最大位错量与设防概率水准的对应关系。',
            pics: [
              require('@/assets/imgs/p2_1.png'),
            ]
          }, {
            id: 'p3',
            title: '3.乌鲁木齐轨道交通2号线一期工程B03标断层错动风险评估',
            time: '2017年12月-2018年2月',
            text: '乌鲁木齐地铁2号线一期工程B03标段在乌-华区间穿越九家湾断层第三条，该断层为全新世断层，严重影响2号线使用及运营阶段的安全。根据国内外对乌市活动断层现有的研究成果和工程场地地震安全性评价结果，并在进一步理清穿越九家湾断层的轨道交通2号线一期工程B03标段乌-华区间地质构造特征、几何运动规律的基础上，给出针对该断层基岩最大位错量的危险性分析，即最大位错量与设防概率水准的对应关系。',
            pics: [
              require('@/assets/imgs/p2_2.png'),
            ]
          }, {
            id: 'p4',
            title: '4.乌鲁木齐轨道交通4号线一期工程03标断层错动风险评估',
            time: '2017年12月-2018年2月',
            text: '乌鲁木齐地铁4号线03标段在贺兰山街-维泰南路区间与九家湾断层第三条（第一次）交汇，该断层属全新世断层，严重影响4号线使用及运营阶段的安全。根据国内外对乌市活动断层现有的研究成果和工程场地地震安全性评价结果，并在进一步理清穿越九家湾断层的贺兰山街-维泰南路区间地质构造特征、几何运动规律的基础上，给出针对该断层基岩最大位错量的危险性分析，即最大位错量与设防概率水准的对应关系。',
            pics: []
          }, {
            id: 'p5',
            title: '5.基于大数据的市政供水管网病害智能动态诊断预报技术与应用示范',
            time: '2019年1月-2020年12月',
            text: '项目以重庆市北碚区供水管网系统为主要研究对象，从供水管网系统全寿命、全周期的角度出发，通过收集重庆市北碚区供水管网系统的基础属性数据、日常维修记录数据和日常监测数据等，结合管线结构的破坏机理，采用统计方法对其致险因素、致灾规律和影响范围等进行研究；采用大数据分析中的深度学习方法，结合供水管网系统的基础属性数据和日常维修记录数据，建立重庆市北碚区供水管网系统漏水、爆管等事故发生时间、发生地点、事故特征、事故原因和事故机理等特征因素与这些基础数据之间的内在关系，通过训练和校准，预测重庆市北碚区供水管网系统具体的病害位置和病害程度；采用随机建模方法，研究管线结构的老化、腐蚀和力学破坏等主要特征，通过建立结构性能演变方程，建立不同类型管线结构的风险分级标准，进而应用工程风险分析方法，建立供水管网系统的病害诊断模型；基于深度学习预测结果和病害诊断模型，生成重庆市北碚区供水管网系统在不同时间尺度内（年、月、日、时）的动态运行风险图，进而结合水务部门的地理信息平台建设，开发日常运维风险预报模块，推动重庆市供水管网系统的运维管理模式从被动向主动发展，为重庆市供水管网系统维护、检修方案的选择，检修时间间隔的设置以及更新、改造方案的优化提供技术支持。',
            pics: [
              require('@/assets/imgs/p3_1.jpg'),
              require('@/assets/imgs/p3_2.png'),
              require('@/assets/imgs/p3_3.png'),
            ]
          },
        ]
      }
    },
    methods: {

      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //获取header的高度
        var headerHeight = this.$store.state.headerHeight;
        if (scrollTop > headerHeight + 25) {
          this.$refs.sideNav.style.position = 'fixed';
          this.$refs.sideNav.style.top = 50 + 'px';
        } else {
          this.$refs.sideNav.style.position = 'static';
        }
      }
    },
    mounted() {
      document.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      document.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .project {
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
    font-size: 15px;
    text-align: center;
    color: #ffffff;
  }

  .item a {
    color: #FFF;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .nav-active {
    background-color: #1a347e;
  }

  .content {
    float: right;
    width: 916px;
  }

  .content .project-content {
    margin-top: 10px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
    text-indent: 2em;
  }

  .project-time {
    font-size: 18px;
  }

  .content .content-title {
    font-size: 18px;
    font-weight: bold;
  }

  .content img {
    width: 916px;
    margin-top: 10px;
  }
</style>
