<template>
  <div class="list">
    <div class="toplist">
      <div class="title">
        <h1>官方榜</h1>
      </div>
      <div class="bootom">
        <div class="listItem">
          <ul v-for="(item, index) in songlist" :key="index">
            <li>
              <img :src="require(`../../../assets/images/${images[index]}`)">
            </li>
            <li v-for="(i,n) in item" :key="n" @dblclick="playmusic(i.id, i.dt)">
              <h6 v-text="n+1"></h6>
              <!-- <span>687%</span> -->
              <u v-text="i.name"></u>
              <p>{{i.ar | author}}</p>
            </li>

            <li>
              <span @click="pushlist(ids[index])">查看全部<i class="el-icon-arrow-right"></i></span>
            </li>
          </ul>

          <ul>
            <li>
              <img src="~assets/images/img05.jpg">
            </li>
            <li v-for="(item,index) in musicer" :key="index" @dblclick="playmusic(i.id, i.dt)">
              <h6 v-text="index+1"></h6>
              <!-- <span>687%</span> -->
              <u v-text="item.name"></u>
            </li>

            <li>
              <span>查看全部<i class="el-icon-arrow-right"></i></span>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="alllist">
      <div class="title">
        <h1>全球榜</h1>
      </div>

      <div class="AllListItem">
        <div class="item" v-for="(item, index) in list" :key="index" :class="[index < 4 ? 'action' : '']" @click="pushlist(item.id)">
          <img :src="item.coverImgUrl">
          <span v-text="item.name"></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {toplist, playlist, songurl, songer} from 'utils/findMusic.js'
export default {
  data () {
    return {
      // 所有榜单
      list: [],
      songlist: [],
      ids: [19723756, 3779629, 2884035, 3778678],
      musicer: [],
      // 图片列表
      images: [
        'img01.jpg',
        'img02.jpg',
        'img03.jpg',
        'img04.jpg',
        '~assets/images/img05.jpg'
      ]
    }
  },
  mounted () {
    toplist().then(res =>{
      console.log(res)
      this.list = res.data.list
      console.log(this.list)
    }),
    playlist(19723756).then(res => {
      this.songlist.push(res.data.playlist.tracks.slice(0,10))
    })
    playlist(3779629).then(res => {
      this.songlist.push(res.data.playlist.tracks.slice(0,10))
    })
    playlist(2884035).then(res => {
      this.songlist.push(res.data.playlist.tracks.slice(0,10))
    })
    playlist(3778678).then(res => {
      this.songlist.push(res.data.playlist.tracks.slice(0,10))
    })

    // 获取歌手榜
    songer().then(res =>{
      this.musicer = res.data.list.artists.slice(0,10)
    })
  },
  methods: {
    pushlist(id){
      console.log(id)
      this.$router.push("/recommendeSongList/"+id)
    },
    playmusic(id, dt){
       songurl(id).then(res => {
        this.$bus.$emit("sendUrl", res.data.data[0].url, dt)
      })
    }
  },
  filters: {
    author(value){
      let name = ""
      for(let i = 0; i < value.length; i++){
        name += value[i].name+'/'
      }
      name = name.substring(0, name.lastIndexOf('/'));
      return name
    }
  }
}
</script>

<style lang="scss" scoped>
  .list{
    .action{
      display: none;
    }
    .title{
      border-bottom: 1px solid #e1e1e2;
      padding-top: 40px;
      padding-bottom: 12px;
      h1{
        font-size: 22px;
        font-weight: 400;
      }
    }
    .toplist{
      .bootom{
          padding-top: 22px;
          .listItem{
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            ul{
              width: 416px;
              margin-right: 16px;
              margin-bottom: 20px;
              border: 1px solid #ededed;
              li:nth-child(1){
                height: 114px;
                padding: 0;
                img{
                  height: 100%;
                  width: 100%;
                }
              }
              li:nth-child(even){
                background: #F5F5F7;
              }
              li:nth-child(odd){
                background: #fafafa;
              }
              li:hover{
                background: #dbdbdb;
              }
              li{
                height: 37px;
                line-height: 37px;
                padding-left: 22px;
                padding-right: 14px;
                cursor: pointer;
                h6{
                  font-size: 16px;
                  color: #666666;
                  float: left;
                  margin-right: 10px;
                }
                span{
                  display: block;
                  float: left;
                  width: 38px;
                  text-align: left;
                  font-size: 12px;
                  color: #888888;
                }
                u{
                  font-size: 14px;
                  color: #000;
                  font-weight: 600;
                }
                p{
                  float: right;
                  width: 102px;
                  text-align: right;
                  font-size: 14px;
                  color: #888888;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
              li:last-child{
                height: 53px;
                span{
                  line-height: 53px;
                  cursor: pointer;
                  width: 80px;
                  float: right;
                }
              }
              li:last-child:hover{
                background: none;
              }
            }
          }
        }
    }
    .alllist{
      .AllListItem{
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        .item{
          margin-right: 16px;
          margin-bottom: 50px;
          cursor: pointer;
          img{
            width: 200px;
            height: 200px;
          }
          span{
            display: block;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>