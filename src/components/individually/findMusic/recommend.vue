<template>
  <div class="recommend">
    <!-- 轮播图 -->
   <el-carousel 
    :interval="6000" 
    type="card" 
    height="250px"
    loop
    >
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <img v-lazy="item.imageUrl">  
      <span>新歌首发</span>
    </el-carousel-item>
  </el-carousel>

  <!-- 推荐歌单 -->
  <div class="remen ">
    <div class="rement_title clear_fix">
      <h1>推荐歌单</h1>
      <span>更多<i class="el-icon-arrow-right"></i></span>
    </div>

    <div class="songList">
      <div class="songItem" @click="everyday">
        <div>
          <span>星期五</span>
          <i>20</i>
        </div>
        <span>每日歌曲推荐</span>
      </div>
      <div class="songItem" 
        v-for="(item, index) in recommend" 
        :key="index"
        @click="Jump(item.id)">
        <img v-lazy="item.picUrl"/>
        <span v-text="item.name"></span>
      </div>
    </div>
  </div>

  <!-- 独家放送 -->
  <list width="416px" height="290px" imgheight="234px" title="独家放送" :list="persomalized" @itemlist="videopush"></list>

  <!-- 最新音乐 -->
  <div class="">
    <ul>
      <li></li>
    </ul>
  </div>

  <!-- 推荐 MV -->
  <list width="308px" height="230px" imgheight="174px" title="推荐MV" :list="copywriter" @itemlist="videopush"></list>

  <!-- 主播电台
  <list width="200px" height="230px" imgheight="200px" title="主播电台" ></list> -->
</div>
</template>

<script>
import {
  getRecommend, 
  getBanner, 
  getCopywriter,
  getpersomalized,
  getSongerNow
} from "utils/findMusic.js"

const list = () => import("components/common/list.vue")

import {
  Carousel,
  CarouselItem
} from 'element-ui'

export default {
  data () {
    return {
      // 推荐歌单列表
      recommend: {},
      // 轮播图数据
      banners:[],
      // 推荐 MV
      copywriter: [],
      // 独家放送数据
      persomalized: [],
      // 新音乐
      newSonger: []
    }
  },
  mounted () {
    // 获取推荐歌单数据
    getRecommend().then(res => {
      this.recommend = res.data.result
    })
    // 获取 轮播图数据
    getBanner().then(res => {
      this.banners = res.data.banners
    }),
    // 获取 推荐 MV
    getCopywriter().then(res => {
      this.copywriter = res.data.result
    }),

    // 获取独家放送数据
    getpersomalized().then(res => {
      this.persomalized = res.data.result
    }),
    // 获取新音乐
    getSongerNow(10).then(res => {
      this.newSonger = res.data.result
    })
  },
  methods: {
    // 跳转到歌单
    Jump(id){
      this.$router.push("/recommendeSongList/"+id)
    },
    // 跳转到每日推荐
    everyday(){
      this.$router.push("/everyday")
    },
     // 跳转到 video 详情
    videopush(id){
      this.$router.push("/songvideo/"+id)
    }
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    list
  },
 
}
</script>

<style lang="scss" scoped>
  .recommend{
    padding-top: 10px;
    .el-carousel__item {
      h3{
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
      }
      img{
        width: 100%;
        height: 100%;
      }
      span{
        z-index: 10;
      }
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
        margin:0 6px 40px 6px ;
        cursor: pointer;
        &>div{
          text-align: center;
          padding-top: 40px;
          span{
            display: block;
            height: 28px;
            font-size: 30px;
          }
          i{
            font-size: 100px;
            color: rgb(199, 57, 57);
          }
        }
        img,&>div{
          display: block;
          width: 245px;
          height: 245px;
          border: 1px solid #eee;
        }
        span{
          margin-top: 10px;
          font-size: 15px;
          display: block;
          height: 25px;
          line-height: 25px;       
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>