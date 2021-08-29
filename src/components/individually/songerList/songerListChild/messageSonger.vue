<template>
  <div class="message" v-if="Object.keys(detail).length !==0 ">
    <div class="left">
      <img v-lazy="detail.cover"/>
    </div>

    <div class="right" >
      <span><i>歌手</i>{{detail.name}}</span>
      <u>{{detail.transNames[0]}}</u>
      <div class="spans">
        <span><i class="iconfont icon-music"></i>单曲数：{{detail.musicSize}}</span>
        <span><i class="iconfont icon-zhuanji"></i>专辑数：{{detail.albumSize}}</span>
        <span><i class="iconfont icon-bofangMV"></i>MV数：{{detail.mvSize}}</span>
      </div>
    </div>
    <div class="shouchang"><i class="el-icon-folder-add"></i>收藏</div>
  </div>
</template>

<script>
import {getsongerDetail} from 'utils/findMusic.js'
export default {
  data () {
    return {
      id: null,
      detail: {}
    }
  },
  mounted () {
    this.id = this.$route.params.id
    // 获取歌手信息
    getsongerDetail(this.id).then(res =>{
      this.detail = res.data.data.artist
    })
  }
}
</script>

<style lang="scss" scoped>
  .message{
    display: flex;
    padding: 40px;
    position: relative;
    .left{
      img{
        width: 248px;
        height: 248px;
      }
    }
    .right{
      padding-left: 40px;
      &>span{
        font-size: 22px;
        display: flex;
        &>i{
          font-size: 14px;
          display: block;
          color: #fff;
          background: #c62f2f;
          width: 47px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          margin-right: 10px;
          border-radius: 5px;
        }
      }
      u{
        display: block;
        padding-left: 54px;
        margin-top: 24px;
        margin-bottom: 38px;
      }
      .spans{
        display: flex;
        flex-direction: column;
        span{
          margin-bottom: 10px;
          i{
            font-size: 20px;
            margin-right: 10px;
          }
        }
      }
    }
    .shouchang{
      width: 88px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border: 1px solid #e1e1e2;
      border-radius: 5px;
      position: absolute;
      right: 10px;
      top: 10px;
      i{
        margin-right: 5px;
      }
    }
  }
</style>