<template>

  <div class="comments" v-if="list.length !== 0">
    {{list}}
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <el-avatar :size="45" v-lazy="item.user.avatarUrl"></el-avatar>
        <div class="right">
          <span><i >{{item.user.nickname}}：</i>{{item.content}}</span>
          <div class="pin" v-if="item.beReplied">
            <span>@{{item.beReplied.user.nickname}}: <i>{{item.beReplied.content}}</i></span>
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
  props: {
    list: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  components: {
    [Avatar.name]: Avatar
  },
  mounted () {
    setTimeout(() => {
      console.log(this.list)
    },1000)
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