<template>
  <div class="single">
    <songList :singleList="singleList"></songList>
  </div>
</template>

<script>
import { getSearchList } from "utils/findMusic.js";
import songList from "./songList.vue";
export default {
  data() {
    return {
      searchWord: "",
      singleList: [],
    };
  },
  watch: {
    $route: function (to, form) {
      if (to.params.searchWord != form.params.searchWord) {
        this.getSongList(to.params.searchWord);
      }
    },
  },
  mounted() {
    this.searchWord = this.$route.params.searchWord;
    this.getSongList(this.searchWord);
  },
  methods: {
    // 获取搜索歌单列表
    async getSongList(params) {
      await getSearchList(params, 1).then((res) => {
        this.singleList = res.data.result.songs;
      });
    },
  },
  components: {
    songList,
  },
};
</script>

<style lang="scss" scoped>
.single {
}
</style>