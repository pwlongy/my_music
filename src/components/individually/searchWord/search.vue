<template>
  <div class="search">
    <span>搜索<i>"{{searchWord}}"</i>,找到300首单曲</span>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
      background-color="#fafafa"
      router>
      <el-menu-item index="1" :route="'/search/'+searchWord+'/searchSingle'">单曲</el-menu-item>
      <el-menu-item index="2" :route="'/search/'+searchWord+'/searchSonger'">歌手</el-menu-item>
      <el-menu-item index="3" :route="'/search/'+searchWord+'/searchAlbum'">专辑</el-menu-item>
      <el-menu-item index="4" :route="'/search/'+searchWord+'/searchVideo'">视频</el-menu-item>
      <el-menu-item index="5" :route="'/search/'+searchWord+'/searchSongList'">歌单</el-menu-item>
      <el-menu-item index="6" :route="'/search/'+searchWord+'/searchLyrics'">歌词</el-menu-item>
      <el-menu-item index="7" :route="'/search/'+searchWord+'/searchHostRadio'">主播电台</el-menu-item>
      <el-menu-item index="8" :route="'/search/'+searchWord+'/searchUser'">用户</el-menu-item>
    </el-menu>

    <router-view ></router-view>
  </div>
</template>

<script>
import { Menu, MenuItem } from "element-ui"
export default {
  data () {
    return {
      activeIndex: '1',
      searchWord: ''
    }
  },
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  mounted () {
    console.log(this.$route);
    this.searchWord = this.$route.params.searchWord
  }
}
</script>

<style lang="scss" scoped>
  .search{
    &>span{
      display: block;
      padding: 40px;
      i{
        color: #0c73c2;
      }
    }
  }
</style>