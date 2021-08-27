<template>

  <div class="comments">
    <div class="title">
      <h1>评论 <i>(6)</i></h1>
    </div>

    <div class="text">
      <textarea ref="textarea"></textarea>
      <div class="pin">
        <div>
          <i class="iconfont icon-smiling"></i>
          <i>@</i>
          <i>#</i>
        </div>
        <span @click="pushComment">评论</span>
      </div>
    </div>

    <ul v-if="list.length !== 0">
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

import {comment} from "utils/findMusic.js"
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
    },
    // 类型
    type: {
      type: Number,
      default: 2
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
    // 发布评论
    pushComment(){
      let value = this.$refs.textarea.value
      if(value.length === 0){
        this.$message("内容不能为空")
      }else{
        comment(1, this.type, this.id, value).then(res => {
          if(res.code === 200){
            this.$message({
              message: '发送成功',
              type: 'success'
            })
             console.log(res)
            this.$refs.textarea.value = ""
            // 刷新评论
            this.$emit('upcomment')
            this.reload();
          }else{
            this.$message({
              message: '发送失败',
              type: 'error'
            })
          }
       
       
        })
      }
   
    }
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