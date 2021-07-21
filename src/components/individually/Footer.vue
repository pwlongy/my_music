<template>
  <div class="footer">
    <!-- 播放按钮 -->
    <div class="play">
      <span><i class="iconfont icon-shangyishou"></i></span>
      <span><i class="iconfont icon-zanting"></i></span>
      <span><i class="iconfont icon-xiayishou"></i></span>
    </div>
    <!-- 进度条 -->
    <div class="block">
      <el-slider 
      v-model="value"
      :show-tooltip= "false"
      >
      </el-slider>
    </div>

    <!-- 其他 -->
    <div>

    </div>
  </div>  
</template>

<script>
import {
  Slider
} from "element-ui"
export default {
  components: {
    [Slider.name]: Slider
  },
  data() {
    return {
      value: 100
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    height: 100%;
    display: flex;
    .play{
      height: 100%;
      width: 250px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      span{
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e83c3c;
        text-align: center;
        line-height: 40px;
        color: #fff;
        margin: 0 10px ;
      }
      span:nth-child(2){
        width: 45px;
        height: 45px;
        line-height: 45px;
      }
    }

    // 输入框
    .block{
      width: 1120px;
      padding-top: 10px;
      .el-silder{
        .el-slider__bar{
          background-color: chocolate !important;
        }
      }
     
    }
  }
</style>