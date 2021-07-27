<template>
  <div class="list">
     <div class="title" v-if="top">
       <h2 v-text="title"></h2>
       <span v-if="more">更多<i class="el-icon-arrow-right"></i></span>
     </div>
    
     <div class="listGrid" v-if="flex">

       <div 
        class="listItem"
        :style="{'width': width, 'height': height}">
         <img src="" />
         <span></span>
       </div>
      
       <div 
        class="listItem"
        :style="{'width': width, 'height': height}">
         <img src="" />
         <span></span>
       </div>
      
       <div 
        class="listItem"
        :style="{'width': width, 'height': height}">
         <img src="" />
         <span></span>
       </div>
      
       <div 
        class="listItem"
        :style="{'width': width, 'height': height}">
         <img src="" />
         <span></span>
       </div>
      
       <div 
        class="listItem"
        :style="{'width': width, 'height': height}">
         <img src="" />
         <span></span>
       </div>
      
       <div 
        class="listItem"
        :style="{'width': width, 'height': height}">
         <img src="" />
         <span></span>
       </div>
      
     </div>

     <div class="fine" v-else>
      <div class="fineItem">
        <div class="Item">
          <img src=""/>
          <div class="right">
            <h1>广播剧《青梅屿》</h1>
            <span>小麻雀与大狼狗的夏日恋爱物语</span>
            <u><i class=""></i>青梅屿</u>
            <i>￥ 12.9</i>
          </div>
        </div>

        <div class="Item">
          <img src=""/>
          <div class="right">
            <h1>广播剧《青梅屿》</h1>
            <span>小麻雀与大狼狗的夏日恋爱物语</span>
            <u><i class="el-icon-caret-right"></i>青梅屿 第12集</u>
            <i>￥ 12.9</i>
          </div>
        </div>

      </div>
     </div>
  </div>  
</template>

<script>
import {
  Icon
} from "element-ui"
export default {
  components: {
    [Icon.name]: Icon
  },
  props: {
    // 标题
    title: {
      type: String,
      required: false,
      default: "look"
      
    },
    // 是否含有更多
    more: {
      type: Boolean,
      required: false,
      default: true
    },
    // 是否为网格布局
    flex: {
      type: Boolean,
      required: false,
      default: true
    },
    top: {
      type: Boolean,
      required: false,
      default: true
    },
    // 列表宽高
    width: {
      type: String,
      required: false,
      default: "200px"
    },
    height: {
      type: String,
      required: false,
      default: "254px"
    }

  },
  computed: {
  },
  mounted () {
    console.log(this.width,this.height)
  }
}
</script>

<style lang="scss" scoped>
  .list{
    .title{
      height: 50px;
      border-bottom: 1px solid #e1e1e2;
      line-height: 50px;
      h2{
        float: left;
        font-size: 22px;
        font-weight: 500;
      }
      span{
        display: block;
        float: right;
      }
    }  
    // 列表
    .listGrid{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-top: 14px;
      .listItem{
        margin: 0 7px ; 
        margin-bottom: 20px;
        background: lightgreen;
        img{
          display: block;
          width: 200px;
          height: 200px;
          background: lightsalmon;
        }
        span{
          display: block;
          margin-top: 10px;
          width: 100%;
          height: 44px;
          background: lightseagreen;
        }
      }
    }

    .fine{
      padding-top: 15px;
      .fineItem{
        border-bottom: 1px solid #e1e1e2;
        padding-bottom: 10px;
        display: flex;
        .Item{
          height: 150px;
          flex: 1;
          display: flex;
          img{
            width: 150px;
            height: 150px;
            display: block;
          }
          .right{
            padding-left: 12px;
            padding-top: 14px;
            h1{
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 20px;
            }
            span,u{
              display: block;
              font-size: 12px;
              color: #999999;
              margin-bottom: 14px;
            }
            &>i{
              margin-top: 14px;
              color: #c62f2f;
              font-size: 16px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
</style>