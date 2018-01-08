<template>
    <div class="active">
        <div class="active-wrapper" ref="activeWrapper">
            <div class="active-box">
                <ul class="active-list">
                    <li v-for="item in actives">
                        <router-link :to="item.routerLink">
                            <img class="active-img float-left" :src="item.img" alt="" />
                            <div class="active-introduce float-left">
                                <p class="active-title">{{item.title}}</p>
                                <p class="active-times">{{item.times}}</p>
                                <p class="active-contents">{{item.contents}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    const DIRECTION_H = 'horizontal'
    const DIRECTION_V = 'vertical'

    export default {
        name: 'active',
        data() {
            return {
                actives: [
                    {
                        title: '剑归何处',
                        times: '2017年12月下旬',
                        contents: '一本与众不同的武侠推理小说,语言质朴如金庸,情节紧张如古...',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/active-JGHC.png',
                        routerLink: '/active/ActiveJGHC'
                    },
                    {
                        title: '东海龙棺',
                        times: '2017年12月下旬',
                        contents: '《东海龙棺》是一部恐怖、惊悚、玄幻、剧情的一部网络电影...',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/active-DHLG.png',
                        routerLink: '/active/ActiveDHLG'
                    },
                    {
                        title: '倚天屠龙记',
                        times: '2017年12月下旬',
                        contents: '金庸武侠巨制《倚天屠龙记》，大制作、大团队、角色众多、有名…',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/actives-YTTLJ.png',
                        routerLink: '/active/ActiveYTTLJ'
                    },
                    {
                        title: '绝代双骄',
                        times: '开机时间：2017年11月底',
                        contents: '小鱼儿:古灵精怪,在任何情况下绝不服输，永远乐观，在任何困…',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/actives-JDSJ.png',
                        routerLink: '/active/ActiveJDSJ'
                    },
                    {
                        title: '百鸟衣',
                        times: '2017年11月初',
                        contents: '院线电影《百鸟衣》，类型：青春、文艺片。',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/actives-BYN.png',
                        routerLink: '/active/ActiveBYN'
                    },
                    {
                        title: '萍踪侠影',
                        times: '2017年11月10',
                        contents: '大型武侠电视剧《萍踪侠影》',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/actives-PZXY.png',
                        routerLink: '/active/ActivePZXY'
                    },
                    {
                        title: '愤怒的小鸟',
                        times: '2016.5.20-2016.6.03',
                        contents: '《愤怒的小鸟》游戏火爆一时，里面卡通、幽默的人物形象令人印…',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/actives-FNXN.png',
                        routerLink: '/active/ActiveFNXN'
                    },
                    {
                        title: '冰川时代5：星际碰撞',
                        times: '2016.8.20-2016.9.11',
                        contents: '中国最大艺术教育移动端平台艺讯吖卟发起“冰凉一夏之《冰川时代…',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/actives-BCSD.png',
                        routerLink: '/active/ActiveBCSD'
                    },
                    {
                        title: '刺猬小子：天生我刺',
                        times: '2016.4.2-2016.6.12',
                        contents: '中国最大艺术教育移动端平台艺讯吖卟联合 摩天轮、每日视界影视…',
                        img: 'http://ox2q37at2.bkt.clouddn.com/m/img/active/actives-CWXZ.png',
                        routerLink: '/active/ActiveCWXZ'
                    }
                ]
            }
        },
        created() {
            setTimeout(() => {
                this._initScroll()
                this.activeScroll.refresh()
            },500)
        },
        methods: {
            _initScroll() {
                this.activeScroll = new BScroll(this.$refs.activeWrapper,{
                    probeType:3,
                    click: true,
                    scrollX: true,
                    startX: 0,
                    bounceTime: 300,
                    eventPassthrough: DIRECTION_H
                })
            }
        }
    }
</script>

<style lang="scss">
    .active-wrapper {
        position: absolute;
        top: .88rem;
        bottom: 0;
        width: 100%;
        overflow: hidden;
    }
    .active-box {
        width: 100%;
    }
    .active-list {
        background: #fff;
        padding: 0 .3rem;
        li {
            padding: .4rem 0;
            border-bottom: .01rem solid #dedede;
            background: #ffffff;
            overflow: hidden;
            .active-img {
                width: 2.15rem;
                margin-right: .2rem;
            }
            .active-introduce {
                width: 4.55rem;
                .active-title {
                    font-size: .32rem;
                    color: #252525;
                    line-height: .32rem;
                }
                .active-times {
                    font-size: .24rem;
                    color: #999999;
                    margin: .19rem 0 .23rem;
                }
                .active-contents {
                    font-size: .28rem;
                    color: #666666;
                    line-height: .48rem;
                }
            }
        }
        li:nth-last-of-type(1) {
            border: none;
        }
    }
</style>
