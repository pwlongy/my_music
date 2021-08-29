<template>
  <div class="album">
    <div class="itemAlbum" >
      <img src="~assets/images/2021-08-29_03.jpg" alt="">
      <div>
        <span>热门50首</span>
        <ul ref="songli" id="album">
          <li v-for="(item, index) in Topsong" :key="index" @dblclick="pusgsong(item.id, item.dt)">
            <span v-text="index+1"></span>
            <u><i class="iconfont icon-xinaixin"></i></u>
            <i v-text="item.name"></i>
            <h1 >{{item.dt | showtime}}</h1>
          </li>
        </ul>
        <span @click="lookAll" v-if="Topsong.length >= 10" class="spansong">查看全部{{Topsong.length}}首</span>
      </div>
    </div>

    <div class="itemAlbum" >
      <img src="~assets/images/2021-08-29_03.jpg" alt="">
      <div>
        <span>热门50首</span>
        <ul>
          <li v-for="(item, index) in Topsong" :key="index">
            <span v-text="index+1"></span>
            <u><i class="iconfont icon-xinaixin"></i></u>
            <i v-text="item.name"></i>
            <h1 >{{item.dt | showtime}}</h1>
          </li>
        </ul>
        <span @click="lookAll" v-if="Topsong.length >= 10" class="spansong">查看全部{{Topsong.length}}首</span>
      </div>
    </div>
  </div>
</template>

<script>
import {getsongerTopSong} from 'utils/findMusic.js'
import {itemListerMinxin} from '@/common/mixin.js'
export default {
  data () {
    return {
      id: null,
      Topsong: []
    }
  },
  mixins: [itemListerMinxin],
  mounted () {
    this.id = this.$route.params.id
    // 获取歌手热门 50 首
    getsongerTopSong(this.id).then(res =>{
      console.log(res)
      this.Topsong = res.data.songs
    })
  },
  methods: {
    lookAll(){
      console.log(1)
      this.$refs.songli.style.height = 'auto'
    },
    // 播放音乐
    pusgsong(id, dt){
        this.$bus.$emit("sendUrl",id, dt)
    }
  }
}
</script>

<style lang="scss" scoped>
  .album{
    padding: 25px 40px;
    .itemAlbum{
      margin-bottom: 50px;
      display: flex;
      img{
        width: 188px;
        height: 188px;
        margin-right: 75px;
      }
      &>div{
        #album{
          height: 380px;
          max-height: none;
        }
        ul{
          margin-top: 16px;
          width: 1338px;
          border: 1px solid #e1e1e2;
          max-height: 380px;
          overflow: hidden;
          li{
            height: 38px;
            display: flex;
            align-items: center;
            span{
              display: flex;
              justify-content: center;
              width: 50px;
              color: #9999a5;
            }
            u{
              width: 60px;  
              display: flex;
              justify-content: center;
              i{
                color: #b0b0b0;
              }
            }
            &>i{
              width: 1050px;
              color: #333;
            }
            h1{
              font-size: 14px;
            }
          }
          li:nth-child(odd){
            background: #fafafa;
          }
          li:nth-child(even){
            background: #f5f5f7;
          }
          li:hover{
            background: #ebeced;
          }

        }
        .spansong{
          display: block;
          margin-top: 20px;
        }
      }
    }
  }
</style>