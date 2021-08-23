<template>
  <div class="songList" v-if="Object.keys(Songplaylist).length !== 0">
    <div class="top">
      <img v-lazy="Songplaylist.coverImgUrl">
      <div class="message">
        <span><i>歌单</i>{{Songplaylist.name}}</span>
        <div class="avatar">
          <el-avatar :size="40" :src="Songplaylist.creator.avatarUrl"></el-avatar>
          <u v-text="Songplaylist.creator.nickname"></u>
          <i>{{Songplaylist.createTime | showDate}} 创建</i>
        </div>
        <div class="playBox">
          <div class="play">
            <span><i class="el-icon-video-play"></i>播放全部</span>
            <u class="el-icon-plus"></u>
          </div>
          <span><i class="el-icon-folder-add"></i>收藏({{Songplaylist.subscribedCount}})</span>
          <u><i class="iconfont icon-fenxiang2"></i>分享({{Songplaylist.cloudTrackCount}})</u>
          <p><i class="iconfont icon-menu_download-copy"></i>下载</p>
       </div>
      </div>

       <!-- 播放量 -->
          <div class="playback">
            <p>
              <i>歌曲数</i>
              <u>{{Songplaylist.trackCount}}</u>
            </p>
            <p>
              <i>播放数</i>
              <u>{{Math.trunc(Songplaylist.playCount/10000)}}万</u>
            </p>
          </div>
    </div>

    <div class="main">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        router
        background-color= "#fafafa"
        @select="handleSelect">
        <el-menu-item index="1" :route="'/recommendeSongList/'+Songplaylist.id+'/songlist'">歌曲列表</el-menu-item>
        <el-menu-item index="2" :route="'/recommendeSongList/'+Songplaylist.id+'/remarks'">评论<i>({{Songplaylist.commentCount}})</i></el-menu-item>
        <el-menu-item index="3" :route="'/recommendeSongList/'+Songplaylist.id+'/collection'">收藏者</el-menu-item>
      </el-menu>

      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import { Avatar, Menu, MenuItem } from "element-ui"
import {formatDate} from "@/common/time.js"
export default {
  data(){
    return {
      activeIndex: "1"
    }
  },
  props: {
    Songplaylist: {
      type: Object,
      default() {
        return {
          name: "hello"
        }
      }
    }
  },
  created () {
  },
  components: {
    [Avatar.name]: Avatar,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  filters: {
    showDate(value){
      const date = new Date(value)
      return formatDate(date, 'yyyy-MM-dd')
    },
    // Number(value){
    //   console.log((value/10000).parseInt())
    //   return (value/10000).parseInt() 
    // }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
  .songList{
    .top{
      padding: 38px;
      display: flex;
      position: relative;
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
            height: 30px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;
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
        width: 200px;
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
          display: flex;
          flex-direction: column;
        }
        p:last-child{
          border: none;
        }
      }

    }

    .main{
      .el-menu{
        padding-left: 88px;

        .el-menu-item{
          font-size: 18px;
        }
      }
    }
  }
</style>