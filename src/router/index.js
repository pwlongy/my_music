import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("@/components/individually/findMusic/find.vue"),
    children: [
      {
        path: "",
        redirect: "/home/recommend"
      },
      {
        path: "recommend",
        component: () => import("@/components/individually/findMusic/recommend.vue")
      },
      {
        path: 'songList',
        component: () => import("@/components/individually/findMusic/songList.vue"),
      },
      {
        path: 'goodlist',
        component: () => import("components/individually/findMusic/goodlist/goodlist.vue")
      },
      {
        path: "anchor",
        component: () => import("@/components/individually/findMusic/anchor.vue")
      },
      {
        path: "list",
        component: () => import("@/components/individually/findMusic/list.vue")
      },
      {
        path: "songer",
        component: () => import("@/components/individually/findMusic/songer.vue")
      },
      {
        path: "latest",
        component: () => import("@/components/individually/findMusic/latest.vue"),
        children: [
          {
            path: "",
            redirect: "/home/latest/newSong"
          },
          {
            path: "newSong",
            component: () => import("@/components/individually/findMusic/latest/newMusic.vue")
          },
          {
            path: "dish",
            component: () => import("@/components/individually/findMusic/latest/dish.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/fm",
    component: () => import("@/components/individually/FM/fm.vue")
  },
  {
    path: "/broadcast",
    component: () => import("@/components/individually/broadcast/broadcast.vue")
  },
  {
    path: "/video",
    component: () => import("@/components/individually/Video/video.vue"),
    children: [
      {
        path: "mv",
        component: () => import("@/components/individually/Video/MV/MV.vue")
      },
      {
        path: "shipin",
        component: () => import("@/components/individually/Video/MV/shipin.vue")
      },{
        path: '',
        redirect: "/video/shipin"
      }
    ]
  },
  {
    path: "/friend",
    component: () => import("@/components/individually/friend/friend.vue")
  },
  {
    path: "/local",
    component: () => import("@/components/individually/local/local.vue")
  },
  {
    path: "/download",
    component: () => import("@/components/individually/Download/download.vue")
  },
  {
    path: "/cloud",
    component: () => import("@/components/individually/cloud/cloud.vue")
  },
  {
    path: "/radioStation",
    component: () => import("@/components/individually/radioStation/radioStation.vue")
  },
  {
    path: "/collection",
    component: () => import("@/components/individually/collection/collection.vue")
  },
  {
    path: "/myLove",
    component: () => import("@/components/individually/creat/myLove.vue"),
    children: [
      {
        path: "",
        redirect: "/mylove/songlist"
      },
      {
        path: "songlist",
        component: () => import("@/components/common/songlist/songList.vue")
      },
      {
        path: "remarks",
        component: () => import("@/components/common/songlist/remarks.vue")
      },
      {
        path: "collection",
        component: () => import("@/components/common/songlist/collection.vue")
      }
    ]
  },
  {
    path: '/recommendeSongList/:id',
    component: () => import("@/components/individually/RecommendedSongList/RecommendedSongList.vue"),
    children: [
      {
        path: "",
        redirect: "/recommendeSongList/:id/songlist"
      },
      {
        path: "songlist",
        component: () => import("@/components/common/songlist/songList.vue")
      },
      {
        path: "remarks",
        component: () => import("@/components/common/songlist/remarks.vue")
      },
      {
        path: "collection",
        component: () => import("@/components/common/songlist/collection.vue")
      },
    ]
  },
  {
    path: "/everyday",
    component: () => import("@/components/individually/findMusic/everyDay.vue")
  },
  {
    path: "/songvideo/:id",
    component: () => import("views/video/video.vue")
  },{
    path: '/lyrics',
    component: () => import("components/individually/findMusic/lyrics/lyrics.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
