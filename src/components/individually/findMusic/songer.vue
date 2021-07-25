<template>
  <div class="songer">
    <div class="title">
      <div class="top">
        <h1>语种:</h1>
        <ul>
          <li class="active">全部</li>
          <li>华语</li>
          <li>欧美</li>
          <li>日本</li>
          <li>韩国</li>
          <li>其他</li>
        </ul>
      </div>
      <div class="mindle">
        <h1>分类:</h1>
        <ul>
          <li class="active">全部</li>
          <li>男歌手</li>
          <li>女歌手</li>
          <li>乐队组合</li>
        </ul>
      </div>
      <div class="bottom">
        <h1>筛选:</h1>
        <ul>
          <li class="active">热门</li>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>O</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>U</li>
          <li>V</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
          <li>#</li>
          
        </ul>
      </div>
    </div>

    <div>
      <list :top="false"></list>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    list: () => import("@/components/common/list.vue")
  }
}
</script>

<style lang="scss" scoped>
  .songer{
    .title{
      padding: 30px 0;
      border-bottom: 1px solid #e1e1e2;
      .top,.bottom,.mindle{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
        h1{
          width: 40px;
          height: 25px;
          line-height: 25px;
        }
        ul{
          padding-top: 5px;
          height: 25px;
          line-height: 25px;
          margin-left: 15px;
          li{
            line-height: 20px;
            height: 20px;
            padding: 0 18px;
            border-right: 1px solid #ccc;
            cursor: pointer;
            font-size: 14px;
            float: left;
            margin-bottom: 10px;
          }
          li:last-child{
            border: none
          }
          .active{
            background: #8f9096;
            color: #fff;
            border-radius: 4px;
          }
        }
      }
    }
  }
</style>