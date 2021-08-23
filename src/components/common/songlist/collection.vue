<template>
  <div class="collection">
    <div class="subscriptItem" v-for="(item, index) in playlist" :key="index">
      <el-avatar :size="80" :src="item.avatarUrl"></el-avatar>
      <div v-text="item.nickname"></div>
    </div>
  </div>
</template>

<script>
import {getsubscribers} from 'utils/findMusic.js'
import {
  Avatar
} from "element-ui"
export default {
  mounted () {
    // 获取 id
    this.id = this.$route.params.id

    // 获取收藏者
    getsubscribers(this.id).then(res => {
      console.log(res)
      this.playlist = res.data.subscribers
    })
  },
  data () {
    return {
      id: null,
      // 收藏歌单者
      playlist: []
    }
  },
  components: {
    [Avatar.name]: Avatar
  }
}
</script>

<style lang="scss" scoped>
  .collection{
    padding: 20px 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .subscriptItem{
      width: 180px;
      text-align: center;
      margin-bottom: 30px;
      margin-right: 10px;
      .el-avatar{
        cursor: pointer;
      }
    }
  }
</style>