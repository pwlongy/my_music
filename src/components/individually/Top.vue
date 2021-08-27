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
      <el-avatar :size="35" :src="user.avatarUrl || ''"></el-avatar>
      <u @click="login" v-if="!uid">未登录<i class="el-icon-caret-bottom" ></i></u>
      <u v-else >{{user.nickname}} <i class="el-icon-caret-bottom" ></i></u>
      <!-- <u v-else>{{userInfo.nickname}}<i class="el-icon-caret-bottom"></i></u> -->
    </div>

    <loginDialog ref="login"></loginDialog>

  </div>
</template>

<script>
import { 
  Avatar,
  Button, 
  Input, 
} from "element-ui"

import loginDialog from 'components/common/loginDialog.vue'

import {usermessage} from 'utils/findMusic.js'
import {mapMutations, mapState} from 'vuex'
export default{
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Avatar.name]: Avatar,
    loginDialog
  },
  data(){
    return{
      // 输入框绑定数据
      input: "",
      // 用户id
      uid: ""
      // 用户信息
    }
  },
  mounted () {
    this.uid = localStorage.getItem("uid")
    if(this.uid){
      this.uid = parseInt(this.uid)
       // 获取用户基本信息
      console.log(this.uid)
      usermessage(this.uid).then(res => {
        console.log(res)
        this.getUserMessage(res.data.profile)
      })
    }
   this.$bus.$on("updatauser", ()=>{
    this.$router.go(0)
   })
  },
  methods: {
    ...mapMutations("user", ['getUserMessage']),

    login(){
      this.$refs.login.dialogVisible = true
    },
  },
  computed: {
    ...mapState('user', ['user'])
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
   
  }
</style>
