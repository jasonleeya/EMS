<template>
  <div class="news-detail">
    <div class="header">
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

    <div class="content">

      <div class="news"
           v-for="item in newsList"
           :key="item.id"
           v-if="$route.query.newsId===item.id">
        <span class="title">
       {{item.title}}
     </span>
        <div class="line"></div>
        <div class="line"></div>
        <div class="time">
          发布时间{{item.time}}
        </div>
        <template class="new-content" v-for="news in item.content">
          <p class="text" v-if="news.type==='text'">
            {{news.type==='text'?news.content:''}}
          </p>
          <img  v-if="news.type==='img'" :src="news.type==='img'?news.content:''" alt="">
        </template>
      </div>

    </div>


  </div>
</template>

<script>
  import MyHeader from '@/components/common/Header'
  export default {
    name: "NewsDetail",
    components: {
      MyHeader
    },
    data() {
      return {
        tabs: [
          {id: 'tab1', tab: '中心介绍', link: '/introduction'},
          {id: 'tab2', tab: '中心业务', link: '/business?id=a1'},
          {id: 'tab3', tab: '中心新闻', link: '/news'},
          {id: 'tab4', tab: '中心项目', link: '/project?id=p1'},
          {id: 'tab5', tab: '中心组织', link: '/organize'},
          {id: 'tab6', tab: '联系我们', link: '/contactus'},
        ],
        newsList: [
          {
            id: 'n1',
            title: '2018年12月15日，灾害风险与应急管理研究中心正式挂牌成立。',
            time: '2018年12月15日',
            content: [
              {
                type: 'img',
                content: require('@/assets/imgs/gua_pai.jpg'),
              },
              {
                type: 'text',
                content: '刘东燕书记向与同济大学宁超列博士、哈尔滨工业大学于晓辉副研究员、西南交通大学程印博士颁发了灾害风险与应急管理研究中心特聘研究员证书。'
              },
              {
                type: 'img',
                content: require('@/assets/imgs/news_pic_5.jpg')
              }
            ]
          }, {
            id: 'n2',
            title: '新加坡南洋理工大学潘则建院士莅临重庆科技学院访谈交流',
            time: '2018年12月17日',
            content: [
              {
                type: 'text',
                content: '2018年12月17日，新加坡南洋理工大学巨灾风险管理研究院院长、新加坡工程院院士、东盟工程院院士、中国国务院国侨办海外专家资源委员潘则建教授应我校邀请，莅临我校进行访谈交流。上午9点，在厚德楼G310会议室举行了交流座谈会，我校党委书记刘东燕、重庆市地勘局总工程师刘东升教授以及来自同济大学、哈尔滨工业大学、西南交通大学、新加坡南洋理工大学的专家学者，我校部分二级学院负责人等参加了会议。。座谈会上，刘东燕书记就我校的办学历史、办学宗旨作了介绍，潘则建院士则介绍了南洋理工大学概况以及自身对自然灾害风险评估的见解，建筑工程学院灾害风险与应急管理研究中心主任王丽萍对研究中心的建设作了汇报。'
              },
              {
                type: 'img',
                content: require('@/assets/imgs/news_pic_3.jpg')
              }
            ]
          }, {
            id: 'n3',
            title: '参加《建筑结构学报》创刊四十周年暨第五届建筑结构基础理论与创新实践论坛',
            time: '2018年12月18日',
            content: [
              {
                type: 'text',
                content: '2018年12月18日，灾害风险与应急管理中心主任王丽萍副教授携中心特聘研究员于晓辉博士、宁超列博士、罗文文博士、刘烁宇博士及研究生9人于重庆参加《建筑结构学报》创刊四十周年暨第五届建筑结构基础理论与创新实践论坛。《建筑结构学报》创刊四十周年暨第五届建筑结构基础理论与创新实践论坛由建筑结构学报主办，重庆大学承办。本次学术论坛汇集清华大学、同济大学、中国建筑设计院等国内众多高校及研究机构科研工作者在建筑结构领域的最新成果研究，为我国建筑结构发展提出新的设计理念及思考。'
              },
              {
                type: 'img',
                content: require('@/assets/imgs/news_pic_2.jpg')
              }
            ]
          }, {
            id: 'n4',
            title: '《沙坪坝区城市桥梁涉水桥墩（柱）防撞风险专项评估》项目顺利结题',
            time: '2019年2月22日',
            content: [
              {
                type: 'text',
                content: '2018年12月18日，灾害风险与应急管理中心主任王丽萍副教授携中心特聘研究员于晓辉博士、宁超列博士、罗文文博士、刘烁宇博士及研究生9人于重庆参加《建筑结构学报》创刊四十周年暨第五届建筑结构基础理论与创新实践论坛。《建筑结构学报》创刊四十周年暨第五届建筑结构基础理论与创新实践论坛由建筑结构学报主办，重庆大学承办。本次学术论坛汇集清华大学、同济大学、中国建筑设计院等国内众多高校及研究机构科研工作者在建筑结构领域的最新成果研究，为我国建筑结构发展提出新的设计理念及思考。'
              },
              {
                type: 'img',
                content: require('@/assets/imgs/news_pic_1.jpg')
              }, {
                type: 'img',
                content: require('@/assets/imgs/news_pic_4.jpg')
              }
            ]
          },

        ]
      }
    },
  }
</script>

<style scoped>
  .content {
    width: 1200px;
    margin: 0 auto;
  }

  .header {
    width: 100%;
    height: 40px;
    background-color: #000c20;
  }

  .title {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin: 15px;
    font-size: 28px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #8b9dd0;
    margin-top: 2px;
  }

  .time {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin: 10px 0 20px;
  }

  .text {
    font-size: 20px;
    text-indent: 2em;
    display: inline-block;
    width: 1200px;
  }

  img {
    width: 739px;
    transform: translateX(-50%);
    margin-left: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .news p {
    margin-top: 10px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
    text-indent: 2em;
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
</style>
