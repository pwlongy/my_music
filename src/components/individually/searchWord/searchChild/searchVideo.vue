<template>
  <div class="video">
    <div class="videoItem" v-for="(item, index) in VideoList" :key="index" @click="pushVideo(item.vid)">
      <img v-lazy="item.coverUrl" alt="">
      <span v-text="item.title"></span>
      <u> by {{item.creator[0].userName}}</u>
    </div>
  </div>
</template>

<script>

import {getSearchList} from 'utils/findMusic.js'
export default {
  data () {
    return {
      searchWord: '',
      VideoList: []
    }
  },
  mounted () {
    this.searchWord = this.$route.params.searchWord
    // 获取 搜索视频
    getSearchList(this.searchWord,1014).then(res => {
      console.log(res)
      this.VideoList = res.data.result.videos
    })
  },
  methods: {
    pushVideo(id){
      this.$router.push("/songvideo/"+id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .video{
    display: flex;
    padding-top: 26px;
    flex-wrap: wrap;
    .videoItem{
      margin-bottom: 38px;
      margin: 0 38px 38px 38px;
      display: flex;
      width: 200px;
      flex-direction: column;
      cursor: pointer;
      img{
        width: 200px;
        height: 112px;
      }
      span{
        display: block;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        margin: 10px 0;
      }
      u{
        color: #999999;
      }
    }
  }
</style>