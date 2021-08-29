<template>
  <div class="anchor">
    <!-- 轮播图 -->
    <el-carousel
      :interval="4000" 
      type="card" 
      height="250px">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <img :src="item.pic"/>
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播图 -->


    <!-- 列表 -->
    <list title="付费精品" :flex="false" :list="paygift"></list>

    <list title="电台个性推荐" width="200px" height="254px" imgheight="200px" :list="recommend"></list>

    <list title="有声书" width="200px" height="254px" imgheight="200px" :list="book"></list>
    <list title="原创翻唱" width="200px" height="254px" imgheight='200px' :list='CreateRemake'></list>
    <list title="音乐推荐" width="200px" height="254px" imgheight='200px' :list="musicRecommens"></list>
    <list title="情感" width="200px" height="254px" imgheight='200px' :list="emotion"></list>
    <list title="脱口秀" width="200px" height="254px" imgheight='200px' :list="talkShow"></list>

  </div>
</template>

<script>
import {
  Carousel,
  CarouselItem
} from "element-ui"

import {djBanner, djrecommend, djpaygift, recommenstype} from "utils/findMusic.js"
export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    list: () => import("@/components/common/list.vue")
  },
  data () {
    return {
      // 轮播图
      banner: [] ,
      // 电台个性推荐
      recommend: [],
      // 付费精品
      paygift: [],
      //有声书
      book: [],
      // 创作翻唱
      CreateRemake: [],
      // 音乐推荐
      musicRecommens: [],
      // 情感
      emotion: [],
      // 脱口秀
      talkShow: [],
      // dj id
      ids: []
    }
  },
  mounted () {
    // 获取banner
    djBanner().then(res => {
      this.banner = res.data.data
    }),
    // 电台个性推荐
    djrecommend().then(res => {
      this.recommend = res.data.data
    }),
    // 付费精品
    djpaygift().then(res => {
      this.paygift = res.data.data.list.slice(0,6)
    })
    // 获取有声书数据
    recommenstype(10001).then(res =>{
      this.book = res.data.djRadios.slice(0,6)
    })
    // 获取创作翻唱数据
    recommenstype(2001).then(res =>{
      this.CreateRemake = res.data.djRadios.slice(0,6)
    })
    // 获取音乐推荐数据
    recommenstype(2).then(res =>{
      this.musicRecommens = res.data.djRadios.slice(0,6)
    })
    // 获取情感数据
    recommenstype(3).then(res =>{
      this.emotion = res.data.djRadios.slice(0,6)
    })
    // 获取脱口秀数据
    recommenstype(8).then(res =>{
      console.log(res)
      this.talkShow = res.data.djRadios.slice(0,6)
    })
  } 

}
</script>

<style lang="scss" scoped>
  .anchor{
    padding-top: 20px;
    .el-carousel__item{
      img{
        width: 100%;
        height: 100%;
      }
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .swiper-container {
      width: 600px;
      height: 300px;
    }  
  }
</style>