<template>
  <div class="friend">
    <div class="left">
      <div class="title clear_fix" >
        <span>动态</span>
        <div @click="WriteDynamics"><i class="el-icon-plus"></i>写动态</div>
      </div>

      <div class="main" v-if="id">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="mainTitle">
              <el-avatar :size="50" :src="item.user.avatarUrl"></el-avatar>
                <div>
                  <span><i>{{item.user.nickname}}</i>分享单曲</span>
                  <u>{{item.showTime | pushtime}}</u>
                </div>
            </div>
            <span v-text="item.json.msg"></span>
            <div class="msg" @dblclick="pushsong(item.json.song.id,item.json.song.bMusic.playTime)">
              <img v-lazy="item.json.song.img80x80"/>
              <div>
                <span v-text="item.json.song.name"></span>
                <u>{{item.json.song.artists | artusts}}</u>
              </div>
            </div>
            <div class="operate">
              <div>
                <i class="iconfont icon-good"></i>
                <i class="iconfont icon-fenxiang2"></i>
                <i class="iconfont icon-xiaoxi"></i>
                <i class="iconfont icon-qita"></i>
              </div>
  
            </div>
          </li>
        </ul>
      </div>
      <span class="wu" v-else>
        暂无动态
      </span>
    </div>

    <div class="right">
      <div class="TopAll">
        <div class="top">
          <el-avatar :size="50" :src="user.avatarUrl"></el-avatar>
          <span v-text="user.nickname"></span>
        </div>
        <div class="dynamic">
          <span>
            <i v-text="user.eventCount"></i>
            <u>动态</u>
          </span>
          <span>
            <i v-text="user.follows"></i>
            <u>关注</u>
          </span>
          <span>
            <i v-text="user.followeds"></i>
            <u>粉丝</u>
          </span>
        </div>
      </div>


        <div class="topic">
          <div class="title">
            <span>热门话题</span>
            <i>更多</i>
          </div>
          <ul>
            <li v-for="(item, index) in Topic" :key="index">
              <img v-lazy="item.sharePicUrl"/>
              <div>
                <span>#{{item.title}}#</span>
                <u>{{item.participateCount}}人想参加</u>
              </div>
            </li>
          </ul>

        </div>


    </div>
   
    <loginDialog ref="dialog"></loginDialog>


  </div>
</template>

<script>
  import { Avatar } from "element-ui"
  import loginDialog from 'components/common/loginDialog.vue'
  import {userEvent, hotTopic} from 'utils/friend.js'
  import {formatDate} from '@/common/time.js'
  import {mapState} from 'vuex'
  export default {
    components: {
      [Avatar.name]: Avatar,
      loginDialog
    },
    data () {
      return {
        id: null,
        // 动态列表
        list: [],
        // 热门话题
        Topic: []

      }
    },
    mounted () {
      this.id =  localStorage.getItem("uid")
      if(this.id){
        // 获取动态数据
        userEvent(this.id).then(res => {
          this.list = res.data.events
          
          for(let i = 0; i < this.list.length; i++){
            this.list[i].json = JSON.parse(this.list[i].json)
          }
        })
      }else{
        console.log(2)
      }

      hotTopic().then(res => {
        console.log(res)
        this.Topic = res.data.hot
      })
    },
    methods: {
      WriteDynamics(){
        if(!this.id){
          this.$refs.dialog.dialogVisible = true
        }
      },
      // 播放音乐
      pushsong(id,time){
        // 获取 url
        this.$bus.$emit("sendUrl",id ,time)
      }
    },
    filters: {
      artusts(value){
        let name = ''
        for(let i = 0; i < value.length; i++){
          name += value[i].name+'/'
        }
        name = name.substring(0, name.length-1)
        return name
      },
      pushtime(value){
        let time = new Date(value)
        return formatDate(time, 'yyyy-MM-dd hh:mm')
      }
    },
    computed: {
      ...mapState("user",['user'])
    }
  }
</script>

<style lang="scss" scope>
  .friend{
    height: 100%;
    display: flex;  
    .left{
      width: 1380px; 
      padding: 28px 38px;
      position: relative;
      padding-top: 90px;
      .title{
        padding-bottom: 12px;
        height: 46px;
        border-bottom: 1px solid #e1e1e2;
        position: absolute;
        left: 38px;
        top: 28px;
        width: 1304px;
        span{
          display: block;
          float: left;
          font-size: 25px;
          font-weight: 400;
        }
        div{
          float: right;
          width: 88px;
          height: 30px;
          border: 1px solid #e1e1e2;
          border-radius: 15px;
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          cursor: pointer;
          .el-icon-plus{
            color: #c62f2f;
            font-weight: 3000;
            margin-right: 6px;
          }
        }
      }

      .main{
        height: 500px;
        ul{
          li{
            min-height: 240px;
            border-bottom: 1px solid #e1e1e2;
            margin-bottom: 16px;
            .mainTitle{
              display: flex;
              div{
                margin-left: 16px;
                flex: 1;
                font-size: 16px;
                span{
                  color: #666666;
                  i{
                    color: #0c73c2;
                    margin-right: 10px;
                  }
                }
                u{
                  display: block;
                  margin-top: 12px;
                  color: #888;
                }
              }
            }

            &>span{
              display: block;
              margin: 20px 0 14px 0;
              padding-left: 66px;
              font-size: 16px;
            }

            .msg{
              background-clip: content-box;
              padding-left: 66px;
              height: 74px;
              background: #eeeeef;
              display: flex;
              align-items: center;
              img{
                width: 50px;
                height: 50px;
              }
              div{
                margin-left: 14px;
                span{
                  display: block;
                }
                u{
                  color: #888888;
                  font-size: 14px;
                }
              }
            }

            .operate{
              div{
                float: right;
                margin-top: 25px;
                .iconfont{
                  font-size: 18px;
                  margin: 0 15px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      .wu{
        display: block;
        width: 100px;
        margin: 80px auto;
      }
    }

    .right{
      flex: 1;
      height: 500px;
      .TopAll{
        background: #f5f5f7;
        padding: 38px 25px 10px;
        .top{
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          span{
            margin-left: 12px;
            color: #333;
            font-size: 13px;
          }
        }
        .dynamic{
          display: flex;
          height: 54px;
          margin-bottom: 26px;
          span:last-child{
            border: none
          }
          span{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #ddddde ;
            i{
              color: #666666;
              font-size: 18px;
            }
            u{
              font-size: 14px;
              color: #666666;
              margin-top: 14px;
            }
          }
        }


      }

      .topic{
        margin-top: 25px;
        padding-left: 30px;
        padding-right: 16px;
        font-size: 14px;
        .title{
          i{
            float: right;
          }
        }
        ul{
          padding-top: 20px;
          li{
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            img{
              width: 44px;
              height: 44px;
            }
            div{
              margin-left: 10px;
              span{
                display: block;
                margin-bottom: 6px;
              }
              u{
                color: #999;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>