<template>
  <div class="video">
      <div class="songvideo">
        <div class="left">
          <!-- 标题 -->
          <Title></Title>
          <!-- 评论 -->
          <videoComment></videoComment>
        </div>
        <div class="right">
          <!-- 介绍 -->
          <div>

          </div>
          <!-- 相关推荐 -->

        </div>
      </div>
  </div>
</template>

<script>
const Title = () => import("./videoChild/videoTitle.vue")
const videoComment = () => import("./videoChild/videoComments.vue")
import {

} from "element-ui"

import {mapMutations} from "vuex"

export default {
  components: {
    Title,
    videoComment
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
    height: 100%;
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
      }
      .right{
        width: 320px;
        background: black;
      }
    }
  }
</style>