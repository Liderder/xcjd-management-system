<template>
    <div>
        <div class="section1_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">内容</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">文章管理</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">文章设置</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="section2">
            <div class="section2_newsState">
                <span class="section2_radioTitle">新闻审核状态</span>
                <el-radio v-model="newsState" label="1">自动审核</el-radio>
                <el-radio v-model="newsState" label="2">人工审核</el-radio>
            </div>
            <div class="section2_commentsState">
                <span class="section2_radioTitle">评论状态</span>
                <el-radio v-model="commentState" label="1">开启</el-radio>
                <el-radio v-model="commentState" label="2">关闭</el-radio>
            </div>
            <div class="section2_commentsExam">
                <span class="section2_radioTitle">评论审核状态</span>
                <el-radio v-model="commentsExam" label="1">开启</el-radio>
                <el-radio v-model="commentsExam" label="2">关闭</el-radio>
            </div>
            <el-button class="sureBtn" type="primary" @click="sendArticleSet()">确认</el-button>
            <el-button type="danger" @click="sendArticleSet()">取消</el-button>
        </div>
        <foot></foot>
    </div>
</template>



<script>
    import foot from '../../../footer/index.vue'
    export default {
        data() {
            return {
                newsState: '',
                commentState: '',
                commentsExam: ''
            }
        },
        components: {
            foot
        },
        methods: {
            sendArticleSet() {
                let data = {
                    'newsState': this.newsState,
                    'commentState': this.commentState,
                    'commentsExam': this.commentsExam
                }
                console.log(data)
            }
        },

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
    .section2 {
        margin: 0 0 0 88px;
    }

    .section2_radioTitle {
        display: inline-block;
        width: 100px;
        margin-top: 50px;
        text-align: right;
        padding-right: 24px;
    }

    /* 按钮 */
    .sureBtn {
        margin: 48px 0 0 124px
    }
</style>