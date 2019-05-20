 <template>
  <div class="organize clearfix">
    <div class="side-nav" ref="sideNav" v-show="$store.state.headerHeight!==0">
      <div class="side-nav-title">
        中心组织
      </div>
      <div class="item" @click="showPic" :class="{'item':true,'nav-active':isShowPic}" >组织结构</div>
      <div class="item"  @click="goAnchor('#anchor-'+item.link)"  v-for="item in navItemList" :key="item.key"> {{item.value}}</div>
    </div>

    <div class="content ">
      <content-title>
        <span slot="title">中心组织</span>
      </content-title>
      <img class="img" src='../assets/imgs/aaa.jpg' alt="" v-if="isShowPic">

      <div class="person-list" v-show="!isShowPic">

        <div class="person-list-item" :id="setId(item.id) " v-for="item in personInfoList" :key="item.name">
          <img :src="item.avatar" alt="">
          <div class="item-text">
            <span class="item-text-title">
              <router-link target="_blank" :to="toOrganizeDetail(item.id)"><span class="link">
            {{item.name}}&nbsp;&nbsp;{{item.position}}
          </span>
          </router-link>

             </span>
            <div class="item-text-content">
              <p v-for="insItem in item.introduction" :key='insItem'>{{insItem}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import ContentTitle from "@/components/common/ContentTitle"

  export default {
    name: "Organize",
    components: {
      ContentTitle
    },
    data() {
      return {
        isShowPic: true,
        navItemList: [{
          id: 1,
          value: '中心特聘顾问',
          link: 'p1'
        }, {
          id: 2,
          value: '中心主任',
          link: 'p2'
        }, {
          id: 3,
          value: '中心特聘研究员',
          link: 'p3'
        }],
        personInfoList: [
          {
            id: 'p1',
            avatar: require('../assets/imgs/person_1.png'),
            name: '刘东燕',
            position: '中心特聘顾问',
            introduction: [
              '工学博士，教授，博导，国家注册岩土工程师',
              '中国岩石力学与工程学会教学工作委员会副主任委员，中国高教 学会高教管理研究会理事，中国建设教育协会常务理事、普通高等 教育专委会副主任委员，重庆市岩石力学与工程学会常务理事，中文核心期刊《高等建筑教育》主编。主要从事城市地质灾害风险研究。'
            ]
          }, {
            id: 'p2',
            avatar: require('../assets/imgs/person_2.png'),
            name: '王丽萍',
            position: '中心主任',
            introduction: [
              '防灾减灾及防护工程博士，重庆科技学院建筑工程学院副教授，硕士生导师',
              '  主要从事城市灾害风险评估与应急管理策略研究。'
            ]
          }, {
            id: 'p3',
            avatar: require('../assets/imgs/person_3.png'),
            name: '于晓辉',
            position: '中心特聘研究员',
            introduction: [
              '区域地震风险评估及应急管理研究室主任',
              '工学博士，哈尔滨工业大学副研究员，硕士生导师',
              '主要从事工程结构地震易损性与风险分析、混凝土结构全寿命可靠性以及混凝土结构连续倒塌鲁棒性等方面的研究工作。'
            ]
          }, {
            id: 'p4',
            avatar: require('../assets/imgs/person_4.png'),
            name: '宁超列',
            position: '中心特聘研究员',
            introduction: [
              '城市防灾减灾规划及对策研究室主任',
              ' 工学博士，新加坡南洋理工大学博士后，同济大学助理研究员，硕士生导师，上海市浦江人才计划（A类）入选者，防灾减灾工程及防护工程方向硕士生导师',
              '主要从事工程结构和城市区域的风险评估与综合防灾研究。'
            ]
          }, {
            id: 'p5',
            avatar: require('../assets/imgs/person_5.png'),
            name: '程印',
            position: '中心特聘研究员',
            introduction: [
              '生命线运营风险及应急管理研究室主任',
              ' 意大利罗马大学工学博士，西南交通大学土木工程学院讲师，硕士生导师，四川省海外高层次留学人才，中国地震学会基础设施防震减灾青年委员会委员',
              ' 长期从事结构基于性能的地震工程、概率地震危险性与风险分析等研究。'
            ]
          }, {
            id: 'p6',
            avatar: require('../assets/imgs/person_6.png'),
            name: '罗文文',
            position: '中心特聘研究员',
            introduction: [
              '城市自然灾害风险分析及应急管理中心主任',
              '工学博士，土木工程专业，重庆科技学院建筑工程学院讲师，日本东京工业大学Materials and Structures Laboratory准客座研究员',
              '主要从事工程结构和城市区域的风险评估与综合防灾研究。'
            ]
          }, {
            id: 'p7',
            avatar: require('../assets/imgs/person_7.png'),
            name: '刘烁宇',
            position: '中心特聘研究员',
            introduction: [
              '复杂工程风险评估与管理研究室主任',
              '西南大学讲师，博士毕业于重庆大学土木工程学院结构工程专业',
              '主要从事工程结构和城市区域的风险评估与综合防灾研究。'
            ]
          },
        ]
      }
    },

    mounted() {
      document.addEventListener('scroll',this.handleScroll);
    },
    destroyed() {
      document.removeEventListener('scroll',this.handleScroll);
    },
    methods:{
      setId(id) {
        return 'anchor-'+id
      },
      goAnchor(id) {
        this.isShowPic = false;
        var anchor = document.querySelector(id);
        document.documentElement.scrollTop = anchor.offsetTop
      },
      showPic() {
        this.isShowPic=true
      },
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
      ,
      handleTitleClick(id) {
        this.$router.push({path:'persondetail',query:{personid:id}})
      },
      toOrganizeDetail(id) {
        return "/persondetail?personid="+id
      }

    }
  };
</script>

<style scoped>
  .organize {
    /*height: 1700px;*/

    position: relative;
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

  .item a {
    color: #FFF;
  }

  .content {
    float: right;
    width: 916px;

  }

  .person-list-item {
    position: relative;
    margin-top: 20px;
    height: 220px;
  }

  .item-text-title {
    font-size: 24px;
    font-weight: bold;
  }


  .item-text {
    position: absolute;
    width: 705px;
    height: 220px;
    right: 0;
    top: 0;
    box-shadow: 0 3px 3px #cacaca;
    padding: 20px;
    box-sizing: border-box;
  }

  .item-text-content p {
    margin-top: 10px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
    text-indent: 2em;
  }

  .mao {
    position: relative;
    top: -50px;
    display: block;
    height: 0;
    overflow: hidden;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .item-text-title:hover {
    border-bottom: 2px solid #000;
  }
  .link {
    color: black;
  }
  .img {
    transform: translateX(-50%);
    margin-left: 50%;
  }
  .nav-active {
    background-color: #1a347e;
  }
</style>
