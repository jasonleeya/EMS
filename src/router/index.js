import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Organize from '../components/Organize.vue'
import Introduction from "../components/Introduction";
import News from "../components/News";
import Business from "../components/Business";
import Project from "../components/Project";
import NewsDetail from "../views/NewsDetail";
import PersonDetail from "../views/PersonDetail";
import ContactUs from "../components/ContactUs";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'organize',
          component: Organize
        }, {
          path: 'introduction',
          component: Introduction
        },{
          path: '',
          redirect:'introduction'
        },{
          path: 'news',
          component: News
        },{
          path: 'business',
          component: Business
        },{
          path: 'project',
          component: Project
        },{
          path: 'contactus',
          component: ContactUs
        },
      ]
    },
    {
      path: '/newsdetail',
      name: 'NewsDetail',
      component:NewsDetail
    },
    {
      path: '/persondetail',
      name: 'PersonDetail',
      component:PersonDetail
    }


  ]
})
