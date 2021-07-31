<template>
  <div class="songList">
    <div class="top">
      <img src="">
      <div class="message">
        <span><i>歌单</i>我喜欢的音乐</span>
        <div class="avatar">
          <el-avatar :size="40" src=""></el-avatar>
          <u>--何须问</u>
          <i>2017-10-14创建</i>
        </div>
        <div class="playBox">
          <div class="play">
            <span><i class="el-icon-video-play"></i>播放全部</span>
            <u class="el-icon-plus"></u>
          </div>
          <span><i class="el-icon-folder-add"></i>收藏(0)</span>
          <u><i class="iconfont icon-fenxiang2"></i>分享</u>
          <p><i class="iconfont icon-menu_download-copy"></i>下载</p>
       </div>
      </div>

       <!-- 播放量 -->
          <div class="playback">
            <p>
              <i>歌曲数</i>
              <u>103</u>
            </p>
            <p>
              <i>播放数</i>
              <u>1179</u>
            </p>
          </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from "element-ui"
export default {
  components: {
    [Avatar.name]: Avatar
  }
}
</script>

<style lang="scss" scoped>
  .songList{
    .top{
      padding: 38px;
      display: flex;
      img{
        display: block;
        width: 247px;
        height: 247px;
        margin-right: 38px;
      }
      .message{
        flex: 1;
        &>span{
          font-size: 28px;
          display: flex;
          align-items: center;
          i{
            display: block;
            width: 47px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            border-radius: 2px;
            font-size: 14px;
            border: 1px solid #e03f40;
            margin-right: 10px;
          }
        }

        .avatar{
          margin-top: 18px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          u{
            display: block;
            margin-left: 10px;
            margin-right: 20px;
            color: #666666;
          }
          i{
            color: #888888;
          }
        }

        .playBox{
          display: flex;
          position: relative;
          .play{
            display: flex;
            color: #fff;
            span{
              display: block;
              width: 112px;
              height: 32px;
              background: #c62f2f;
              border-radius: 5px 0 0 5px;
              display: flex;
              align-items: center;
              padding-left: 13px;
              border-right: 1px solid #ca4343;
              cursor: pointer;
              i{
                font-size: 18px;
                margin-right: 8px;
              }
            }
            span:hover{
              background: #b12323;
            }
            u{
              display: block;
              width: 38px;
              height: 32px;
              background: #c62f2f;
              border-radius: 0 5px 5px 0;
              line-height: 32px;
              text-align: center;
              cursor: pointer;
            }
            u:hover{
              background: #b12323;
            }
          }
          &>span,&>u,p{
            display: block;
            margin-left: 14px;
            border:1px solid #e1e1e2;
            width: 100px;
            height: 30px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #e1e1e2;
            i{
              margin-right: 8px;
            }
          }
          &>u,p{
            color: #666;
            cursor: pointer;
          }

        }
      }
      .playback{
        width: 120px;
        height: 40px;
        position: absolute;
        top: 42px;
        right: 42px;
        display: flex;
        p{
          flex: 1;
          height: 100%;
          text-align: right;
          color: #999999;
          border-right: 1px solid #e1e1e2;
          padding-right: 10px;
          font-weight: 600;
        }
        p:last-child{
          border: none;
        }
      }

    }
  }
</style>