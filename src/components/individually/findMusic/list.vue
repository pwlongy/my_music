<template>
  <div class="list">
    <div class="toplist">
      <div class="title">
        <h1>官方榜</h1>
      </div>
      <div class="bootom">
        <div class="listItem">
          <ul>
            <li>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            <li>
              <h6>1</h6>
              <span>687%</span>
              <u>还是劈开</u>
              <p>张叶蕾/全体诺克萨斯国战士</p>
            </li>
            
            <li>
              <span>查看全部<i class="el-icon-arrow-right"></i></span>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="alllist">
      <div class="title">
        <h1>全球榜</h1>
      </div>

      <div class="AllListItem">
        <div class="item" v-for="(item, index) in list" :key="index" :class="[index < 4 ? 'action' : '']">
          <img :src="item.coverImgUrl">
          <span v-text="item.name"></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {toplist} from 'utils/findMusic.js'
export default {
  data () {
    return {
      // 所有榜单
      list: []  
    }
  },
  mounted () {
    toplist().then(res =>{
      console.log(res)
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
  .list{
    .action{
      display: none;
    }
    .title{
      border-bottom: 1px solid #e1e1e2;
      padding-top: 40px;
      padding-bottom: 12px;
      h1{
        font-size: 22px;
        font-weight: 400;
      }
    }
    .toplist{
      .bootom{
          padding-top: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 14px;
          .listItem{
            width: 416px;
            height: 465px;
            background: salmon;
            margin-bottom: 20px;
            border: 1px solid #ededed;
            ul{
              li:nth-child(1){
                height: 114px;
                background: sandybrown;
              }
              li{
                height: 37px;
                line-height: 37px;
                background: lightgoldenrodyellow;
                padding-left: 22px;
                padding-right: 14px;
                h6{
                  font-size: 16px;
                  color: #666666;
                  float: left;
                  margin-right: 10px;
                }
                span{
                  display: block;
                  float: left;
                  width: 38px;
                  text-align: left;
                  font-size: 12px;
                  color: #888888;
                }
                u{
                  font-size: 14px;
                  color: #000;
                  font-weight: 600;
                }
                p{
                  float: right;
                  width: 102px;
                  text-align: right;
                  font-size: 14px;
                  color: #888888;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
              li:last-child{
                height: 53px;
                background: lightgreen;
                span{
                  line-height: 53px;
                  cursor: pointer;
                  width: 80px;
                  float: right;
                }
              }
            }
          }
        }
    }
    .alllist{
      .AllListItem{
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        .item{
          margin-right: 16px;
          margin-bottom: 50px;
          cursor: pointer;
          img{
            width: 200px;
            height: 200px;
          }
          span{
            display: block;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>