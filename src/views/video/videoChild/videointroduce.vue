<template>
  <div class="introduce">
    <span>MV介绍</span>
    <div>
      <span>发布时间: {{detail.publishTime}}</span>
      <span>播放次数: {{detail.playCount | playCount}}</span>
    </div>
    <p>简介:{{detail.desc}}</p>
  </div>
</template>

<script>
import {mvdetail} from 'utils/video.js'
export default {
  data () {
    return {
      id: null,
      detail: {}
    }
  },
  mounted () {
    this.id = this.$route.params.id
    // 获取数据
    mvdetail(this.id).then(res => {
      this.detail = res.data.data
    })
  },
  filters: {
    playCount(count){
      if(count>10000){
        return Math.trunc(count/10000) + " 万次"
      }else{
        return count + ' 次'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .introduce{
    &>span{
      font-size: 22px;
      border-bottom: 1px solid #e1e1e2;
      display: block;
      padding-bottom: 14px;
    }
    &>div{
      display: flex;
      justify-content: space-between;
      color: #888888;
      margin-top: 14px;
      margin-bottom: 20px;
    }
    p{
      color: #666666;
    }
  }
</style>