<template>
  <div class="video">
      <div class="songvideo">
        <div class="left">
          <!-- 标题 -->
          <Title></Title>
          <!-- 评论 -->
          <videoComment class="comment"></videoComment>
        </div>
        <div class="right">
          <!-- 介绍 -->
          <introduce class="introduce"></introduce>
          <!-- 相关推荐 -->
          <recommend></recommend>
        </div>
      </div>
  </div>
</template>

<script>
const Title = () => import("./videoChild/videoTitle.vue")
const videoComment = () => import("./videoChild/videoComments.vue")
const recommend = () => import("./videoChild/videorecommend.vue")
const introduce = () => import("./videoChild/videointroduce.vue")
import {

} from "element-ui"

import {mapMutations} from "vuex"

export default {
  components: {
    Title,
    videoComment,
    introduce,
    recommend
  },
  methods: {
    ...mapMutations("markapp", ['updataFooterShow'])
  },
  mounted() {
    this.updataFooterShow(false)
  },
  destroyed () {
    this.updataFooterShow(true)
  }
}
</script>

<style lang="scss" scoped>
  .video{
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    z-index: 100;
    background: #fff;
    width: 100%;
    .songvideo{
      width: 1220px;
      height: 100%;
      margin: auto;
      padding-top: 35px;
      display: flex;
      justify-content: space-between;
      .left{
        width: 850px;
        .comment{
          margin-top: 70px;
        }
      }
      .right{
        width: 320px;
        .introduce{
          margin-bottom: 80px;
        }
      }
    }
  }
</style>