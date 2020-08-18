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
            <el-table :data="listData" border fit>
                <el-table-column type="selection" header-align="center" align="center">
                </el-table-column>
                <el-table-column label="ID" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.comment_id }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="回复人信息" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <h4 class="section2_returnName">用户名:{{scope.row.username}}</h4>
                            <h4 class="section2_returnName">昵称:{{scope.row.nickname}}</h4>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="回复" header-align="center" min-width="180%">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <h4 class="section2_content">文章标题:{{scope.row.title}}</h4>
                            <h4 class="section2_content">时间:{{scope.row.create_time}}</h4>
                            <h4 class="section2_content">IP:{{scope.row.ip}}</h4>
                            <el-divider></el-divider>
                            <div class="replyLable">回复
                            </div>
                            <span class="section2_content">{{scope.row.content}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="赞" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            {{scope.row.zan}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="状态" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <div class="stateLable0" v-if="scope.row.status === 0">待审核
                            </div>
                            <div class="stateLable1" v-if="scope.row.status === 1">通过
                            </div>
                            <div class="stateLable2" v-if="scope.row.status === 2">未通过
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" header-align="center" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button class="deleteAllBtn" type="danger" @click="sendArticleSet()">批量删除</el-button>
            <!-- 分页器 -->
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                </el-pagination>
            </div>
        </div>
        <foot></foot>
    </div>
</template>



<script>
    import foot from '../../../footer/index.vue'
    import { articleList } from '@/request/api.js'
    export default {
        components: {
            foot
        },
        data() {
            return {
                listData: [],
                currentPage3: 5,
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            getArticleList() {
                articleList().then(res => {
                    this.listData = res.data;
                    console.log(res.data);
                })
            },
            // 分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        created() {
            this.getArticleList()
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

    .section2 {
        padding-bottom: 70px;
    }

    /* 回复人信息的字体间距 */
    .section2_returnName {
        letter-spacing: 2px;
    }

    /* 回复内容的字体间距 */
    .section2_content {
        letter-spacing: 1px;
    }

    /* 修改分割线样式 */
    .el-divider {
        margin: 8px 0;
    }

    /* 回复的按钮 */
    .replyLable {
        display: inline-block;
        width: 46px;
        height: 24px;
        background-color: #1E9FFF;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        margin-right: 6px;
    }

    /* 状态 */
    .stateLable0{
        display: inline-block;
        width: 56px;
        height: 24px;
        background-color: rgb(144, 147, 153);
        color: #fff;
        text-align: center;
        border-radius: 4px;
        margin-right: 6px;
    }
    .stateLable1{
        display: inline-block;
        width: 56px;
        height: 24px;
        background-color: #1E9FFF;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        margin-right: 6px;
    }
    .stateLable2{
        display: inline-block;
        width: 56px;
        height: 24px;
        background-color: rgb(245,108,108);
        color: #fff;
        text-align: center;
        border-radius: 4px;
        margin-right: 6px;
    }

    /* 去点table最下面的白线 */
    .el-table::before {
        z-index: inherit;
    }

    .deleteAllBtn {
        margin: 20px 0 0 20px;
    }
    .block{
        float: right;
        margin:20px 60px 0 0 ;
    }
</style>