<template>
  <div class="find">
    <!-- 头部导航 -->
    <div class="findTop">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal"
        active-text-color= "#c62f2f"
        text-color= "#000"
        router
        @select="handleSelect">
        <el-menu-item index="1" route="/home/recommend">个性推荐</el-menu-item>
        <el-menu-item index="2" route="/home/songList">歌单</el-menu-item>
        <el-menu-item index="3" route="/home/anchor">主播电台</el-menu-item>
        <el-menu-item index="4" route="/home/list">排行榜</el-menu-item>
        <el-menu-item index="5" route="/home/songer">歌手</el-menu-item>
        <el-menu-item index="6" route="/home/latest">最新音乐</el-menu-item>
      </el-menu>
    </div>
    
    <!-- 主体 -->
    <div class="findMain">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import {
  Menu,
  MenuItem
} from "element-ui"
export default{
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  data() {
    return{
      // 选中的导航 index
      activeIndex: "1"
    }
  },
  methods: {
    // 菜单激活回调
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

<style lang="scss" scoped>
  .find{
    height: 100%;
    margin: auto;
    .findTop{
      border-bottom: 1px solid #e1e1e2;
      .el-menu{
        margin: 0 auto;
        width: 1300px;
        text-align: center;
        display: flex;
        justify-content: center;
        .el-menu-item{
          font-size: 18px;
        }
      }
    }

    // 主体
    .findMain{
      width: 1300px;
      height: 100%;
      margin: auto;
    }
    
  }
</style>