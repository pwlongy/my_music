<template>
  <div class="latest">

    <div class="title ">
      <div class="clear_fix">
        <span class="active" @click="handLatest(1)" ref="song">新歌速递</span>
        <span @click="handLatest(2)" ref="dish">新碟上架</span>
      </div>
    </div>

    <div class="mian">
      <el-menu 
        :default-active="activeIndex" 
        mode="horizontal" 
        background-color="#fafafa"
        active-text-color=""
        @select="handleSelect">
        <el-menu-item index="1">全部</el-menu-item>
        <el-menu-item index="2">华语</el-menu-item>
        <el-menu-item index="3">欧美</el-menu-item>
        <el-menu-item index="4">韩国</el-menu-item>
        <el-menu-item index="5">日本</el-menu-item>
      </el-menu>

      <router-view></router-view>
    </div>
    
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
  data() {
    return{
      // 选中的 index
      activeIndex: "1"
    }
  },
  mounted () {
    console.log(Menu)
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // 切换歌单
      handLatest(number) {
        for(let i in this.$refs){
          this.$refs[i].className = ""
        }
        if(number === 1){
          this.$router.push("/home/latest/newSong")
          this.$refs.song.className = "active"

        }else if(number === 2 ){
          this.$router.push("/home/latest/dish")
          this.$refs.dish.className = 'active'
        }
      } 
  }
}
</script>

<style lang="scss" scoped>
  .latest{
    .title{
      padding-top: 38px;
      padding-bottom: 26px;
      &>div{
        margin: auto;
        width: 270px;
        span{
          display: block;
          height: 34px;
          width: 134px;
          float: left;
          text-align: center;
          line-height: 34px;
          color: #888888;
          background: #fff;
          border: 1px solid #888888;
        }
        span:nth-child(1){
          border-radius: 5px 0 0 5px;
        }
        span:nth-child(2){
          border-radius: 0 5px 5px 0;
        }
        .active{
          color: #fff;
          background: #888888;
        }
      }
    }

    .mian{
      .el-menu-item{
        font-size: 18px;
        margin: 0 5px;
      }
    }
  }
</style>