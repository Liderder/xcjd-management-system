<template>
    <div>
        <div class="section1_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">内容</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">应用市场</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">应用分类</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-if="ifShow" class="section2">
            <el-table :data="tableData" fit border>
                <el-table-column type="selection" header-align="center" align="center">
                </el-table-column>
                <el-table-column label="应用ID" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="应用标题" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <span size="medium">{{ scope.row.title }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="所属分类" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <span size="medium">{{ scope.row.kinds }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="版本号" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <span size="medium">{{ scope.row.version }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="发布时间" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <span size="medium">{{ scope.row.time }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" header-align="center" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button @click="ifShow = false" class="addBtn" type="primary">添加应用</el-button>
        </div>
        <div v-else>
            <el-button size="mini" class="returnBtn" @click="ifShow = true">返回</el-button>
            <div class="section_false_item">
                <span class="section_fase_span"></span>
            </div>
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
                ifShow:true,
                tableData: [
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },{
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    {
                        id: 4,
                        title: '王者',
                        kinds: '生活软件',
                        version: '1.10.1',
                        time: '2020-4-13 09:35:07'
                    },
                    

                ]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
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
    .section2{
        padding-bottom: 56px;
    }
    .addBtn{
        margin: 16px 0 0 50px;
    }
    /* section_false开始 */
    .returnBtn {
        margin: 12px 0 0 12px;
    }
</style>