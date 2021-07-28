<template>
    <div class="main">
      <el-row>
        <el-col :span="3" class="ColLeft">
          <span>推荐</span>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#f5f5f7"
            text-color="#5c5c5c"
            router
            active-text-color="#000">
            <!-- 推荐 -->
            <el-menu-item 
              index="2"
              route="/home">
              <i class="iconfont icon-music"></i>
              <span slot="title">发现音乐</span>
            </el-menu-item>
            <el-menu-item 
              index="3"
              route="/fm">
              <i class="iconfont icon-fm"></i>
              <span slot="title">私人FM</span>
            </el-menu-item>
            <el-menu-item 
              index="4"
              route="/broadcast">
              <i class="iconfont icon-look"></i>
              <span slot="title">Look直播</span>
            </el-menu-item>
            <el-menu-item 
              index="5"
              route="/video">
              <i class="iconfont icon-shipin"></i>
              <span slot="title">视频</span>
            </el-menu-item>
            <el-menu-item 
              index="6"
              route="/friend">
              <i class="iconfont icon-pengyou"></i>
              <span slot="title">朋友</span>
            </el-menu-item>

            <!-- 我的音乐 -->
            <span>我的音乐</span>
             <el-menu-item 
              index="01"
              route="local">
              <i class="iconfont icon-ttpodicon"></i>
              <span slot="title">本地音乐</span>
            </el-menu-item>
             <el-menu-item 
              index="02"
              route="/download">
              <i class="iconfont icon-menu_download-copy"></i>
              <span slot="title">下载管理</span>
            </el-menu-item>
             <el-menu-item 
              index="03"
              route="/cloud">
              <i class="iconfont icon-yun"></i>
              <span slot="title">我的音乐云盘</span>
            </el-menu-item>
             <el-menu-item 
              index="04"
              route="/radioStation">
              <i class="iconfont icon-diantai"></i>
              <span slot="title">我的电台</span>
            </el-menu-item>
             <el-menu-item 
              index="05"
              route="collection">
              <i class="iconfont icon-wodeshoucang1"></i>
              <span slot="title">我的收藏</span>
            </el-menu-item>
            
            <!-- 歌单 -->
            <el-submenu index="1">
              <template slot="title">
                <span>创建的歌单</span>
              </template>
              <el-submenu index="1-4">
                <template slot="title">
                   <i class="iconfont icon-xihuan"></i>
                  <span>我喜欢的音乐</span>
                </template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

          </el-menu>   

        </el-col>

        <el-col :span="21">
          <div class="ColRight clear_fix">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
      </div>
</template>
  
<script>
import {
  Col,
  Row,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup
} from "element-ui" 
export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Submenu.name]: Submenu,
    [MenuItemGroup.name]: MenuItemGroup,
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    height: 100%;
    .el-row{
      // 左侧
      height: 100%;
      .ColLeft{
        border: 1px solid #e1e1e2;
        background: #f5f5f7;
      }
      .el-col{
        height: 100%;
        font-size: 14px;
        overflow: auto;
        .el-menu{
          border: none;
        }
        .iconfont{
          margin-right: 14px;
          font-size: 20px;
        }
      }

      // 右侧
      .ColRight{
        background: #fafafa;
        min-height: 100%;
      }
    }
  }
</style>