<template lang="">
    <div class="userList">
        <div v-show="ifshow">
            <div class="section1_header">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                    <el-breadcrumb-item><span class="breadNav">用户</span></el-breadcrumb-item>
                    <el-breadcrumb-item><span class="breadNav">用户管理</span></el-breadcrumb-item>
                    <el-breadcrumb-item><span class="breadNav">用户列表</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="section2_select">
                <el-select class="IdSelect" v-model="optionIdValue" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-input class="selectInput" v-model="SelectInput" placeholder="请输入关键词"></el-input>
                <span style="margin-left: 34px;">审核状态</span>
                <!-- 审核状态 -->
                <el-select class="stateSelect" v-model="optionStateValue" placeholder="请选择">
                    <el-option v-for="item in StateOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <!-- 登陆时间or注册时间 -->
                <el-select class="loginOrRegister" v-model="optionDataValue" placeholder="请选择">
                    <el-option v-for="item in dataValueOptions" :key="item.value" :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <!-- 选择日期 -->
                <el-date-picker class="dataSelect" v-model="DateValue" type="daterange" align="right" unlink-panels
                    range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                </el-date-picker>
                <el-button style="margin-left: 24px;" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="section3_table">
                <el-table style="padding: 12px 24px 0px 0px" :data="tableData"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="用户ID">
                        <template slot-scope="scope">
                            <!-- <i class="el-icon-time"></i> -->
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="用户名"">
                        <template slot-scope=" scope">
                         <!-- <el-popover trigger="hover" placement="top"> -->
                         <!-- <p>用户名: {{ scope.row.name }}</p> -->
                         <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                         </div>
                        <!-- </el-popover> -->
                        </template>
                    </el-table-column>
                    <el-table-column label="头像">
                        <template slot-scope="scope">
                            <!-- <i class="el-icon-time"></i> -->
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="资质认证">
                        <template slot-scope="scope">
                            <!-- <i class="el-icon-time"></i> -->
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="登陆/注册时间">
                        <template slot-scope="scope">
                            <!-- <i class="el-icon-time"></i> -->
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper"
                        :total="1000">
                    </el-pagination>
                </div>
                <div class="section4_footer">
                    <el-button type="primary" icon="el-icon-search" @click="ifshow = false">添加用户</el-button>
                    <el-button type="danger">批量删除</el-button>
                    <el-button type="info">禁止访问</el-button>
                </div>
                <div class="footer0"></div>
            </div>
        </div>
        <div v-if="ifshow === false">
            <div class="section1_header">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item><span class="breadNav firstBreadNav">后台管理中心</span> </el-breadcrumb-item>
                        <el-breadcrumb-item><span class="breadNav">用户</span></el-breadcrumb-item>
                        <el-breadcrumb-item><span class="breadNav">用户管理</span></el-breadcrumb-item>
                        <el-breadcrumb-item><span class="breadNav">用户列表</span></el-breadcrumb-item>
                        <el-breadcrumb-item><span class="breadNav">基本信息</span></el-breadcrumb-item>
                    </el-breadcrumb>
                </el-breadcrumb>
                <el-button size="mini" @click="ifshow = true" style="margin:12px 0 0 12px;">返回上级</el-button>
            </div>
            <div class="userMsg">
                <div>
                    <span class="inputTitle">头像</span>
                    <img src="../../../../assets/photo.png" alt="">
                </div>
                <el-button style="margin-left: 202px;margin-top: 12px;" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                <div>
                    <span class="inputTitle">用户名</span>
                    <el-input class="detailInput" v-model="inputName" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <span class="inputTitle">昵称</span>
                    <el-input class="detailInput" v-model="inputNiCheng" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <span class="inputTitle">真实姓名</span>
                    <el-input class="detailInput" v-model="inputRealName" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <span class="inputTitle">性别</span>
                    <el-radio class="" v-model="radioSex" label="1">男</el-radio>
                    <el-radio class="" v-model="radioSex" label="2">女</el-radio>
                </div>
                <div>
                    <span class="inputTitle">登陆密码</span>
                    <el-input class="detailInput" v-model="inputPassword" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <span class="inputTitle">重复登陆密码</span>
                    <el-input class="detailInput" v-model="reInputPassword" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <span class="inputTitle">所在地区</span>
                    <el-select v-model="valueCitys" placeholder="请选择">
                        <el-option v-for="item in citys" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <span class="inputTitle">手机号码</span>
                    <el-input class="detailInput" v-model="inputPhone" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <span class="inputTitle">邮件</span>
                    <el-input class="detailInput" v-model="inputEmail" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <span class="inputTitle">会员权限</span>
                    <el-select v-model="valueVipOptions" placeholder="请选择">
                        <el-option v-for="item in VipOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <span class="inputTitle">状态</span>
                    <el-radio-group v-model="radioState">
                        <el-radio :label="3">待审</el-radio>
                        <el-radio :label="6">正常</el-radio>
                        <el-radio :label="9">禁止访问</el-radio>
                    </el-radio-group>
                </div>
                <el-button type="primary" class="comit" style="width: 100px;">确定</el-button>
                <div class="footer"></div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                ifshow: true,
                options: [
                    {
                        value: '1',
                        label: '用户UID'
                    },
                    {
                        value: '2',
                        label: '用户名'
                    }
                ],
                optionIdValue: '',
                SelectInput: '',
                optionStateValue: '',
                StateOptions: [
                    {
                        value: '1',
                        label: '正常'
                    },
                    {
                        value: '2',
                        label: '待审核'
                    },
                    {
                        value: '3',
                        label: '禁止访问'
                    }
                ],
                dataValueOptions: [
                    {
                        value: '1',
                        label: '注册日期'
                    },
                    {
                        value: '2',
                        label: '登陆日期'
                    },
                ],
                optionDataValue: '',
                pickerOptions: {
                    shortcuts: [
                        {
                            text: '最近一周',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit('pick', [start, end]);
                            }
                        },
                        {
                            text: '最近一个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                picker.$emit('pick', [start, end]);
                            }
                        },
                        {
                            text: '最近三个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                picker.$emit('pick', [start, end]);
                            }
                        }
                    ]
                },
                DateValue: '',
                // 表格
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                currentPage3: 1,
                radioSex: '',
                inputNiCheng: '',
                inputName: '',
                inputRealName: '',
                reInputPassword: '',
                inputPassword: '',
                citys: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                valueCitys: '',
                inputPhone: '',
                inputEmail: '',
                inputVip: '',
                valueVipOptions: '',
                VipOptions: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                radioState: ''
            }
        },
        methods: {
            // tableFunction
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleSelectionChange(val) {
                console.log(val)
            },
            // 分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }

        }
    }
</script>


<style scoped>
    /* 消除table最下面的分割线 */
    el-table__row>td {
        border: none;
    }

    .el-table::before {
        height: 0px;
    }

    /* 面包屑导航 */
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

    /* 搜索模块 */
    .section2_select {
        margin-top: 24px;
        padding-left: 24px;
    }

    .selectInput {
        width: 180px;
        height: 44px;
        margin-left: 14px;
    }

    .IdSelect {
        display: inline-block;
        height: 44px;
        width: 130px;
    }

    .stateSelect {
        margin-left: 8px;
        height: 44px;
        width: 130px;
    }

    .dataSelect {
        margin-left: 20px;
        width: 250px;
        height: 41px;
    }

    .loginOrRegister {
        width: 130px;
        margin-left: 34px;
    }

    .section3_table {
        margin-left: 24px;
    }

    .section4_footer {
        position: absolute;
        bottom: 70px;
        left: 48px;
    }

    .block {
        position: absolute;
        bottom: 70px;
        right: 134px;
    }

    .footer {
        margin-top: 50px;
        height: 50px;
        background-color: #EEEEEE;
        width: 100%;
    }

    .footer0 {
        /* margin-top: 50px; */
        position: absolute;
        bottom: 0;
        left: 0;
        height: 50px;
        background-color: #EEEEEE;
        width: 100%;
    }

    .detailInput {
        height: 44px;
        width: 260px;
    }

    img {
        height: 80px;
        width: 80px;
    }

    .inputTitle {
        margin-top: 30px;
        display: inline-block;
        width: 120px;
        text-align: right;
        margin-right: 24px;
        margin-left: 60px;
    }

    .userMsg {
        margin-top: 26px;
    }

    .comit {
        margin-top: 40px;
        margin-left: 250px;
    }
</style>