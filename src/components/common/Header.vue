<template>
  <div class="header">
    <div class="head">
      <div class="head-nav" v-if="showHeadNav">
        <ul class="head-tabs">
          <li v-for="item in tabs"
              :key="item.id"
              :ref="item.id"
              @click="handleTabClick(item.id)">
            <router-link tag="div" :to="item.link">
              {{item.tab}}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="search">
        <input v-model="searchValue"
               class="search-inp"
               placeholder="搜索"
               type="text"
               @focus="handleSearchFocus"
               @blur="handleSearchBlur">
        <div class="search-ico-wrapper" @click="handleSearch">
          <span class="iconfont ico-search">&#xe605;</span>
        </div>
        <div class="search-result-list">
          <ul>
            <li v-for="item in searchResultList"
                :key="item.key"
                @click="handleSearchResultClick(item.value)">{{item.key}}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <img @load="handleHeaderPicLoad" class="banner-img" src="../../assets/imgs/banner_1.png" alt="">

    <div class="nav" v-show="$store.state.headerHeight!==0">
      <img class="logo" src="../../assets/imgs/logo.png" alt="">
      <span>灾害风险与应急管理研究中心</span>
      <ul class="tabs" ref="tabsUl">
        <li v-for="item in tabs"
            :key="item.id"
            :ref="item.id"
            @click="handleTabClick(item.id)">
          <router-link tag="div" :to="item.link">
            {{item.tab}}
          </router-link>
        </li>
      </ul>
      <div class="tab-active" ref="tabActive"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        searchValue: '',
        searchResultList: [],
        searchData: [
          {key: '中心介绍', value: 'introduction'},
          {key: '中心业务', value: 'business?id=a1'},
          {key: '中心新闻', value: 'news'},
          {key: '中心项目', value: 'project?id=p1'},
          {key: '中心组织', value: 'organize'},
          {key: '联系我们', value: 'contactus'},
          {key: '《沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估》项目顺利结题', value: 'newsdetail?newsId=n1'},
          {key: '参加《建筑结构学报》创刊四十周年暨第五届建筑结构基础理论与创新实践', value: 'newsdetail?newsId=n3'},
          {key: '新加坡南洋理工大学潘则建院士莅临重庆科技学院访谈交流', value: 'newsdetail?newsId=n2'},
          {key: '2018年12月15日，灾害风险与应急管理研究中心正式挂牌成立', value: 'newsdetail?newsId=n4'},
          {key: '城市沿江涉水桥墩船撞风险评估', value: 'business?id=a1'},
          {key: '城市地铁隧道（公路隧道）跨越断层地震风险评估', value: 'business?id=a2'},
          {key: '城市供水管网运行安全评估与病害诊断技术服务', value: 'business?id=a3'},
          {key: '区域地质灾害风险评价与风险管控技术服务', value: 'business?id=a4'},
          {key: '地质灾害治理工程技术服务', value: 'business?id=a5'},
          {key: '安全生产智能执法系统及应急管理信息系统研发', value: 'business?id=a6'},
          {key: '沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估', value: 'project?id=p1'},
          {key: '乌鲁木齐轨道交通2号线一期工程马平区间断层错动风险评估', value: 'project?id=p2'},
          {key: '乌鲁木齐轨道交通2号线一期工程B03标断层错动风险评估', value: 'project?id=p3'},
          {key: '乌鲁木齐轨道交通4号线一期工程03标断层错动风险评估', value: 'project?id=p4'},
          {key: '基于大数据的市政供水管网病害智能动态诊断预报技术与应用示范', value: 'project?id=p5'},
          {key: '刘东燕', value: 'persondetail?personid=p1'},
          {key: '王丽萍', value: 'persondetail?personid=p2'},
          {key: '于晓辉', value: 'persondetail?personid=p3'},
          {key: '宁超列', value: 'persondetail?personid=p4'},
          {key: '程印', value: 'persondetail?personid=p5'},
          {key: '程印', value: 'persondetail?personid=p5'},
          {key: '罗文文', value: 'persondetail?personid=p6'},
          {key: '刘烁宇', value: 'persondetail?personid=p7'},
          {key: '地址', value: 'contactus'},
          {key: '联系方式', value: 'contactus'},

        ],
        tabs: [
          {id: 'tab1', tab: '中心介绍', link: '/introduction'},
          {id: 'tab2', tab: '中心业务', link: '/business?id=a1'},
          {id: 'tab3', tab: '中心新闻', link: '/news'},
          {id: 'tab4', tab: '中心项目', link: '/project?id=p1'},
          {id: 'tab5', tab: '中心组织', link: '/organize'},
          {id: 'tab6', tab: '联系我们', link: '/contactus'},
        ],
        showHeadNav: false
      }
    },
    updated() {
      this.initialTab();
    },
    mounted() {
      //窗口大小变化
      window.onresize = function () {
        this.$store.dispatch('setHeaderHeight', this.getHeight())
      }.bind(this);
      this.initialTab();
      document.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 大于166显示headNav
        this.showHeadNav = scrollTop > 166;


      }.bind(this));


    },
    methods: {
      handleHeaderPicLoad() {
        //图片加载完成存储图片高度
        this.$store.dispatch('setHeaderHeight', this.getHeight())
      },
      getHeight() {
        return document.querySelector('.banner-img').getBoundingClientRect().height
      },
      handleTabClick(tabId) {
        this.moveTab(tabId)
      },
      moveTab(Id) {
        //ul的offsetLeft-被点击的li的offsetLeft=active元素left
        this.$refs.tabActive.style.left = this.$refs.tabsUl.offsetLeft + this.$refs[Id][0].offsetLeft - 15 + 'px'
      },
      initialTab() {
        //初始化tab位置
        let path = this.$route.path;
        switch (path) {
          case '/organize':
            this.moveTab('tab5');
            break;
          case '/introduction':
            this.moveTab('tab1');
            break;
          case '/news':
            this.moveTab('tab3');
            break;
          case '/business':
            this.moveTab('tab2');
            break;
          case '/project':
            this.moveTab('tab4');
            break;
          case '/contactus':
            this.moveTab('tab6');
            break
        }
      },
      handleSearch() {

      },
      handleSearchFocus() {

      },

      handleSearchBlur() {
        // this.searchValue = '';
        // this.searchResultList = []
      },
      handleSearchResultClick(value) {
       this.$router.push(value)

      }
    },
    watch: {
      searchValue() {
        this.searchResultList = [];
        if (this.searchValue) {
          this.searchData.filter(function (item) {
            if (item.key.toLowerCase().indexOf(this.searchValue) !== -1) {
              this.searchResultList.push(item)
            }
          }.bind(this));
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
  }

  .banner-img {
    /*width: 1920px;*/
    min-width: 1200px;
    width: 100%;
    margin-top: 40px;

  }

  .nav {
    width: 1200px;
    height: 90px;
    background-color: rgba(0, 12, 32, .7);
    position: absolute;
    top: 66px;
    left: 50%;
    transform: translateX(-50%);
  }

  .head {
    height: 40px;
    width: 100%;
    background-color: #000c20;
    position: fixed;
    z-index: 999;
  }

  .search {
    width: 225px;
    height: 28px;
    float: right;
    margin-right: 45px;
    margin-top: 6px;
    position: relative;
  }

  .search-ico-wrapper {
    width: 40px;
    height: 28px;
    float: right;
    background-color: #1a347e;
  }

  .ico-search {
    color: #ffffff;
    width: 40px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    display: block;
  }

  .search-inp {
    height: 28px;
    position: absolute;
    left: 0;
    width: 175px;
    background-color: #999b9f;
    font-size: 14px;
    padding-left: 10px;
    color: #FFF;
  }

  .search-inp::placeholder {
    color: #FFF;
  }

  .logo {
    margin-left: 15px;
    margin-top: 5px;
  }

  .nav span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 115px;
    color: #FFF;
    font-size: 30px;
    letter-spacing: 3px;
    width: 300px;
  }

  .tabs {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 40px;
  }

  .tabs li {
    float: left;
    color: #FFF;
    font-size: 20px;
    line-height: 90px;
    width: 110px;
  }

  .tab-active {
    position: absolute;
    top: 0;
    left: 595px;
    height: 90px;
    width: 110px;
    background-color: #273c76;
    z-index: -1;
    transition: left .5s ease;
  }

  .head-tabs {
    width: 1200px;
    margin: 0 auto;
  }

  .head-tabs li {
    float: left;
    color: #FFF;
    font-size: 16px;
    line-height: 40px;
    width: 80px;

  }

  .search-result-list {
    width: 225px;
    background-color: #bcceee;
    position: absolute;
    top: 28px;
  }

  .search-result-list li {
    border-bottom: 1px solid #fff;
    font-size: 16px;
    line-height: 20px;
    padding-left: 10px;
  }
</style>
