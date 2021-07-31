<template>
  <div class="mylove">
    <songList></songList>
  </div>
</template>

<script>
const songList = () => import("@/components/common/songList.vue")
export default {
  components: {
    songList
  }
}
</script>

<style lang="scss" scoped>
  .mylove{

  }
</style>