<template>
    <div>
        <div class="section1_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">内容</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">文章管理</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">免责声明</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="section2">
            <span class="section2_title">免责声明</span>
            <el-input v-model="input" placeholder="请输入内容（最多输入100字）" maxlength="100"></el-input>
            <br>
            <el-button type="primary" @click="sendDisciaimer()">确认</el-button>
        </div>
        <foot></foot>
    </div>
</template>



<script>
    import foot from '../../../footer/index.vue'
    export default {
        data() {
            return {
                input: ''
            }
        },
        methods: {
            sendDisciaimer(){
                console.log(this.input)
            }
        },
        components:{
            foot
        }
    }
</script>


<style scoped>
    /* section1_面包屑导航 */
    .section1_header {
        height: 50px;
        background-color: #EEEEEE;
    }

    .firstBreadNav {
        line-height: 50px;
        font-size: 17px;
        margin-left: 24px;
    }

    .breadNav {
        font-size: 17px;
        line-height: 50px;
    }

    /* section2_ */
    .el-input {
        width: 1000px;
    }

    .section2_title {
        padding-right: 24px;
    }

    .section2 {
        margin: 48px 0 0 88px;
    }
    .el-button{
        margin: 24px 0 0 88px;
    }
</style>