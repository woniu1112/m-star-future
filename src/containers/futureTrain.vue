<template>
    <div class="futureTrain">
        <div class="future-box">
            <div class="future-banner">
                <img :src="bannerImg" alt="">
            </div>

            <div class="future-train-title" v-show="futureTitle">
                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-line_02.png" alt="" />
                <span>FUTURE训练生计划</span>
                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-line_01.png" alt="" />
            </div>

            <!--<div class="future-nav">-->
            <!--<ul>-->
            <!--<li>-->
            <!--<router-link class="router" to="/futureTrain/futureTrainStudents">FUTURE训练生计划</router-link>-->
            <!--</li>-->
            <!--<li>-->
            <!--<router-link class="router" to="/futureTrain/futureTrainOX">偶像学院</router-link>-->
            <!--</li>-->
            <!--<li>-->
            <!--<router-link class="router" to="/futureTrain/futureTrainMINI">MINI训练生</router-link>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->

            <div class="future-router">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'futureTrain',
        data() {
            return {
                futureTitle: true,
                bannerImg: 'http://ox2q37at2.bkt.clouddn.com/m/img/index/index-swiper_01.png'
            }
        },
        created() {
            this.routePath = this.$route.path;
            this.routeChange();
        },
        methods: {
            routeChange() {
                this.routePath = this.$route.path
                if (this.routePath == '/futureTrain/futureTrainStudents') {
                    this.bannerImg = 'http://ox2q37at2.bkt.clouddn.com/m/img/index/index-swiper_01.png'
                } else if (this.routePath == '/futureTrain/futureTrainOX') {
                    this.futureTitle = false;
                    this.bannerImg = 'http://ox2q37at2.bkt.clouddn.com/m/img/index/index-swiper_01.png'
                } else {
                    this.bannerImg = 'http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-banner_mini.png'
                }
            }
        },
        watch: {
            '$route': 'routeChange'
        }

    }
</script>

<style lang="scss">
    .future-box {
        background: #fff;

    }
    .future-banner {
        padding: .4rem .3rem 0;
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
    .future-train-title {
        text-align: center;
        margin-top: .4rem;
        font-size: .3rem;
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
    .future-nav {
        margin-top: .3rem;
        ul {
            overflow: hidden;
            margin: 0 auto;
            width: 6.9rem;
            li {
                width: 2.3rem;
                line-height: .6rem;
                border: .01rem solid #252525;
                text-align: center;
                float: left;
                font-size: .24rem;
                overflow: hidden;
            }
            li:nth-of-type(1) {
                -webkit-border-radius: .1rem 0 0 .1rem;
                -moz-border-radius: .1rem 0 0 .1rem;
                border-radius: .1rem 0 0 .1rem;
            }
            li:nth-of-type(2) {
                border-left: none;
                border-right: none;
            }
            li:nth-of-type(3) {
                -webkit-border-radius: 0 .1rem .1rem 0;
                -moz-border-radius: 0 .1rem .1rem 0;
                border-radius: 0 .1rem .1rem 0;
            }
        }
        .router-link-active {
            background: #252525;
            color: #fff;
        }
        .router {
            display: block;
        }
    }
    .future-router {
        margin-top: .3rem;
    }

</style>
