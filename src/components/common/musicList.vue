<template>
  <div class="music">
    <div class="top">
      
      <div class="play">
        <span><i class="el-icon-video-play"></i>播放全部</span>
        <i class="el-icon-plus"></i>
      </div>
      
      <span v-if="local"><i class="iconfont icon-xunhuanbofang"></i>匹配音乐</span>
      <p v-else>存储目录：F\CloudMusic <span>打开目录</span></p>
      
      <el-input
        placeholder="搜索本地音乐"
        clearable
        suffix-icon="el-icon-search"
        v-model="input2">
      </el-input>
    </div>

    <div class="main">
      <table cellspacing="0">
        <tr>
          <td style="width:64px"></td>
          <td style="width: 40px" :style="{display: (local ? 'none' : '' )}">
          </td>
          <td style="width:514px">音乐标题</td>
          <td style="width:370px">歌手</td>
          <td style="width: 320px">专辑</td>
          <td style="width:170px">时长</td>
          <td>大小</td>
        </tr>
         
        <tr>
          <td>01</td>
           <td :style="{display: (local ? 'none' : '' )}">
            <i class="iconfont icon-xinaixin"></i>
          </td>
          <td>越过山丘</td>
          <td>小鹿</td>
          <td>越过山丘</td>
          <td>04:26</td>
          <td>10.4MB</td>
        </tr>
        <tr>
          <td>01</td>
          <td :style="{display: (local ? 'none' : '' )}">
            <i class="iconfont icon-xinaixin active"></i>
          </td>
          <td>越过山丘</td>
          <td>小鹿</td>
          <td>越过山丘</td>
          <td>04:26</td>
          <td>10.4MB</td>
        </tr>
        <tr>
          <td>01</td>
           <td :style="{display: (local ? 'none' : '' )}">
            <i class="iconfont icon-xinaixin"></i>
          </td>
          <td>越过山丘</td>
          <td>小鹿</td>
          <td>越过山丘</td>
          <td>04:26</td>
          <td>10.4MB</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Input } from "element-ui"
export default {
  components: {
    [Input.name]: Input
  },
  data(){
    return{
      input2: ""
    }
  },  
  props: {
    local: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  mounted () {
      console.log(this.local)
  }
}
</script>

<style lang="scss" scoped>
  .music{
    .top{
      display: flex;
      padding: 20px 40px;
      position: relative;
      .play{
        width: 150px;
        height: 32px;
        color: #fff;
        display: flex;
        margin-right: 20px;
        span{
          display: block;
          width: 110px;
          height: 100%;
          padding-left: 14px;
          cursor: pointer;
          line-height: 32px;
          background: #c62f2f;
          border-radius: 5px 0 0 5px;
          i{
            display: block;
            line-height: 32px;
            font-size: 20px;
            margin-right: 5px;
            float: left;
          }
        }
        span:hover{
          background: #c70505;
        }
        &>i{
          flex: 1;
          line-height: 32px;
          text-align: center;
          border-left: 1px solid #cb4444;
          cursor: pointer;
          background: #c62f2f;
          border-radius: 0 5px 5px 0;
        }
        &>i:hover{
          background: #c70505;
        }
      }
      
      &>span{
        display: block;
        width: 114px;
        height: 32px;
        border: 1px solid #e1e1e2;
        border-radius: 5px;
        line-height: 32px;
        padding-left: 14px;
        font-size: 14px;
        font-weight: 500;
        i{
          margin-right: 10px;
          font-size: 14px;
        }
      }

      p{
          color: #666;
          width: 300px;
          line-height: 32px;
          span{
            color: #0c73c2;
            cursor: pointer;
          }
        }

      ::v-deep .el-input{
        position: absolute;
        top: 25px;
        right: 50px;
        width: 220px;
        input{
          border-radius: 16px;
          height: 32px;
          
        }
        i{
            line-height: 32px;
          }
      }
    }
    .main{
      table{
        width: 100%;
        tr{
          height: 35px;
          td{
            padding-left: 12px;
            text-align: left;
          }
          .active{
            color: red;
          }
        }
        tr{
          td:nth-child(1){
            text-align: right;
            padding-right: 15px;
          }
        }
        tr:nth-child(1){
          td{
            border-right: 1px solid #e1e1e2;
            border-top: 1px solid #e1e1e2;
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
          background: #e4e4e6;
        }
      }
    }
  }
</style>