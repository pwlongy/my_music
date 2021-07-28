<template>
  <div class="mv">
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      background-color="#fafafa"
      mode="horizontal" 
      @select="handleSelect">
      <el-menu-item index="1">内地</el-menu-item>
      <el-menu-item index="2">港台</el-menu-item>
      <el-menu-item index="3">欧美</el-menu-item>
      <el-menu-item index="4">日本</el-menu-item>
      <el-menu-item index="5">韩国</el-menu-item>
      <h2>最新MV</h2>
    </el-menu>
    <list 
      :top="false" 
      width="310px" 
      height="230px"
      imgheight="170px"></list>
  </div>
</template>

<script>
import list from "@/components/common/list.vue"
import { 
  Menu,
  MenuItem 
} from 'element-ui'
export default {
  components: {
    list,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  data () {
    return {
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
  .mv{
    padding-left: 150px;
    .el-menu{
      padding-left: 120px;
      position: relative;
      font-size: 14px;
      h2{
        position: absolute;
        left: 20px;
        top: 20px;
        font-size: 22px;
      }
    }
  }
</style>