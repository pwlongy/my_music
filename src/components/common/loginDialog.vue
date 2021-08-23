<template>
   <!-- 弹出框 -->
    <el-dialog
      :visible.sync="dialogVisible">

      <div class="main">
        <img src="../../assets/images/login_03.jpg">
        <div class="input">
          <el-input 
            placeholder="请输入手机号" 
            v-model="phone" 
            prefix-icon="el-icon-user"></el-input>
          <el-input 
            placeholder="请输入密码" 
            v-model="password" 
            show-password
            prefix-icon="el-icon-lock"></el-input>
        </div>

        <el-checkbox label="自动登录" v-model="login" ></el-checkbox>
        <span class="span" v-show="isspan"><i class="el-icon-warning"></i>手机或密码错误</span>
        <el-button @click="Getlogin">登录</el-button>

        <a>注册</a>

        <div class="loginI">
          <i class="iconfont icon-weixin-copy"></i>
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-weibo"></i>
          <i class="iconfont icon-zhifubao"></i>
        </div>
      </div>
    </el-dialog>
</template>

<script>
import {cellphone,} from "utils/top.js"

import {
  Dialog,
  Checkbox,
  Button,
  Input
} from "element-ui"
export default {
  data () {
    return {
      // 弹出框的显示与隐藏
      dialogVisible: false,
      // 用户名
      phone: "",
      // 密码
      password: "",
      // 自动登录
      login: true,
      // 登录注册失败
      isspan: false,
    }
  },
  components: {
    [Dialog.name]: Dialog,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Input.name]: Input
  },
  methods: {
    Getlogin(){
      // 获取用户名以及密码
      cellphone(this.phone,this.password).then(res => {
        console.log(res)
        this.phone = ""
        this.password = ""
        
        if(res.data.code === 200){
          this.dialogVisible = false
          this.isspan = false
          // 将 cookie 信息保存在 session 中
          localStorage.setItem("token",res.data.token)
          // 保存 用户 id
          this.uid = res.data.profile.userId
        }else{
          this.isspan = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>