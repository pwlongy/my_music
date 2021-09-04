<template>
  <div class="album">
    <ul>
      <li v-for="(item ,index) in AlbumList" :key="index">
        <img v-lazy="item.picUrl"/>
        <u v-text="item.name"></u>
        <span v-text="item.artist.name"></span>
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
      AlbumList: []
    }
  },
  mounted () {
    this.searchWord = this.$route.params.searchWord
    // 获取 搜索专辑
    getSearchList(this.searchWord,10).then(res => {
      this.AlbumList = res.data.result.albums
    })
  }
}
</script>

<style lang="scss" scoped>
  .album{
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
        u{
          display: block;
          width: 720px;
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