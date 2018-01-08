<template>
    <div class="trainStudents">
        <div class="wrapper" ref="wrapper">
            <div class="box">
                <div class="trainStudents-banner">
                    <img src="http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trianStudents-banner.png" alt="" />
                </div>
                <div class="trainStudents-nav">
                    <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-line_02.png" alt="" />
                    <span>FUTURE训练生</span>
                    <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-line_01.png" alt="" />
                </div>
                <div class="trainStudents-list">
                    <ul>
                        <li v-for="(item, index) in students" :class="index<=5?'':'hide'">
                            <img :src="item.img" alt="" />
                            <div class="trainStudents-introduce">
                                <p class="students-name">{{item.name}}   {{item.age}}岁</p>
                                <p class="students-height">身高: {{item.height}}  体重: {{item.weight}}</p>
                                <span :data-n="item.name" class="trainStudents-more" @click.stop="selfDetails">More</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="load-more" id="loadMore">
                    上滑加载更多…
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    const DIRECTION_H = 'horizontal'
    const DIRECTION_V = 'vertical'

    export default {
        name: 'trainStudents',
        data() {
            return {
                students: [
                    {name: '陈俊旭', age: '10', height: '150cm', weight: '23KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-CJX.png'},
                    {name: '高铭昊', age: '9', height: '134cm', weight: '27KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-GMH.png'},
                    {name: '宋梓鑫', age: '10', height: '130cm', weight: '27KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-SZX.png'},
                    {name: '王海涛', age: '10', height: '145cm', weight: '35KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-WHT.png'},
                    {name: '俞思楠', age: '12', height: '151cm', weight: '35KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-YSN.png'},
                    {name: '马丽亚娜', age: '13', height: '160cm', weight: '36KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-MLYN.png'},
                    {name: 'Isabella', age: '10', height: '133cm', weight: '23KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-Isabella.png'},
                    {name: '蔡中亿', age: '11', height: '148cm', weight: '39KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-CZY.png'},
                    {name: '高语汀', age: '7', height: '123cm', weight: '20KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-GYD.png'},
                    {name: '洪煜楠', age: '6', height: '119cm', weight: '25KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-HYN.png'},
                    {name: '姜般若', age: '7', height: '130cm', weight: '23KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-JBR.png'},
                    {name: '林冠宇', age: '5', height: '105cm', weight: '16KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-LGY.png'},
                    {name: '欧珈吟', age: '13', height: '168cm', weight: '47KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-OJY.png'},
                    {name: '钱昭言', age: '7', height: '130cm', weight: '49KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-QZY.png'},
                    {name: '芮梓杰', age: '10', height: '145cm', weight: '29KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-BXJ.png'},
                    {name: '沈稼轩', age: '8', height: '130cm', weight: '27KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-SJX.png'},
                    {name: '汪子昊', age: '10', height: '148cm', weight: '34KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-WZH.png'},
                    {name: '王韵涵', age: '9', height: '132cm', weight: '27KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-WYH.png'},
                    {name: '张轶程', age: '8', height: '123cm', weight: '22KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-ZTC.png'},
                    {name: '夏梦萱', age: '10', height: '137cm', weight: '29KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-XMX.png'},
                    {name: '杨虞烨', age: '9', height: '131cm', weight: '28KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-YYY.png'},
                    {name: '吴黛西', age: '12', height: '159cm', weight: '44KG', img: 'http://ox2q37at2.bkt.clouddn.com/m/img/trainStudents/trainStudents-WDX.png'},
                ],
                pullup: true
            }
        },
        mounted() {
            setTimeout(() => {
                this._initScroll();
                let hideLi = $('.trainStudents-list ul li');

                this.shopBoxScroll.on('scroll', (item) => {
                    if (this.pullup == true) {
                        let childHeight = $('.box').height() - $('.wrapper').height();
                        this.shopBoxScroll.on('scrollEnd', (pos) => {
                            if (item.y < -childHeight) {
                                if (hideLi.hasClass('hide')) {
                                    hideLi.removeClass('hide')
                                    $('#loadMore').addClass('hide')
                                    this.shopBoxScroll.off('scroll')
                                    this.shopBoxScroll.refresh()
                                    this.pullup = false
                                }
                            }
                        })
                    }
                })

            },500)

        },
        methods: {
            _initScroll () {
                this.shopBoxScroll = new BScroll(this.$refs.wrapper, {
                    // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
                    probeType:3,
                    click: true,
                    bounceTime: 300,
                    eventPassthrough: DIRECTION_H
                });
            },
            selfDetails(el) {
                let studentsName = $(el.currentTarget).data('n');
                this.$router.push({path: '/trainStudents/TrainStudentsDetail',query: {name: studentsName}})
            }
        }

    }
</script>

<style lang="scss">
    .wrapper {
        position: absolute;
        top: .88rem;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        background: #fff;
    }
    .box {
        width: 100%;
    }
    .trainStudents-banner {
        padding: .3rem .3rem 0;
        height: auto;
        img {
            width: 100%;
            -webkit-border-radius: .1rem;
            -moz-border-radius: .1rem;
            border-radius: .1rem;
            -webkit-box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
            -moz-box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
            box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
        }
    }
    .trainStudents-nav {
        text-align: center;
        margin-top: .4rem;
        font-size: .24rem;
        span {
            display: inline-block;
            vertical-align: middle;
            margin: 0 .3rem;
        }
        img {
            vertical-align: middle;
            width: 1.2rem;
        }
    }
    .trainStudents-list {
        margin-top: .4rem;
        ul {
            padding: 0 .3rem;
            overflow: hidden;
            li {
                width: 48%;
                height: auto;
                background: #fff;
                padding-bottom: .2rem;
                margin-bottom: .3rem;
                img {
                    width: 100%;
                }
                .trainStudents-introduce {
                    margin-top: .3rem;
                    .students-name {
                        font-size: .28rem;
                        color: #252525;
                        text-align: center;
                    }
                    .students-height {
                        font-size: .26rem;
                        color: #252525;
                        text-align: center;
                        margin: .2rem 0;
                    }
                    .trainStudents-more {
                        display: block;
                        margin: 0 auto;
                        color: #ffffff;
                        background: #252525;
                        border-radius: 5px;
                        width: 1.4rem;
                        height: .50rem;
                        line-height: .5rem;
                        text-align: center;
                        font-size: .24rem;
                    }
                }
            }
            li:nth-of-type(2n-1) {
                float: left;
            }
            li:nth-of-type(2n) {
                float: right;
            }
        }
    }
    .load-more {
        font-size: .24rem;
        color: #999999;
        text-align: center;
        padding-bottom: .3rem;
    }
</style>
