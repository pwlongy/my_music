<template>
  <div class="comments">
    <ul>
      <li>
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  Avatar
} from "element-ui"
export default {
  components: {
    [Avatar.name]: Avatar
  }
}
</script>

<style lang="scss" scoped>
  .comments{
    ul{
      li{
        min-height: 94px;
        background: chartreuse;
      }
    }
  }
</style>