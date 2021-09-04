<template>
  <div class="Top">
    <!-- logo -->
    <span class="iconfont icon-wangyiyunyinle"></span>
    <span>网易云音乐</span>

    <!-- 返回 -->
    <div class="back">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
    </div>

    <!-- 输入框 -->
    <el-popover
      placement="bottom-start"
      width="532"
      trigger="click"
      v-model="isShow"
      popper-class="searchPopover"
    >
      <div class="search" v-if="input.length === 0">
        <span>搜索历史<i class="el-icon-delete"></i></span>
        <div class="items">
          <div class="item">变废为宝</div>
        </div>
        <span>热搜榜</span>
        <ul>
          <li
            v-for="(item, index) in hotList"
            :key="index"
            @click="pushSearch(item.searchWord)"
          >
            <span v-text="index + 1" :class="index < 3 ? 'active' : ''"></span>
            <div>
              <u
                >{{ item.searchWord }}<i v-text="item.score"></i>
                <img v-lazy="item.iconUrl" alt="" v-if="item.iconUrl" />
              </u>
              <span v-text="item.content"></span>
            </div>
          </li>
        </ul>
      </div>

      <div v-else class="searchlist">
        <span
          >搜"<i>{{ input }}</i
          >"相关的结果></span
        >
        {{ searchList.length }}
        <div v-if="searchList.length !== 0">
          <div class="songs" v-if="searchList.songs.length !== 0">
            <span><i class="iconfont icon-music"></i>单曲</span>
            <ul>
              <li
                v-for="(item, index) in searchList.songs"
                :key="index"
                @click="pushSearchItem(item.name)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="artists" v-if="searchList.artists.length !== 0">
            <span><i class="iconfont icon-wode"></i>歌手</span>
            <ul>
              <li
                v-for="(item, index) in searchList.artists"
                :key="index"
                v-text="item.name"
              ></li>
            </ul>
          </div>
          <div class="albums" v-if="searchList.albums.length !== 0">
            <span><i class="iconfont icon-zhuanji"></i>专辑</span>
            <ul>
              <li v-for="(item, index) in searchList.albums" :key="index">
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="playlists" v-if="searchList.playlists.length !== 0">
            <span><i class="iconfont icon-gedan"></i>歌单</span>
            <ul>
              <li
                v-for="(item, index) in searchList.playlists"
                :key="index"
                v-text="item.name"
              ></li>
            </ul>
          </div>
        </div>
      </div>

      <el-input
        placeholder="搜索音乐，视频，歌词，电台"
        suffix-icon="el-icon-search"
        size="small"
        v-model="input"
        ref="inputsearch"
        slot="reference"
        @click="clickHandle"
        @input="inputSearch"
      >
      </el-input>
    </el-popover>

    <div class="login">
      <el-avatar :size="35" :src="user.avatarUrl || ''"></el-avatar>
      <u @click="login" v-if="!uid"
        >未登录<i class="el-icon-caret-bottom"></i
      ></u>
      <u v-else>{{ user.nickname }} <i class="el-icon-caret-bottom"></i></u>
      <!-- <u v-else>{{userInfo.nickname}}<i class="el-icon-caret-bottom"></i></u> -->
    </div>

    <loginDialog ref="login"></loginDialog>
  </div>
</template>

<script>
import { Avatar, Button, Input, Popover } from "element-ui";

import loginDialog from "components/common/loginDialog.vue";

import {
  usermessage,
  getHotSearch,
  getSearchSuggest,
} from "utils/findMusic.js";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Avatar.name]: Avatar,
    [Popover.name]: Popover,
    loginDialog,
  },
  data() {
    return {
      // 输入框绑定数据
      input: "",
      // 用户id
      uid: "",
      //  热门搜索
      hotList: [],
      // 防抖
      mytime: null,
      // 搜索列表
      searchList: [],
      isShow: false,
    };
  },
  mounted() {
    this.uid = localStorage.getItem("uid");
    if (this.uid) {
      this.uid = parseInt(this.uid);
      // 获取用户基本信息
      usermessage(this.uid).then((res) => {
        this.getUserMessage(res.data.profile);
      });
    }
    this.$bus.$on("updatauser", () => {
      this.$router.go(0);
    });

    // 获取热搜列表
    getHotSearch().then((res) => {
      this.hotList = res.data.data;
    });
  },
  methods: {
    ...mapMutations("user", ["getUserMessage"]),

    login() {
      this.$refs.login.dialogVisible = true;
    },
    clickHandle() {
      this.isShow = true
    },
    // 跳转搜索音乐页面
    pushSearch(searchWord) {
      this.$router.push("/search/" + searchWord);
      this.isShow = false;
      this.$forceUpdate();
    },
    // 输入触发
    inputSearch() {
      if (this.input.length == 0) {
        return;
      }
      if (this.mytime !== null) {
        clearInterval(this.mytime);
        this.mytime = null;
      }

      this.mytime = setInterval(() => {
        getSearchSuggest(this.input).then((res) => {
          // 获取 搜索列表
          if (Object.keys(res.data.result).length !== 0) {
            this.searchList = res.data.result;
          }
          clearInterval(this.mytime);
          this.mytime = null;
        });
      }, 300);
    },

    // 跳转到搜索详情页
    pushSearchItem(name) {
      this.$router.push("/search/" + name);
    },
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<style lang="scss" scoped>
.Top {
  display: flex;
  align-items: center;
  position: relative;
  // logo
  .iconfont {
    color: #c62f2f;
    font-size: 20px;
  }
  & > span:nth-child(1) {
    display: block;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    margin-left: 20px;
  }
  & > span:nth-child(2) {
    margin-left: 8px;
    color: #fff;
    font-size: 20px;
    margin-right: 80px;
  }

  // 返回按钮
  .back {
    width: 66px;
    height: 30px;
    border: 1px solid #a82828;
    display: flex;
    border-radius: 2px;
    margin-right: 14px;
    i {
      flex: 1;
      height: 100%;
      cursor: pointer;
      background: #c62f2f;
      text-align: center;
      line-height: 30px;
      color: #d15858;
    }
  }
  // 搜索框
  ::v-deep .el-input {
    width: 274px;
    & > input {
      border-radius: 15px;
    }
  }

  // login
  .login {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 100px;
    .el-avatar {
      cursor: pointer;
    }
    u {
      display: block;
      font-size: 14px;
      margin-left: 10px;
      color: #edbebe;
      cursor: pointer;
      i {
        margin-left: 10px;
      }
    }
    u:hover {
      color: #fff;
    }
  }
}
</style>
