<template>
    <div class="dreamUp">
        <div class="dreamup-box">
            <div class="dreamUp-swiper" v-show="swiperShow">
                <div class="swiper-container" id="bannerSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-rl.png" alt="" />
                        </div>
                        <div class="swiper-slide">
                            <img class="index-swiper" src="http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-wj.png" alt="" />
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <ul class="dreamup-nav">
                <li :class="dreamUp == true ? 'active' : ''" @click="dreamUpNav">
                    数字音乐专辑
                </li>
                <li :class="dreamUp == false ? 'active' : ''" @click="dreamUpNav">
                    中华传统影视专辑
                </li>
            </ul>

            <div class="dreamUp-china-movie" v-show="movieShow">
                <div class="dreamUp-moive">
                    <img class="music-img" src="http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-wd.png" alt="">
                    <div class="music-content">
                        <p class="music-title">Dream UP</p>
                        <p class="num-music">(中华传统文化影视专辑系列)</p>
                        <p class="t-m">Dream UP 中华传统文化影视专辑由艺讯、华策影视集团、1905电影网、共青团共同打造。</p>
                    </div>
                </div>
                <div class="dreamUp-moive-content">
                    <p>Dream UP 中华传统文化影视专辑由艺讯、华策影视集团、1905电影网、共青团共同打造。<br/>
                        2015年 中国北京国际文化创意产业博览会上联合<br/>CCTV6共同发布。<br/>
                        2016年 打造Dream UP 中华传统影视专辑之少儿版孔融让梨，并在播出cctv6套等平台播出。<br/>
                        2017，我们即将重磅推出“Q版万卷楼”。</p>
                </div>
                <div class="dreamup-xilie">
                    <p class="xielie-title">中华传统文化影视专辑系列</p>
                    <ul class="list">
                        <li>
                            <span class="first">1</span>
                            <div class="list-name">
                                Q版万卷楼
                            </div>
                        </li>
                        <li>
                            <span class="first">2</span>
                            <div class="list-name">
                                孔融让梨
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="issue">
                    <div class="issue-line">
                        <span class="issue-title">发行平台</span>
                        <span class="line-span"></span>
                    </div>
                    <ul class="issue-list">
                        <li v-for="(item, index) in issueMovieImg" :class="(index == 2 || index == 5) ? 'text-right':(index == 0 || index == 3)?'text-left':(index == 1 || index == 4)?'text-center':''">
                            <img :src="item" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'dreamUp',
        data() {
            return {
                dreamUp: true,
                musiceShow: true,
                movieShow: false,
                swiperShow: false,
                dreamBannerShow: true,
                plaing: false,
                playImgSrc: 'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-playMUsic.png',
                issueImg: [
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_WY.png'},
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_QQ.png'},
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_YK.png'},
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_KL.png'},
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_XM.png'},
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_KW.png'},
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_KGY.png'},
                    {src:'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-issue_KG.png'}
                ],
                issueMovieImg: [
                    'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-cctv.png',
                    'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-tx.png',
                    'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-xm.png',
                    'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-qiy.png',
                    'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-sh.png',
                    'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dream-movie-ls.png',
                ]
            }
        },
        methods: {
            dreamUpNav(el) {
                let elHtml = el.target.innerText;
                if (elHtml == '数字音乐专辑') {
                    this.dreamUp = true
                    this.musiceShow = true
                    this.movieShow = false
                    this.swiperShow = false
                    this.dreamBannerShow = true
                } else {
                    this.dreamUp = false
                    this.musiceShow = false
                    this.movieShow = true
                    this.swiperShow = true
                    this.dreamBannerShow = false
//                    this.swiperBannerMovie()
                }
            },
            swiperBannerMovie() {
                var dreamUpSwiper1 = new Swiper('#bannerSwiper', {
                    autoplay: 3000,//可选选项，自动滑动
                    loop: true,
                    speed: 300,
                    pagination : '.swiper-pagination',
                    autoplayDisableOnInteraction: false
                })
            },
            audioPlay() {
                if (this.plaing == false) {
                    this.$refs.audios.play();
                    this.plaing = true;
                    this.playImgSrc = 'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-pause.png';
                } else if (this.plaing == true) {
                    this.$refs.audios.pause();
                    this.plaing = false;
                    this.playImgSrc = 'http://ox2q37at2.bkt.clouddn.com/m/img/dreamUp/dreamUp-playMUsic.png';
                }
            }
        },
        watch: {
            swiperShow(newv,oldv) {
                if (newv == true) {
                    this.swiperBannerMovie()
                }
            }
        }
    }
</script>

<style lang="scss">
    .padding-16 {
        padding-top: .16rem;
    }
    .dreamUp {
        background: #ffffff;
    }
    .dreamup-box {
        padding-top: .4rem;
    }
    .dreamup-banner {
        padding: 0 .3rem;
        text-align: center;
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
    .dreamUp-swiper {
        padding: 0 .3rem;
        #bannerSwiper {
            img {
                width: 100%;
            }
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
    }

    .dreamup-nav {
        margin: .4rem auto;
        overflow: hidden;
        width: 5.6rem;
        li {
            width: 2.8rem;
            line-height: .6rem;
            background: #ffffff;
            text-align: center;
            float: left;
            border: .01rem solid #252525;
            font-size: .24rem;
        }
        li:nth-of-type(1) {
            -webkit-border-radius: .1rem 0 0 .1rem;
            -moz-border-radius: .1rem 0 0 .1rem;
            border-radius: .1rem 0 0 .1rem;
        }
        li:nth-of-type(2) {
            -webkit-border-radius: 0 .1rem .1rem 0;
            -moz-border-radius: 0 .1rem .1rem 0;
            border-radius: 0 .1rem .1rem 0;
            border-left: none;
        }
        .active {
            background: #252525;
            color: #ffffff;
        }
    }
    .dreamUp-music-box {
        .dreamUp-music {
            padding: 0 .3rem;
            overflow: hidden;
            .music-img {
                float: left;
                width: 2.56rem;
                margin-right: .4rem;
            }
            .music-content {
                padding-top: .32rem;
                .music-title {
                    font-size: .3rem;
                    color:#252525;
                }
                .num-music {
                    font-size: .24rem;
                    color:#9b7b42;
                    margin: .18rem 0 .23rem;
                }
                .t-m {
                    font-size:.28rem;
                    color:#666666;
                    line-height: .41rem;
                }
            }
        }
        .dreamUp-audio {
            clear: both;
            margin: .4rem .3rem 0;
            padding: .24rem 0;
            border-top: .01rem solid #dedede;
            position: relative;
            img {
                width: .34rem;
                height: .34rem;
                vertical-align: middle;
            }
            span {
                font-size: .28rem;
                color:#666666;
                margin-left: .1rem;
            }
            .line {
                width: 92%;
                border-top: .01rem solid #dedede;
                position: absolute;
                right: 0;
                bottom: 0;

            }

        }
        .num-one {
            padding: .32rem 0;
            margin: 0 .3rem;
            border-bottom: .01rem solid #dedede;
            .first {
                width: .53rem;
                height: .78rem;
                line-height: .78rem;
                text-align: center;
            }
            .music-name {
                font-size: .3rem;
                color: #252525;
            }
            .music-author {
                font-size: .2rem;
                color: #666666;
                margin-top: .18rem;
            }
        }
        .issue {
            background: #ffffff;
            margin-top: .4rem;

            .issue-title {
                font-size: .3rem;
                margin-left: .3rem;
                color: #252525;
            }
            .line-span {
                display: block;
                width: .61rem;
                height: .17rem;
                margin-left: .3rem;
                border-bottom: .02rem solid #252525;
            }

            .issue-list {
                margin: 0 .75rem;
                padding-bottom: .3rem;
                overflow: hidden;
                li {
                    width: 25%;
                    text-align: center;
                    margin-top: .3rem;
                    float: left;
                    img {
                        width: .9rem;
                    }
                }
            }
        }
    }
    .dreamUp-china-movie {
        .dreamUp-moive {
            padding: 0 .3rem;
            overflow: hidden;
            .music-img {
                float: left;
                width: 2.56rem;
                margin-right: .3rem;
            }
            .music-content {
                padding-top: .1rem;
                .music-title {
                    font-size: .3rem;
                    color:#252525;
                }
                .num-music {
                    font-size: .24rem;
                    color:#9b7b42;
                    margin: .18rem 0 .23rem;
                }
                .t-m {
                    font-size:.28rem;
                    color:#666666;
                    line-height: .41rem;
                }
            }
        }
        .dreamUp-moive-content {
            margin: .4rem .3rem 0;
            padding: .32rem 0;
            border-top: .01rem solid #dedede;
            border-bottom: .01rem solid #dedede;
            p {
                font-size:.28rem;
                color:#666666;
                line-height:.56rem;
            }
        }
        .dreamup-xilie {
            .xielie-title {
                padding: .24rem .3rem;
                font-size:.28rem;
                color:#666666;
            }
            .list {
                margin: 0 .3rem;
                border-bottom: .01rem solid #dedede;
                li {
                    overflow: hidden;
                    .first {
                        float: left;
                        width: .5rem;
                        height: 1.06rem;
                        line-height: 1.06rem;
                        text-align: center;
                        font-size:.28rem;
                        color:#666666;
                        background: #fff;
                    }
                    .list-name {
                        font-size:.3rem;
                        color:#252525;
                        padding: .32rem 0;
                        border-top: .01rem solid #dedede;
                    }
                }
            }
        }
        .issue {
            background: #ffffff;
            margin-top: .4rem;
            .issue-title {
                font-size: .3rem;
                margin-left: .3rem;
                color: #252525;
            }
            .line-span {
                display: block;
                width: .61rem;
                height: .17rem;
                margin-left: .3rem;
                border-bottom: .02rem solid #252525;
            }
            .issue-list {
                margin: 0 .3rem;
                padding-bottom: .3rem;
                overflow: hidden;
                li {
                    width: 33.333%;
                    line-height: .9rem;
                    margin-top: .3rem;
                    float: left;
                    overflow: hidden;
                    img {
                        width: 1.5rem;
                    }
                }

                .text-right {
                    text-align: right;
                }
                .text-left {
                    text-align: left;
                }
                .text-center {
                    text-align: center;
                }
            }
        }
    }
</style>
