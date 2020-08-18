<template>
    <div>
        <div class="section1_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">内容</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">周刊管理</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">周刊列表</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="section2">
            <el-select class="selectId" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-input class="inputMainText" v-model="input" placeholder="请输入内容"></el-input>
            <span class="sortSpan">排序</span>
            <el-select class="selectSort" v-model="value2" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <span class="timeSpan">发布时间</span>
            <div class="block">
                <el-date-picker class="block1" v-model="valueData1" type="date" placeholder="选择开始日期">
                </el-date-picker>
            </div>
            <div class="block">
                <el-date-picker class="block2" v-model="valueData2" type="date" placeholder="选择结束日期">
                </el-date-picker>
            </div>
        </div>
        <div class="section3_table">
            <el-table :data="appList" fit border>
                <el-table-column type="selection" width="55" header-align="center" align="center">
                </el-table-column>
                <el-table-column label="周刊ID" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="周刊标题" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="周刊简介" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.content }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="周刊封面" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.firstPicture }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="发布时间" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.time }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="状态" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.state }}</span>
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
                options: [
                    {
                        value: '周刊ID',
                        label: '周刊ID'
                    },
                    {
                        value: '周刊标签',
                        label: '周刊标签'
                    }
                ],
                options2: [
                    {
                        value: '发布时间正序',
                        label: '发布时间正序'
                    },
                    {
                        value: '发布时间倒序',
                        label: '发布时间倒序'
                    }
                ],
                value: '',
                value2: '',
                input: '',
                valueData1: '',
                valueData2: '',
                appList: [
                    {
                        id: 6,
                        title: '第四届智能大会',
                        content: '6月24日，由国家发改委、科技部、工信部、国家广电总局、国家网信办、中国工程院、中国科学院、中国科协和天津市政府共同举办的第四届世界智能大会通过“云上”方式启动，行业专家齐聚线上，为智能科技领域的良性发展献言献策，为聚力建设人工智能先锋城市打造“天津智港”贡献力量。华为公司副总裁、华为云与计算中国区总裁史耀宏出席云上会议并发表观点：未来十年将是中国产业升级最关键的十年，尤其是在宏观环境变化的情况下，全世界的产业发展都有了弯道超车的机会，中国将有望通过“新基建”获得经济高质量发展的新“基”遇。',
                        firstPicture: 'asdasd',
                        time: '2020-09-09 12:08:56',
                        state:'正常'
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
        padding: 24px 0 70px 48px;
    }

    .selectId {
        width: 136px;
    }

    .inputMainText {
        width: 200px;
        margin-left: 16px;
    }

    .sortSpan {
        margin: 0 14px 0 58px;
    }

    .selectSort {
        width: 190px;
    }

    .timeSpan {
        margin-left: 36px;
        margin-right: 16px;
    }

    .block {
        display: inline-block;

    }

    .block2 {
        margin-left: 14px;
        width: 150px;
    }

    .block1 {
        width: 150px;
    }
</style>