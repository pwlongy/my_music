<template>
  <div class="">
    
  </div>
</template>

<script>

import {getSearchList} from 'utils/findMusic.js'
export default {
  data () {
    return {
      searchWord: '',
      songlyrics: []
    }
  },
  mounted () {
    this.searchWord = this.$route.params.searchWord
    // 获取 搜索歌词
    getSearchList(this.searchWord,1006).then(res => {
      console.log(res)
      this.songlyrics = res.data.result.songs
    })
  }
}
</script>

<style lang="scss" scoped>

</style>