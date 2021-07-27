<template>
  <div class="comments">
    <ul>
      <li>
        <el-avatar :size="45" src=""></el-avatar>
        <div class="right">
          <span><i>年年年糕：</i>去年今日此门中，人面桃花相映红，人面不知何处去，挑花依旧笑春风。</span>
          <div class="pin" v-if="false">
            <span>@pengwei: <i>去年今日此门中，人面桃花相映红，人面不知何处去，挑花依旧笑春风。</i></span>
          </div>
          <div class="bottom">
            <u>2016年10月14日 10：00</u>
            <div>
              <span><i class="iconfont icon-good"></i>(855)</span>
              <span>分享</span>
              <span>回复</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <span>更多精彩评论<i class="el-icon-arrow-right"></i></span>
  </div>
</template>

<script>
import {
  Avatar
} from "element-ui"
export default {
  components: {
    [Avatar.name]: Avatar
  }
}
</script>

<style lang="scss" scoped>
  .comments{
    ul{
      li{
        display: flex;
        align-items: center;
        min-height: 94px;
        border-bottom: 1px solid #efefef;
        .el-avatar{
          margin-right: 16px;
        }
        .right{
          flex: 1;
          span{
            display: block;
            margin-bottom: 16px;
            font-size: 14px;
            i{
              color: #0c73c2;
            }
          }
          .pin{
            min-height: 40px;
            background-color: #f1f1f4;
            font-size: 14px;
            margin-bottom: 14px;
            padding: 10px 10px;
            span{
              color: #0c73c2;
              i{
                color: #666666;
              }
            }
          }
          .bottom{
            font-size: 14px;
            color: #999999;
            u{
              float: left;
            }
            &>div{
              float: right;
              width: 168px;
              display: flex;
              justify-content: space-between;
              span{
                border-right: 2px solid #eee;
                padding-right: 10px;
                cursor: pointer;
                i{
                  color: #888;
                }
              }
            }
          }
        }
      }
    }
    &>span{
            display: block;
            width: 130px;
            margin: 30px auto;
          }
  }
</style>