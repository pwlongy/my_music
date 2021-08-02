<template>
  <div class="Top">
    <!-- logo -->
    <span class="iconfont icon-wangyiyunyinle"></span>
    <span>网易云音乐</span>

    <!-- 返回 -->
    <div class="back">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
    </div>

    <!-- 输入框 -->
    <el-input
      placeholder= "搜索音乐，视频，歌词，电台"
      suffix-icon= "el-icon-search"
      size="small"
      v-model="input">
    </el-input>

    <div class="login">
      <el-avatar :size="35" src=""></el-avatar>
      <u @click="dialogVisible = true">未登录<i class="el-icon-caret-bottom"></i></u>
    </div>


    <!-- 弹出框 -->
    <el-dialog
      :visible.sync="dialogVisible">

      <div class="main">
        <img src="../../assets/images/login_03.jpg">
        <div class="input">
          <el-input 
            placeholder="请输入手机号" 
            v-model="username" 
            prefix-icon="el-icon-user"></el-input>
          <el-input 
            placeholder="请输入密码" 
            v-model="password" 
            show-password
            prefix-icon="el-icon-lock"></el-input>
        </div>

        <el-checkbox label="自动登录" v-model="login"></el-checkbox>

        <el-button>登录</el-button>

        <a>注册</a>

        <div class="loginI">
          <i class="iconfont icon-weixin-copy"></i>
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-weibo"></i>
          <i class="iconfont icon-zhifubao"></i>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { 
  Avatar,
  Button, 
  Input, 
  Dialog,
  Checkbox
} from "element-ui"
export default{
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Avatar.name]: Avatar,
    [Dialog.name]: Dialog,
    [Checkbox.name]: Checkbox
  },
  data(){
    return{
      // 输入框绑定数据
      input: "",
      // 弹出框的显示与隐藏
      dialogVisible: false,
      // 用户名
      username: "",
      // 密码
      password: "",
      // 自动登录
      login: true
    }
  },
  mounted () {
  },
  methods: {
        
  }
}
</script>

<style lang="scss" scoped>
  .Top{
    display: flex;
    align-items: center;
    position: relative;
    // logo
    .iconfont{
      color: #C62F2F;
      font-size: 20px;
    }
    &>span:nth-child(1){
      display: block;
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      margin-left: 20px;
    }
    &>span:nth-child(2){
      margin-left: 8px;
      color: #fff;
      font-size: 20px;
      margin-right: 80px;
    }

    // 返回按钮
    .back{
      width: 66px;
      height: 30px;
      border: 1px solid #a82828;
      display: flex;
      border-radius: 2px;
      margin-right: 14px;
      i{
        flex: 1;
        height: 100%;
        cursor: pointer;
        background: #c62f2f;
        text-align: center;
        line-height: 30px;
        color: #d15858;
      }
    }

    // 搜索框
    .el-input {
      width: 274px;
      border-radius: 15px;
    }

    // login
    .login{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 100px;
      .el-avatar{
        cursor: pointer;
      }
      u{
        display: block;
        font-size: 14px;
        margin-left: 10px;
        color: #edbebe;
        cursor: pointer;
        i{
          margin-left: 10px;
        }
      }
      u:hover{
        color: #fff;
      }
    }
   

   ::v-deep .el-dialog{
     width: 437px;
     height: 662px;
      background: #fafafa;
     .main{
       height: 600px;
       padding: 0 35px;
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
  }
</style>
