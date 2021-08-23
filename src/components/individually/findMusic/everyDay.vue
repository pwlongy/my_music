<template>
  <div class="everyDay">
    <table cellspacing="0">
      <tr>
        <td style="width: 64px"></td>
        <td style="width: 72px">操作</td>
        <td style="width: 567px">音乐标题</td>
        <td style="width: 400px">歌手</td>
        <td style="width: 368px">专辑</td>
        <td >时长</td>
      </tr>
      <tr v-for="(item, index) in list" :key="index">
        <td v-text="index+1"></td> 
        <td>
          <i class="iconfont " :class="[like?'icon-aixin_shixin':'icon-xinaixin']"></i>
        </td>
        <td>{{item.name}}<i>{{item.alia[0]}}</i></td>
        <td v-text="item.ar[0].name"></td>
        <td v-text="item.al.name"></td>
        <td>05:25</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {recomSong} from "utils/findMusic.js"


export default {
  mounted () {
    recomSong().then(res => {
      this.list = res.data.data.dailySongs
    })
  },
  components: {
  },
  data () {
    return {
      list: [],
      like: false,
    }
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
  .everyDay{
    padding: 20px 30px;
     table{
      width: 100%;
      border: 1px solid #bdbdbd;
      tr{
        height: 36px;
        td{
          padding-left: 12px;
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