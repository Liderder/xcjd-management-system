<template>
    <div class="leftNav" :key="this.$store.state.topNavItem">
        <el-menu :default-active="activerouter" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu @click.native="ppp(secondItem)"
                :index="secondItem.name != ''? secondItem.name : secondItem.title"
                v-for="(secondItem,index) in leftList[selectLeftList]">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{secondItem.title}}</span>
                </template>
                <el-menu-item v-show="thirdItem.display" @click="showThisPages(thirdItem.name)" :index="thirdItem.name"
                    v-for="(thirdItem,indexT) in secondItem.sonNav">
                    {{thirdItem.title}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        props: ["leftList"],
        name: 'globle',
        data() {
            return {
                selectLeftList: '',
                activerouter: ''
            }
        },
        components: {
        },
        methods: {
            handleOpen(key, keyPath) {
                //     console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                //     console.log(key, keyPath);
            },
            // 获取点击的路由
            showThisPages(name) {
                console.log(name);
                // if(name != ''){

                // }
                this.$router.push('/home/' + name)
            },
            ppp(res) {
                if (res.name != '') {
                    console.log(res.name)
                    this.$router.push('/home/' + res.name)
                }
            }
        },
        created() {
            this.PCwidth = document.body.clientWidth
            this.selectLeftList = this.$store.getters.getTopPage
        },
        computed: {
            isFollow() {
                return this.$store.getters.getTopPage
            }
        },
        watch: {
            isFollow(newVal, oldVal) {
                this.selectLeftList = this.$store.getters.getTopPage
                // 记住子菜单的选项
                this.activerouter = window.location.pathname;
                this.activerouter = this.activerouter.substr(6)
                console.log('activerouter:',this.activerouter);
            },
            // $route: function (to, from) {
            //     console.log(this.$route.matched)
            // }
        },
        mounted() {
            this.activerouter = window.location.pathname;
            // console.log(this.activerouter)
            this.activerouter = this.activerouter.substr(6)
            // console.log(this.activerouter)
        },
    }
</script>

<style scoped>
    .leftNav {
        width: 180px;
        overflow: hidden;
        float: left;
    }

    .el-menu {
        border-width: 0;
    }

    .el-menu-item {
        background-color: rgb(57, 61, 73) !important;
    }
</style>