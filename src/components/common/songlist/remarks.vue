<template>
  <div class="remarks">
    <commentslist :list="commentsList" @upcomment="upcomment" :total='total'></commentslist>
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
      commentsList: [],
      // 数据条数
      total: null
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
      this.total = res.data.total
    })
  },
  methods: {
    upcomment(){
      console.log(1)
      getComment(this.id).then(res => {
        console.log(res)
        this.commentsList = res.data.comments
        console.log(this.commentslist)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .remarks{
    padding: 10px 20px;
  }
</style>