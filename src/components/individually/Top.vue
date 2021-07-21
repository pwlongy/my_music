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

    </div>
  </div>
</template>

<script>
import { Button, Input } from "element-ui"
export default{
  components: {
    [Input.name]: Input,
    [Button.name]: Button
  },
  data(){
    return{
      // 输入框绑定数据
      input: ""
    }
  }
}
</script>

<style lang="scss" scoped>
  .Top{
    display: flex;
    align-items: center;
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


   
  }
</style>
