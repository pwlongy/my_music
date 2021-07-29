<template>
    <div class="video">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal"
        router
        background-color="#fafafa"
        active-text-color ="#c62f2f"
        @select="handleSelect">
        <el-menu-item 
          index="1"
          route="/video/shipin">视频</el-menu-item>
        <el-menu-item 
          index="2"
          route="/video/mv">MV</el-menu-item>
      </el-menu>

      <router-view></router-view>
    </div>
</template>

<script>
import { 
    Menu, 
    MenuItem 
  } from "element-ui"
export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  data(){
    return{
      activeIndex: "1"
    }
  },
  methods: {
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="scss" scoped>
  .video{
    padding-left: 40px;
    .el-menu {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
    }
  }
</style>