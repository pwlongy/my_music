<template>
  <div class="songlist">
    <table cellspacing="0">
      <tr>
        <td style="width: 64px"></td>
        <td style="width: 72px">操作</td>
        <td style="width: 567px">音乐标题</td>
        <td style="width: 400px">歌手</td>
        <td style="width: 368px">专辑</td>
        <td >时长</td>
      </tr>
      <tr v-for="(item, index) in tracks" :key="index" @dblclick="playmusic(item.id,item.dt)">
        <td v-text="index+1"></td> 
        <td>
          <i class="iconfont " :class="[like?'icon-aixin_shixin':'icon-xinaixin']"></i>
          <i v-if="download" class="iconfont icon-menu_download-copy"></i>
          <i v-else class="iconfont icon-dui"></i>
        </td>
        <td>{{item.name}}<i>{{item.alia[0]}}</i></td>
        <td v-text="item.ar[0].name"></td>
        <td v-text="item.al.name"></td>
        <td>{{item.dt | showtime}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

import {playlist, songurl} from "utils/findMusic.js"
import {formatDate} from "@/common/time.js"

export default {
  data () { 
    return {
      // 是否已下载
      download: true,
      // 是否为 喜欢
      like: true,
      // 歌单id
      id: null,
      // 歌曲列表
      tracks: []
    }
  },
  mounted () {
    this.id = this.$route.params.id

    // 获取歌单信息
    playlist(this.id).then(res =>{
      this.tracks = res.data.playlist.tracks
    })
  },
  methods: {
    playmusic(id, dt){
      songurl(id).then(res => {
        this.$bus.$emit("sendUrl", res.data.data[0].url, dt)
      })
    }
  },
  filters: {
    showtime(value){
      let time = new Date(value)
      return formatDate(time, 'mm:ss')
    }
  }
}
</script>

<style lang="scss" scoped>
  .songlist{
    table{
      width: 100%;
      tr{
        height: 36px;
        td{
          padding-left: 12px;
        }
        td:nth-child(2){
          i{
            margin-right: 10px;
            font-size: 18px;
          }
          .icon-aixin_shixin{
            color: #cd2929;
          }
        }
        td:nth-child(3){
          i{
            color: rgb(105, 105, 105);
            font-size: 10px;
            margin-left: 10px;
          }
        }
      }
      tr:first-child{
        td{
          border-right: 1px solid #e1e1e2;
          border-bottom: 1px solid #e1e1e2;
        }
      }

      tr:nth-child(odd){
        background: #fafafa;
      }
      tr:nth-child(even){
        background: #f5f5f7;
      }
      tr:hover{
        background: #e3e3e5;
      }
      tr:first-child:hover{
        background: none;
      }
    }
  }
</style>