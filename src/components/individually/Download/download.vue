<template>
  <div class="download">
    <div class="title clear_fix">
      <div>
        <span class="active">已下载歌单</span>
        <span>已下载电台节目</span>
        <span>已下载MV</span>
        <span>正在下载</span>
      </div>
    </div>

    <musicList></musicList>
  </div>  
</template>

<script>
const musicList = () => import("@/components/common/musicList.vue")

export default {
  components: {
    musicList
  }
}
</script>

<style lang="scss" scoped>
  .download{
    .title{
      padding-top: 20px;
      padding-bottom: 32px;
      margin: 0 auto;
      border-bottom: 1px solid #e1e1e2;
        &>div{
          width: 534px;
          margin: 0 auto;
          span{
            padding: 10px 0;
            display: block;
            width: 132px;
            float: left;
            text-align: center;
            border: 1px solid #e5e5e5;
            color: #888;
            font-size: 14px;
          }
          span:first-child{
            border-radius: 10px 0 0 10px;
          }
          span:last-child{
            border-radius: 0 10px 10px 0;
          }
          .active{
            background: #7c7d85;
            color: #fff;
          }
        }
     
    }
  }
</style>