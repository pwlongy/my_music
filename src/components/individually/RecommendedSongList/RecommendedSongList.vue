<template>
  <div>
    <songList :Songplaylist="songplayList" ></songList>
  </div>
</template>

<script>
const songList = () => import("components/common/songList.vue")

import {playlist} from "utils/findMusic.js"
export default{
  components: {
    songList
  },
  data () {
    return {
      // 歌单id
      id: null ,
      // 歌单数据
      songplayList: {}
    }
  },
  mounted () {
    // 获取歌单 id
    this.id = this.$route.params.id
    // 获取 歌单信息
    playlist(this.id).then(res => {
      this.songplayList = res.data.playlist
    })

  },
}
</script>

<style lang="scss" scoped>

</style>