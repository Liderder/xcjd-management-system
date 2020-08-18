<template>
    <div>
        <div class="section1_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">内容</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">文章管理</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">文章分类</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-if="ifShow">
            <div class="section2">
                <el-select v-model="value" placeholder="请选择" style="width: 120px;">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-input class="section2_keywords" v-model="input" placeholder="请输入关键词" style="width: 160px;"
                    suffix-icon="el-icon-zoom-in"></el-input>
                <div class="block">
                    <span class="demonstration">创建时间</span>
                    <el-date-picker v-model="startTime" type="date" placeholder="开始时间">
                    </el-date-picker>
                </div>
                <div class="block block2">
                    <el-date-picker v-model="finishTime" type="date" placeholder="结束时间">
                    </el-date-picker>
                </div>
                <el-button class="searchBtn" type="primary" icon="el-icon-search">搜索</el-button>
                <el-button @click="ifShow = false" type="primary">添加一级分类</el-button>
            </div>
            <div class="section3">
                <el-table :data="tableData1" fit border>
                    <el-table-column type="selection" header-align="center" align="center" fixed>
                    </el-table-column>
                    <el-table-column label="文章ID" header-align="center" align="center" min-width="50%">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.cid }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="分类名称" header-align="center" align="center">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <span size="medium">{{ scope.row.cname }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="字母缩写" header-align="center" align="center">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <span size="medium">{{ scope.row.alias }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="当前等级" header-align="center" align="center">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <span size="medium">{{level}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="下级" header-align="center" align="center">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <span size="medium" @click="viewSubordinates(scope.$index, scope.row)"
                                    style="cursor: pointer;">查看下级（{{ scope.row.sonList.length }}）</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="排序" header-align="center" align="center">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <span size="medium">{{ scope.row.sort }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" header-align="center" align="center" min-width="100%">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.version" active-text="显示" inactive-text="隐藏">
                            </el-switch>
                            <!-- <span style="margin-left: 10px">{{ scope.row.state }}</span> -->
                        </template>
                    </el-table-column>
                    <el-table-column label="首页显示" header-align="center" align="center" min-width="100%">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.version" active-text="显示" inactive-text="隐藏">
                            </el-switch>
                            <!-- <span style="margin-left: 10px">{{ scope.row.state }}</span> -->
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" header-align="center" align="center" fixed="right" min-width="100%">
                        <template slot-scope="scope">
                            <el-button size="mini" type="message" @click="handleDelete(scope.$index, scope.row)"
                                style="width:122px;margin-bottom: 6px;">添加子分类
                            </el-button>
                            <br>
                            <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div v-else>
            <el-button size="mini" class="returnBtn" @click="ifShow = true">返回</el-button>
            <div class="section_false_item">
                <span class="section_false_span">上级分类</span>
                <el-select v-model="ParentInput" placeholder="请选择">
                    <el-option v-for="item in ParentOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

            </div>
            <div class="section_false_item">
                <span class="section_false_span">分类名称</span>
                <el-input class="Input" v-model="ParentNameInput" placeholder="请输入内容"></el-input>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">别名</span>
                <el-input class="Input" v-model="aliasInput" placeholder="请输入内容"></el-input>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">SEO标题</span>
                <el-input class="Input" v-model="SEOtitle" placeholder="请输入内容"></el-input>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">SEO关键词</span>
                <el-input class="Input" v-model="SEOkey" placeholder="请输入内容"></el-input>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">SEO描述</span>
                <el-input class="liveTest Input" type="textarea" :rows="5" placeholder="请输入内容" v-model="SEOdiscripe">
                </el-input>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">列表模板</span>
                <el-select v-model="tableModel" placeholder="请选择">
                    <el-option v-for="item in tableModelOptions" :key="item.value" :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">详情模板</span>
                <el-select v-model="modelDetial" placeholder="请选择">
                    <el-option v-for="item in modelDetialOptions" :key="item.value" :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">排序</span>
                <el-input class="Input" v-model="order" placeholder="请输入内容"></el-input>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">状态</span>
                <el-switch v-model="stateSwich" active-text="显示" inactive-text="隐藏">
                </el-switch>
            </div>
            <div class="section_false_item">
                <span class="section_false_span">首页显示</span>
                <el-switch v-model="homePageStateSwich" active-text="显示" inactive-text="隐藏">
                </el-switch>
            </div>
        </div>
        <foot></foot>
    </div>
</template>



<script>
    import { articleType } from '@/request/api.js'
    import foot from '../../../footer/index.vue'
    export default {
        components: {
            foot
        },
        data() {
            return {
                ifShow: true,
                options: [
                    {
                        value: '1',
                        label: '分类ID'
                    },
                    {
                        value: '2',
                        label: '分类名称'
                    }
                ],
                value: '',
                input: '',
                finishTime: '',
                startTime: '',
                level: '一级',
                tableData1: [],
                // section_false 开始
                ParentInput: '',
                ParentNameInput: '',
                ParentOptions: '',
                aliasInput: '',
                SEOtitle: '',
                SEOkey: '',
                SEOdiscripe: '',
                tableModel: '',
                tableModelOptions: [
                    {
                        value: '1',
                        label: '分类ID'
                    },
                    {
                        value: '2',
                        label: '分类名称'
                    }
                ],
                modelDetial: '',
                modelDetialOptions: [
                    {
                        value: '1',
                        label: '分类ID'
                    },
                    {
                        value: '2',
                        label: '分类名称'
                    }
                ],
                order: '',
                homePageStateSwich: false,
                stateSwich: true
            }
        },
        methods: {
            viewSubordinates(index, el) {
                console.log(el)
                this.tableData1 = el.sonList
                this.level = '二级'
            }
        },
        created() {
            articleType().then(res => {
                console.log(res.data)
                this.tableData1 = res.data
            })
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
        padding: 34px 24px 0px 24px;
    }

    .block {
        display: inline-block;
    }

    .section2_keywords {
        margin-left: 14px;
    }

    .demonstration {
        display: inline-block;
        margin: 0 15px 0 50px;
    }

    .block2 {
        margin-left: 18px;
    }

    .section3 {
        padding: 34px 24px 70px 24px;
    }

    .searchBtn {
        margin-left: 24px;
        margin-right: 12px;
    }
    /* if_show = true 结束 */
    /* if_show = false 开始*/
    .returnBtn {
        margin: 12px 0 0 12px;
    }

    .section_false_item {
        margin: 24px 80px 0 80px;
    }

    .section_false_span {
        width: 100px;
        display: inline-block;
        text-align: right;
        margin-right: 50px;
    }

    .Input {
        width: 314px;
    }
    .liveTest{
        vertical-align: middle;
    }
</style>