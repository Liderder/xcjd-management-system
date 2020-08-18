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
            <el-table :data="appList" fit border>
                <el-table-column label="分类ID" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="分类名称" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="当前等级" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.rank }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="排序" header-align="center" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.sort" placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="状态" header-align="center" align="center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.state" active-text="显示" inactive-text="隐藏">
                        </el-switch>
                        <!-- <span style="margin-left: 10px">{{ scope.row.state }}</span> -->
                    </template>
                </el-table-column>
                <el-table-column label="操作" header-align="center" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="btn">
                <el-button type="primary">添加一级分类</el-button>
                <el-button type="primary">确认修改</el-button>
            </div>

        </div>
        <foot></foot>
    </div>
</template>



<script>
    import foot from '../../../footer/index.vue'
    export default {
        components: {
            foot
        },
        data() {
            return { 
                appList: [
                    {
                        id: 6,
                        name: '生活软件',
                        rank: '一级',
                        sort: 0,
                        state: true
                    },
                    {
                        id: 8,
                        name: '工作软件',
                        rank: '一级',
                        sort: 0,
                        state: true
                    },
                ],
            }
        },
        methods: {
            // table表单
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },

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

    .btn {
        float: right;
        margin:48px 58px 0 0;
    }
</style>