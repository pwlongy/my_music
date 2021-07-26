<template>
    <div class="newSong">
      <ul>
        <li class='clear_fix'>
          <span><i class="iconfont icon-bofang"></i>播放全部</span>
          <div class="right"><i class="el-icon-folder-add"> </i>全部收藏</div>
        </li>
        <ol>
          <li>
            <h2>01</h2>
            <img src="">
            <u>火光<i></i></u>
            <span>焦迈奇</span>
            <b>火光<i>(电视剧《心跳源计划》插曲)</i></b>
            <h3>04:11</h3>
          </li>
        </ol>
      </ul>
    </div>
</template>

<script>
import {

} from "element-ui"

export default {

}
</script>

<style lang="scss" scoped>
  .newSong{
    padding-top: 14px;
    ul{
      border: 1px solid #ededed;
      &>li:nth-child(1){
        padding: 6px 14px 10px 14px;
        span{
          float: left;
          display: block;
          line-height: 25px;
          .iconfont{
            font-size: 10px;
            color: #cd2929;
          }
          i{
            display: block;
            width: 25px;
            height: 25px;
            line-height: 21px;
            text-align: center;
            border-radius: 50%;
            border: 2px solid #cd2929;
            float: left;
            margin-right: 5px;
            cursor: pointer;
          }
        }

        .right{
          float: right;
          padding: 6px 14px;
          border-radius: 5px;
          border: 1px solid #e1e1e2;
          cursor: pointer;
          i{
            margin-right: 5px;
            font-size: 18px;
          }
        }
      }

      ol{
        li{
          height: 75px;
          display: flex;
          align-items: center;
          h2{
            text-align: center;
            width: 46px;
          }
          img{
            width: 50px;
            height: 50px;
          }
          u{
            width: 500px;
            padding-left: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; 
          }
          span{
            color: #666666;
            padding-left: 18px;
            width: 230px;
          }
          b{  
            width: 330px;
            padding-left: 28px;
            color: #666666;
            i{
              margin-left: 6px;
              color: #888888;
              font-size: 14px;
            }
          }
          h3{
            text-align: center;
            color: #888888;
            width: 105px;
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