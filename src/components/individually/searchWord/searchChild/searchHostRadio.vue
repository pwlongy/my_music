<template>
  <div class="HostRadio">
    <div class="top">主播电台</div>
    <div class="Radio">
      <div class="RadioItem" v-for="(item, index) in radioList" :key="index">
        <img v-lazy="item.picUrl"/>
        <span v-text="item.name"></span>
        <u>by {{item.dj.nickname}}</u>
      </div>
    </div>
  </div>
</template>

<script>

import {getSearchList} from 'utils/findMusic.js'
export default {
  data () {
    return {
      searchWord: '',
      radioList: []
    }
  },
  mounted () {
    this.searchWord = this.$route.params.searchWord
    // 获取 搜索主播电台
    getSearchList(this.searchWord,1009).then(res => {
      this.radioList = res.data.result.djRadios
    })
  }
}
</script>

<style lang="scss" scoped>
  .HostRadio{
    .top{
      height: 38px;
      line-height: 38px;
      padding-left: 38px;
      font-size: 16px;
      color: #666;
      border-bottom: 1px solid #e1e1e2;
    }
    .Radio{
      display: flex;
      flex-wrap: wrap;
      padding: 12px 23px;
      .RadioItem{
        margin: 0 15px;
        display: flex;
        flex-direction: column;
        margin-bottom: 48px;
        img{
          width: 174px;
          height: 174px;
          border: 1px solid #e3e5e5;
        }
        span{
          display: block;
          width: 200px;
          margin-top: 10px;
          margin-bottom: 6px;
        }
        u{
          color: #888888;
        }
      }
    }
  }
</style>