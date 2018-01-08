import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/containers/index'
import News from '@/containers/news'
import AboutUs from '@/containers/aboutUs'
import Active from '@/containers/active'
import DreamUp from '@/containers/dreamUp'
import FutureTrain from '@/containers/futureTrain'
import TrainStudents from '@/containers/trainStudents'
import FutureTrainStudents from '@/components/futureTrainStudents'
import FutureTrainMINI from '@/components/futureTrainMINI'
import FutureTrainOX from '@/components/futureTrainOX'
import ActiveFNXN from '@/activeDtails/active-FNXN'
import ActiveBCSD from '@/activeDtails/active-BCSD'
import ActiveBYN from '@/activeDtails/active-BYN'
import ActiveCWXZ from '@/activeDtails/active-CWXZ'
import ActiveJDSJ from '@/activeDtails/active-JDSJ'
import ActivePZXY from '@/activeDtails/active-PZXY'
import ActiveYTTLJ from '@/activeDtails/active-YTTLJ'
import TrainStudentsDetail from '@/selfDetails/trainStudentsDetail'
import NewsDetailMY from '@/newsDetails/newsDetail-MY'
import NewsDetailDC from '@/newsDetails/newsDetail-DC'
import NewsDetailFashion from '@/newsDetails/newsDetail-fashion'
import NewsDetailSD from '@/newsDetails/newsDetail-SD'
import NewsDetailFutureTrain from '@/newsDetails/newsDetail-futureTrain'
import NewsDetailZM from '@/newsDetails/newsDetail-ZM'
import NewsDetailDJSJ from '@/newsDetails/newsDetail-DJSJ'
import NewsDetaiOursqf from '@/newsDetails/newsDetail-our-sqf'
import NewsDetailSTZY from '@/newsDetails/newsDetail-STZY'
import ActiveJGHC from '@/activeDtails/active-JGHC'
import ActiveDHLG from '@/activeDtails/active-DHLG'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/aboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/active',
        name: 'Active',
        component: Active,
    },
    {
        path: '/dreamUp',
        name: 'DreamUp',
        component: DreamUp
    },
    {
        path: '/futureTrain',
        name: 'FutureTrain',
        component: FutureTrain,
        children: [
            {
                path: '/',
                redirect: '/futureTrain/futureTrainStudents'
            },
            {
                path: 'futureTrainStudents',
                name: 'FutureTrainStudents',
                component: FutureTrainStudents
            },
            {
                path: 'futureTrainMINI',
                name: 'FutureTrainMINI',
                component: FutureTrainMINI
            },
            {
                path: 'futureTrainOX',
                name: 'FutureTrainOX',
                component: FutureTrainOX
            }
        ]
    },
    {
      path: '/trainStudents',
      name: 'TrainStudents',
      component: TrainStudents
    },
    {
      path: '/active/ActiveFNXN',//活动通告详情
      name: 'ActiveFNXN',
      component: ActiveFNXN
    },
    {
      path: '/active/ActiveBCSD',
      name: 'ActiveBCSD',
      component: ActiveBCSD
    },
    {
      path: '/active/ActivePZXY',
      name: 'ActivePZXY',
      component: ActivePZXY
    },
    {
      path: '/active/ActiveBYN',
      name: 'ActiveBYN',
      component: ActiveBYN
    },
    {
      path: '/active/ActiveCWXZ',
      name: 'ActiveCWXZ',
      component: ActiveCWXZ
    },
    {
      path: '/active/ActiveJDSJ',
      name: 'ActiveJDSJ',
      component: ActiveJDSJ
    },
    {
      path: '/active/ActiveYTTLJ',
      name: 'ActiveYTTLJ',
      component: ActiveYTTLJ
    },
    {
      path: '/active/ActiveJGHC',
      name: 'ActiveJGHC',
      component: ActiveJGHC
    },
    {
      path: '/active/ActiveDHLG',
      name: 'ActiveDHLG',
      component: ActiveDHLG
    },
    {
      path: '/trainStudents/TrainStudentsDetail',
      name: 'TrainStudentsDetail',
      component: TrainStudentsDetail
    },
    {
      path: '/news/NewsDetailMY',
      name: 'NewsDetailMY',
      component: NewsDetailMY
    },
    {
      path: '/news/NewsDetailDC',
      name: 'NewsDetailDC',
      component: NewsDetailDC
    },
    {
      path: '/news/NewsDetailFashion',
      name: 'NewsDetailFashion',
      component: NewsDetailFashion
    },
    {
      path: '/news/NewsDetailSD',
      name: 'NewsDetailSD',
      component: NewsDetailSD
    },
    {
      path: '/news/NewsDetailFutureTrain',
      name: 'NewsDetailFutureTrain',
      component: NewsDetailFutureTrain
    },
    {
      path: '/news/NewsDetailZM',
      name: 'NewsDetailZM',
      component: NewsDetailZM
    },
    {
      path: '/news/NewsDetailDJSJ',
      name: 'NewsDetailDJSJ',
      component: NewsDetailDJSJ
    },
    {
      path: '/news/NewsDetaiOursqf',
      name: 'NewsDetaiOursqf',
      component: NewsDetaiOursqf
    },
    {
      path: '/news/NewsDetailSTZY',
      name: 'NewsDetailSTZY',
      component: NewsDetailSTZY
    }
  ]
})
