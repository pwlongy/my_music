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

        <el-checkbox label="自动登录" v-model="login" style="height: 50px; line-height: 50px"></el-checkbox>
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
          this.$message({
            message: '登录成功',
            type: "success"
          })
          this.dialogVisible = false
          this.isspan = false
          // 将 cookie 信息保存在 session 中
          localStorage.setItem("token",res.data.token)
          localStorage.setItem("uid",res.data.account.id)
          // 保存 用户 id
          this.uid = res.data.profile.userId

          // 发送bus刷新数据
          this.$bus.$emit("updatauser")

        }else{
          this.isspan = true
          this.$message({
            message: '登录失败',
            type: "error"
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

   ::v-deep .el-dialog{
     width: 437px;
     height: 662px;
      background: #fafafa;
     .main{
       height: 600px;
       padding: 0 35px;

       .span{
         color: rgb(248, 66, 66);
         float: right;
       }
       img{
         height: 105px;
         width: 100%;
         margin: 50px 0;
       }
       &>.input{
         height: 100px;
         display: flex;
         flex-direction: column;
         .el-input{
           width: 100%;
           flex: 1;
            input{
              display: block;
              width: 100%;
              height: 100%;
              border: none;
              border-radius: 0;
              border: 1px solid #d8d8d8
            }
            .el-input__prefix{
              line-height: 50px;
              i{
                font-size: 18px;
              }
            }
          }
          .el-input:nth-child(1){
            input{
              border-radius: 5px 5px 0 0;
            }
          }
          .el-input:nth-child(2){
            input{
              border-radius: 0 0 5px 5px;
              border-top: none  ;
            }
            .el-input__suffix{
              line-height: 50px;
            }
          }
       }

      &>.el-button{
        display: block;
        width: 100%;
        height: 50px;
        color: #fff;
        background: #ea4848;
      }
      .el-button:hover{
        background: #a82828;
      }
      &>a{
        display: block;
        height: 50px;
        text-align: center;
        width: 100%;
        line-height: 50px;
        cursor: pointer;
      }
      .loginI{
        display: flex;
        justify-content: space-between;
        height: 44px;
        .iconfont{
          font-size: 36px;
          cursor: pointer;
        }
        .iconfont:nth-child(1){
          color: #67b633;
        }
        .iconfont:nth-child(2){
          color: #34a0df;
        }
        .iconfont:nth-child(3){
          color: #ea4a4a;
        }
        .iconfont:nth-child(4){
          color: #34a0df;
        }
      }
    }
   }
</style>