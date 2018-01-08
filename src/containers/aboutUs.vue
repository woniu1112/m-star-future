<template>
    <div class="aboutUs">
        <div class="aboutUs-box">
            <div class="aboutUs-banner">
                <img src="http://ox2q37at2.bkt.clouddn.com/m/img/aboutUs/aboutUs-banner.png" alt="">
            </div>
            <ul class="aboutUs-list">
                <li class="list-first">
                    <p>“星鲜未来”是由国内影视龙头华策影视集团联合艺术教育品牌艺讯共同打造的O2O未来偶像养成品牌。“星鲜未来”隶属于浙江星未文化艺术有限公司，致力于面向全球华语区青少年儿童甄选优秀训练生学员，打造艺术训练生互联网社群平台。“星鲜未来”将结合线上线下综合气质、艺能、舞台表演等方面培养，由亚洲顶尖明星音乐制作人及影视戏剧导演团队倾力打造系列音乐专辑及影视作品，助力训练生学员的艺术梦想，全力培养新一代未来偶像。</p>
                </li>
                <li class="service">
                    <div class="title">
                        <div>
                            星鲜未来服务号
                            <span class="line-span"></span>
                        </div>
                    </div>
                    <div class="service-img">
                        <img src="http://ox2q37at2.bkt.clouddn.com/m/img/aboutUs/aboutUs-public.png" alt="" />
                    </div>
                </li>
                <li class="service">
                    <div class="title">
                        <div>
                            联系方式
                            <span class="line-span"></span>
                        </div>
                    </div>
                    <div>
                        <p class="concact">
                            北京办公地址：北京市朝阳区东四环中路41号嘉泰国际大厦B座B1-188室<br/>
                            邮           编：100025<br/>
                            电           话：010-85711587-615<br/>
                            杭州办公地址：杭州市西湖区文二西路西溪创意园华策影视C-C<br/>
                            邮           编：310012<br/>
                            电           话：027-65525957<br/>
                            客 服 电 话 ：400-111-9016
                        </p>
                    </div>
                </li>
            </ul>
            <div class="copyright">
                Copyright @2016 艺讯 All rights resered   鄂ICP备15008306号
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'aboutUs'

    }
</script>

<style lang="scss">
    .aboutUs-box {
        overflow: hidden;
        background: #fff;
    }
    .aboutUs-banner {
        padding: .4rem .3rem 0;
        img {
            border: none;
            width: 100%;
            -webkit-border-radius: .1rem;
            -moz-border-radius: .1rem;
            border-radius: .1rem;
            -webkit-box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
            -moz-box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
            box-shadow: 0.02rem 0 .04rem rgba(0,0,0,0.2),-0.02rem .04rem .04rem rgba(0,0,0,0.2);
        }
    }
    .aboutUs-list {
        padding: 0 .3rem;
        li {
            margin-top: .4rem;
            padding-bottom: .3rem;
            border-bottom: .01rem solid #dedede;
        }
        li:nth-last-child(1) {
            border:none;
        }
        .list-first {
            p {
                font-size:.28rem;
                color:#666666;
                line-height:.56rem;
            }
        }
        .service {
            .title {
                div {
                    height: 100%;
                    font-size: .3rem;
                }
                .line-span {
                    display: block;
                    width: .61rem;
                    height: .17rem;
                    border-bottom: .02rem solid #252525;
                }
            }
            .concact {
                margin-top: .3rem;
                font-size:.26rem;
                color:#666666;
                line-height: .56rem;
            }
            .service-img {
                text-align: center;
                margin: .56rem 0;
                img {
                    width: 3.25rem;
                    height: 3.24rem;
                }
            }
        }
    }
    .copyright {
        font-size:.18rem;
        color:#999999;
        margin-bottom: .3rem;
        text-align: center;
    }
</style>
