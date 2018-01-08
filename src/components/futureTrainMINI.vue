<template>
    <div class="futureTrainStudents">
        <div class="mini-content">
            “mini训练生”汇聚国内顶级的师资力量，采取“感知性跟学互动”的体验式线上教学体制。学员通过线上学习模拟拍摄、通告申请，完成全部学习流程，有效利用碎片时间，进行趣味性启蒙学习，获取平台机会，从而开启自己专属的艺术素养启蒙。
        </div>
        <div class="mini-video-box">
            <video ref="videoFuture" class="mini-video" loop="true" poster="http://ox2q37at2.bkt.clouddn.com/img/video-img.png">
                <source src="http://ox2q37at2.bkt.clouddn.com/video/star-future.mp4" type="video/mp4">
            </video>
            <img v-show="playImgShow" @click="playImg" src="http://ox2q37at2.bkt.clouddn.com/m/img/index/index-play-img.png" alt="" class="mini-play-img" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'futureTrainStudents',
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
        methods: {
            playImg() {
                this.playImgShow = false;
                this.$refs.videoFuture.play();
            }
        }
    }
</script>

<style lang="scss">
    .mini-content {
        font-size:.28rem;
        color:#666666;
        line-height:.56rem;
        padding: 0 .3rem;
    }
    .mini-video-box {
        margin-top: .3rem;
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
</style>