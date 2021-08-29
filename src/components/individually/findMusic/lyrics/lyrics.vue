<template>
  <div class="lyrics">
    <div class="top">
      <div class="main">
        <div class="left">
          <img src=""/>
          <div class="operate">
            <span><i class="iconfont icon-aixin_shixin"></i>喜欢</span>
            <span><i class="el-icon-folder-add"></i>收藏</span>
            <span><i class="iconfont icon-menu_download-copy"></i>VIP下载</span>
            <span><i class="iconfont icon-fenxiang2"></i>分享</span>
          </div>
        </div>

        <div class="right">
          <h1>琼花房</h1>
          <div class="message">
            <span>专辑：<i>琼花房</i></span>
            <span>歌手：<i>琼花房</i></span>
            <span>来源：<i>琼花房</i></span>
          </div>

          <div class="content">

          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!-- 评论 -->
      <div class="left">
        <comments :list="commentslist"></comments>
      </div>

      <div class="rightr">

      </div>
    </div>
  </div>
</template>

<script>
const comments = () => import("components/common/comments.vue")
export default {
  components: {
    comments
  },
  data () {
    return {
      commentslist: []
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
            border: 1px solid #b8b7b8;
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