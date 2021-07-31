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
        component: () => import("@/components/individually/findMusic/songList.vue")
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
    path: "/radioStation",
    component: () => import("@/components/individually/radioStation/radioStation.vue")
  },
  {
    path: "/collection",
    component: () => import("@/components/individually/collection/collection.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
