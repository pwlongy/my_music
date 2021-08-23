<template>
  <div class="remarks">
    <commentslist :list="commentsList"></commentslist>
  </div>
</template>

<script>
const commentslist = () => import("../comments.vue")

import {getComment} from "utils/findMusic.js"

export default {
  data () {
    return {
      id: null,
      // 评论信息
      commentsList: []
    }
  },
  components: {
    commentslist
  },
  mounted () {
    this.id = this.$route.params.id

    // 获取评论信息
    getComment(this.id).then(res => {
      this.commentsList = res.data.comments
    })
  },
  
}
</script>

<style lang="scss" scoped>
  .remarks{
    padding: 10px 20px;
  }
</style>