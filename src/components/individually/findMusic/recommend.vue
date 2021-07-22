<template>
  <div class="recommend">
    <!-- 轮播图 -->
   <el-carousel 
    :interval="6000" 
    type="card" 
    height="280px"
    loop
    >
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

  <!-- 推荐歌单 -->
  <div class="remen ">
    <div class="rement_title clear_fix">
      <h1>推荐歌单</h1>
      <span>更多<i class="el-icon-arrow-right"></i></span>
    </div>

    <div class="songList">
      <div class="songItem">
        <img src=""/>
        <span>每日歌曲推荐</span>
      </div>
      <div class="songItem">
        <img src=""/>
        <span>每日歌曲推荐</span>
      </div>
      <div class="songItem">
        <img src=""/>
        <span>每日歌曲推荐</span>
      </div>
      <div class="songItem">
        <img src=""/>
        <span>每日歌曲推荐</span>
      </div>
      <div class="songItem">
        <img src=""/>
        <span>每日歌曲推荐</span>
      </div>
      <div class="songItem">
        <img src=""/>
        <span>每日歌曲推荐</span>
      </div>
      <div class="songItem">
        <img src=""/>
        <span>每日歌曲推荐</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  Carousel,
  CarouselItem
} from 'element-ui'
export default {
  mounted () {
  },
  methods: {

  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
}
</script>

<style lang="scss" scoped>
  .recommend{
    padding-top: 10px;
    height: 300px;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .rement_title{
      border-bottom: 1px solid #e1e1e2 ;
      padding: 5px 0;
      h1{
        float: left;
        cursor: pointer;
        font-size: 22px;
        font-weight: 500;
      }
      span{
        float: right;
        cursor: pointer;
        font-size: 12px;
      }
    }

    .songList{
      padding-top: 10px;
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      .songItem{
        width: 245px;
        height: 270px;
        background: rosybrown;
        margin:0 6px 40px 6px ;
        img{
          display: block;
          width: 245px;
          height: 245px;
          background: royalblue;
        }
        span{
          display: block;
          height: 25px;
          line-height: 25px;
        }
      }
    }
  }
</style>