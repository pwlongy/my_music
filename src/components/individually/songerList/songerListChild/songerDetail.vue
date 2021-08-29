<template>
  <div class="desc">
    <div class="descItem" v-for="(item, index) in desc" :key="index">
      <h1 v-text="item.ti"></h1>
      <p v-text="item.txt" style="white-space: pre-wrap; line-heighe: 20px"></p>
    </div>
  </div>
</template>

<script>
import {getsongerDesc} from "utils/findMusic.js"
export default {
  data () {
    return {
      id: null,
      desc: []
    }
  },
  mounted () {
    this.id = this.$route.params.id
    // 获取歌手描述
    getsongerDesc(this.id).then(res =>{
      this.desc = res.data.introduction
    })
  }
}
</script>

<style lang="scss" scoped>
  .desc{
    padding: 30px 40px;
    .descItem{
      margin-bottom: 60px;
      h1{
        font-size: 20px;
        font-weight: 1000;
        margin-bottom: 20px;
      }
      p{
        text-indent:2em;
        font-size: 18px;
        color: #666666;
      }
    }
  }
</style>