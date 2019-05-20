<template>
  <div class="news">
    <content-title>
      <span slot="title">中心新闻</span>
      <span slot="right">更多>></span>
    </content-title>

    <div class="news-list">
      <div class="news-item"
           v-for="item in newsList"
           :key="item.title">
        <img class="news-pic" :src="item.pic" alt="">
        <div class="news-text">
        <span class="title">
          <router-link target="_blank" :to="toNewsDetail(item.id)"><span class="link">
            {{item.title}}
          </span>
          </router-link>
        </span>
          <p>{{item.content}}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ContentTitle from '@/components/common/ContentTitle';

  export default {
    name: "News",
    components: {
      ContentTitle
    },
    data() {
      return {
        newsList: [
          {
            id: 'n1',
            pic: require('@/assets/imgs/news_pic_1.jpg'),
            title: '《沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估》项目顺利结题',
            content: '2019年2月22日，《沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估》项目结题答辩在项目委托方沙坪坝区市政工程处顺利进行。本次项目由重庆路威土木工程设计有限公司投标中标，由灾害风险与应急管理负责相关分析和技术报告的撰写工作。本次结题汇报由中心成员于晓辉副研究员（哈尔滨工业大学）完成，中心其它成员：王丽萍副教授（重庆科技学院）、宁超列博士（同济大学）、杜文琪博士（南洋理工大学）、程印博士（西南交通大学）、罗文文博士（重庆科技大学）和刘烁宇博士（西南大学）也参加了项目结题答辩......'
          }, {
            id: 'n3',
            pic: require('@/assets/imgs/news_pic_2.jpg'),
            title: '参加《建筑结构学报》创刊四十周年暨第五届建筑结构基础理论与创新实践',
            content: '2019年2月22日，《沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估》项目结题答辩在项目委托方沙坪坝区市政工程处顺利进行。本次项目由重庆路威土木工程设计有限公司投标中标，由灾害风险与应急管理负责相关分析和技术报告的撰写工作。本次结题汇报由中心成员于晓辉副研究员（哈尔滨工业大学）完成，中心其它成员：王丽萍副教授（重庆科技学院）、宁超列博士（同济大学）、杜文琪博士（南洋理工大学）、程印博士（西南交通大学）、罗文文博士（重庆科技大学）和刘烁宇博士（西南大学）也参加了项目结题答辩......'
          }, {
            id: 'n2',
            pic: require('@/assets/imgs/news_pic_3.jpg'),
            title: '新加坡南洋理工大学潘则建院士莅临重庆科技学院访谈交流',
            content: '2018年12月17日，新加坡南洋理工大学巨灾风险管理研究院院长、新加坡工程院院士、东盟工程院院士、中国国务院国侨办海外专家资源委员潘则建教授应我校邀请，莅临我校进行访谈交流。上午9点，在厚德楼G310会议室举行了交流座谈会，我校党委书记刘东燕、重庆市地勘局总工程师刘东升教授以及来自同济大学、哈尔滨工业大学、西南交通大学、新加坡南洋理工大学的专家学者，我校部分二级学院负责人等参加了会议。。座谈会上，刘东燕书记就我校的办学历史、办学宗旨作了介绍，潘则建院士则介绍了南洋理...'
          }, {
            id: 'n4',
            pic: require('@/assets/imgs/news_pic_5.jpg'),
            title: '2018年12月15日，灾害风险与应急管理研究中心正式挂牌成立',
            content: ' 2018年12月15日，刘东燕书记向与同济大学宁超列博士、哈尔滨工业大学于晓辉副研究员、西南交通大学程印博士颁发了灾害风险与应急管理研究中心特聘研究员证书...'
          }
        ]
      }
    },
    methods: {
      handleItemClick(id) {
        this.$router.push({path: 'newsdetail', query: {newsId: id}})
      },

      toNewsDetail(id) {
        return "/newsdetail?newsId="+id
      }
    }
  }
</script>

<style scoped>
  .news {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
  }

  .news-list {
    margin-bottom: 20px;
  }

  .news-pic {
    width: 247px;
    height: 185px;
  }

  .news-text {
    width: 937px;
    float: right;
  }

  .news-item {
    margin-top: 20px;
  }

  .news-item p {
    display: inline-block;
    width: 937px;
    margin-top: 10px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
    text-indent: 2em;
  }

  .title:hover {
    border-bottom: solid 1px #000000;
  }
  a {
    text-decoration:none ;
  }
  .router-link-active {
    text-decoration: none;
  }
  .link {
    color: black;
  }
</style>
