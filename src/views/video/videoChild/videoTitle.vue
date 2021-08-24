<template>
  <div class="videoTitle">
    <!-- 标题 -->
    <div class="title">
      <i class="el-icon-arrow-left" @click="$router.back()"></i>
      <div>MV</div>
      <p>{{detail.name}}</p>
      <u>{{detail.artistName}}</u>
    </div>
    <!-- video -->
    <video width="100%" height="538" controls="controls" :src="url"></video>
    <!-- 操作 -->
    <div class="Operation">
      <p><i class="iconfont icon-good"></i>赞(1000000)</p>
      <p><i class="el-icon-folder-add"></i>收藏({{detail.subCount}})</p>
      <p><i class="iconfont icon-fenxiang2"></i>分享({{detail.shareCount}})</p>
      <p><i class="iconfont icon-menu_download-copy"></i>下载MV</p>
    </div>
  </div>
</template>

<script>
import {mvUrl, mvdetail} from 'utils/video.js'

export default {
  data () {
    return {
      id: null,
      url: '' ,
      detail: {}
    }
  },
  mounted () {
    this.id = this.$route.params.id
    mvUrl(this.id).then(res => {
      console.log(res)
      this.url = res.data.data.url
    })
    
    mvdetail(this.id).then(res => {
      this.detail = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
  .videoTitle{
    .title{
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      i{
        font-size: 24px;
      }
      &> div{
        color: #e03f40;
        padding: 6px 7px;
        font-size: 12px;
        border: 1px solid #e03f40;
        margin-left: 10px;
      }
      p{
        font-size: 24px;
        margin-left: 18px;
      }
      u{
        font-size: 12px;
        color: #666;
        padding-top: 10px;
        margin-left: 10px;
      }
    }

    video{
      margin-bottom: 16px;
      background:black;
    }
    .Operation{
      display: flex;
      p{
        margin-right: 14px;
        height: 32px;
        padding: 0 12px;
        border: 1px solid #e1e1e2;
        border-radius: 5px;
        display: flex;
        align-items: center;
        i{
          margin-right: 7px;
        }
        .iconfont{
          color: #8a8a8a;
          font-size: 18px;
        }
      }
    }
  }
</style>