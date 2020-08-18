<template>
    <div id="login">
        <h1 class="login_title">后台管理中心</h1>
        <div class="demo-input-suffix input_box">
            <el-input class="input_account_num" placeholder="Enter account number" prefix-icon="el-icon-user"
                v-model="account_number">
            </el-input>
            <el-input show-password class="input_password" placeholder="Input password " prefix-icon="el-icon-lock"
                v-model="password">
            </el-input>
            <el-input class="input_yzm" placeholder="Input captcha" prefix-icon="el-icon-circle-check
            " v-model="VerifyCode">
            </el-input>
            <img class="vertify" :src="processImgSrc" alt="" @click="changeVertifyImg">
            <el-button type="primary" @click="getLogin()">登陆</el-button>
        </div>
    </div>
</template>


<script>
    import { login_, VerifyCode_ } from '@/request/api.js'
    import { Message } from 'element-ui'
    import axios from 'axios'
    export default {
        name: 'login',
        data() {
            return {
                account_number: '',
                password: '',
                VerifyCode: '',
                processImgSrc: ''
            }
        },
        methods: {
            getLogin() {
                let data = {
                    'username': this.account_number,
                    'password': this.password,
                    'verifyCode': this.VerifyCode
                }
                login_(data).then(res => {
                    console.log(res);
                    if (res.data.status != 0) {
                        Message({ message: res.data.msg, type: 'error' });
                        this.getVerifyCode()
                    } else {
                        localStorage.setItem("token", res.data.data.accessToken)
                        let token = window.localStorage.getItem("token")
                        Message({ message: '登陆成功', type: 'success' });
                        this.$router.push('/home/thi')
                    }
                })
            },
            getVerifyCode() {
                VerifyCode_().then(res => {
                    let data = res.data
                    let bytes = new Uint8Array(data);
                    let storeData = "";
                    let len = bytes.byteLength;
                    for (let i = 0; i < len; i++) {
                        storeData += String.fromCharCode(bytes[i]);
                    }
                    this.processImgSrc = "data:image/png;base64," + window.btoa(storeData);
                })
            },
            changeVertifyImg(){
                this.getVerifyCode()
            }
        },
        beforeCreate() {
            // change bgc color
            document.querySelector('body').setAttribute('style', 'background-color: rgb(50, 64, 87)');
        },
        created() {
            // localStorage.removeItem("token")
            // console.log(window.localStorage.getItem("token"),removeToken)
            // this.getVerifyCode()
        }
    }
</script>

<style scoped>
    /* login-box */
    #login {
        width: 384px;
        height: 308px;
        background-color: #fff;
        border-radius: 1%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 26px 0 26px 0;
    }

    /* login-title */
    .login_title {
        text-align: center;
        font-size: 24px;

    }

    .input_box {
        width: 300px;
        margin-top: 30px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .input_password {
        margin-top: 24px;
    }

    .input_yzm {
        margin-top: 24px;
        width: 170px;
        vertical-align: bottom;
    }

    .vertify {
        height: 40px;
        width: 106px;
        vertical-align: bottom;
        margin-left: 24px;
        cursor: pointer;
    }

    button {
        width: 300px;
        margin-top: 30px;
    }
</style>