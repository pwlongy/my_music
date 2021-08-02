<template>
  <div class="songlist">
    <table cellspacing="0">
      <tr>
        <td style="width: 64px"></td>
        <td style="width: 72px">操作</td>
        <td style="width: 567px">音乐标题</td>
        <td style="width: 400px">歌手</td>
        <td style="width: 368px">专辑</td>
        <td >时长</td>
      </tr>
      <tr>
        <td>01</td>
        <td>
          <i class="iconfont " :class="[like?'icon-aixin_shixin':'icon-xinaixin']"></i>
          <i v-if="download" class="iconfont icon-menu_download-copy"></i>
          <i v-else class="iconfont icon-dui"></i>
        </td>
        <td>起风了</td>
        <td>买辣椒也用券</td>
        <td>起风了</td>
        <td>05:25</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 是否已下载
      download: true,
      // 是否为 喜欢
      like: true
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