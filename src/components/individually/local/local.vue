<template>
  <div class="local">
    <div class="title clear_fix" >
      <h1> 本地音乐<u>共9首</u></h1>

      <div>
        <span>选择目录</span>
        <div ref="Is">
          <i @click="IClick" class="iconfont icon-liebiaoshipailie active" ></i>
          <i @click="IClick" class="el-icon-user"></i>
          <i @click="IClick" class="iconfont icon-zhuanji"></i>
          <i @click="IClick" class="el-icon-folder"></i>
        </div>
      </div>

    </div>

    <musicList :local="true"></musicList>
  </div>
</template>

<script>
const musicList = () => import("@/components/common/musicList.vue")

export default {
  components: {
    musicList
  },
  methods: {
    // 列表标签的切换
    IClick(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .local{
    .title{
      padding: 40px 40px 8px 40px;
      border-bottom: 1px solid #e1e1e2;
      h1{
        font-size: 22px;
        float: left;
        u{
          font-size: 14px;
          color: #666666;
          margin-left: 13px;
        }
      }
      &>div{
        float: right;
        display: flex;
        font-size: 14px;
        span{
          color: #0c73c2;
          line-height: 30px;
          display: block;
          margin-right: 10px;
          cursor: pointer;
        }
        &>div{
          display: flex;
          i{
            display: block;
            width: 34px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border: 1px solid #e5e5e5;
            cursor: pointer;
            font-size: 18px;
          }
          i:nth-child(1){
            border-radius: 6px 0 0 6px;
          }
          i:last-child{
            border-radius: 0 6px 6px 0;
          }
          .active{
            background: #7c7d85;
            color: #fff;
          }
        }
      }
    }
  }
</style>
