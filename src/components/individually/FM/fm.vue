<template>
  <div class="fm">
    <div class="main">
      <div class="top">
        <div class="left">
          <img src="">
          <!-- 操作 -->
          <div>
            <i class="iconfont icon-xinaixin"></i>
            <i class="iconfont icon-shanchu1"></i>
            <i class="iconfont icon-49xiayishou"></i>
            <i class="iconfont icon-qita"></i>
          </div>
        </div>
        <!-- 歌词 -->
        <div class="songWord">
          <h1>千里清秋(中秋夜晚)</h1>
          <span>
            专辑：
            <i>天涯明月刀游戏配乐 陈致逸</i>
            歌手：
            <i>陈致逸</i>
          </span>
          <!-- 歌词 -->
          <div class="word">

          </div>
        </div>

      </div>
      <div class="comments">
        <div class="title">
          <h2>听友评论<i>(已有700条评论)</i></h2>
        </div>

        <img src="./img/comments_03.jpg">

        <div class="title">
          <h3>精彩评论</h3>
        </div>
         <comments></comments>

        <div class="title">
          <h3>最新评论</h3>
        </div>

        <comments></comments>

      </div>
    </div>
  </div>
</template>


<script>
export default {
    components: {
      comments: () => import("./comments.vue")
    }
}
</script>

<style lang="scss" scoped>
  .fm{
    background: #fafafa;
    .main{
      width: 956px;
      margin: 0 auto;
      .top{
        height: 680px;
        display: flex;
        .left{
          width: 504px;
          height: 100%;
          padding: 90px 76px;
          img{
            display: block;
            width: 375px;
            height: 375px;
            border: 1px solid #dedfdb;
            margin-bottom: 34px;
          }
          &>div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 375px;
            i{
              width: 52px;
              height: 52px;
              border-radius: 50%;
              border: 1px solid #e1e1e2;
              line-height: 52px;
              text-align: center;
            }
            i:hover{
              background: #f5f5f7;
              color: #333333;
            }
          }
          .iconfont{
            font-size: 24px;
          }
        }
        .songWord{
          flex: 1;
          padding-top: 48px;
          h1{
            font-size: 28px;
            font-weight: 400;
            margin-bottom: 20px;
          }
          span{
            font-size: 14px;
            color: #646464;
            display: flex;
            i{
              display: block;
              color: #4b7bc3;
              margin: 0 15px 0 10px;
            }
            i:nth-child(1){
              width: 130px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .word{
            margin-top: 40px;
            width: 388px;
            height: 472px;
            overflow: auto;
            border-right: 1px solid #e4e4e6;
          }
        }
      }

      .comments{
        .title{
          border-bottom: 1px solid #e1e1e2;
          padding-bottom: 12px;
         
        }
        h2{
            font-size: 22px;
            font-weight: 300;
            i{
              font-size: 14px;
              color: #888888;
              margin-left: 22px;
            }
          }
          h3{
            font-size: 14px;
          }
          
        &>img{
          width: 100%;
          margin: 20px 0 50px;
        }
      }
    }
  }
</style>