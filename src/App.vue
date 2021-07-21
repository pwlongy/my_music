<template>
  <div id="app">
    <el-container>
      <el-header>     
        <Top></Top>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>

  </div>
</template>

<script>

  import {
    Container,
    Header,
    Main,
    Footer,
    Col,
    Row
  } from "element-ui"
  export default{
    mounted () {

    },
    components: {
      [Container.name]: Container,
      [Header.name]: Header,
      [Main.name]: Main,
      [Footer.name]: Footer,
      [Col.name]: Col,
      [Row.name]: Row,
      Top: () => import("@/components/individually/Top.vue"),
      Main: () => import("@/components/individually/Main.vue"),
      Footer: () => import("@/components/individually/Footer.vue")
    }
  }
</script>


<style lang="less">

    /* 确定编码格式 */
    @charset 'utf-8';

    .el-container{
      height: 100%;
      .el-header, .el-footer {
        background-color: #C62F2F;
        color: #333;
        line-height: 64px;
        padding: 0;
      }
      .el-footer{
        background: #f6f6f8;
        border-top: #e1e1e2 solid 1px;
      }
      .el-main {
        background-color: #E9EEF3;
        color: #333;
        padding: 0;
      }
    }
 
   html,body{
      height: 100%;
    }
    #app{
      height: 100%;
      width: 1920px;
      margin: auto;
    }
    /* 重置样式 */
    html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,figure,figcaption{
        margin: 0;
        padding: 0;
    }
   
    *{
        /* 所有元素触发怪异盒模型 */
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
        font-size: 16px;
        font-weight: normal;
    }
    ul,ol,li{
        list-style: none;
    }
    b,strong{
        font-weight: normal;
    }
    em,i{
        font-weight: normal;
        font-style:normal;
    }
    a,u{
        text-decoration: none;
    }
    img{
        border: 0;
    }
    input{
        outline: none;      /*清除input 聚焦时的蓝色边框*/
    }
    .clear_fix:after{
        content: '.';
        height: 0;
        clear: both;
        display: block;
        overflow: hidden;
        visibility: hidden;
    }
    .clear_fix{
        /* 解决 低版本的IE浏览器不兼容伪对象 */
        zoom: 1;
    }
    .float_left{
        float: left;
    }
    .float_right{
        float: right;
    }
    .font-none{
        color: black !important;
    }
</style>
