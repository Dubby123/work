<template>
    <div class="login_body">
        <div class="login">
            <div class="content">
                <div class="title">用户登录</div>
                <el-form :model="loginForm" :rules="loginRules" ref='loginForm'>
                    <el-form-item prop="username">
                        <el-input
                            v-model="loginForm.username"
                            prefix-icon="el-icon"
                            placeholder="用户名/手机号/邮箱"
                            clearable
                        ></el-input>
                        <!-- <div class="icon icon-name"></div> -->
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            type="password"
                            v-model="loginForm.password"
                            prefix-icon="el-icon"
                            placeholder="请输入密码"
                            @keyup.enter.native="loginHandler"
                            clearable
                        >
                        </el-input>
                        <!-- <div class="icon icon-password"></div> -->
                    </el-form-item>
                    <el-form-item prop="status">
                        <JcRange
                            status="ruleForm.status"
                            :successFun="onMpanelSuccess"
                            :errorFun="onMpanelError"
                        ></JcRange>
                    </el-form-item>
                    <el-form-item style=" margin-bottom: 0px;">
                        <el-checkbox v-model="remember" class="rememberPassword"
                            ><span>记住密码</span></el-checkbox
                        >
                        <el-dropdown
                            trigger="hover"
                            @command="handleCommand"
                            class="forgetPassword"
                        >
                            <span class="el-dropdown-link">忘记密码</span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="email"
                                    >通过邮箱找回</el-dropdown-item
                                >
                                <el-dropdown-item command="phone"
                                    >通过手机找回</el-dropdown-item
                                >
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;">
                        <el-button
                            type="primary"
                            @click="submitForm"
                            :disabled="loading"
                            class="loginButton"
                            >登录123132</el-button
                        >
                    </el-form-item>
                </el-form>
                <div class="other">
                    <img class="weixin" src="../../assets/imgs/wechat.png" />
                    <span class="newuser" @click="registUserHandler"
                        >新用户注册</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import JSEncrypt from '@/common/encrypt'
import JcRange from './JcRange.vue'
import Const from '@/common/const'
import Utils from '@/common/utils'
// import { mapGetters } from 'vuex'
import { Message } from 'element-ui'

export default {
    name: 'login',
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '1111',
            },
            status: '',
            loading: false,
            remember: false,
            loginRules: {
                username: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur',
                    },
                ],
                //   status: [{ validator: checkStatus, trigger: 'change' }],
            },
        }
    },
    components: { JcRange },
    // computed: {
    //     ...mapGetters('login', {
    //         authCodeImg: 'getAuthCode',
    //     }),
    // },
    mounted() {
        if (Utils.isString(localStorage.getItem('supcon_honeycomb_user'))) {
            this.remember = true
            this.loginForm = JSON.parse(
                localStorage.getItem('supcon_honeycomb_user')
            )
        }
        // this.authCode()
    },
    methods: {
        // 获取验证码
        // authCode() {
        //     this.$store.dispatch('login/getAuthCode')
        // },
        onMpanelSuccess() {},
        onMpanelError() {},
        submitForm() {
            console.log('123132')
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    
                    this.login()
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        //登录
        login() {
            const data = {
                "username": this.loginForm.username,
                "password": this.loginForm.password,
                "rememberMe":this.remember
            }
            this.$store
                .dispatch('login/login', data)
                .then((res) => {
                    if (res.status === Const.STATUS.SUCCESS) {
                        Message.success({
                            showClose: true,
                            message: res.message,
                        })
                        this.loading = true
                        this.$store.dispatch('login/getUser').then(() => {
                            // this.$store.commit('authConfig/setCurrentTheme', {
                            //     primaryColor: userInfo.data.themeColor
                            //     // primary: userInfo.data.themeColor,
                            //     // isVertical: userInfo.data.menuDisplay,
                            //     // lightOrBlack: userInfo.data.workMode
                            // })
                            if (this.remember) {
                                localStorage.setItem(
                                    'supcon_honeycomb_user',
                                    JSON.stringify(this.loginForm)
                                )
                            }
                            // this.$router.push({
                            //     path: '/directory',
                            //     replace: true,
                            // })
                        })
                    } else {                    
                        Message.error({
                            showClose: true,
                            message: res.message,
                        })
                        this.loading = false
                    }
                })
                .catch(() => {
                    this.loading = false
                })
        },
        //登录验证，是否加密
        loginHandler() {
            let data = JSON.parse(JSON.stringify(this.loginForm))
            // data.captcha = this.captcha
            this.$store.dispatch('login/getPasswordEncrypt').then((res) => {
                if (res.status === Const.STATUS.SUCCESS) {
                    if (res.data === 1) {
                        this.$store
                            .dispatch('login/getPublicKey')
                            .then((response) => {
                                if (response.status === Const.STATUS.SUCCESS) {
                                    // eslint-disable-next-line no-unused-vars
                                    let publicKey = response.data
                                    // data.password = JSEncrypt.encrypt(data.password, publicKey)
                                    // eslint-disable-next-line no-self-assign
                                    data.password = data.password
                                    this.login(data)
                                } else {
                                    Message.error({
                                        showClose: true,
                                        message: res.message,
                                    })
                                }
                            })
                    } else {
                        this.login(data)
                    }
                } else {
                    Message.error({
                        showClose: true,
                        message: res.message,
                    })
                }
            })
        },
        //找回密码
        handleCommand(val) {
            this.$store.dispatch('login/hasPwdAuth').then((res) => {
                if (res.status === Const.STATUS.SUCCESS) {
                    let types = val === 'email' ? 'email' : 'phone'
                    this.$router.push({
                        name: 'register',
                        params: { type: types },
                    })
                } else {
                    Message.error({
                        message: res.message,
                        showClose: true,
                    })
                }
            })
        },
        //新用户注册
        registUserHandler() {
            this.$store.dispatch('login/hasRegistAuth').then((res) => {
                if (res.status === Const.STATUS.SUCCESS) {
                    this.$router.push({ name: 'register' })
                } else {
                    Message.error({
                        message: res.message,
                        showClose: true,
                    })
                }
            })
        },
    },
}
</script>
<style scopedSlots>
.login_body {
    background-image: url('../../assets/imgs/login-bg.png');
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
}
.title {
    color: #ffffff;
    font-size: 26px;
    /* margin-bottom: 40px; */
    margin: 10% 0;
}
/* .login_body .login_top {
    height: 15%;
    /* background-image: url('../assets/img/logo2.png');
    background-repeat: no-repeat; */
/* margin: 7% 0; */
/* background-size: 100%; */
/* float: right; */
/* } */
.login_body .login {
    top: 20%;
    background-color: rgb(0, 0, 0, 0.1);
    width: 20%;
    min-width: 280px;
    height: 50%;
    overflow: hidden;
    border-radius: 3px;
    margin: auto;
}
.login_body .content {
    position: relative;
    margin: 0 auto;
    width: 80%;
    height: 80%;
}
.login_body span {
    font-size: 12px;
    cursor: pointer;
    color: #dcdfe6;
}
.login_body .rememberPassword {
    float: left;
}
.login_body .forgetPassword {
    float: right;
}
.login_body .newuser {
    display: block;
    color: #dcdfe6;
    margin-top: 10px;
    text-align: center;
}
/* .login_body footer {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    text-align: center;
    left: 40%;
} */
.login_body .otherlogin {
    float: left;
    margin-top: 14%;
}
/* .login_body .weixin {
    background-color: #1aad19;
    border-radius: 2px;
    height: 8%;
    display: inline-block;
    margin-top: 10%;
    margin-left: 4%;
    overflow: hidden;
} */
/* .login_body .dingding {
    color: #3397f9;
    position: relative;
    height: 8%;
    display: inline-block;
    margin-top: 10%;
    margin-left: 2%;
} */
.login_body .icon {
    width: 10%;
    height: 50%;
    position: absolute;
    left: 6px;
    top: 11px;
    border: none;
}
.login_body .el-form-item__content {
    margin-left: 0;
}
.login_body .el-input-group__append {
    width: 90px;
    padding: 0px;
    background-color: transparent;
    overflow: hidden;
    position: relative;
    border: 1px solid #6068d5;
}
.login_body .authCode-img {
    cursor: pointer;
    height: 108%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.login_body .loginButton {
    width: 100%;
}
.login_body .loginButton span {
    color: #fff;
}
.login_body .el-input__inner {
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-color: #151847;
    color: #dcdfe6;
}
.login_body .el-checkbox__inner {
    background-color: transparent;
}
.loginButton {
    background: -webkit-linear-gradient(
        left,
        #0e6afa,
        #1aaff5,
        #1aaff5,
        #0e6afa
    );
}
.other {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
</style>
