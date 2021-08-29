<template>
  <div class="similarSonger">
    <div class="similarItem" v-for="(item, index) in artists" :key="index" @click="pushSonger(item.id)">
      <img v-lazy="item.img1v1Url"/>
      <div v-text="item.name"></div>
    </div>
  </div>
</template>

<script>
import {getsongerArtist} from "utils/findMusic.js"
export default {
  data () {
    return {
      id: null,
      artists: []
    }
  },
  mounted () {
    this.id = this.$route.params.id
    getsongerArtist(this.id).then(res =>{
      this.artists = res.data.artists
    })
  },
  methods: {
    pushSonger(id){
      this.$router.push("/songerList/"+id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .similarSonger{
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    .similarItem{
      margin: 0 45px 50px;
      img{
        width: 146px;
        height: 146px;
      }
      div{
        margin-top: 10px;
        text-align: center;
      }
    }
  }
</style>