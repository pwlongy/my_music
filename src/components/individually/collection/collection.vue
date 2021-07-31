<template>
  <div class="collection">
    <div class="title clear_fix">
      <div>
        <span class="active">专辑</span>
        <span>歌手</span>
        <span>视频</span>
        <span>专栏</span>
      </div>
    </div>

    <div class="top">
      <span>收藏的歌手<u>(<i>1</i>)</u></span>
        <el-input
          placeholder="搜索我收藏的歌手"
          suffix-icon="el-icon-search"
          v-model="input1">
        </el-input>
    </div>

      <div class="main">
      <ul>
        <li>
          <img src="">
          <span>Ayo97</span>
          <u>专辑:6</u>
          <i>MV:0</i>
        </li>
        <li>
          <img src="">
          <span>Ayo97</span>
          <u>专辑:6</u>
          <i>MV:0</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  Input
} from "element-ui"
export default {
  components: {
    [Input.name]: Input
  },
  data() {
    return {
      input1: ""
    }
  }
}
</script>

<style lang="scss" scoped>
  .collection{
    .title{
      padding-top: 20px;
      padding-bottom: 32px;
      margin: 0 auto;
        &>div{
          width: 534px;
          margin: 0 auto;
          span{
            padding: 10px 0;
            display: block;
            width: 132px;
            float: left;
            text-align: center;
            border: 1px solid #e5e5e5;
            color: #888;
            font-size: 14px;
          }
          span:first-child{
            border-radius: 10px 0 0 10px;
          }
          span:last-child{
            border-radius: 0 10px 10px 0;
          }
          .active{
            background: #7c7d85;
            color: #fff;
          }
        }
     
    }

    .top{
      position: relative;
      padding-left: 40px;
      border-bottom: 1px solid #e1e1e2;
      padding-bottom: 10px;
      span{
        font-size: 22px;
        u{
          font-size: 14px;
          color: #666;
          margin-left: 12px;
        }
      }

      ::v-deep .el-input{
        width: 216px;
        position: absolute;
        top: 0px;
        right: 40px;
        input{
          border-radius: 15px;
          height: 30px;
        }
      }
    }

    .main{
      ul{
        li{
          height: 76px;
          display: flex;
          align-items: center;
          padding-left: 40px;
          img{
            width: 49px;
            height: 49px;
            border: 1px solid #e5e5e5;
          }
          span{
            display: block;
            width: 965px;
            margin-left: 12px;
            font-size: 14px;
          }
          u{
            display: block;
            width: 386px;
            color: #888888;
          }
          i{
            flex: 1;
            color: #888888;
          }
        }
        li:nth-child(odd){
          background: #f5f5f7;
        }
        li:nth-child(even){
          background: #fafafa;
        }
        li:hover{
          background: #ebeced;
        }
      }
    }
  }
</style>