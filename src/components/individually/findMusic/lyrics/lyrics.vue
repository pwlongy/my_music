<template>
  <div class="lyrics" ref="lyrics" v-if="playMusicDetail[0].length !== 0">
    <div class="top">
      <div class="main">
        <div class="left">
          <img v-lazy="playMusicDetail[0].al.picUrl"/>
          <div class="operate">
            <span><i class="iconfont icon-aixin_shixin"></i>喜欢</span>
            <span><i class="el-icon-folder-add"></i>收藏</span>
            <span><i class="iconfont icon-menu_download-copy"></i>VIP下载</span>
            <span><i class="iconfont icon-fenxiang2"></i>分享</span>
          </div>
        </div>

        <div class="right">
          <h1 v-text="playMusicDetail[0].name"></h1>
          <div class="message">
            <span>专辑：<i>琼花房</i></span>
            <span>歌手：<i>{{playMusicDetail[0].ar | autor}}</i></span>
            <span>来源：<i>动态</i></span>
          </div>

          <div class="content">
              <p v-text="songWord" style="white-space: pre-wrap;"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!-- 评论 -->
      <div class="left">
        <comments :list="commentslist" ></comments>
      </div>

      <div class="rightr">

      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {getSongWord, getSongCommon} from 'utils/findMusic.js'
const comments = () => import("components/common/comments.vue")
export default {
  components: {
    comments
  },
  computed: {
    ...mapState('songDetail', ['playMusicDetail'])
  },
  data () {
    return {
      commentslist: [],
      songWord: '',
    }
  },
  mounted () {
    // let width = 0
    // let height = 0
    // let myTime = null
    // myTime = setInterval(() => {
    //   if(width >= 100){
    //     clearInterval(myTime)
    //     return 
    //   }
    //   width += 10
    //   height += 10
    //   this.$refs.lyrics.style.width = width+'%'
    //   this.$refs.lyrics.style.height = height+ '%'
    // },16)

    // 获取歌词
    getSongWord(this.playMusicDetail[0].id).then(res => {
      this.songWord = res.data.lrc.lyric
    })
    // 获取评论
    getSongCommon(this.playMusicDetail[0].id).then(res => {
      console.log(res)
      this.commentslist = res.data.comments
    })
  },
  filters: {
    autor(value){
      let name = ''
      for(let i = 0; i < value.length; i++){
        name += value[i].name + '/'
      }
      name = name.substring(0, name.lastIndexOf('/'))
      return name
    }
  }
}
</script>

<style lang="scss" scoped>
  .lyrics{
    background: #fff;
    min-height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    .top{
      width: 100%;
      height: 554px;
      .main{
        width: 1085px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .left{
          width: 405px;
          height: 100%;
          padding-top: 70px;
          img{
            width: 405px;
            height: 405px;
            border-radius: 50%;
            border: 1px solid rgb(141, 30, 30);
            margin-bottom: 46px;
          }
          .operate{
            display: flex;
            span{
              display: block;
              border: 1px solid #b8b7b8;
              margin-right: 14px;
              padding: 5px 12px;
              border-radius: 5px;
              font-size: 14px;
              i{
                margin-right: 7px;
              }
            }
          }
        }
        .right{
          width: 528px;
          height: 100%;
          padding-top: 40px;
          h1{
            font-size: 28px;
            margin-bottom: 20px;
          }
          .message{
            display: flex;
            span{
              flex: 1;
              i{
                color: #3765ac;
              }
            }
          }
          .content{
            margin-top: 40px;
            height: 400px;
            border-right: 1px solid #b8b7b8;
            overflow: auto;
            text-align: center;
            font-size: 18px;
            padding: 0 40px;
          }
            .content::-webkit-scrollbar {
              width: 4px;    
              /*height: 4px;*/
            }
            .content::-webkit-scrollbar-thumb {
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              background: rgba(0,0,0,0.2);
            }
            .content::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              border-radius: 0;
              background: rgba(0,0,0,0.1);
            }
        }
      }
    }

    .bottom{
      width: 1085px;
      margin: 70px auto;
      .left{
        width: 690px;
      }
    }
  }
</style>