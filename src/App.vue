<template>
  <div id="app">
    <el-container>
      <el-header>     
        <Top></Top>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer v-show="isfooterShow">
        <Footer></Footer>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
  import {mapState} from "vuex"
  import {
    Container,
    Header,
    Main,
    Footer,
    Col,
    Row
  } from "element-ui"
  export default{
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
    },
    computed: {
      ...mapState('markapp',['isfooterShow'])
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
    .searchPopover{
        height: 630px;
        overflow: auto;
        padding: 0 !important;
      .search{
        padding: 18px;
        &>span{
          display: block;
          font-size: 18px;
          color: #666;
        }
        .items{
           padding: 14px 28px;
           display: flex;
           .item{
             height: 30px;
             border-radius: 15px;
             border: 1px solid #d3d3d3;
             padding: 0 10px;
             display: flex;
             align-items: center;
             color: #333333;
           }
        }
        ul{
          li{
            padding: 14px 28px;
            height: 80px;
            display: flex;
            cursor: pointer;
            &>span{
              display: block;
              height: 100%;
              width: 40px;
              font-size: 18px;
              display: flex;
              align-items: center;
              color: #999;
            }
            .active{
              color: #ff3a3a;
            }
            &>div{
              display: flex;
              flex-direction: column;
              width: 440px;
              u{
                font-size: 10px;
                color: #333333;
                font-weight: 1000;
                margin-bottom: 14px;
                i{
                  color: #d0d0d0;
                  margin: 0 16px;
                }
                img{
                  height: 15px;
                }
              }
              span{
                color: #999999;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap
              }
            }
          }
        }
      }

      .searchlist{
        &>span{
          padding-left: 18px;
          height: 38px;
          display: block;
          line-height: 38px;
          i{
            color: #0c73c2;
          }
        }
        div{
          span{
            padding-left: 18px;
            display: block;
            height: 32px;
            line-height: 32px;
            background: #f5f5f7;
            i{
              margin-right: 10px;
            }
          }
          ul{
            li{
              height: 36px;
              border-bottom: 1px solid #eeeeee;
              line-height: 36px;
              padding-left: 40px;
              cursor: pointer;
            }
            li:hover{
              background: #ededed;
            }
          }
        }
      }
    }
</style>
