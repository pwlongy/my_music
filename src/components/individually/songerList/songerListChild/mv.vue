<template>
  <div class="mv">
    <div class="itemMv" v-for="(item, index) in list" :key="index" @click="pushMv(item.id)">
      <img v-lazy="item.imgurl16v9">
      <span v-text="item.name"></span>
    </div>
  </div>
</template>

<script>
import {getsongerMv} from 'utils/findMusic.js'
export default {
  data () {
    return {
      id: null,
      list: []
    }
  },
  mounted () {
    console.log(this.$route.params)
    this.id = this.$route.params.id
    // 获取歌手mv数据
    getsongerMv(this.id).then(res =>{
      this.list = res.data.mvs
    })
  },
  methods: {
    pushMv(id){
      this.$router.push("/songvideo/"+id)
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .mv{
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    .itemMv{
      margin: 32px
    }
    img{
      width: 200px;
      height: 112px;
    }
    span{
      margin-top: 10px;
      width: 200px;
      display: block;
      overflow: hidden;
      text-overflow:ellipsis; 
      white-space: nowrap;
    }
  }
</style>