<template>
  <div class="songer">
    <!-- 歌手基本信息 -->
    <messageSonger></messageSonger>
    <!-- 导航栏 -->
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode="horizontal" 
      @select="handleSelect"
      router
      background-color="#fafafa">
      <el-menu-item index="1" :route='"/songerList/"+id+"/album"'>专辑</el-menu-item>
      <el-menu-item index="2" :route='"/songerList/"+id+"/mv"'>MV</el-menu-item>
      <el-menu-item index="3" :route='"/songerList/"+id+"/songerDetail"'>歌手详情</el-menu-item>
      <el-menu-item index="4" :route='"/songerList/"+id+"/similarSonger"'>相似歌手</el-menu-item>
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
    [MenuItem.name]: MenuItem,
    messageSonger: () => import("./songerListChild/messageSonger.vue")
  },
  data () {
    return {
      activeIndex: "1",
      id: null
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  methods: {
    handleSelect(){

    }
  }
}
</script>


<style lang="scss" scoped>
  .songer{
  }
</style>