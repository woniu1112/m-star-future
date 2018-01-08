<template>
    <div class="header">
        <div class="header-nav">
            <ul class="header-nav-ul" id="headerNav">
                <li><router-link class="header-router" to="/index">首页</router-link></li>
                <li><router-link class="header-router" to="/news">星闻</router-link></li>
                <li><router-link class="header-router" to="/futureTrain">Future训练生计划</router-link></li>
                <li><router-link class="header-router" to="/trainStudents">训练生</router-link></li>
                <li><router-link class="header-router" to="/active">星鲜通告</router-link></li>
                <li><router-link class="header-router" to="/dreamUp">DREAM UP</router-link></li>
                <li><router-link class="header-router" to="/aboutUs">关于我们</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'header',
        data() {
            return {

            }
        },
        mounted() {
        }
    }

    function numCeil(str) {
        var arr = str.split('px');
        return Number(arr[0]);
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        overflow: hidden;
        border-bottom: 1px solid #e1e1e1;
        background: #fff;
        z-index: 100;
        padding: 0 .3rem;
        .header-nav {
            height: 1.98rem;
            width: 100%;
            overflow-x: scroll;
            overflow-y: hidden;
            .header-nav-ul {
                height: 100%;
                width: 182%;
                padding: 0 .3rem;
                display: flex;
                flex-wrap: nowrap;
                li {
                    flex-grow: 1;
                    padding: 0 .25rem;
                    line-height: .88rem;
                    font-size: .28rem;
                }

            }
        }

    }
    .router-link-active {
        color: #d09120;
    }
</style>
