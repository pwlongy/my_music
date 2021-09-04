<template>
  <div class="songList">
    <ul>
      <li v-for="(item, index) in songList" :key="index" @click="pushSongList(item.id)">
        <img v-lazy="item.coverImgUrl" alt="">
        <span v-text="item.name"></span>
        <u v-text="item.trackCount + '首'"></u>
        <i>by {{item.creator.nickname}}</i>
      </li>
    </ul>
  </div>
</template>

<script>

import {getSearchList} from 'utils/findMusic.js'
export default {
  data () {
    return {
      searchWord: '',
      songList: []
    }
  },
  mounted () {
    this.searchWord = this.$route.params.searchWord
    // 获取 搜索歌单
    getSearchList(this.searchWord,1000).then(res => {
      console.log(res)
      this.songList = res.data.result.playlists
    })
  },
  methods: {
    pushSongList(id){
      this.$router.push('/recommendeSongList/'+id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .songList{
    ul{
      li{
        height: 75px;
        display: flex;
        align-items: center;
        padding-left: 38px;
        img{
          width: 50px;
          height: 50px;
          margin-right: 25px;
        }
        span{
          display: block;
          width: 720px;
        }
        u{
          display: block;
          width: 200px;
          color: #999;
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
</style>