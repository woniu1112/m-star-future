<template>
    <div class="news">
        <div class="news-right margin-40">

        </div>
        <div class="news-left margin-40">
            <ul class="news-list">

                <li class="news-list-li">
                    <router-link to="/news/NewsDetaiOursqf">
                        <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/img/news-list-our-sqf.png" alt="" />
                        <p class="news-title">我们的训练生|宋婧菲：甜心力量，势不可挡</p>
                        <div class="news-times">
                            <span class="circle"></span>
                            <span class="news-time-content">2017年12月08日</span>
                        </div>
                    </router-link>
                </li>
                <!--<li class="news-list-li">-->
                    <!--<router-link to="/news/NewsDetailSTZY">-->
                        <!--<img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/img/news-list-sthy.png" alt="" />-->
                        <!--<p class="news-title">《盛唐幻夜》完美杀青，偶像学院训练生将演唱原创推广曲</p>-->
                        <!--<div class="news-times">-->
                            <!--<span class="circle"></span>-->
                            <!--<span class="news-time-content">2017年12月08日</span>-->
                        <!--</div>-->
                    <!--</router-link>-->
                <!--</li>-->

                <li class="news-list-li">
                    <router-link to="/news/NewsDetailZM">
                        <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/img/news-list-zm.png" alt="" />
                        <p class="news-title">北电导师张默亲自授课，Future训练生首次体验表演导师课</p>
                        <div class="news-times">
                            <span class="circle"></span>
                            <span class="news-time-content">2017年11月16日</span>
                        </div>
                    </router-link>
                </li>
                <li class="news-list-li">
                    <router-link to="/news/NewsDetailDJSJ">
                        <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/img/news-list-future-start.png" alt="" />
                        <p class="news-title">星鲜未来品牌旗下首个偶像学院正式揭幕</p>
                        <div class="news-times">
                            <span class="circle"></span>
                            <span class="news-time-content">2017年11月09日</span>
                        </div>
                    </router-link>
                </li>
                <li class="news-list-li">
                    <router-link to="/news/NewsDetailMY">
                        <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/m/img/news/news-list_01.png" alt="" />
                        <p class="news-title">莫艳琳操刀，“星鲜未来”版《超级英雄》横空出世世</p>
                        <div class="news-times">
                            <span class="circle"></span>
                            <span class="news-time-content">2017年10月17日</span>
                        </div>
                    </router-link>
                </li>
                <li class="news-list-li">
                    <router-link to="/news/NewsDetailDC">
                        <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/m/img/news/news-list_02.png" alt="" />
                        <p class="news-title">邓超的“超级英雄”居然“变小”了？</p>
                        <div class="news-times">
                            <span class="circle"></span>
                            <span class="news-time-content">2017年10月17日</span>
                        </div>
                    </router-link>
                </li>
                <li class="news-list-li">
                    <router-link to="/news/NewsDetailSD">
                        <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/m/img/news/news-list_03.png" alt="" />
                        <p class="news-title">盛典落幕！首届星鲜未来Future训练营签约训练生诞生</p>
                        <div class="news-times">
                            <span class="circle"></span>
                            <span class="news-time-content">2017年09月25日</span>
                        </div>
                    </router-link>
                </li>
                <li class="news-list-li">
                    <router-link to="/news/NewsDetailFashion">
                    <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/m/img/news/news-list_04.png" alt="" />
                    <p class="news-title">时尚最时尚！顶级设计师打造Future训练生的专属freestyle！</p>
                    <div class="news-times">
                        <span class="circle"></span>
                        <span class="news-time-content">2017年09月05日</span>
                    </div>
                    </router-link>
                </li>
                <li class="news-list-li">
                    <router-link to="/news/NewsDetailFutureTrain">
                        <img class="news-img" src="http://ox2q37at2.bkt.clouddn.com/m/img/news/news-list_05.png" alt="" />
                        <p class="news-title">Future训练营！你离偶像只差一个星鲜未来!</p>
                        <div class="news-times">
                            <span class="circle"></span>
                            <span class="news-time-content">2017年08月20日</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'news'
    }
</script>

<style lang="scss">
    .news {
        padding-top: .1rem;
    }
    .margin-40 {
        margin-top: .4rem;
    }
    .margin-34 {
        margin-top: .34rem;
    }
    .news-left {
        float: left;
        border:.02rem solid #b8b8b8;
        width: .01rem;
        height: 45.3rem;
        margin-left: .3rem;
    }
    .news-right {
        float: right;
        height: 22rem;
    }
    .news-list-li {
        background:#ffffff;
        -webkit-box-shadow: 0 .02rem .03rem 0 rgba(176,176,176,0.50);
        -moz-box-shadow: 0 .02rem .03rem 0 rgba(176,176,176,0.50);
        box-shadow: 0 .02rem .03rem 0 rgba(176,176,176,0.50);
        border-radius: .1rem;
        width: 6.5rem;
        height: auto;
        margin-left: .38rem;
        padding: .2rem;
        position: relative;
        margin-top: .34rem;
        .news-img {
            width: 100%;
        }
        .news-title {
            font-size: .28rem;
            color: #333333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: .15rem 0 .1rem;
        }
        .news-times {
            position: absolute;
            top: -.08rem;
            left: -.58rem;
            padding-left: 0.12rem;
            .circle {
                display: inline-block;
                width: .14rem;
                height: .14rem;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                background: #252525;
                margin-top: .3rem;

            }
            .news-time-content {
                display: inline-block;
                width: 2rem;
                height: .6rem;
                background: url("http://ox2q37at2.bkt.clouddn.com/m/img/news/news-times.png") no-repeat center;
                background-size: 100% auto;
                vertical-align: middle;
                margin-left: .08rem;
                font-size: .2rem;
                color: #fff;
                padding: 0 0 0 .25rem;
                line-height: .6rem;
            }
        }
    }
    .news-list-li:nth-of-type(1) {
        margin-top: 0;
    }
    .news-list-li:nth-last-of-type(1) {
        margin-bottom: .6rem;
    }
</style>
