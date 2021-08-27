<template>
  <div class="goodlist">
    <div class="title">
      精品歌单
    </div>
    <div class="songlist">
      <div class="item" v-for=" (item, index) in list" :key="index" @click="pushlist(item.id)">
        <img v-lazy="item.coverImgUrl"/>
        <div>
          <span><i v-text="item.tag"></i>{{item.name}}</span>
          <u>by {{item.creator.nickname}}</u>
          <p v-text="item.copywriter"></p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import {highquality} from 'utils/findMusic.js'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    highquality().then(res => {
      console.log(res)
      this.list = res.data.playlists
    })
  },
  methods: {
    pushlist(id){
      this.$router.push("/recommendeSongList/"+id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .goodlist{
    width: 1595px;
    position: relative;
    left: -150px;
    .title{
      border-bottom: 1px solid #e1e1e2;
      font-size: 22px;
      padding-bottom: 12px;
      padding-top: 40px;
    }
    .songlist{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item{
        padding-top: 25px;
        padding-bottom: 25px;
        width: 496px;
        height: 175px;
        border-bottom: 1px solid #efefef;
        display: flex;
        img{
          width: 125px;
          height: 125px;
        }
        &>div{
          display: flex;
          flex-direction: column;
          margin-left: 12px;
          span{
            
            display: block;
            
            i{
              border: 1px solid #da7f7f;
              color: #c62f2f;
              padding: 0px 2px;
              margin-right: 10px;
            }
          }
          u{
            color: #888888;
            margin-top: 12px;
            margin-bottom: 28px;
          }
          p{
            width: 350px;
            overflow: hidden;
            text-overflow:ellipsis; 
            white-space: nowrap;
            color: #666666;
          }
        }
      }
    }
  }
</style>