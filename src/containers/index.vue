<template>
    <div class="index">
        <div class="index-box">
            <!--swiper-->
            <div class="index-banner-swiper margin-top">
                <div class="swiper-container" id="bannerSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <router-link to="/futureTrain/futureTrainStudents">
                                <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-swiper_01.png" alt="" />
                            </router-link>
                        </div>
                        <div class="swiper-slide">
                            <router-link to="/futureTrain/futureTrainOX">
                                <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-swiper_04.png" alt="" />
                            </router-link>
                        </div>
                        <div class="swiper-slide">
                            <router-link to="/futureTrain/futureTrainStudents">
                                <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-swiper_02.png" alt="" />
                            </router-link>
                        </div>
                        <div class="swiper-slide">
                            <router-link to="/futureTrain/futureTrainStudents">
                                <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-swiper_03.png" alt="" />
                            </router-link>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <!--星闻-->
            <div class="index-news">
                <div class="index-news-title">
                    <div class="float-left">
                        星闻
                        <span class="line-span"></span>
                    </div>
                    <router-link to="/news" class="float-right index-news-a">
                        更多
                    </router-link>
                </div>
                <ul class="index-news-list">

                    <li>
                        <router-link to="/news/NewsDetaiOursqf">
                            <img src="http://ox2q37at2.bkt.clouddn.com/img/news-list-our-sqf.png" alt="" />
                            <p class="news-title">我们的训练生|宋婧菲：甜心力量，势不可挡</p>
                            <div class="time">
                                <i class="icon-time icon-icon-time"></i>
                                <span class="time-details">2017年12月08日</span>
                            </div>
                        </router-link>
                    </li>

                    <!--<li>-->
                        <!--<router-link to="/news/NewsDetailSTZY">-->
                            <!--<img src="http://ox2q37at2.bkt.clouddn.com/img/news-list-sthy.png" alt="" />-->
                            <!--<p class="news-title">《盛唐幻夜》完美杀青，偶像学院训练生将演唱原创推广曲</p>-->
                            <!--<div class="time">-->
                                <!--<i class="icon-time icon-icon-time"></i>-->
                                <!--<span class="time-details">2017年12月08日</span>-->
                            <!--</div>-->
                        <!--</router-link>-->
                    <!--</li>-->

                    <li>
                        <router-link to="/news/NewsDetailZM">
                            <img src="http://ox2q37at2.bkt.clouddn.com/img/news-list-zm.png" alt="" />
                            <p class="news-title">北电导师张默亲自授课，Future训练生首次体验表演导师课</p>
                            <div class="time">
                                <i class="icon-time icon-icon-time"></i>
                                <span class="time-details">2017年11月16日</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/news/NewsDetailDJSJ">
                            <img src="http://ox2q37at2.bkt.clouddn.com/img/news-list-future-start.png" alt="" />
                            <p class="news-title">星鲜未来品牌旗下首个偶像学院正式揭幕</p>
                            <div class="time">
                                <i class="icon-time icon-icon-time"></i>
                                <span class="time-details">2017年11月09日</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/news/NewsDetailMY">
                            <img src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-news_01.png" alt="" />
                            <p class="news-title">莫艳琳操刀，“星鲜未来”版《超级英雄》横空出世</p>
                            <div class="time">
                                <i class="icon-time icon-icon-time"></i>
                                <span class="time-details">2017年10月17日</span>
                            </div>
                        </router-link>
                    </li>
                    <!--<li>-->
                        <!--<router-link to="/news/NewsDetailDC">-->
                            <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-news_02.png" alt="" />-->
                            <!--<p class="news-title">邓超的“超级英雄”居然“变小”了？</p>-->
                            <!--<div class="time">-->
                                <!--<i class="icon-time icon-icon-time"></i>-->
                                <!--<span class="time-details">2017年10月17日</span>-->
                            <!--</div>-->
                        <!--</router-link>-->
                    <!--</li>-->
                </ul>
            </div>

            <!--活动通告-->
            <div class="index-news index-active">
                <div class="index-news-title">
                    <div class="float-left">
                        星鲜通告
                        <span class="line-span"></span>
                    </div>
                    <router-link to="/active" class="float-right index-news-a">
                        更多
                    </router-link>
                </div>
                <div class="index-active-swiper">
                    <div class="swiper-container" id="indexActiveSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveJGHC">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-JGHC.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveDHLG">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-DHLG.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveBCSD">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-BCSD.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveFNXN">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-FNXN.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveCWXZ">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-CWXZ.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveJDSJ">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-JDSJ.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActivePZXY">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-PZXY.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveYTTLJ">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-active-YTTLJ.png" alt="" />
                                </router-link>
                            </div>
                            <div class="swiper-slide">
                                <router-link to="/active/ActiveBYN">
                                    <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-BNY.png" alt="" />
                                </router-link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!--future 训练生计划-->
            <div class="index-news index-future">
                <div class="index-news-title">
                    <div class="float-left">
                        FUTURE训练生计划
                        <span class="line-span"></span>
                    </div>
                </div>
                <div class="index-future-detail">
                    FUTURE训练生计划”是针对4-13岁各阶段训练生学员定制的整套培养体系，由包含启蒙、基础训练、导师
                    作品训练的课程体系与为训练生学员提供实践舞台及参选机会的“星鲜通告”组成。学员将通过“训练+实践”的模式，在线上及线下课程训练中提高艺能，在银幕与舞台实践中完成艺能的升华，收获自信与成长。<br/>“FUTURE训练生计划”，只为不平凡的你！！                </div>
                <div class="index-future-video">
                    <video class="index-video" loop="true" poster="http://ox2q37at2.bkt.clouddn.com/img/video-img.png">
                        <source src="http://ox2q37at2.bkt.clouddn.com/video/star-future.mp4" type="video/mp4">
                    </video>
                    <img v-show="playImgShow" @click="playImg" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-play-img.png" alt="" class="index-play-img" />
                </div>
            </div>

        </div>

    </div>
</template>

<script>

    export default {
        name: 'index',
        data() {
            return {
                playImgShow: true
            }
        },
        created() {
            //播放按鈕圖片ios隱藏
            if (bIsIpad || bIsIphoneOs) {
                this.playImgShow = false
            } else {
                this.playImgShow = true
            }
        },
        mounted() {
//            alert($('body').css('fontFamily'))
            var mySwiper1 = new Swiper('#bannerSwiper', {
                autoplay: 3000,//可选选项，自动滑动
                loop: true,
                speed: 300,
                pagination : '.swiper-pagination',
                autoplayDisableOnInteraction: false
            })
            var mySwiper2 = new Swiper('#indexActiveSwiper', {
                autoplay: 2000,//可选选项，自动滑动
                loop: true,
                speed: 300,
                effect : 'coverflow',
                slidesPerView: 1,
                grabCursor: true,
                centeredSlides: true,
                initialSlide: 1,
                coverflow: {
                    rotate: 0,// 旋转的角度
                    stretch: -10,// 拉伸   图片间左右的间距和密集度
                    depth: 60,// 深度   切换图片间上下的间距和密集度
                    modifier: 2,// 修正值 该值越大前面的效果越明显
                    slideShadows : false// 页面阴影效果
                },
                autoplayDisableOnInteraction: false
            })

        },
        methods: {
            playImg(el) {
                $('video').get(0).play();
                $('video').css({'width': '92.5%'});
                this.playImgShow = false;
            }
        }
    }
</script>

<style lang="scss">
    .index {
        padding-top: .1px;
    }
    .index-box {
        background: #f1f1f1;
    }
    .margin-top {
        margin-top: .4rem;
    }
    .index-banner-swiper {
        padding: 0 .3rem;
    }
    .swiper-container {
        width: 100%;
    }
    .index-swiper {
        width: 100%;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        -webkit-box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
        -moz-box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
        box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
    }
    .swiper-pagination {
        left: 5rem!important;
        width: 30%!important;
    }
    .swiper-pagination-bullet {
        width: .12rem;
        height: .12rem;
        background: #fff;
    }
    .swiper-pagination-bullet-active {
        background:#d09120;
    }
    .index-news {
        margin-top: .4rem;
        .index-news-title {
            padding: 0 .3rem;
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
        .index-news-title::after {
            content: ' ';
            display: block;
            clear: both;
        }
        .index-news-a {
            font-size: .28rem;
            color: #999999;
        }
        .index-news-list {
            overflow: hidden;
            padding: 0 .3rem;
            li {
                background: #ffffff;
                width: 48%;
                height: auto;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                overflow: hidden;
                margin-top: .4rem;
                img {
                    width: 100%;
                }
                .news-title {
                    font-size:.24rem;
                    color:#252525;
                    line-height: .25rem;
                    white-space: nowrap;
                    padding: 0 .16rem;
                    margin: .24rem 0 .16rem;
                    -ms-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .time {
                    font-size: .22rem;
                    padding: 0 .16rem;
                    margin-bottom: .3rem;
                    .icon-time {
                        display: inline-block;
                        color: #666;
                        vertical-align: middle;
                    }
                    .time-details {
                        font-size:.22rem;
                        color:#666666;
                        margin-left: .1rem;
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
    .index-active {
        .index-active-swiper {
            margin: .4rem .46rem 0;
            img {
                width: 95%;
                display: block;
                margin: 0 auto;
            }
            .swiper-container {
                overflow: inherit;
            }
        }
    }
    .index-future {
        margin-bottom: .6rem;
        .index-future-detail {
            margin: .4rem 0 .32rem;
            font-size:.28rem;
            color:#666666;
            line-height:.56rem;
            padding: 0 .3rem;
        }
        .index-future-video {
            position: relative;
            margin: 0 .3rem;
        }
        .index-video {
            display: block;
            margin: 0 auto;
            width: 100%!important;
            -webkit-border-radius: .1rem;
            -moz-border-radius: .1rem;
            border-radius: .1rem;
        }
        .index-play-img {
            width: .64rem;
            height: .64rem;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            z-index: 10;
        }
    }
    
    .swiper-pagination-bullet {
        width: .12rem;
        height: .12rem;
        -webkit-border-radius: 100%!important;
        -moz-border-radius: 100%!important;
        border-radius: 100%!important;
    }

</style>
