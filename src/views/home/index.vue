<template>
    <div>
        <zl_header :topList="topList" class="header"></zl_header>
        <leftnav :leftList="leftList" class="nav"></leftnav>
        <router-view class="content"></router-view>
    </div>
</template>


<script>
    import zl_header from '@/components/header/index.vue'
    import leftnav from '@/components/leftNav/index.vue'
    import { Nav } from '@/request/api.js'
    export default {
        name: 'home',
        components: {
            zl_header,
            leftnav
        },
        data() {
            return {
                topList: [],
                leftList: [],
            }
        },
        created() {
            // 获取导航
            this.getNav()
        },
        beforeCreate() {
            // change bgc84,92,100
            document.querySelector('body').setAttribute('style', 'background-color: rgb(84,92,100)');
        },
        methods: {
            getNav() {
                Nav().then(res => {
                    console.log(res.data)
                    // let data = res.data.data
                    let data = res.data
                    this.getDetial(data, 1)
                })
            },
            getDetial(data, num) {
                for (let index in data) {
                    if (num === 1) {
                        // 拿到头部导航栏
                        this.topList.push(data[index].title)
                    }
                    this.leftList.push(data[index].sonNav)
                }
                return;
            }
        }
    }
</script>

<style>
    .header{
        position: relative;
        z-index: 999;
    }
    .content {
        background-color: #fff;
        position: absolute;
        top: 60px;
        bottom: 0;
        right: 0;
        left: 180px;
        overflow-y:auto
    }

    /* .nav {
        position: fixed;
        padding-top:50px;
        top: 0;
        bottom: 0;
        left: 0;
        width: 180px;
        background-color: rgb(84,92,100);
        z-index: 0;
    } */
</style>