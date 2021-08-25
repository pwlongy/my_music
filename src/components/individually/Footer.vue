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
      <span>{{songpaly | showTime}}</span>
      <el-slider 
      v-model="value"
      :max="parseInt(songlong/1000)"
      :show-tooltip= "false"
      @change="songchange"
      >
      </el-slider>
      <span>{{songlong | showTime}}</span>
    </div>

    <!-- 其他 -->
    <div class="other">
      <i class="iconfont icon-shengyin"></i>
      <el-slider 
        v-model="value1"
        :show-tooltip= "false"
        @input="sound"
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
    <audio controls="controls" height="100" width="100" ref="audio" class="audio" autoplay :src="songsrc"> 
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
      // 正在播放事件
      songpaly: 0,
      // 音量
      value1: 50,
      // 播放暂停的显示有隐藏
      isplay: true,
      // 控制 进度条的暂停与开始
      isStart: false,
      // 
      mytime: null,
      // 音乐 src
      songsrc: '',
      // 音乐大小
      songlong: null
    }
  },
  mounted () {
    this.$bus.$on("sendUrl", (url,dt) => {
      this.songlong = dt
      // this.$refs.audio.src = url
      this.songsrc = url
      this.isMusicPlay()
      this.value = 0
    })

  },
  methods: {
    playMusic(){
      this.isplay = !this.isplay
      if(this.isplay){
        // 播放音频
        this.$refs.audio.play()
        // 开始计时器
        this.playtime()
      }else{
        // 暂停音频
        this.$refs.audio.pause()
        console.log(1)
        clearInterval(this.mytime)
        this.mytime = null
      }
    },
    // 判断 音乐是否在播放
    isMusicPlay(){
      if(this.$refs.audio.paused){
        // 开始计时器
       this.playtime()
      }
    },
    playtime(){
      this.mytime = setInterval(()=>{
        if(this.value >= parseInt(this.songlong/1000)){
          clearInterval(this.mytime)
          this.mytime = null
        }
        this.songpaly += 1000
        this.value++
      },1000)
    },
    // 控制音频
    sound(){
      this.$refs.audio.volume = this.value1/100
      console.log(this.value1)
    },
    // 改变 音乐的播放进度
    songchange(){
      this.songpaly = this.value*1000
      if(this.value < parseInt(this.songlong/1000)){
        clearInterval(this.mytime)
        this.playtime()
      }
      this.$refs.audio.currentTime = this.value
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