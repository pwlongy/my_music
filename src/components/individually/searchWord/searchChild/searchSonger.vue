<template>
  <div class="songer">
    <ul>
      <li v-for="(item, index) in songerList" :key = "index" @click="pushSonger(item.id)">
        <img v-lazy="item.img1v1Url"/>
        <span v-text="item.name"></span>
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
      songerList: []
    }
  },
  mounted () {
    this.searchWord = this.$route.params.searchWord
    // 获取 搜索歌手
    getSearchList(this.searchWord,100).then(res => {
      this.songerList = res.data.result.artists
    })
  },
  methods: {
    pushSonger(id){
      this.$router.push("/songerList/"+id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .songer{
    ul{
      li{
        height: 75px;
        display: flex;
        align-items: center;
        padding-left: 38px;
        img{
          width: 50px;
          height: 50px;
          margin-right: 12px;
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