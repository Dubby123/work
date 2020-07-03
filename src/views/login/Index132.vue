<template>
    <div id="login">
        <div class="login-wrap">
            <div class="title">用户登录</div>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="loginForm"
                class="login-form"
                size="medium"
            >
                <el-form-item class="item-from"  prop="username" >
                    <el-input
                        type="text"
                        v-model="ruleForm.username"
                        autocomplete="off"
                        placeholder="用户名/手机号/邮箱"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password" class="item-from">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="ruleForm.password"
                        autocomplete="off"
                        minlength="6"
                        maxlength="20"
                    />
                </el-form-item>

                <el-form-item prop="status" class="item-from">
                    <JcRange
                        status="ruleForm.status"
                        :successFun="onMpanelSuccess"
                        :errorFun="onMpanelError"
                    ></JcRange>
                </el-form-item>

                <el-form-item>
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                    <span>忘记密码 </span>
                </el-form-item>

                <button class="login-btn" @click="submitForm">登录</button>
            </el-form>
        </div>
    </div>
</template>

<script>
import { validatePass } from '../../utils/validate'
import JcRange from './JcRange.vue'
// import {Getsms  , Register } from "../../api/login";
export default {
    name: 'index',
    data() {
        var checkUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名/手机号/邮箱"'))
            } else {
                return callback()
            }
        }
        var checkPassword = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入密码'))
            }
            if (validatePass(value)) {
                return callback(new Error('请输入大于6位，小于32位的密码'))
            } else {
                return callback()
            }
        }

        var checkStatus = (rule, value, callback) => {
            console.log(value)
            if (!value) {
                return callback(new Error('请拖动滑块完成验证'))
            } else {
                callback()
            }
        }
        return {
            loginButtonStatus: true,
            checked: true,
            ruleForm: {
                username: '',
                password: '',
                status: '',
            },
            rules: {
                username: [{ validator: checkUsername, trigger: 'blur' }],
                password: [{ validator: checkPassword, trigger: 'blur' }],
                status: [{ validator: checkStatus, trigger: 'change' }],
            },
        }
    },
    mounted(){
      this.getCookie()
    },
    components: {
        JcRange,
    },
    methods: {
        onMpanelSuccess() {
          this.ruleForm.status = true
          console.log('状态',this.ruleForm.status)
        },
        onMpanelError() {},
        //提交数据
        submitForm() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    const self = this
                    if (self.checked == true) {
                        self.setCookie(
                            self.ruleForm.username,
                            self.ruleForm.password,
                            7
                        )
                    } else {
                        self.clearCookie()
                    }
                    // self.login()
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        //登录
        login() {
            let requestData = {
                username: this.ruleForm.username,
                password: this.ruleForm.password,
            }
            this.$store
                .dispatch('login/GET_USERINFO', requestData)
                .then((res) => {
                    this.$message({
                        message: res.message,
                        type: 'success',
                    })
                    this.$router.push({ path: 'console' })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        //设置cookie
        setCookie(c_name, c_pwd, exdays) {
            var exdate = new Date() //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) //保存的天数
            //字符串拼接cookie
            window.document.cookie = `username=${c_name};path=/;expires=${exdate.toGMTString()}`
            window.document.cookie = `password=${c_pwd};path=/;expires=${exdate.toGMTString()}`
        },
        //获取cookie
        getCookie: function() {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; ') //这里显示的格式需要切割一下自己可输出看下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('=') //再次切割
                    console.log('arr2',arr2)
                    //判断查找相对应的值
                    if (arr2[0] == 'username') {
                        this.ruleForm.username = arr2[1] //保存到保存数据的地方
                    } else if (arr2[0] == 'password') {
                        this.ruleForm.password = arr2[1]
                    }
                }
            }
        },
        //清除cookie
        clearCookie() {
            this.setCookie('', '', -1) //修改2值都为空，天数为负1天就好了
        },
        //重置表格
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
    },
}
</script>

<style scoped lang="less">
#login {
    height: 100vh;
    background: url('../../assets/imgs/login-bg.png');
    overflow: hidden;
}
.login-wrap {
    width: 408px;
    padding: 50px 50px 70px 70px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 250px 200rpx auto;
    box-sizing: border-box;
}
.title {
    color: #ffffff;
    font-size: 26px;
    margin-bottom: 40px;
}
.login-form {
    width: 280px;
    font-size: 12px;
    color: #ffffff;
    .item-from {
        width: 280px;
        margin-bottom: 20px;
        background-color: #151847;
        border: 1px solid #151847;
        input {
            background-color: #151847;
        }
        .placeholder {
            color: #ffffff;
        }
        .el-input__inner {
            background-color: #151847 !important;
        }
    }
    .login-btn {
        width: 280px;
        height: 34px;
        color: #ffffff;
        background-color: #4d59f4;
        background-image: linear-gradient(#21a4f5, #4d59f4);
        font-size: 14px;
        margin-top: 19px;
    }
}
</style>
