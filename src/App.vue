<template>
    <div class="app">
        <header-nav></header-nav>
        <!-- 路由 -->
        <div class="routers">
            <transition :name="transitionName">
                <router-view class="router" v-model="dataChange"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
//import HeaderNav from './components/header'
import HeaderNav from './components/headerSwiper'

export default {
    name: 'app',
    data() {
        return {
            dataChange: '',
            transitionName: 'slide-left'
        }
    },
    methods: {
        beforeRouteUpdate (to, from) {
            $('html,body').animate({scrollTop: '0px'})

            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length

            if (to.name == 'FutureTrainStudents' || from.name == 'FutureTrainStudents')
                this.transitionName = 'slide-left'
            else
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    },
    components: {
        HeaderNav
    },
    watch: {
        '$route': 'beforeRouteUpdate'
    }
}
</script>

<style>
    .routers {
        margin-top: .88rem;
    }
    /*.slide-enter-active,.slide-leave-active {*/
        /*-webkit-transition: all .3s;*/
        /*-moz-transition: all .3s;*/
        /*-ms-transition: all .3s;*/
        /*-o-transition: all .3s;*/
        /*transition: all .3s;*/
    /*}*/
    .slide-left-enter-active,.slide-left-leave-active,.slide-right-enter-active,.slide-right-leave-active {
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
    }

    .slide-left-enter {
        -webkit-transform: translate3d(100%,0,0);
        -moz-transform: translate3d(100%,0,0);
        -ms-transform: translate3d(100%,0,0);
        -o-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
    }
    .slide-left-leave-to {
        -webkit-transform: translate3d(-100%,0,0);
        -moz-transform: translate3d(-100%,0,0);
        -ms-transform: translate3d(-100%,0,0);
        -o-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
    }
    .slide-right-enter {
        -webkit-transform: translate3d(-100%,0,0);
        -moz-transform: translate3d(-100%,0,0);
        -ms-transform: translate3d(-100%,0,0);
        -o-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
    }
    .slide-right-leave-to {
        -webkit-transform: translate3d(100%,0,0);
        -moz-transform: translate3d(100%,0,0);
        -ms-transform: translate3d(100%,0,0);
        -o-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
    }


</style>
