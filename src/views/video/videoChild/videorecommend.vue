<template>
  <div class="recommend">
    <p>相关推荐</p>
    <div class="item" v-for="(item, index) in data" :key="index" @click="pushitem(item.vid)">
      <img :src="item.coverUrl"/>
      <div>
        <span v-text="item.title"></span>
        <i>{{item.playTime | showtime}}</i>
        <u>by {{item.creator[0].userName}}</u>
      </div>
    </div>
  </div>
</template>

<script>
import {relatedvideo} from "utils/video.js"

import {formatDate} from "@/common/time.js"
export default {
  data () {
    return {
      id: null ,
      data: []
    }
  },
  mounted () {  
    this.id = this.$route.params.id
    // 相关推荐
    relatedvideo(this.id).then(res => {
      console.log(res)
      this.data = res.data.data
    })
  },
  filters: {
    showtime(value){
      let time = new Date(value)
      return formatDate(time,'mm:ss')
    }
  },
  methods: {
    pushitem(id){
      this.$router.push("/songvideo/"+id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .recommend{
    p{
      font-size: 22px;
      border-bottom: 1px solid #e1e1e2;
      padding-bottom: 14px;
    }
    .item{
      margin-top: 12px;
      display: flex;
      img{
        width: 150px;
        height: 84px;
        margin-right: 12px;
      }
      &>div{
        display: flex;
        flex-direction: column;
        span{
          color: #333;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom: 5px;
        }
        i{
          color: #888888;
          margin-bottom: 5px;
        }
        u{
          color: #888888;
        }
      }
    }
  }
</style>