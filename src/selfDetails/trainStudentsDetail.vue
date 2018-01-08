<template>
    <div class="trainStudentsDetail">
        <div class="trainStudentsDetail-banner">
            <img :src="selfData.banner" alt="">
        </div>
        <div class="self-detail">
            <p class="name">{{selfData.studentsName}}</p>
            <p class="gj">国籍：{{selfData.gj}}</p>
            <p class="age">年龄：{{selfData.age}}岁</p>
            <p class="weight">体重：{{selfData.weight}}Kg</p>
            <p class="height">身高：{{selfData.height}}cm</p>
            <p class="times">出生日期：{{selfData.times}}</p>
            <p class="jg">所属机构：{{selfData.jg}}</p>
        </div>
        <div class="self-mk">
            <div class="tilte">
                <div>
                    个人模卡
                    <span class="line-span"></span>
                </div>
            </div>
            <ul class="self-mk-img">
                <li v-for="item in selfData.mkList">
                    <img :src="item" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'trainStudentsDetail',
        data() {
            return {
                selfData: {},
                studentsData: [
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-CJX.png',
                        studentsName: '陈俊旭',
                        gj: '中国',
                        age: '10',
                        weight: '30',
                        height: '150',
                        times: '2007年03月14日',
                        jg: '上海谢晋艺术学院',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-CJX_01.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-GMH.png',
                        studentsName: '高铭昊',
                        gj: '中国',
                        age: '9',
                        weight: '29',
                        height: '134',
                        times: '2007年01月31日',
                        jg: '天津代理',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-GMH_02.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-GMH_01.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-SZX.png',
                        studentsName: '宋梓鑫',
                        gj: '中国',
                        age: '8',
                        weight: '27',
                        height: '130',
                        times: '2009年10月20日',
                        jg: '山东爱舞文化',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-SZX_02.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-SZX_01.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-WHT.png',
                        studentsName: '王海涛',
                        gj: '中国',
                        age: '10',
                        weight: '35',
                        height: '145',
                        times: '2007年01月31日',
                        jg: '无锡萌芽舞蹈',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-WHT_01.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-YSN.png',
                        studentsName: '俞思楠',
                        gj: '中国',
                        age: '12',
                        weight: '34.5',
                        height: '151',
                        times: '2006年10月11日',
                        jg: '杭州佩老师',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-YSN_01.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-MLYN.png',
                        studentsName: '马丽亚娜',
                        gj: '中国',
                        age: '13',
                        weight: '36',
                        height: '160',
                        times: '2005年07月04日',
                        jg: '杭州佩老师',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-MLYN_01.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-Isabella.png',
                        studentsName: 'Isabella',
                        gj: '中国',
                        age: '10',
                        weight: '23',
                        height: '133',
                        times: '2007年04月27日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-Isabella_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-Isabella_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-CZY.png',
                        studentsName: '蔡中亿',
                        gj: '中国',
                        age: '11',
                        weight: '39',
                        height: '148',
                        times: '2006年09月14日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-CZY_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-CZY_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-GYD.png',
                        studentsName: '高语汀',
                        gj: '中国',
                        age: '7',
                        weight: '20',
                        height: '123',
                        times: '2010年03月',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-GYD_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-GYD_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-HYN.png',
                        studentsName: '洪煜楠',
                        gj: '中国',
                        age: '6',
                        weight: '25',
                        height: '119',
                        times: '2011年12月-22',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-HYN_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-HYN_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-JBR.png',
                        studentsName: '姜般若',
                        gj: '中国',
                        age: '7',
                        weight: '23',
                        height: '130',
                        times: '2010年08月03日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-JBR_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-JBR_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-LGY.png',
                        studentsName: '林冠宇',
                        gj: '中国',
                        age: '5',
                        weight: '16',
                        height: '105',
                        times: '2012年02月22日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-LGY_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-LGY_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-OJY.png',
                        studentsName: '欧珈吟',
                        gj: '中国',
                        age: '13',
                        weight: '47',
                        height: '168',
                        times: '2004年07月07日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-OJY_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-OJY_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-QZY.png',
                        studentsName: '钱昭言',
                        gj: '中国',
                        age: '7',
                        weight: '49',
                        height: '130',
                        times: '2010年10月18日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-QZY_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-QZY_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-BXJ.png',
                        studentsName: '芮梓杰',
                        gj: '中国',
                        age: '10',
                        weight: '29',
                        height: '145',
                        times: '2007年07月21日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-BXJ_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-BXJ_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-SJX.png',
                        studentsName: '沈稼轩',
                        gj: '中国',
                        age: '8',
                        weight: '27',
                        height: '130',
                        times: '2009年12月22日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-SJX_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-SJX_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-WZH.png',
                        studentsName: '汪子昊',
                        gj: '中国',
                        age: '10',
                        weight: '34',
                        height: '148',
                        times: '2007年04月27日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-WZH_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-WZH_02.png',
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-WYH.png',
                        studentsName: '王韵涵',
                        gj: '中国',
                        age: '8',
                        weight: '27',
                        height: '132',
                        times: '2009年03月21日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-WYH_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-WYH_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-ZTC.png',
                        studentsName: '张轶程',
                        gj: '中国',
                        age: '8',
                        weight: '22',
                        height: '123',
                        times: '2009年12月10日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-ZTC_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-ZTC_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-XMX.png',
                        studentsName: '夏梦萱',
                        gj: '中国',
                        age: '10',
                        weight: '29',
                        height: '137',
                        times: '2007年10月11日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-XMX_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-XMX_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-YYY.png',
                        studentsName: '杨虞烨',
                        gj: '中国',
                        age: '9',
                        weight: '28',
                        height: '131',
                        times: '2008年09月',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-YYY_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-YYY_02.png'
                        ]
                    },
                    {
                        banner: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/banner/train-details-WDX.png',
                        studentsName: '吴黛西',
                        gj: '中国',
                        age: '12',
                        weight: '44',
                        height: '159',
                        times: '2005年12月25日',
                        jg: '星鲜未来',
                        mkList: [
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-WDX_01.png',
                            'http://ox2q37at2.bkt.clouddn.com/m/img/trainstudentsDetails/mk/train-mk-WDX_02.png'
                        ]
                    }
                ]

            }
        },
        created() {
            this.queryName = this.$route.query.name;

            for (var i = 0; i < this.studentsData.length; i++) {
                if (this.studentsData[i].studentsName === this.queryName) {
                    this.selfData = this.studentsData[i];
                }
            }
        }
    }
</script>

<style lang="scss">
    .trainStudentsDetail {
        background: #fff;
    }
    .trainStudentsDetail-banner {
        margin: 0 .3rem;
        padding-top: .3rem;
        img {
            width: 100%;
            -webkit-border-radius: .1rem;
            -moz-border-radius: .1rem;
            border-radius: .1rem;
        }
    }
    .self-detail {
        margin: 0 .3rem;
        padding-top: .3rem;
        font-size:.28rem;
        color:#666666;
        p {
            margin-top: .3rem;
        }
        .name {
            font-size:.32rem;
            color:#252525;
        }
    }
    .self-mk {
        margin: .3rem .3rem 0;
        border-top: .01rem solid #dedede;
        .tilte {
            margin-top: .4rem;
            margin-bottom: .4rem;
            color: #252525;
            font-size: .3rem;
            div {
                height: 100%;
            }
            .line-span {
                display: block;
                width: .61rem;
                height: .17rem;
                border-bottom: .02rem solid #252525;
            }
        }
        .self-mk-img {
            padding-bottom: .4rem;
            li {
                margin-top: .3rem;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>