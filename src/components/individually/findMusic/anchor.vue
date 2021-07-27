<template>
  <div class="anchor">
    <!-- 轮播图 -->
    <el-carousel
      :interval="4000" 
      type="card" 
      height="300px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播图 -->


    <!-- 列表 -->
    <list title="听听" width="200px" height="254px"></list>

    <list title="付费精品" :flex="false" ></list>

    <list title="电台个性推荐" width="200px" height="254px"></list>
    <list title="有声书" width="200px" height="254px"></list>
    <list title="原创翻唱" width="200px" height="254px"></list>
    <list title="音乐推荐" width="200px" height="254px"></list>
    <list title="情感" width="200px" height="254px"></list>
    <list title="脱口秀" width="200px" height="254px"></list>

  </div>
</template>

<script>
import {
  Carousel,
  CarouselItem
} from "element-ui"

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    list: () => import("@/components/common/list.vue")
  },

}
</script>

<style lang="scss" scoped>
  .anchor{
    padding-top: 20px;
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