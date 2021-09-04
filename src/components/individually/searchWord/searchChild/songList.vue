<template>
  <div class="songlist" v-if="singleList.length !== 0">
    <table cellspacing="0">
      <tr>
        <td style="width: 64px"></td>
        <td style="width: 72px">操作</td>
        <td style="width: 400px">音乐标题</td>
        <td style="width: 400px">歌手</td>
        <td style="width: 368px">专辑</td>
        <td >时长</td>
      </tr>
      <tr v-for="(item, index) in singleList" :key="index" @dblclick="playmusic(item.id,item.duration)">
        <td v-text="index+1"></td> 
        <td>
          <i class="iconfont icon-xinaixin"></i>
        </td>
        <td>{{item.name}}<i></i></td>
        <td>{{item.artists | artusts}}</td>
        <td>{{item.album.name}}</td>
        <td>{{item.duration | showtime}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

import {formatDate} from "@/common/time.js"
export default {
  props: {
    singleList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showtime(value){
      let time = new Date(value)
      return formatDate(time, 'mm:ss')
    },
     artusts(value){
        let name = ''
        for(let i = 0; i < value.length; i++){
          name += value[i].name+'/'
        }
        name = name.substring(0, name.length-1)
        return name
      },
  },
  methods: {
    playmusic(id,dt){
      this.$bus.$emit('sendUrl', id, dt)
    }
  }
}
</script>

<style lang="scss" scoped>
.songlist{
    table{
      width: 100%;
      tr{
        height: 36px;
        td{
          padding-left: 12px;
          overflow:hidden; 
          text-overflow:ellipsis; 
          white-space:nowrap; 
        }
        td:nth-child(2){
          i{
            margin-right: 10px;
            font-size: 18px;
          }
          .icon-aixin_shixin{
            color: #cd2929;
          }
        }
        td:nth-child(3){
          i{
            color: rgb(105, 105, 105);
            font-size: 10px;
            margin-left: 10px;
          }
        }
      }
      tr:first-child{
        td{
          border-right: 1px solid #e1e1e2;
          border-bottom: 1px solid #e1e1e2;
        }
      }

      tr:nth-child(odd){
        background: #fafafa;
      }
      tr:nth-child(even){
        background: #f5f5f7;
      }
      tr:hover{
        background: #e3e3e5;
      }
      tr:first-child:hover{
        background: none;
      }
    }
  }
</style>