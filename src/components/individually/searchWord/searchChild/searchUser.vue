<template>
  <div class="user">
    <ul>
      <li v-for="(item, index) in userList" :key="index">
        <img v-lazy="item.avatarUrl" alt="">
        <span v-text="item.nickname"></span>
        <u v-text="item.description || item.signature"></u>
      </li>
    </ul>
  </div>
</template>

<script>

import {getSearchList} from 'utils/findMusic.js'
export default {
  data () {
    return {
      searchWord: '',
      userList: []
    }
  },
  mounted () {
    this.searchWord = this.$route.params.searchWord
    // 获取 搜索用户
    getSearchList(this.searchWord,1002).then(res => {
      console.log(res)
      this.userList = res.data.result.userprofiles
    })
  }
}
</script>

<style lang="scss" scoped>
  .user{
    ul{
      li{
        height: 76px;
        display: flex;
        align-items: center;
        padding-left: 38px;
        img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        span{
          margin-left: 12px;
          display: block;
          width: 1000px;
        }
        u{
          color: #888888;
          display: block;
          width: 530px;
          text-align: right;
        }
      }
      li:nth-child(odd){
        background: #f5f5f7;
      }
      li:nth-child(even){
        background: #fafafa;
      }
      li:hover{
        background: #ebeced;
      }
    }
  }
</style>