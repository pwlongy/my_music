<template>
  <div class="shipin">
    <list 
      :top="false" 
      width="310px" 
      height="230px"
      imgheight="170px"></list>
  </div>
</template>

<script>
import list from "@/components/common/list"
export default {
  components: {
    list
  }
}
</script>

<style lang="scss" scoped>
  .shipin{
    padding-left: 150px;
  }
</style>