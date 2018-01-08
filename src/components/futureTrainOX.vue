<template>
    <div class="futureTrainStudents">
        <!--<div class="ox-content">-->
            <!--华策星鲜未来偶像学院是“星鲜未来”品牌旗下训练生养成平台，面向5-13岁拥有艺术梦想的优质学员招生。学院将采取评测入学方式，由金牌导师面授并推送国内顶尖音乐及影视制作人打造作品；学院将采用体验式教学训练模式，通过作品课训练、作品录制训练，通告实践训练等环节让学员最终参与到专业级音乐影视专辑的录制发行，从而培养出一批高素质实践型明星学员。-->
        <!--</div>-->
        <!--<div class="ox-mini-video">-->
            <!--<video ref="videoFuture" class="mini-video" loop="true" poster="http://ox2q37at2.bkt.clouddn.com/img/video-img.png">-->
                <!--<source src="http://ox2q37at2.bkt.clouddn.com/video/star-future.mp4" type="video/mp4">-->
            <!--</video>-->
            <!--<img v-show="playImgShow" @click="playImg" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-play-img.png" alt="" class="mini-play-img" />-->
        <!--</div>-->
        <!--<div class="voiceDance">-->
            <!--<div>-->
                <!--声乐&影视-->
                <!--<span class="line-span"></span>-->
            <!--</div>-->
        <!--</div>-->
        <div class="oxjs-nav">
            <ul class="tixi-nav">
                <li @click="tixiNav" :class="tixiLi1 ? 'li-active' : ''">
                    声乐作品导师课
                </li>
                <li @click="tixiNav" :class="tixiLi2 ? 'li-active' : ''">
                    影视作品导师课
                </li>
            </ul>
        </div>
        <div class="box" v-show="tixiLi1">
            <div class="oxjs-content">
                汇聚国内顶级的声乐师资力量，采取“从训练到歌曲成品”的全流程体验式培养机制。学员将通过作品训练课、作品棚训、作品录制完整感受高水准教学，从而构筑良好的音乐审美，获得艺术真谛的正向启蒙。
            </div>
            <div class="img-class">
                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-m-voice_01.png" alt="" />
                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-m-voice_02.png" alt="" />
            </div>
        </div>
        <div class="box" v-show="tixiLi2">
            <div class="oxjs-content">
                由华策星鲜未来与北京电影学院创作与实践基地联手打造；以华策知名影视剧《万卷楼》为课程脚本，让学员通过课程参与正式的剧组拍摄实践，并借由央视级别的编剧、导演以及摄制团队呈现品质经典。            </div>
            <div class="img-class">
                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-m-movie_01.png" alt="" />
                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-m-movie_02.png" alt="" />
            </div>
        </div>

        <!--<ul class="ox-list">-->
            <!--<li>-->
                <!--<img class="float-left" src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-voice.png" alt="" />-->
                <!--<div class="content-div float-right">-->
                    <!--<div class="absolute">-->
                        <!--<p class="oxp1">声乐训练导师课</p>-->
                        <!--<span class="oxp2"></span>-->
                        <!--<p class="oxp3">汇聚国内顶级的声乐师资力量，采取“从训练到歌曲成品”的全流程体验式培养机制。</p>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<img class="float-right" src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-wjl.png" alt="" />-->
                <!--<div class="content-div float-left">-->
                    <!--<div class="absolute" style="left: 48%;">-->
                        <!--<p class="oxp1">声乐训练导师课</p>-->
                        <!--<span class="oxp2"></span>-->
                        <!--<p class="oxp3">汇聚国内顶级的声乐师资力量，采取“从训练到歌曲成品”的全流程体验式培养机制。</p>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</li>-->
        <!--</ul>-->
        <!--<div class="ox-h">-->
            <!--<div class="list-content-member" id="swiperParent">-->
                <!--<ul class="swiper" id="swiperLinear">-->
                    <!--<li class="float-left">-->
                        <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-01.png" alt="" />-->
                    <!--</li>-->
                    <!--<li class="float-left">-->
                        <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-02.png" alt="" />-->
                    <!--</li>-->
                    <!--<li class="float-left">-->
                        <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-03.png" alt="" />-->
                    <!--</li>-->
                    <!--<li class="float-left">-->
                        <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-04.png" alt="" />-->
                    <!--</li>-->
                    <!--<li class="float-left">-->
                        <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-05.png" alt="" />-->
                    <!--</li>-->
                    <!--<li class="float-left">-->
                        <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-06.png" alt="" />-->
                    <!--</li>-->
                    <!--<li class="float-left">-->
                        <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-ox-07.png" alt="" />-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: 'futureTrainStudents',
        data() {
            return {
                playImgShow: true,
                tixiLi1: true,
                tixiLi2: false
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
            var speed = -1,
                swiperUl = $('#swiperLinear');

            swiperUl.html(swiperUl.html() + swiperUl.html());
            var liWidth = swiperUl.children('li').width() + 36;
            swiperUl.width((swiperUl.children('li').length * liWidth) + 10);

            var timer = setInterval(linearM,20);

            function linearM() {
                var sLeft = parseInt(swiperUl.css('left'));
                if (sLeft < -swiperUl.width()/2){
                    swiperUl.css('left', 0 + 'px');
                } else if (sLeft > 0){
                    swiperUl.css('left', -swiperUl.width()/2 + 'px');
                } else {
                    swiperUl.css('left', sLeft + speed +'px');
                }
            }
        },
        methods: {
            playImg() {
                this.playImgShow = false;
                this.$refs.videoFuture.play();
            },
            tixiNav(el) {
                let elHtml = el.target.innerText;
                if (elHtml == '声乐作品导师课') {
                    this.tixiLi1 = true;
                    this.tixiLi2 = false;
                } else if (elHtml == '影视作品导师课') {
                    this.tixiLi1 = false;
                    this.tixiLi2 = true;
                }
            }
        }
    }
</script>

<style lang="scss">
    .ox-content {
        font-size:.28rem;
        color:#666666;
        line-height:.56rem;
        padding: 0 .3rem;
    }
    .ox-mini-video {
        margin-top: .1rem;
        padding: 0 .3rem;
        position: relative;
        .mini-video {
            width: 100%;
            -webkit-border-radius: .1rem;
            -moz-border-radius: .1rem;
            border-radius: .1rem;
        }
        .mini-play-img {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            z-index: 10;
            width: .63rem;
            height: .63rem;
        }
    }
    .voiceDance {
        margin-top: .3rem;
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
    .ox-list {
        margin-top: .3rem;
        padding: 0 .3rem;
        li {
            -webkit-box-shadow: 0 0 6px 0 rgba(0,0,0,0.20);
            -moz-box-shadow: 0 0 6px 0 rgba(0,0,0,0.20);
            box-shadow:0 0 6px 0 rgba(0,0,0,0.20);
            -webkit-border-radius: .1rem;
            -moz-border-radius: .1rem;
            border-radius: .1rem;
            width: 100%;
            height: 3rem;
            margin-bottom: .3rem;
            padding: .24rem;
            img {
                width: 3.89rem;
            }
            .content-div {
                position: relative;
                width: 2.48rem;
                height: 100%;
                text-align: center;
                .absolute {
                    position: absolute;
                    top: 50%;
                    left: 55%;
                    width: 100%;
                    -webkit-transform: translate(-50%, -50%);
                    -moz-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    -o-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                }
                .oxp1 {
                    font-size:.28rem;
                    color:#252525;
                    letter-spacing:.01rem;
                    text-align:center;
                }
                .oxp2 {
                    display: block;
                    margin: .24rem auto;
                    border:.01rem solid #252525;
                    width:.7rem;
                }
                .oxp3 {
                    font-size:.22rem;
                    color:#252525;
                    line-height:.35rem;
                    text-align:left;
                }
            }
        }
    }
    .ox-h {
        padding: 0 .3rem .3rem;
        .list-content-member {
            position: relative;
            width: 100%;
            height: 3rem;
            overflow: hidden;
        }
        .swiper {
            position: absolute;
            overflow: hidden;
            li {
                width: 2.41rem;
                height: 3rem;
                padding-left: .2rem;
                img {
                    width: 2.21rem;
                }
            }
            li:nth-of-type(1) {
                padding-left: 0;
            }
        }
    }
    .oxjs-nav {
        .tixi-nav {
            width: 4rem;
            overflow: hidden;
            margin: .3rem auto 0;
            clear: both;
            li {
                width: 2rem;
                line-height: .6rem;
                text-align: center;
                font-size: .26rem;
                color: #252525;
                float: left;
                overflow: hidden;
                border: .01rem solid #252525;
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
            }
            .li-active {
                background: #252525;
                color: #fff;
            }
        }
    }
    .oxjs-content {
        font-size:.28rem;
        color:#666666;
        line-height:.56rem;
        margin: .3rem .3rem;
    }
    .img-class {
        margin: 0 .3rem;
        padding-bottom: .2rem;
        img {
            width: 100%;
            margin-bottom: .3rem;
        }
    }
</style>