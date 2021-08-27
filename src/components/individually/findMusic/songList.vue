<template>
  <div class="songList">
    <!-- 全部歌单 -->
    <el-popover
      placement="bottom-start"
      width="677"
      trigger="click"
      >
        <div class="pop">
          <span>添加标签</span>
          <div class="all">
            <div>全部歌单</div>
            <table>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
              <tr>
                <td></td>
                <td>华语</td>
                <td>欧美</td>
                <td>日语</td>
                <td>韩语</td>
                <td>粤语</td>
              </tr>
            </table>
          </div>
        </div>
      <el-button slot="reference">全部歌单<i class="el-icon-arrow-down"></i></el-button>
    </el-popover>
    <!-- 导航 -->
    <div class="listNav">
      <h1>热门标签:</h1>
      <span>华语</span>
      <span>流行</span>
      <span>摇滚</span>
      <span>民谣</span>
      <span>电子</span>
      <span>另类/独立</span>
      <span>轻音乐</span>
      <span>综艺</span>
      <span>影视原声</span>
      <span>ACG</span>
    </div>

    <!-- 列表 -->
    <div class="list clear_fix">
      <div class="listItem" @click="pushgoodlist">
        <img src="~assets/images/2021-08-26_03.jpg" alt="">
        <span>精品歌单倾心推荐，给最懂音乐的你</span>
      </div>
      <div class="listItem" v-for="(item, index) in songlist" :key="index" @click="pushlist(item.id)">
        <img v-lazy="item.coverImgUrl" alt="">
        <span v-text="item.name"></span>
      </div>
    </div>

    <!-- 分页 -->
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>


  </div>
</template>

<script>
import {
  Popover,
  Button,
  Pagination,
} from "element-ui"

import {musiclist} from "utils/findMusic.js"

export default {
  components: {
    [Popover.name]: Popover,
    [Button.name]: Button,
    [Pagination.name]: Pagination
  },
  data() {
      return {
        songlist: []
      }
  },
  mounted () {
    musiclist().then(res =>{
      this.songlist = res.data.playlists
    }) 
  },
  methods: {
    // 跳转到响应的歌单详情
    pushlist(id){
      this.$router.push("/recommendeSongList/"+id)
    },
    // 跳转至精品歌单
    pushgoodlist(){
      this.$router.push("/home/goodlist")
    }
  }
}
</script>

<style lang="scss" scoped>
  .songList{
    padding-top: 10px;
    .el-popover{
        padding: 0 26px;
        height: 520px;
        background: rgb(173, 145, 145);
        margin-bottom: 14px;
        .pop{
          background: rgb(190, 122, 122);
          span{
            display: block;
            height: 60px;
            font-size: 18px;
          }
        }
        .el-button{
          i{
            margin-left: 10px;
          }
        }
    }

    // 导航
    .listNav{
      margin-top: 14px;
      margin-bottom: 26px;
      display: flex;
      span{
        padding: 0 10px;    
      }
    }

    // 列表
    .list{
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
       grid-column-gap: 12px;
      .listItem{
        width: 245px;
        height: 310px;
        margin-bottom: 40px;
        img{
          height: 245px;
          width: 245px;
        }
        span{
          display: block;
          height: 44px;
          font-size: 16px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }

    // 分页
    .block{
      margin: 0 auto;
      .el-pagination{
        width: 400px;
      }
    }

  }
</style>