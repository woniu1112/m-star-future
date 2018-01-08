<template>
    <div class="futureTrainStudents">
        <div class="futureTrainStudents-box">
            <div class="futureTrainStudents-content">
                “FUTURE训练生计划”是针对4-13岁各阶段训练生学员定制的整套培养体系，由包含启蒙、基础训练、导师
                作品训练的课程体系与为训练生学员提供实践舞台及参选机会的“星鲜通告”组成。学员将通过“训练+实践”的模式，在线上及线下课程训练中提高艺能，在银幕与舞台实践中完成艺能的升华，收获自信与成长。<br/>“FUTURE训练生计划”，只为不平凡的你！！
            </div>
            <div class="futureTrainStudents-video-box">
                <video ref="videoFuture" class="futureTrainStudents-video" loop="true" poster="http://ox2q37at2.bkt.clouddn.com/img/video-img.png">
                    <source src="http://ox2q37at2.bkt.clouddn.com/video/star-future.mp4" type="video/mp4">
                </video>
                <img v-show="playImgShow" @click="playImg" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-play-img.png" alt="" class="futureTrainStudents-play-img" />
            </div>
            <div class="futureTrainStudents-tixi">
                <!--<div class="title">-->
                    <!--<div>-->
                        <!--培养体系-->
                        <!--<span class="line-span"></span>-->
                    <!--</div>-->
                <!--</div>-->
                <ul class="tixi-nav">
                    <li @click="tixiNav" :class="tixiLi1 ? 'li-active' : ''">
                        FUTURE训练生课程体系
                    </li>
                    <li @click="tixiNav" :class="tixiLi2 ? 'li-active' : ''">
                        星鲜通告
                    </li>
                    <!--<li @click="tixiNav" :class="tixiLi3 ? 'li-active' : ''">-->
                        <!--作品发行-->
                    <!--</li>-->
                </ul>
                <div class="star-line">
                    <img class="float-left img-line" src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-line_02.png" />
                    <span id="line-title">艺术启蒙训练+艺术基础训练+导师作品训练</span>
                    <img class="float-right img-line" src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-line_01.png" />
                </div>
                <!--课程体系-->
                <div v-show="tixiLi1" class="future-list-div">
                    <p class="class_tixi">
                        华策星鲜未来偶像学院是“星鲜未来”品牌旗下训练生养成平台，面向5-13岁拥有艺术梦想的优质学员招生。学院将采取评测入学方式，由金牌导师面授并推送国内顶尖音乐及影视制作人打造作品；学院将采用体验式教学训练模式，通过作品课训练、作品录制训练，通告实践训练等环节让学员最终参与到专业级音乐影视专辑的录制发行，从而培养出一批高素质实践型明星学员。
                    </p>
                    <ul>
                        <li class="new-class">
                            <div class="title-class">
                                <span>偶像学院</span>（艺术基础训练+导师作品训练）
                            </div>
                            <div class="img-class-box">
                                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-m-new_oxxy.png" alt="" />
                            </div>
                            <div class="content-class">
                                偶像学院是“FUTURE训练生计划”课程体系的线下课程产品，包含艺术基础训练课程和偶像教室的导师作品训练课程。偶像学院的加盟方式是整店加盟。
                            </div>
                        </li>
                        <li class="new-class">
                            <div class="title-class">
                                <span>偶像教室</span>（导师作品训练）
                                <router-link tag="div" class="more" to="/futureTrain/futureTrainOX">More</router-link>
                            </div>
                            <div class="img-class-box">
                                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-m-new_oxjs.png" alt="" />
                            </div>
                            <div class="content-class">
                                偶像教室是一款高端旗舰型课程产品，面向5-13岁拥有艺术梦想的学员招生。通过专业评测顺利入学的训练生，将由金牌导师面授作品训练课程，并由国内顶尖音乐及影视制作人打造原创作品，作品最终将在央视频道、QQ音乐等强势媒体公开发行。
                            </div>
                        </li>
                        <li class="new-class">
                            <div class="title-class">
                                <span>MINI训练生</span>（艺术启蒙训练）
                            </div>
                            <div class="img-class-box">
                                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-m-new_mini.png" alt="" />
                            </div>
                            <div class="content-class">
                                “MINI训练生”汇聚国内顶级的师资力量，采取“感知性跟学互动”的体验式线上教学体制，配合线下基础训练课程。学员通过线上学习、模拟拍摄、通告申请以及线下课程完成全部学习流程，有效利用碎片时间，进行趣味性启蒙学习，获取平台机会，从而开启自己专属的艺术素养启蒙
                            </div>
                        </li>
                        <!--<li>-->
                            <!--<img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-yn-voice.png" class="float-left" alt="">-->
                            <!--<div class="float-right content-div">-->
                                <!--<div class="absolute">-->
                                    <!--<p class="voice">声乐训练</p>-->
                                    <!--<span class="line"></span>-->
                                    <!--<p class="train">TRAINING<br/>OF VOCAL MUSIC</p>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</li>-->
                    </ul>
                </div>
                <!--星鲜通告-->
                <div v-show="tixiLi2" class="future-list-div">
                    <p class="class_tixi">
                        “星鲜通告”是华策星鲜未来为怀揣艺术梦想的孩子接连实践舞台及参选机会而打造的内容品牌。通过与各大影视公司、知名栏目组，知名品牌及活动公司合作，为艺术生提供影视剧、综艺节目及大型演出小演员甄选机会及相关主题文化交流活动。旨在通过丰富多彩的实践，让学员们展示所学、巩固所学。让他们在实践中领悟生活的美好，完成审美的提升，得到艺能的升华。                    </p>
                    <ul>
                        <li>
                            <router-link to="/active/ActiveJGHC">
                                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-tg-JGHC.png" class="float-left" alt="">
                                <div class="float-right content-div">
                                    <div class="absolute">
                                        <p class="sj">一本与众不同的武侠推理小说,语言质朴如金庸,情节紧张如古龙。七天之内,青城山上人一个接一个死去,并牵扯出十年前的一桩血案...</p>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/active/ActiveDHLG">
                                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-tg-DHLG.png" class="float-right" alt="">
                                <div class="float-left content-div">
                                    <div class="absolute" style="left: 45%;">
                                        <p class="sj">《东海龙棺》是一部恐怖、惊悚、玄幻、剧情的一部网络电影，讲述了男主人公从小学习阴阳之术，从而去盗墓的一片网络电影。</p>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/active/ActivePZXY">
                                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-tg-XY.png" class="float-left" alt="">
                                <div class="float-right content-div">
                                    <div class="absolute">
                                        <p class="sj">《萍踪侠影》是根据武侠小说《萍踪侠影录》改编的大型武侠电视剧。</p>
                                    </div>
                                </div>
                            </router-link>
                        </li> -->
                    </ul>
                </div>
                <!--作品发行-->
                <div v-show="tixiLi3" class="future-list-div">

                    <ul>
                        <li style="padding: .34rem;">
                            <img style="width: 2.3rem;" src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-zp-01.png" class="float-left" alt="">
                            <div class="float-right width-369 content-div">
                                <div class="absolute">
                                    <p class="zp-p1">《 Dream UP 2017 Ⅰ》</p>
                                    <p class="zp-p2">歌曲一：超级英雄儿童版</p>
                                </div>
                            </div>
                        </li>
                        <li style="padding: .34rem;">
                            <img style="width: 2.3rem;" src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-zp-02.png" class="float-right" alt="">
                            <div class="float-left width-369 content-div">
                                <div class="absolute" style="left: 50%;">
                                    <p class="zp-p1">《 Dream UP 中华传统文化影视专辑系列 》</p>
                                    <p class="zp-p2">影视1：Q版万卷楼</p>
                                </div>
                            </div>
                        </li>
                        <li style="padding: .34rem;">
                            <img style="width: 2.3rem;" src="http://ox2q37at2.bkt.clouddn.com/m/img/futureTrain/future-zp-03.png" class="float-left" alt="">
                            <div class="float-right width-369 content-div">
                                <div class="absolute">
                                    <p class="zp-p1">《 Dream UP 中华传统文化影视专辑系列 》</p>
                                    <p class="zp-p2">影视2：少儿版孔融让梨</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'futureTrainStudents',
        data() {
            return {
                playImgShow: true,
                tixiLi1: true,
                tixiLi2: false,
                tixiLi3: false
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
        methods: {
            playImg() {
                this.playImgShow = false;
                this.$refs.videoFuture.play();
            },
            tixiNav(el) {
                let elHtml = el.target.innerText;
                if (elHtml == 'FUTURE训练生课程体系') {
                    this.tixiLi1 = true;
                    this.tixiLi2 = false;
                    this.tixiLi3 = false;
                    $('#line-title').html('艺术启蒙训练+艺术基础训练+导师作品训练')
                } else if (elHtml == '星鲜通告') {
                    this.tixiLi1 = false;
                    this.tixiLi2 = true;
                    this.tixiLi3 = false;
                    $('#line-title').html('各式活动异彩纷呈，明星场合有你身影')
                }
            }
        }
    }
</script>

<style lang="scss">
    .futureTrainStudents-content {
        font-size:.28rem;
        color:#666666;
        line-height:.56rem;
        padding: 0 .3rem;
    }
    .futureTrainStudents-video-box {
        margin-top: .3rem;
        position: relative;
        text-align: center;
        padding: 0 .3rem;
        .futureTrainStudents-video {
            width: 100%;
            -webkit-border-radius: .1rem;
            -moz-border-radius: .1rem;
            border-radius: .1rem;
        }
        .futureTrainStudents-play-img {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            z-index: 10;
            width: .64rem;
            height: .64rem;
        }
    }
    .futureTrainStudents-tixi {
        margin-top: .3rem;
        .title {
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
        .tixi-nav {
            width: 6.4rem;
            overflow: hidden;
            margin: .3rem auto 0;
            clear: both;
            li {
                width: 3.2rem;
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
        .star-line {
            margin: .3rem auto;
            line-height: .4rem;
            text-align: center;
            width: 100%;
            #line-title {
                font-size:.24rem;
                color:#010101;
                letter-spacing:.01rem;
            }
            .img-line {
                width: 1.2rem;
                vertical-align: middle;
                margin-top: .1rem;
            }
        }
        .future-list-div {
            padding: 0 .3rem;
            .class_tixi {
                font-size:.28rem;
                color:#666666;
                line-height:.56rem;
                margin-bottom: .3rem;
            }
            ul {
                padding-bottom: .3rem;
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
                            -webkit-transform: translate(-50%,-50%);
                            -moz-transform: translate(-50%,-50%);
                            -ms-transform: translate(-50%,-50%);
                            -o-transform: translate(-50%,-50%);
                            transform: translate(-50%,-50%);
                        }
                        .voice {
                            font-size:.28rem;
                            color:#252525;
                            letter-spacing:.1rem;
                        }
                        .line {
                            display: block;
                            border:.02rem solid #252525;
                            width:.7rem;
                            margin: .25rem auto .15rem;
                        }
                        .train {
                            font-size: .18rem;
                            color:#252525;
                            line-height:.35rem;
                            text-align:center;
                        }
                        .sj {
                            font-size:.22rem;
                            color:#252525;
                            line-height:.4rem;
                            text-align: left;
                        }
                        .zp-p1 {
                            font-size:.3rem;
                            color:#252525;
                            text-align:left;
                            margin-bottom: .25rem;
                        }
                        .zp-p2 {
                            font-size:.28rem;
                            color:#666666;
                            line-height:.48rem;
                            text-align:left;
                        }
                    }
                    .width-369 {
                        width: 3.69rem;
                    }
                }
                .new-class {
                    height: auto;
                    .title-class {
                        font-size: .28rem;
                        color: #666666;
                        line-height: .28rem;
                        margin-top: .1rem;
                        span {
                            font-size: .3rem;
                            color: #252525;
                        }
                        .more {
                            float: right;
                            background: #252525;
                            color: #ffffff;
                            padding: .03rem .12rem;
                            border-radius: .05rem;
                            font-size: .22rem;
                        }
                    }
                    .img-class-box {
                        margin: .3rem auto 0;
                        img {
                            width: 100%;
                        }
                    }
                    .content-class {
                        font-size:.28rem;
                        color:#666666;
                        line-height:.56rem;
                    }
                }

            }
        }
    }
</style>