<template>
    <div class="lz_header">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu :default-active="page" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item class="title">后台管理中心</el-menu-item>
                    <el-menu-item :index="index.toString()" v-for="(item,index) in topList" @click="getPage(index)">
                        {{item}}
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <div class="close" @click="returnLogin()">
            <i class="el-icon-circle-close"></i>
            <span>退出登陆</span>
        </div>
    </div>
</template>

<script>
    import { Message, } from 'element-ui'
    import { logout } from '../../request/api.js'
    export default {
        props: ["topList"],
        name: 'lz_header',
        components: {
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                page: ''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            },
            returnLogin() {
                logout().then(res => {
                    this.$router.push('/');
                    localStorage.removeItem("token")
                    // console.log(window.localStorage.getItem("token"))
                    Message({ message: '退出登陆', type: 'success' });
                })

            },
            getPage(index) {
                this.$store.commit('setTopPage', index);
                // sessionStorage.removeItem("headPage");
                sessionStorage.setItem('headPage', index);
                // this.$store.state.topNavItem = index 
            }

        },
        computed: {

        },
        created() {
            this.page = sessionStorage.getItem('headPage');
            if (this.page === null) {
                this.page = '0'
            }
            this.$store.commit('setTopPage', this.page)
            console.log(this.page)
        },
    }
</script>

<style scoped>
    .el-menu {
        border-bottom-width: 0;
    }

    .title {
        width: 180px;
        text-align: center;
    }

    .close {
        position: absolute;
        top: 22px;
        right: 60px;
        color: #fff;
    }

    .close span {
        font-size: 14px;
        margin-left: 10px;
        vertical-align: top;
        cursor: pointer;
    }
</style>