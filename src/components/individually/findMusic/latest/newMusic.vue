<template>
  <div class="newSong" v-if="newSonger.length !== 0">
    <ul>
      <li class="clear_fix">
        <span><i class="iconfont icon-bofang"></i>播放全部</span>
        <div class="right"><i class="el-icon-folder-add"> </i>全部收藏</div>
      </li>
      <ol>
        <li
          v-for="(item, index) in newSonger"
          :key="index"
          @dblclick="pushsong(item.id, item.song.hMusic.playTime)"
        >
          <h2 v-text="index + 1"></h2>
          <img v-lazy="item.picUrl" />
          <u v-text="item.name"><i></i></u>
          <span v-text="item.song.artists[0].name"></span>
          <b
            >{{ item.song.name }}<i>{{ item.song.alias[0] }}</i></b
          >
          <h3>{{ item.song.hMusic.playTime | showDate }}</h3>
        </li>
      </ol>
    </ul>
  </div>
</template>

<script>
import {} from "element-ui";

import { getSongerNow } from "utils/findMusic.js";
import { formatDate } from "@/common/time.js";
export default {
  data() {
    return {
      newSonger: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      getSongerNow(100).then((res) => {
        console.log(res);
        this.newSonger = res.data.result
      });
    });
  },
  filters: {
    showDate(value) {
      let time = new Date(value);
      return formatDate(time, "mm:ss");
    },
  },
  methods: {
    pushsong(id, dt) {
      this.$bus.$emit("sendUrl", id, dt);
    },
  },
};
</script>

<style lang="scss" scoped>
.newSong {
  padding-top: 14px;
  margin-bottom: 30px;
  ul {
    border: 1px solid #ededed;
    & > li:nth-child(1) {
      padding: 6px 14px 10px 14px;
      span {
        float: left;
        display: block;
        line-height: 25px;
        .iconfont {
          font-size: 10px;
          color: #cd2929;
        }
        i {
          display: block;
          width: 25px;
          height: 25px;
          line-height: 21px;
          text-align: center;
          border-radius: 50%;
          border: 2px solid #cd2929;
          float: left;
          margin-right: 5px;
          cursor: pointer;
        }
      }

      .right {
        float: right;
        padding: 6px 14px;
        border-radius: 5px;
        border: 1px solid #e1e1e2;
        cursor: pointer;
        i {
          margin-right: 5px;
          font-size: 18px;
        }
      }
    }

    ol {
      li {
        height: 75px;
        display: flex;
        align-items: center;
        h2 {
          text-align: center;
          width: 46px;
        }
        img {
          width: 50px;
          height: 50px;
        }
        u {
          width: 500px;
          padding-left: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span {
          color: #666666;
          padding-left: 18px;
          width: 230px;
        }
        b {
          width: 330px;
          padding-left: 28px;
          color: #666666;
          overflow: hidden;
          //超出之后，显示的形式，这儿是省略号
          text-overflow: ellipsis;
          //不换行
          white-space: nowrap;
          i {
            margin-left: 6px;
            color: #888888;
            font-size: 14px;
          }
        }
        h3 {
          text-align: center;
          color: #888888;
          width: 105px;
        }
      }
      li:nth-child(odd) {
        background: #f5f5f7;
      }
      li:nth-child(even) {
        background: #fafafa;
      }
      li:hover {
        background: #ebeced;
      }
    }
  }
}
</style>