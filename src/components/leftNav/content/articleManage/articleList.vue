<template>
    <div>
        <div class="section1_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">内容</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">文章管理</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="breadNav">文章列表</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-if="ifShow">
            <div class="section2">
                <el-select class="selectId" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-input class="inputMainText" v-model="input" placeholder="请输入内容"></el-input>
                <span class="sortSpan">属性</span>
                <el-select class="selectSort" v-model="propertyValue" placeholder="请选择">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
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
                <el-button class="searchBtn" type="primary" icon="el-icon-search">搜索</el-button>
                <br>
                <el-button @click="ifShow = false" class="addBtn" type="primary" icon="el-icon-search">添加文章</el-button>
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
        </div>
        <div v-else class="section_false">
            <el-button size="mini" class="returnBtn" @click="ifShow = true">返回</el-button>
            <div class="section_false_li">
                <span class="section_false_li_span">封面</span>
                <div class="section_false_li_ImgDiv" style="display: inline-block;">
                    <img src="../../../../assets/photoList.png" alt="">
                    <br>
                    <el-button class="changePgBtn" type="primary">修改封面</el-button>
                </div>
                <!-- <el-input v-model="imgAdress" placeholder="图片地址"></el-input> -->
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">是否原创</span>
                <el-radio v-model="ifOriginal" label="1">是</el-radio>
                <el-radio v-model="ifOriginal" label="2">否</el-radio>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">转载自</span>
                <el-input class="transferInput" placeholder="" v-model="transfer"></el-input>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">标题</span>
                <el-input class="transferInput" placeholder="" v-model="titleInput"></el-input>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">文章属性</span>
                <el-radio v-model="attributed" label="1">是</el-radio>
                <el-radio v-model="attributed" label="2">否</el-radio>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">内容简介</span>
                <el-input class="liveTest" type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
                </el-input>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">作者</span>
                <el-input class="authorInput" placeholder="" v-model="authorInput"></el-input>
                <el-button class="changeUsersBtn" type="primary">选择用户</el-button>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">内容</span>
                <contents class="contentsEdior"></contents>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">浏览量</span>
                <el-input class="Pageview" placeholder="" v-model="PageviewInput"></el-input>
            </div>
            <div class="section_false_li">
                <span class="section_false_li_span">审核状态</span>
                <el-radio v-model="review" label="1">待审</el-radio>
                <el-radio v-model="review" label="2">正常</el-radio>
                <el-radio v-model="review" label="3">禁止访问</el-radio>
            </div>
        </div>
        <foot></foot>
    </div>
</template>



<script>
    import foot from '@/components/footer'
    import contents from '@/components/contents/index.vue'
    export default {
        components: {
            foot,
            contents
        },
        data() {
            return {
                ifShow: true,
                value: '',
                input: '',
                value2: '',
                valueData1: '',
                valueData2: '',
                propertyValue: '',
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
                options2: [
                    {
                        value: '1',
                        label: '分类ID'
                    },
                    {
                        value: '2',
                        label: '分类名称'
                    }
                ],
                appList: [],
                // section_false
                imgAdress: '',
                ifOriginal: '1',
                transfer: '',
                titleInput: '',
                attributed: '1',
                textarea: '',
                authorInput: '',
                PageviewInput:'', 
                review:'2'
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

    /* section2 */
    .section2 {
        padding: 24px 0 24px 24px;
    }

    .selectId {
        width: 136px;
    }

    .inputMainText {
        width: 200px;
        margin-left: 16px;
    }

    .sortSpan {
        margin: 0 14px 0 20px;
    }

    .selectSort {
        width: 120px;
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

    .searchBtn {
        margin-left: 24px;
    }

    /* 添加文章 */
    .addBtn {
        margin: 24px 0 0 0;
    }

    .returnBtn {
        margin: 12px 0 0 12px;
    }

    /* section_true结束 */
    /* section_false开始 */
    .section_false{
        padding-bottom: 70px;
    }
    .section_false_li {
        margin: 40px 0 0 80px;
    }

    .section_false_li_span {
        display: inline-block;
        width: 100px;
        text-align: right;
        vertical-align: middle;
        margin-right: 50px;
    }

    .section_false_li_ImgDiv {
        vertical-align: middle;
        /* margin-left:36px; */
    }

    .section_false_li_ImgDiv img {
        width: 100px;
        height: 100px;
    }

    .changePgBtn {
        margin-top: 12px;
    }

    .transferInput {
        width: 600px;
    }

    .liveTest {
        width: 315px;
        vertical-align: middle;
    }

    .authorInput {
        width: 182px;
    }
    .changeUsersBtn{
        margin-left: 12px;
    }
    .contentsEdior{
        display: inline-block;
        vertical-align: middle;
    }
    .Pageview{
        width: 200px;
    }
</style>