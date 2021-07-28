<template>
  <div class="broadcast">
    <div class="title">
      <span>look直播<i>在这里看见音乐</i></span>
      <u>更多<i class="el-icon-arrow-right"></i></u>
    </div>

    <div class="list">
      <div class="listItem" :style="{'width': width, 'height' : height}">
        <img src=""> 
        <span>
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
          <u>pengwei</u>
          <h2><i class="iconfont"></i>95万</h2>
        </span>

        <h3>云村的夜晚，哄你入睡</h3>
      </div>
      <div class="listItem" :style="{'width': width, 'height' : height}">
        <img src=""> 
        <span>
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
          <u>pengwei</u>
          <h2><i class="iconfont"></i>95万</h2>
        </span>

        <h3>云村的夜晚，哄你入睡</h3>
      </div>
      <div class="listItem" :style="{'width': width, 'height' : height}">
        <img src=""> 
        <span>
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
          <u>pengwei</u>
          <h2><i class="iconfont"></i>95万</h2>
        </span>

        <h3>云村的夜晚，哄你入睡</h3>
      </div>
      <div class="listItem" :style="{'width': width, 'height' : height}">
        <img src=""> 
        <span>
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
          <u>pengwei</u>
          <h2><i class="iconfont"></i>95万</h2>
        </span>

        <h3>云村的夜晚，哄你入睡</h3>
      </div>
      <div class="listItem" :style="{'width': width, 'height' : height}">
        <img src=""> 
        <span>
          <el-avatar :size="20" src=""></el-avatar>
          <u>pengwei</u>
          <h2><i class="iconfont"></i>95万</h2>
        </span>

        <h3>云村的夜晚，哄你入睡</h3>
      </div>
      <div class="listItem" :style="{'width': width, 'height' : height}">
        <img src=""> 
        <span>
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
          <u>pengwei</u>
          <h2><i class="iconfont"></i>95万</h2>
        </span>

        <h3>云村的夜晚，哄你入睡</h3>
      </div>
      <div class="listItem" :style="{'width': width, 'height' : height}">
        <img src=""> 
        <span>
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
          <u>pengwei</u>
          <h2><i class="iconfont"></i>95万</h2>
        </span>

        <h3>云村的夜晚，哄你入睡</h3>
      </div>
     
    </div>
  </div>
</template>

<script>
import {
  Avatar
} from "element-ui"
export default {
  components: {
    [Avatar.name]: Avatar
  },
  props: {
    width:{
      type: String,
      required: false,
      default: "300px"
    },
    height:{
      type: String,
      required: false,
      default: "440px"
    }

  }
}
</script>

<style lang="scss" scoped>
  .broadcast{
    padding: 30px 40px;
    min-height: 100%;
    .title{
      padding-bottom: 16px;
      border-bottom: 1px solid #e1e1e2;
      span{
        font-size: 22px;
        i{
          font-size: 14px;
          color: #666666;
          margin-left: 12px;
        }
      }
      u{
        float: right;
        font-size: 14px;
        color: #666666;
      }
    }

    .list{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-top: 15px;
      .listItem{
        margin: 0 7px 45px ; 
        display: flex;
        flex-direction: column;
        position: relative;
        img{
          width: 100%;
          height: 400px;
        }
        &>span{
          padding-top: 5px;
          padding-left: 10px;
          line-height: 25px;
          position: absolute;
          left: 0;
          bottom: 50px;
          display: block;
          width: 100%;
          height: 30px;
          .el-avatar{
            float: left;
          }
          u{
            margin-left: 6px;
            display: block;
            float: left;
            color: rgb(255, 255, 255);
          }
          h2{
            min-width: 50px;
            float: right;
            font-size: 14px;
            color: #fff;
            .iconfont{
              color: #fff;
              margin-right: 5px;
            }
          }
        }
        
        h3{
          flex: 1;
          padding-top: 10px;
          font-size: 14px;
          overflow: hidden;
          text-overflow:ellipsis; white-space: nowrap;
        }
      }
    }
  }
</style>