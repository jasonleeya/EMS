<template>
  <div class="person-detail">
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

    <div class="content"
          v-for="item in personInfoDetalailList" :key="item.id"
    v-if="$route.query.personid===item.id">
      <img :src="item.avatar" alt="" class="avatar">
      <div class="info-list">
        <div class="name-position">{{item.name}} {{item.position}}</div>
        <div class="info" v-for="inf in item.info">{{inf}}</div>
      </div>

      <div class="personal-profile">
        <div class="profile-title">个人简介</div>
        <p class="personal-profile-text" v-for="pro in item.profile">{{pro}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonDetail",
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
        personInfoDetalailList: [
          {
            id: 'p1',
            avatar: require('../assets/imgs/person_1.png'),
            name: '刘东燕',
            position: '中心特聘顾问',
            info: ['中心特聘顾问', '工学博士', '教授', '博导', '国家注册岩土工程师'],
            profile: [
              '刘东燕，男，中心特聘顾问，工学博士，教授，博导，国家注册岩土工程师。中国岩石力学与工程学会教学工作委员会副主任委员，中国高教学会高教管理研究会理事，中国建设教育协会常务理事、普通高等教育专委会副主任委员，重庆市岩石力学与工程学会常务理事，中文核心期刊《高等建筑教育》主编。长期从事城市地质灾害风险研究。'
            ]
          }, {
            id: 'p2',
            avatar: require('../assets/imgs/person_2.png'),
            name: '王丽萍',
            position: '中心主任',
            info: ['中心主任', '防灾减灾及防护工程博士', '重庆科技学院建筑工程学院副教授。'],
            profile: [
              '王丽萍，女，防灾减灾及防护工程博士，重庆科技学院建筑工程学院副教授。2013年在新加坡南洋理工大学Institute of Catastrophe Risk Management做访问学者（合作导师李兵），2016前往美国内华达拉斯维加斯大学访学一年',
              '作为项目负责人已申请获得和参与国家自然科学基金项目2项，其中青年基金1项、地区基金项目1项。重庆市自然科学基金1项。长期从事工程结构和城市区域风险评估与综合防灾研究。获得重庆市建设创新一等奖，重庆市科学技术奖二等奖和三等奖各1项，并获得实用新型专利9项和发明专利2项, 发表学术论文20余篇。',
            ]
          },{
            id: 'p3',
            avatar: require('../assets/imgs/person_3.png'),
            name: '于晓辉',
            position: '中心特聘研究员',
            info: ['工学博士','哈尔滨工业大学副研究员','硕士生导师'],
            profile: [
              '于晓辉，男，辽宁省丹东市人，工学博士，哈尔滨工业大学副研究员，硕士生导师。主要从事工程结构地震易损性与风险分析、混凝土结构全寿命可靠性以及混凝土结构连续倒塌鲁棒性等方面的研究工作。主持国家自然科学基金面上基金1项、国家自然科学青年基金1项、中国博士后面上基金1项、黑龙江省博士后面上基金1项、中国地震局工程力学研究所基本科研业务费专项项目1项；作为主要参与人参与国家自然科学基金重大研究计划-集成项目子课题1项（排名第2）、国家自然科学基金面上项目2项（1项排名第2；1项排名第3）',
              '在国内外发表期刊及会议论文70余篇，其中，SCI收录12篇、EI收录40余篇，其中两篇论文分别获2016年度和2017年度中国精品科技期刊顶尖学术论文（F5000论文）。',
              '担任国家自然科学基金评审专家、中国振动工程学会随机振动专业委员会第八届青年委员、黑龙江省地震工程学会会员和中国地震学会基础设施防震减灾青年委员会委员等多个学术组织成员，并长期担任国内外多个知名期刊的审稿人。',
            ]
          },{
            id: 'p4',
            avatar: require('../assets/imgs/person_4.png'),
            name: '宁超列',
            position: '中心特聘研究员',
            info: ['工学博士','结构专业','同济大学上海防灾救灾研究所助理研究员','新加坡南洋理工大学巨灾风险管理研究所博士后','上海市浦江人才计划（A类）入选者','防灾减灾工程及防护工程方向硕士生导师，'],
            profile: [
              '宁超列，男，湖南邵阳人，工学博士，结构专业，同济大学上海防灾救灾研究所助理研究员，新加坡南洋理工大学巨灾风险管理研究所博士后，上海市浦江人才计划（A类）入选者，防灾减灾工程及防护工程方向硕士生导师，长期从事城市运维安全与灾变机理研究，包括：城市地下管网日常运维风险评估与病害诊断、城市地上建筑群地震巨灾风险量化研究、钢筋混凝土结构概率能力与需求建模、城市地下管道结构力学灾变机理研究等。',
              '目前，主持国家自然科学基金项目1项，上海市浦江人才计划（A类）项目1项，重庆市技术创新与应用示范项目子任务1项；参与国家自然科学基金面上项目1项，国家重点研发计划项目“城市市政管网运行安全保障技术研究”1项。',
              '迄今为主，已参与完成国家自然科学基金青年项目1项，国家重大研究计划1项，国际地震巨灾风险评估项目2项。截止目前，在国内外权威期刊发表高水平学术论文24篇，其中SCI论文13篇，EI论文6篇。此外，获得软件著作权1部，出版学术专著1部（科学出版社）。',
            ]
          },{
            id: 'p5',
            avatar: require('../assets/imgs/person_5.png'),
            name: '程印',
            position: '中心特聘研究员',
            info: ['西南交通大学土木工程学院讲师','硕士生导师','四川省海外高层次留学人才','中国地震学会基础设施防震减灾青年委员会委员'],
            profile: [
              '程印，男，重庆人，西南交通大学土木工程学院讲师，硕士生导师，四川省海外高层次留学人才，中国地震学会基础设施防震减灾青年委员会委员。',
              '本科与硕士分别于2006年、2009年毕业于重庆大学，2013年于意大利罗马大学获得结构工程专业博士学位，2014年到2016年在土耳其海峡大学Kandilli天文与地震研究所从事地震工程相关领域的博士后工作，2016年12月任教于西南交通大学土木工程学院教师。长期从事结构基于性能的地震工程、概率地震危险性与风险分析等研究。',
              '博士后期间作为主要参与人，参与由欧洲多国联合主持的欧盟第7框架项目STREST （关键基础设施应对自然灾害协调测试方法）。近2年主持的项目有自然科学基金青年、中央高校基本业务创新项目；近5年发表工程主流SCI期刊论文10篇，其中在地震工程顶级期刊“Earthquake Engineering and Structural Dynamics”上发表论文两篇。担任多个SCI期刊独立审稿人；多次受邀参加国内国际学术论文会议并做报告。',
            ]
          },{
            id: 'p6',
            avatar: require('../assets/imgs/person_6.png'),
            name: '罗文文',
            position: '中心特聘研究员',
            info: ['工学博士','土木工程专业','重庆科技学院建筑工程学院讲师','日本东京工业大学Materials and Structures Laboratory准客座研究员'],
            profile: [
              '罗文文，男，四川绵阳人，工学博士，土木工程专业，重庆科技学院建筑工程学院讲师，日本东京工业大学Materials and Structures Laboratory准客座研究员，长期从事工程结构和城市区域风险评估与综合防灾研究。',
              '主持国家自然科学基金项目1项，重庆市自然科学基金项目1项，重庆市教委科学技术研究项目1项；参与完成国家自然科学基金2项。发表学术论文20余篇，其中SCI论文1篇，EI论文6篇。此外，获专利授权2项，出版学术著作1部。',
            ]
          },{
            id: 'p7',
            avatar: require('../assets/imgs/person_7.png'),
            name: '刘烁宇',
            position: '中心特聘研究员',
            info: ['工学博士','西南大学讲师'],
            profile: ['刘烁宇，男，重庆人，工学博士，西南大学讲师。博士毕业于重庆大学土木工程学院结构工程专业。',
              '长期从事工程结构和城市区域风险评估与综合防灾研究。近年来作为主要研究人员参与1项国家自然科学基金重点项目、3项国家自然科学基金面上项目，并参与“隆鑫·重庆中心”、“天下龙缸·云端廊桥”等大型实际工程项目的抗震抗风研究，在《土木工程学报》、《建筑结构学报》等权威期刊发表论文8篇。     '
            ]
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .content {
    position: relative;
    width: 1200px;
    margin: 20px auto;
  }

  .avatar {
    width: 196px;
    height: 226px;
  }

  .header {
    width: 100%;
    height: 40px;
    background-color: #000c20;
  }

  .info-list {
    position: absolute;
    top: 0;
    margin-left: 225px;
  }

  .name-position {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .info-list .info {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .profile-title {
    font-size: 24px;
    font-weight: bold;
  }

  .personal-profile {
    margin-top: 30px;
  }

  .personal-profile p {
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
