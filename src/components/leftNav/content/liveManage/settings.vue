<template>
    <div>
        <div class="section1_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">内容</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">直播管理</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">配置</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="section2">
            <div class="section2_item">
                <span class="section2_title">直播地址</span>
                <el-input v-model="liveAdress" placeholder="请输入内容" class="liveAdress"></el-input>
            </div>
            <div class="section2_item">
                <span class="section2_title">会议主标题</span>
                <el-input v-model="liveMainTitle" placeholder="请输入内容" class="liveMainTitle"></el-input>
            </div>
            <div class="section2_item">
                <span class="section2_title">会议副标题</span>
                <el-input v-model="liveSecondTitle" placeholder="请输入内容" class="liveSecondTitle"></el-input>
            </div>
            <div class="section2_item">
                <span class="section2_title">页面图片</span>
                <div class="uploadPagePicture">
                    <img src="@/assets/livePng.png" alt="">
                    <br>
                    <el-button class="uploadBtn" type="primary" icon="el-icon-upload">上传图片</el-button>
                </div>
                <div style="display: inline-block; margin-left:100px; vertical-align: middle;">
                    <i class="el-icon-warning-outline" style="color: #999999;"></i>
                    <span style="color: #999999;">封面尺寸150*150</span>
                </div>
            </div>
            <div class="section2_item">
                <span class="section2_title">简介图片</span>
                <div class="uploadPagePicture">
                    <img src="@/assets/livePng.png" alt="">
                    <br>
                    <el-button class="uploadBtn" type="primary" icon="el-icon-upload">上传图片</el-button>
                </div>
                <div style="display: inline-block; margin-left:100px; vertical-align: middle;">
                    <i class="el-icon-warning-outline" style="color: #999999;"></i>
                    <span style="color: #999999;">封面尺寸150*150</span>
                </div>
            </div>
            <div class="section2_item">
                <span class="section2_title">直播介绍</span>
                <el-input class="liveTest" type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
                </el-input>
            </div>
            <div class="section2_item">
                <span class="section2_title">直播年月</span>
                <el-date-picker v-model="liveDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="section2_item">
                <span class="section2_title">直播时间</span>
                <el-input v-model="liveTime" placeholder="请输入内容" class="liveTime"></el-input>
            </div>
            <el-button class="postMenuBtn" type="primary">确认</el-button>
            <el-button>取消</el-button>
        </div>
        <foot></foot>
    </div>
</template>



<script>
    import foot from '@/components/footer'
    export default {
        components: {
            foot
        },
        data() {
            return {
                liveAdress: '',
                liveMainTitle: '',
                liveSecondTitle: '',
                liveTime: '',
                textarea: '',
                liveDate: ''
            }
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

    /* section2 */
    .section2 {
        padding-bottom: 70px;
    }

    .section2_item {
        margin: 46px 0 0 122px;

    }

    .section2_title{
        display: inline-block;
        width: 80px;
        text-align: right;
        padding: 0 25px 0 0;
        vertical-align: middle;
    }

    .liveAdress {
        width: 640px;
    }

    .liveMainTitle {
        width: 640px;
    }

    .liveSecondTitle {
        width: 315px;
    }

    .liveTime {
        width: 315px;
    }

    /* 上传页面图片 */
    .uploadPagePicture {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
    }

    .uploadBtn {
        margin-top: 24px;
    }

    .liveTest {
        width: 315px;
        vertical-align: middle;
    }

    .postMenuBtn {
        margin: 24px 0 0 260px;
    }
</style>