<template>
  <div class="videoComment">
    <comments :list= "commentsList"></comments>
  </div>
</template>

<script>
const comments = () => import("components/common/comments.vue")

import {mvcomment} from "utils/video.js"
export default {
  data () {
    return {
      id: null,
      commentsList: []
    }
  },
  components: {
    comments
  },
  mounted () {
    this.id = this.$route.params.id
    // 获取 mv 评论信息
    mvcomment(this.id).then(res => {
      console.log(res)
      this.commentsList = res.data.comments
    })
  }

}
</script>

<style lang="scss" scoped>
  .videoComment{

  }
</style>