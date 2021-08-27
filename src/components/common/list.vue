<template>
  <div class="list">
     <div class="title" v-if="top">
       <h2 v-text="title"></h2>
       <span v-if="more">更多<i class="el-icon-arrow-right"></i></span>
     </div>
    
     <div class="listGrid" v-if="flex">
       <div
        @click="ListItem(item.id)"
        class="listItem"
        :style="{'width': width, 'height': height}"
        v-for="(item, index) in list" :key="index">
         <img 
          v-lazy="item.sPicUrl || item.picUrl" 
          :style="{'height' : imgheight}"/>
         <span>
           <i v-text="item.name"></i>
           <i v-text="item.artistName"></i>
         </span>
       </div>  
     </div>

     <div class="fine" v-else>
      <div class="fineItem">
        <div class="Item" v-for= "(item, index) in list" :key="index">
          <img :src="item.picUrl"/>
          <div class="right">
            <h1 v-text="item.name"></h1>
            <span v-text="item.rcmdText"></span>
            <u><i class=""></i>{{item.lastProgramName}}</u>
            <i>￥ {{item.originalPrice/100}}</i>
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
    },
    imgheight: {
      type: String,
      required: false,
      default: "254px"
    },
    // 表单信息
    list: {
      type: Array,
      default() {
        return []
      }
    }

  },
  computed: {
  },
  mounted () {
  },
  methods: {
    ListItem(id){
      this.$emit("itemlist", id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list{
    margin-top: 26px;
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
        cursor: pointer;
        img{
          display: block;
          width: 100%;
          height: 200px;
        }
        span{
          display: block;
          margin-top: 10px;
          width: 100%;
          height: 44px;
          i{
            display: block;
            font-size: 16px;
          }
        }
      }
    }

    .fine{
      padding-top: 15px;
      .fineItem{
        padding-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .Item{
          width: 624px;
          height: 160px;
          display: flex;
          border-bottom: 1px solid #e1e1e2;
          margin: 10px 0;
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