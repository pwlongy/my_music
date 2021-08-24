<template>
  <div class="footer">
    <!-- 播放按钮 -->
    <div class="play">
      <span><i class="iconfont icon-shangyishou"></i></span>
      <span @click="playMusic">
        <i class="iconfont icon-zanting" v-if="isplay"></i>
        <i class="iconfont icon-bofang" v-else></i>
      </span>
      <span><i class="iconfont icon-xiayishou"></i></span>
    </div>
    <!-- 进度条 -->
    <div class="block">
      <span>02:44</span>
      <el-slider 
      v-model="value"
      :show-tooltip= "false"
      >
      </el-slider>
      <span>{{}}</span>
    </div>

    <!-- 其他 -->
    <div class="other">
      <i class="iconfont icon-shengyin"></i>
      <el-slider 
        v-model="value1"
        :show-tooltip= "false"
        >
            </el-slider>
      <i class="iconfont icon-shunxubofang"></i>
      <div>
        <span>标准</span>
        <i class="iconfont icon-xuanxiang"></i>
        <span>词</span>
      </div>
      
      <i class="iconfont icon-gedan"></i>
    </div>
    <audio controls="controls" height="100" width="100" ref="audio" class="audio" autoplay> 
    </audio>
  </div>  
</template>

<script>
import {
  Slider
} from "element-ui"

import {formatDate} from "@/common/time.js"
export default {
  components: {
    [Slider.name]: Slider
  },
  data() {
    return {
      // 进度条
      value: 0,
      // 音量
      value1: 50,
      // 播放暂停的显示有隐藏
      isplay: true,
      // 控制 进度条的暂停与开始
      isStart: false,
      // 
      mytime: null
    }
  },
  mounted () {
    this.$bus.$on("sendUrl", url => {
      this.$refs.audio.src = url
      this.isMusicPlay()
    })
  },
  methods: {
    playMusic(){
      this.isplay = !this.isplay
      if(this.isplay){
        this.$refs.audio.play()

      }else{
        this.$refs.audio.pause()
      }
    },
    // 判断 音乐是否在播放
    isMusicPlay(){
      if(this.$refs.audio.paused){
        this.mytime = setInterval(()=>{
          if(this.value >= 100){
            clearInterval(this.mytime)
            this.mytime = null
          }
          this.value++
        },1000)
      }
    }
  },
  filters: {
    showTime(value){
      let time = new Date(value)
      return formatDate(time, 'mm:ss')
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
      width: 240px;
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
        cursor: pointer;
      }
      span:nth-child(2){
        width: 45px;
        height: 45px;
        line-height: 45px;
      }
    }

    // 输入框
    .block{
      width: 1230px;
      display: flex;
      ::v-deep .el-slider{
        width: 1120px;
        padding-top: 13px;
        .el-slider__runway {
          .el-slider__bar{
            background: #e83c3c;
          }
          .el-slider__button-wrapper{
            width: 16px;
            height: 16px;
            background-color: #fff;
            border-radius: 50%;
            top: -5px;
            line-height: 1px;
            .el-slider__button{
              border-color: #c3c3c3;
              background: #e83c3c;
              background-clip: content-box;
              padding: 2px;
            }
          }
          
        }
      }
      span{
        margin: 0 15px;
      }
    }

    // 其他
    .other{
      margin-left: 20px;
      display: flex;
      ::v-deep .el-slider{
        width: 130px;
        padding-top: 13px;
        .el-slider__runway {
          .el-slider__bar{
            background: #e83c3c;
          }
           .el-slider__button-wrapper{
            width: 16px;
            height: 16px;
            background-color: #fff;
            border-radius: 50%;
            top: -5px;
            line-height: 1px;
            .el-slider__button{
              border-color: #c3c3c3;
              background: #e83c3c;
              background-clip: content-box;
              padding: 2px;
            }
          }
        }
      }
      .icon-shengyin{
        font-size: 20px;
        font-weight: 800;
        margin-right: 10px;
      }
      .icon-shunxubofang{
        font-size: 18px;
        color: #000;
        margin-left: 22px;
      }
      .icon-gedan{
        font-size: 18px;
        color: #000;
        font-weight: 600; 
      }
      .icon-xuanxiang{
        font-size: 18px;
        font-weight: 600;
      }
      .iconfont{
        cursor: pointer;
      }
      span{
        margin: 0 22px;
        border: 1px solid #999;
        padding: 0 4px;
        height: 25px;
        line-height: 25px;
        cursor: pointer;
        
      }
      
    }

    .audio{
      display: none;
    }
  }
</style>