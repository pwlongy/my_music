<template>
  <div class="radioStation">
    <div class="title">
      <span>我订阅的电台<u>(<i>2</i>)</u></span>
    </div>

    <div class="main">
      <ul>
        <li>
          <img src="">
          <span>未闻其声</span>
          <u>by 未闻其声</u>
          <i>节目67</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .radioStation{
    .title{
      border-bottom: 1px solid #e1e1e2;
      padding: 36px 0 10px 40px;
      span{
        font-size: 22px;
        font-weight: 400;
        u{
          font-size: 14px;
          color: #666;
          margin-left: 12px;
        }
      }

    }

    .main{
      ul{
        li{
          height: 76px;
          display: flex;
          align-items: center;
          padding-left: 40px;
          img{
            width: 49px;
            height: 49px;
            border: 1px solid #e5e5e5;
          }
          span{
            display: block;
            width: 965px;
            margin-left: 12px;
            font-size: 14px;
          }
          u{
            display: block;
            width: 386px;
            color: #888888;
          }
          i{
            flex: 1;
            color: #888888;
          }
        }
        li:nth-child(odd){
          background: #f5f5f7;
        }
        li:nth-child(even){
          background: #fafafa;
        }
        li:hover{
          background: #ebeced;
        }
      }
    }
  }
</style>