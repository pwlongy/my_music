<template>

  <div class="comments" v-if="list.length !== 0">
    <div class="title">
      <h1>评论 <i>(6)</i></h1>
    </div>

    <div class="text">
      <textarea></textarea>
      <div class="pin">
        <div>
          <i class="iconfont icon-smiling"></i>
          <i>@</i>
          <i>#</i>
        </div>
        <span>评论</span>
      </div>
    </div>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <el-avatar :size="45" :src="item.user.avatarUrl"></el-avatar>
        <div class="right">
          <span><i>{{item.user.nickname}}：</i>{{item.content}}</span>
          <div class="pin" v-if="item.beReplied.length !== 0">
            <span>@{{item.beReplied[0].user.nickname}}: <i>{{item.beReplied[0].content}}</i></span>
          </div>
          <div class="bottom">
            <u>{{item.time | showtime}}</u>
            <div>
              <span><i class="iconfont icon-good"></i>({{item.likedCount}})</span>
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
import {formatDate} from  '@/common/time.js'
// import {good} from "utils/finMusic.js"
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
  data () {
    return {
      id: null ,
      // 是否点赞
      t: false
    }
  },
  components: {
    [Avatar.name]: Avatar
  },
  filters: {
    showtime(value){
      let time = new Date(value)
      return formatDate(time, 'yyyy-MM-dd hh:mm')
    }
  },
  mounted () {
    this.id = this.$route.params.id
    console.log(this.list)
  },
  methods: {
    // goodClick(){

    //   console.log("点赞")
    //   good()
    // }
  }
}
</script>

<style lang="scss" scoped>
  .comments{
    .title{
      border-bottom: 1px solid #e1e1e2;
      padding-bottom: 14px;
      h1{
        font-size: 22px;
        i{
          color: #888888;
          font-size: 16px;
        }
      }
    }
    .text{
      margin-top: 20px;
      width: 100%;
      height: 134px;
      background: #f0f0f2;
      padding: 12px;
      margin-bottom: 50px;
      textarea{
        width: 100%;
        height: 64px;
        border: 1px solid #e1e1e2;
        resize: none;
        outline: none;
        font-size: 16px;
      }
      .pin{
        display: flex;
        justify-content: space-between;
        padding-top: 12px;
        &>div{
          i{
            font-size: 20px;
            margin-right: 12px;
            cursor: pointer;
            color: #666666;
          }
        }
        span{
          border: 1px solid #e1e1e2;
          font-size: 14px;
          background: #ffffff;
          border-radius: 5px;
          padding: 5px 10px;
          cursor: pointer;
        }
      }
    }



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
          padding-top: 20px;
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
              span:last-child{
                border: none;
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